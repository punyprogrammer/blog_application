const mongoose=require('mongoose')
const colors=require('colors')
const connectDB=async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGODB_URL,{

            useUnifiedTopology:true,
            useFindAndModify:false,
            useNewUrlParser:true
        })
        console.log(`MongoDB atlas connected on ${connect.connection.host}`)
    } catch (error) {
        console.log(error.red)
        process.exit(1)
    }
}
module.exports=connectDB