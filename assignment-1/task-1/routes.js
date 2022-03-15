

const requestHandler=(req, res) => {
    if (req.url === "/users") {
      res.write("<HTML>");
      res.write("<head><title>Users.....</title></head>");
      res.write(
        '<body><ul><li>User - 1</li><li>User - 2</li><li>User - 3</li></ul></body>'
      );
      res.write("</HTML>");
      return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<HTML>");
    res.write("<head><title>Welcome Page...</title></head>");
    res.write("<body><h2>Hello Welcome to My Page!!!</h2></body>");
    res.write("</HTML>");
    res.end();
  }

  module.exports=requestHandler;