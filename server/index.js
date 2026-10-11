import http from "http";

const server = http.createServer((req, res) => {
    console.log("Server is created successfully");
    
    res.end("Hey! this is the response");
});

server.listen(5000, () => {
    console.log("server is listening on port 5000");
});