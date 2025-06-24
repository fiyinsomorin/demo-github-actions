const express = require('express'); // 🧠 Load Express framework
const app = express();              // 🚗 Create an app instance

// 🌐 Define a route: when someone visits '/', they get a message
app.get('/', (req, res) => res.send('Hello from GitHub Actions demo!'));

// 🚪 Start the server on port 3000
app.listen(3000);

