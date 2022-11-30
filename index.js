import http, { request } from 'http';
import fsp from 'fs/promises';

const hostname = '127.0.0.2';
const port = 3000;

const server = http.createServer(async (request, response) => {
    if(request.url === '/index.html') {
        const content = await fsp.readFile('./index.html', 'utf-8');
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(content); 
    }
    else if(request.url === '/about.html') {
        const content = await fsp.readFile('./about.html', 'utf-8');
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(content); 
    }
    else {
        response.end(request.url + 'not found');
    }
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});