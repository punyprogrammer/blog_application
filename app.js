const express=require('express')
const dotenv= require('dotenv')
const morgan=require('morgan')
const connectDB=require('./config/db')
const exphbs=require('express-handlebars')
const path=require('path')
//Load the configuration file 
dotenv.config({path:'./config/config.env'})
//connect to the database
// connectDB();
const app =express()
const PORT =process.env.PORT||3000
//logging in development mode
if(process.env.NODE_ENV==='development') 
{
    app.use(morgan('dev'))
}
//Handlebars
app.engine('.hbs',exphbs({defaultLayout:'main',extname:'.hbs'}))
app.set('view engine','.hbs')
//routes
app.use('/',require('./routes/index'))
app.listen(PORT,()=>{
    //Static assets
app.use(express.static(path.join(__dirname,'public')))
console.log(`Server is running  in ${process.env.NODE_ENV} mode on port ${PORT}`)
})