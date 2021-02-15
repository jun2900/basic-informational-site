const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let page;
  switch (req.url) {
    case "/":
      page = "./pages/index.html";
      break;
    case "/about":
      page = "./pages/about.html";
      break;
    case "/contact-me":
      page = "./pages/contact-me.html";
      break;
    default:
      page = "./pages/404.html";
      break;
  }

  fs.readFile(page, (err, data) => {
    res.write(data);
    return res.end();
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

