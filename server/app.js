const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRouter = require('./Routes/auth')
const ProductRouter = require('./Routes/product')

const port = 5000;
app.use(cors({
    origin: ['http://localhost:5173'],
    method: ['GET','POST'],
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use('/auth',userRouter)
app.use('/product',ProductRouter)
// app.use('/uploads', express.static(__dirname + '/uploads'));



mongoose.connect('mongodb://127.0.0.1:27017/DynamicProducts')
.then(() => {
    console.log("connected successfully");
}).catch(err => console.log(err))


app.listen(port, () => {
    console.log("server is listening at port no 5000");
})