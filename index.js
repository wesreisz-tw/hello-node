const http = require("http");
  process.on('SIGINT', function() {
    console.log("CNTRL-C received: exiting");
    process.exit();
  });
  http
   .createServer(function(request, response){
       console.log("request received");
       response.end("Hello World", "utf-8")
   })
   .listen(3000)
  console.log("server running: localhost:3000");
