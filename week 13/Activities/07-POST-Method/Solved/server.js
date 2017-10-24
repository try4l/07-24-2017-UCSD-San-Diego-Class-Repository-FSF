// Dependencies
var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  // Saving the request posted data as a variable.
  var requestData = "";

  // When the server receives data, it will add it to requestData.
  req.on("data", function(data) {
    requestData += data;
    console.log("You just posted some data to the server:\n", requestData);
  });

  // When the request has ended...
  req.on("end", function() {
    var myHTML = "<html><head><title>Hello Noder!</title></head><body>" +
      "<h1>Thank you for the data: </h1><code>" + requestData + "</code>" +
      "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
  });
};

// Starts our server.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
