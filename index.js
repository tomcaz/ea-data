const express = require('express')
const cors = require('cors');
const serverless = require('serverless-http')
var bodyParser = require('body-parser')
const app = express()
const port = 4000
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks/',require('./src/end-points/task.controller.js'))

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


module.exports.handler = serverless(app);
module.exports = app; // for testing