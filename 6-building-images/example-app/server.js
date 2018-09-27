const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('*', (req, res) => {
  res.end(
`<html>
  <body>
    <h1>Hello from Docker Application</h1>
  </body>
</html>`);
});


app.listen(port);
console.log(`Listening on ${port}...`);
