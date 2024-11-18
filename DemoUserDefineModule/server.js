const http = require('http');
const welcome = require('./welcome');
const port = 5002;
const welcomemsg = welcome("Ajinkya");
const byemsg = "Bye"; 

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Welcome ${welcomemsg}</h1>`);
    res.end(`<h3>${byemsg}</h3>`);
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});