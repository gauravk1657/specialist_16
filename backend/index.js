const express=require("express")
const {connection}=require("./db")

const{userRouter}=require("./routes/user.routes")

const{noteRouter}=require("./routes/note.routes")


const app=express()
app.use(express.json())


app.use("/user",userRouter)
app.use("/note",noteRouter)







app.listen(4500,async()=>
{
   
    try{
  await connection
   console.log("  connnected to db")

   console.log("  connnected to 4500")

    } catch(err)
    {
        console.log("  connnect  errb")
        console.log("  something went wrong db")

    }


})