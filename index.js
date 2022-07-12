const express=require('express')
require('dotenv').config()
const app=express()
const PORT=8000

app.use(express.json())
const department=require("./router/department")
const categories=require("./router/category")
const attribute=require("./router/attributes")
const product=require("./router/product")
const ShoppingCart=require("./router/ShoppingCart")
const tax=require("./router/tax")
const shipping=require("./router/shipping")
const customer=require("./router/customer")


app.use("/",department,categories,attribute,product,ShoppingCart,tax,shipping,customer)
app.listen(PORT, () => {
    console.log(`Server Running on port:http://localhost:${PORT}`)
})