const { addToCart, changeQty } = require("./cartModule");

// console.log("Welcome to home");
// console.log(10 + 20);

// let l = [20, 30, 4, 50];
// l.forEach((value, index) => {
//     console.log(value, index);
// });

// console.log(addToCart());
// console.log(changeQty());
// console.log("Welcome");


let http = require("http");

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    if (req.url == "/news") {  
        let obj = {
            status: 1,
            data: [
                { newsTitle: "ws", newsDes: "Abhishek" },
                { newsTitle: "Abhishek Sardar", newsDes: "TTP hello" }
            ]
        };
        return res.end(JSON.stringify(obj)); 
    }

    if (req.url == "/about") {
        return res.end(JSON.stringify({ message: "About Us Page" }));
    }

    if (req.url == "/course") {
        return res.end(JSON.stringify({ message: "Courses Page" }));
    }

    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("Welcome Abhishek");
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
});

server.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
