const jwt =require("jsonwebtoken")
  const auth=(req,res,next)=>
  {

    

 const token =req.headers.authorization?.split(" ")[1]

  
  if(token)
  {

     try{

        const decoded=jwt.verify(token,"masai")
        if (decoded)
        {
                req.body.userID=decoded.userID
                req.body.user=decoded.user
            next()
        }else{

            res.json({ msg:"not authrorized!!"})
        }
     }catch(err)
     {
         res.json({ error:err.message})

    }
}else{

    res.json({msg:"plese log in!!"})
}



  }
 module.exports={

auth



 }