import {supabase} from "../config/supabase.js";
import { validateSignup } from "../validations/userValidation.js";

export const signupUser=async(req,res)=>{
    try{
 const error=validateSignup(req.body);
 if(error){
    return res.status(400).json({error});
 }
const {name,email,password}=req.body
const {data:existingUser,error:checkError}=await supabase
.from("users6")
.select("*")
.eq("email",email);
if (checkError) {
      return res.status(500).json({ error: checkError.message });
    }


if(existingUser.length>0){
    return res.status(409).json({error:"Email already registered"});
}
const{data,error:dbError}=await supabase
.from("users6")
.insert([{
    name,
    email,
    password
}])
.select();
if(dbError){
    return res.status(500).json({error:dbError.message});
}
res.status(201).json({
    message:"user registered succesfully",
    user:data[0],
});
}
catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
