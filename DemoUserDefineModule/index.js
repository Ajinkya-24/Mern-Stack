const http=require('http')
port = 5002;

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("<h2>Welcome</h2>")
})

server.listen(port,()=>{
    console.log(`Server is running`)
})