import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  console.log("Server is created successfully");

  const URL = req.url;
  if(URL === "/favicon.ico") return;

  const myUrl = url.parse(URL, true);
  console.log(myUrl.pathname);
  //console.log(myUrl);
  console.log(myUrl.query);

  //console.log(myUrl.query.myname);
  
  res.end("Hey! The server responded");
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
