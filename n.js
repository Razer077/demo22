const http = require('http');

const server = http.createServer((req, res) => {
    console.log("request"); s
    res.end();
})

server.listen(3334);
