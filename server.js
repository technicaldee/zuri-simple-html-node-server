const http = require('http');
const fs = require('fs');

const server = http.createServer((req,response) => {
    
    const pathName = req.url
    
    if(pathName === '/'){
        fs.readFile("./index.html", (err,fileContent) =>
        {
        response.end(fileContent);
        });
    }else if(pathName === '/about'){
        fs.readFile("./about.html", (err,fileContent) =>
        {
        response.end(fileContent);
        });
    } else if(pathName === '/contact'){
        fs.readFile("./contact.html", (err,fileContent) =>
        {
        response.end(fileContent);
        });
    } else
    {
        response.end('The page you are requesting is not found!!!')
    }

})

server.listen(8080,'127.0.0.1',() => {
    console.log('Server is listening to port 8080: http://127.0.0.1:8080')
})