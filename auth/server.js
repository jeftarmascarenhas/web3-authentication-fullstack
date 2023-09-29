const express = require("express")
const app = express()
const PORT = 3001

app.get("/health", (req, res) => {
  const upTime = process.uptime
  const data = {
    upTime,
    message: "ok"
  }
  return res.json(data)
})



app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})