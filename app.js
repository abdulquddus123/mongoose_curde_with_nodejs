 const express = require('express')
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000


const user_info=require("./mongoose");
app.use("/user",user_info);

app.use("/", (req,res)=>{
res.send("success")
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))