import {createServer} from "node:http";
import {unlink, writeFile} from "node:fs"; //This particular unlink iport lesson was done on Wednesday June 18th


// // Define request handler
// function requestHandler(req, res) {
//     res.writeHead(200, {"Content-Tupe": "text/plain"});
//     res.end("We have an HTTP Server");
// }

// // Create HTTP Server
// const server = createServer(requestHandler);

// // Listen for incoming request
// server.listen(3000, "127.0.0.1", function() {
//     console.log("Server is running!");
// });




// Alternative method of doing the request handler without the function name(ie anonymous function)

// // Assuming the module has already been imported above 
// // Create HTTP Server
// const server = createServer(function(req, res) { /*the requestHander function name has been taken out*/
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("<h1>We have an HTTP Server</h1>")
// });

// // Listen for incoming request
// server.listen(3000, "127.0.0.1", function() {
//     console.log("Server is running!");
// });




// // The {"Content-Type"} displays the type of content to show, whether plain text or html or image etc
// // Lets have an example
// const server = createServer(function(req, res) { /*the requestHander function name has been taken out*/
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end("<h1>We have an HTTP Server</h1>")
// });

// // Listen for incoming request
// server.listen(3000, "127.0.0.1", function() {
//     console.log("Server is running!");
// });


//Note: The server port can be changed from 3000 to any other number



// Normal function vs Arrow function
// function handleRequest() {} /* This is a  normal function*/
// const handleRequest = () => {} /* This is an arrow function. It is safer to use the arrow fuction than the normal function*/


// // How the arrow function looks in codes 
// const server = createServer((req, res) => { /*the requestHander function name has been taken out*/
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end("<h1>We have an HTTP Server</h1>")
// });

// // Listen for incoming request
// server.listen(3000, "127.0.0.1", function() {
//     console.log("Server is running!");
// });



// Using the console.log(req.url) to create an HTTP server
const server = createServer((req, res) => { /*the requestHander function name has been taken out*/
    console.log(req.url);
    if (req.url.includes("create")) {
        // Create file
        writeFile("./index.html", "<h1>Leaning Node.js</h1>", () => {
           
        // Return response
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>We have an HTTP Server</h1>");
        });
    } else {
        // delete file
        unlink("./index.html", () => {
        console.log("File deleted!")
    });
};
    
});

// Listen for incoming request
server.listen(3000, "127.0.0.1", function() {
    console.log("Server is running!");
});