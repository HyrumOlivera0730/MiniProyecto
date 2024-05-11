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
            
                        response.writeHead(200, {"Content-type":"application/json"});
                        response.end(string);
                    }
                })
                break
            case '/api/usuarios/export':
                connection.query('SELECT * FROM usuarios;', (err, result) => {
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
            default:
                response.end('No existe esa ruta')
                break;
        }
    } else if (method === 'POST'){
        switch(url){
            case'/api/usuarios/import':
            const ruta2 = path.resolve('./nuevosUsuarios.csv')
            fs.readFile(ruta2, 'utf8', async (err, data) => {
                if (err) {
                    console.error('Error al leer el archivo CSV', err);
                    response.writeHead(500, { "Content-type": "text/plain" });
                    response.end("Error interno del servidor al importar usuarios");
                } else {
                    const filas = data.split('\n')
                    const filasFiltradas = filas.filter(i => i !== '')
                    filasFiltradas.shift()
                    
                    filasFiltradas.forEach(async fila => {
                        const columnas = fila.split(',')
                        const correo = columnas[2]
                    
                        if (!correo.includes('@')) {
                          console.log('No se insertó una fila porque el correo no es válido')
                          return
                        }
                    
                        try {
                          await pool.execute('INSERT INTO usuarios(usuario_id, nombres, correo, fecha_creacion) VALUES(?,?,?,?)', columnas)
                        } catch (error) {
                          console.log('No se insertó la fila: ', columnas[0])
                        }
                      })
                }
            })
                break
            default:
                response.end('No existe esa ruta')
                break;
        }
    } else {
        response.writeHead(404, {"Content-type":"text/plain"});
        response.end("Ruta de URL no encontrada")
    }
})
server.listen(3000)
console.log('Servidor levantado!')