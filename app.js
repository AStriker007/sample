const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()

app.get('/',(req,res,next)=>{
res.json({message:"hiiiii"})
})

app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`)
})