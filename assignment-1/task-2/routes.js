const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.write("<HTML>");
    res.write("<head><title>Enter UserName...</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Send</button></form></body>'
    );
    res.write("</HTML>");
    return res.end();
  }

  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });

    return req.on("end", () => {
      const bodyParser = Buffer.concat(body).toString();
      const msg = bodyParser.split("=")[1];
      res.write("<HTML>");
      res.write("<head><title>Enter UserName...</title></head>");
      res.write(
        `<body><h2>${msg}</h2></body>`
      );
      res.write("</HTML>");
      return res.end();
    });
  }
};

module.exports = requestHandler;
