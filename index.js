const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}));
const PORT=3000;
const userRouter=require("./routes/users.route");
const productRouter=require("./routes/products.route");

app.use(userRouter);
app.use(productRouter);


app.use=(req,res,next)=>{

    res.status(404).json({
        message:"resource not found"
    })
}






app.listen(PORT,()=>{


    console.log(`server is running at http://localhost:${PORT}`)
})