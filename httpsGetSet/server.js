const http=require('http');
const port=4001;



const server=http.createServer((req,res)=>{
        res.write("<h1>Hello World</h1>")
        res.write("<h1>Welcome to the Server</h1>")
        if(req.method=== 'GET' && req.url ==='./get'){
            res.write("<h1>Welcome to Get </h1>")
            res.statusCode=200;
            res.end('<p>Hello ,you have accesed this method</p>');
        }
        res.end("Khud gaye Guru")
})

server.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}/`);
})