const express=require("express")
const {NoteModel}=require("../models/note.model")
const{auth}=require("../middleswares/auth.middleware")

const noteRouter=express.Router()

noteRouter.use(auth)

noteRouter.post("/create",async(req,res)=>
{
try{


    const note=new NoteModel(req.body)
    await note.save()
    res.json({msg:"New note has been add",note:req.body})


}catch(err){
    res.json({ error:err.message})



}




})

noteRouter.get("/",async(req,res)=>
{


    try{


        const note=await NoteModel.find()
        
       res.send(notes)
    
    
    }catch(err){
        res.json({ error:err.message})
    
    
    
    }








    
})


noteRouter.patch("/update/:noteID",(req,res)=>
{




    
    
})
noteRouter.delete("/delete/:noteID",(req,res)=>
{

    
})


module.exports={

    noteRouter
}