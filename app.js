const express= require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const securityRouter=require("./controllers/securityrouter")
const visitorRouter=require("./controllers/visitorrouter")


const app=express()

app.use(express.json())
app.use(cors())

app.use("/api/security",securityRouter)
app.use("/api/visitor",visitorRouter)

mongoose.connect("mongodb+srv://asnamv123:asnamv08@cluster0.erlchgb.mongodb.net/securityDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)



app.listen(3001,()=>{
    console.log("server running")
})