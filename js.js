import http from 'node:http'
import mysql2 from 'mysql2'
import path from 'node:path'
import fs from 'node:fs'

const connection = mysql2.createConnection({host: 'localhost', database: 'miniProjecto', user: 'root', password:''})
const server = http.createServer((request, response)=>{
    const url = request.url
    const method = request.method
    if(method === 'GET'){
        switch(url){
            case'/':
                const ruta = path.resolve('index.html')
                fs.readFile(ruta, (err, data) => {
                    if (err) {
                        response.writeHead(500, {'Content-Type': 'text/plain'})
                        response.end('Error interno del servidor')
                        return
                    } 
                    console.log('Presentación del API');
                    response.writeHead(200, {'Content-Type': 'text/html'})
                    response.end(data)
                    
                })
                break
            case '/api/usuarios':
                connection.query('SELECT * FROM usuarios;', (err, result)=>{
                    if (err) {
                        console.error('Error al consultar', err);
                        response.writeHead(500, {"Content-type":"text/plain"});
                        response.end("Error interno del servidor");
                    } else {
                        const string = JSON.stringify(result);
                        console.log('Usuarios listados en formato JSON');
                        response.writeHead(200, {"Content-type":"application/json"});
                        response.end(string);
                    }
                })
                break
            case '/api/usuarios/export':
                connection.query('SELECT usuario_id, nombre, apellidos, direccion, correo_electronico, documento_identidad, edad, DATE_FORMAT(fecha_creacion, "%Y-%m-%d %H:%i:%s") AS fecha_creacion, telefono FROM usuarios;', (err, result) => {
                    if (err) {
                        console.error('Error al consultar', err);
                        response.writeHead(500, { "Content-type": "text/plain" });
                        response.end("Error interno del servidor");
                    } else {
                        const encabezado = "id,nombres,apellidos,direccion,correo,dni,edad,fecha_creacion,telefono\n";
                        let listaDeUsuarios = '';
                        result.forEach((i) => {
                            listaDeUsuarios += `${i.usuario_id},${i.nombre},${i.apellidos},${i.direccion},${i.correo_electronico},${i.documento_identidad},${i.edad},${i.fecha_creacion},${i.telefono}\n`;
                        });
            
                        const listaCompleta = encabezado + listaDeUsuarios;
            
                        fs.writeFile('usuarios.csv', listaCompleta, (err) => {
                            if (err) {
                                console.error('Error al escribir en el archivo CSV', err);
                                response.writeHead(500, { "Content-type": "text/plain" });
                                response.end("Error interno del servidor al exportar usuarios");
                            } else {
                                console.log('Usuarios exportados correctamente a usuarios.csv');
                                response.writeHead(200, { "Content-type": "text/plain" });
                                response.end("Usuarios exportados correctamente a usuarios.csv");
                            }
                        });
                    }
                });
                break;
            case '/api/usuarios/import':
                const rutaArchivoCSV = path.resolve('./nuevosUsuarios.csv');
                fs.readFile(rutaArchivoCSV, 'utf8', async (err, data) => {
                    if (err) {
                        console.error('Error al leer el archivo CSV', err);
                        response.writeHead(500, { "Content-type": "text/plain" });
                        response.end("Error interno del servidor al importar usuarios");
                    } else {
                        const filas = data.split('\n');
                        const filasFiltradas = filas.filter(i => i.trim() !== '');
                        filasFiltradas.shift();
            
                        try {
                            for (const fila of filasFiltradas) {
                                const columnas = fila.split(',');
                                if (columnas.length !== 9) {
                                    console.log('No se insertó una fila porque el formato es incorrecto:', fila);
                                    continue;
                                }
                                const correo = columnas[4];
                                if (!correo.includes('@')) {
                                    console.log('No se insertó una fila porque el correo no es válido:', fila);
                                    continue;
                                }
                                await connection.execute('INSERT INTO usuarios(usuario_id, nombre, apellidos, direccion, correo_electronico, documento_identidad, edad, fecha_creacion, telefono) VALUES(?,?,?,?,?,?,?,?,?)', columnas);
                                console.log('Fila insertada correctamente:', fila);
                            }
                            response.writeHead(200, { "Content-type": "text/plain" });
                            response.end("Usuarios importados correctamente");
                        } catch (error) {
                            console.error('Error al insertar filas en la base de datos', error);
                            response.writeHead(500, { "Content-type": "text/plain" });
                            response.end("Error interno del servidor al importar usuarios");
                        }
                    }
                });
                break;
                default:
                response.end('No existe esa ruta en GET')
                break;
        }
    } else {
        response.writeHead(404, {"Content-type":"text/plain"});
        response.end("Ruta de URL no encontrada")
    }
})
server.listen(3000)
console.log('Servidor levantado!')