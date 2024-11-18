/*const http= require('http');

http.createServer((request, response)=>{
    response.end('Hello on Browser');
}).listen(3001)*/

const http= require('http');
const port=6969
const ip= '127.0.0.1'

const server=http.createServer((request, response)=>{
    response.write('<h1> Kaisa hai bhai</h1>');
    response.write('<h3> xhud gye guru</h3>');
    response.end('<h3>Thik hai BOSS</h3>');
})
server.listen(port, ()=>{
    console.log(`the server is ${ip}:${port}`);
})