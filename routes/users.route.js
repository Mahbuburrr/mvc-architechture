const express=require("express");
const { getUsers, saveUser, ap } = require("../controllers/users.controller");
const router=express.Router();

router.get("/users",getUsers);

router.post("/users",saveUser);



module.exports=router;