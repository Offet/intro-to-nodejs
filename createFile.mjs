import {writeFile} from "node:fs"

writeFile("./hello.html", "<h1>Leaning Node.js</h1>", () => {
    console.log("File added!")
});

console.log("learning");