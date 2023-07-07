import express from "express";
// console.log(express)
const server = express(); // express is a function we can invoke. You can check it through console logging it.

/* 
For the purpose of serving the static assets which we store in 'dist' folder.
S0, we use server.use to make use of static assets, for which 'express' is acting as a middleware
*/
server.use(express.static("dist"));

// To set eh 'ejs' as templating library
server.set("view engine", "ejs");

// If want the root URL to work then. you need to add it to the express
server.use("/", (req, res) => {
    res.send("hello express")
})

// 8080: port, 0.0.0.0: host, 3rd parameter function for server.listen
server.listen("8080", "0.0.0.0", () => {
    console.info(
        "Express server is listening at http://0.0.0.0:8080"
    );
});

