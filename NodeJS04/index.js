const {createServer}= require('http');

let server = createServer((require, response) =>{

    response.writeHead(200, {"Content-TYpe": "text/html"});
    response.write(`
    <h1>Hello World!</h1>
    <p>Primeira Página com Node.Js</p>
    `);
    response.end();

});

server.listen(8000);

console.log("Ouvindo a porta 8000");