// criando um servidor via node

let http = require('http');
let server = http.createServer((req,res)=>{
    res.end("<html><body>Portal de Noticias</body></html>");
});

server.listen(3000);

