const fs = require("fs");
const requestHandler=(req,res)=>{
    if (req.url === "/") {
    res.write("<HTML>");
    res.write("<head><title>Enter Your Message...</title></head>");
    res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>'
    );
    res.write("</HTML>");
    return res.end();
    }
b 
    if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
        body.push(chunks);
    });

    return req.on("end", () => {
        const bodyParser = Buffer.concat(body).toString();
        const msg = bodyParser.split("=")[1];
        fs.writeFileSync("message.txt", msg);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    });
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<HTML>");
    res.write("<head><title>My First Node App...</title></head>");
    res.write("<body><h2>Welcome Jhon!!!</h2></body>");
    res.write("</HTML>");
    res.end();
}

//module.exports=requestHandler;

// module.exports={
//     handler:requestHandler,
//     tempdata:"Hello Form ROutes"
// }


// module.exports.handler=requestHandler;
// module.exports.tempdata="Hello From Routes";

exports.handler=requestHandler;
exports.tempdata="Hello From Routes";