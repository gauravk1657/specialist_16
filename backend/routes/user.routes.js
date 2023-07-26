const express=require("express")
const{userModel}=require("../models/user.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const userRouter=express.Router()
userRouter.post("/register",(req,res)=>{


    const {name,email,pass}=req.body
    try{

       
        bcrypt.hash(pass, 5, async (err, hash)=>{
          if(err){

            res.json({error:error.message})
          }else  {


            const user=new userModel({name,email,pass:hash})
              await user.save()
          }
        })
         res.json({msg:"USER HAS REGIDTED",user:req.body})






    } catch(err)
    {
      res.json({error:err.message})

    }



})

userRouter.post("/login",async(req,res)=>{

    const {email,pass}=req.body
    try{
          const user=await UserModel.findOne({email})
          if(user)
          {
          bcrypt.compare(pass,user.pass,(err,results)=>{


            if(results)
            {

                let token=jwt.sign({userID:user._id,user:user.name},"masai")
                res.json({msg:"logged in!!",token})
            } else{


                res.json({error:"wrong crediartional"})
            }

          })

          } else{

            res.json({ msg:" user does not exist"

            })
          }



    }catch(err){


       res.json({error:err.message})

    }


    
})



module.exports={
    userRouter
    }


