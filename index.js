const http = require('http');
const server  = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Home");
        res.end();
    }

    else if(req.url === "/api/courses"){
        res.write("Courses");
        res.end();
    }

    else{
        res.write("Unknown path");
        res.end();
    }
});
server.listen(3000);
console.log("listening on port 3000...");