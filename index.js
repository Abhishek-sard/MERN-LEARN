// const { addToCart, changeQty } = require("./cartModule");

// console.log("Welcome to home");
// console.log(10 + 20);

// let l = [20, 30, 4, 50];
// l.forEach((value, index) => {
//     console.log(value, index);
// });

// console.log(addToCart());
// console.log(changeQty());
// console.log("Welcome");


// let http = require("http");

// let server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });

//     if (req.url == "/news") {  
//         let obj = {
//             status: 1,
//             data: [
//                 { newsTitle: "ws", newsDes: "Abhishek" },
//                 { newsTitle: "Abhishek Sardar", newsDes: "TTP hello" }
//             ]
//         };
//         return res.end(JSON.stringify(obj)); 
//     }

//     if (req.url == "/about") {
//         return res.end(JSON.stringify({ message: "About Us Page" }));
//     }

//     if (req.url == "/course") {
//         return res.end(JSON.stringify({ message: "Courses Page" }));
//     }

//     if (req.url == "/") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         return res.end("Welcome Abhishek");
//     }

//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Not Found");
// });

// server.listen(8000, () => {
//     console.log("Server running at http://localhost:8000");
// });


let express = require("express")

let app = express()
app.use(express());

app.get("/", (req, res) => {
    res.send({ status: 1, msg: "home page API" })
})
let token = "12345"
let myPass = "12345"

// let TokenCheck = (req, res, next) => {
//     console.log(req.query.token)
//     if (req.query.token == "" || req.query.token == undefined) {
//         return res.send(
//             {
//                 status: 0,
//                 msg: "please fill the toke"
//             }
//         )
//     }

//     if (req.query.token != token) {
//         return res.send(
//             {
//                 status: 0,
//                 msg: "please fill the correct token to go"
//             }
//         )
//     }
//     next();
// }

// app.use(TokenCheck)
// app.use((req, res, next) => {
//     if (req.query.pass == "" || req.query.pass == undefined) {
//         return res.send({
//             status: 0,
//             msg: "please fill the password"
//         })
//     }

//     if (req.query.pass != myPass) {
//         return res.send({
//             status: 0,
//             msg: "please fill the correct password"
//         })
//     }
// })


app.get('/news', (req, res) => {
    res.send({ status: 1, msg: "hello abhishek" })
})

app.get('/about', (req, res) => {
    res.send({ status: 3, msg: "hello abhishek sardar" })
})

app.get("/about/id", (req, res) => {
    let currentID = req.params.id
    res.send("this is id about")
})

app.get('/service', (req, res) => {
    res.send({ status: 4, msg: "this help to make the service section" })
})


app.post('/login', (req, res) => {
    res.send({ status: 5, msg: "this is the number" })
    console.log(req.body)
    res.send({ status: 1, msg: "this is computer", data: req.body })
})

app.post("contact", (req, res) => {
    console.log(req.body)

    res.status(200).json({
        status: 1,
        msg: "Contact detail",
        bodyData: req.body,
        queryData: req.query
    })
})
app.listen("8000")