const express = require("express")
const app = express()

const port = 3000

app.use("/",express.static("dist"))

app.listen(port, () => {
  console.log(`web server app listening on port ${port}`)
})