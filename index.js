import http from 'http';
import fsp from 'fs/promises';

const hostname = '127.0.0.2';
const port = 3000;

const server = http.createServer(async (request, response) => {
    console.log(request.url);
    if(request.url === '/') {
        const content = await fsp.readFile('./index.html', 'utf-8');
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(content); 
    }
    else if(request.url === '/about') {
        const content = await fsp.readFile('./about.html', 'utf-8');
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(content); 
    }
    else {
        response.end(request.url + 'not found');
    }
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});