// crud operation   perform operations on db.json


const express=require("express")
const app=express()
app.use(express.json())
app.get("/students",(req,res)=>{
const data=JSON.parse(fs.readFileSync("/db.json","utf-8"))
console.log(data.students)
res.json(data.students)
})
app.post("/addstudent",(req,res)=>{
const data=JSON.parse(fs.readFileSync("/db.json","utf-8"))
data.students.push(req.body)
fs.writeFileSync("./db.json",data)
})
app.delete("") ==> //try it by your own as everything boils down to basic logic
app.listen(4500,()=>{
console.log("running on port 4500")
})
