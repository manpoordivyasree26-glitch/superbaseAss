import {supabase} from "../config/supabase.js";
import {validateTodo} from "../validations/todoValidation.js";
export const addTodo=async(req,res)=>{
    const error=validateTodo(req.body);
   if(error) return res.status(400).json({error})

const{title,description,userId}=req.body

const{data:user}=await supabase
.from("users6")
.select("id")
.eq("id",userId)
.single();

if(!user){
    return res.status(404).json({error:"user not found"})
}
const {data,error:dbError}=await supabase
.from("todos1")
.insert([{
    title,
description,
user_id:userId
}])
.select();
if(dbError){
    return res.status(500).json({error: dbError.message})
}
res.status(201).json({
    message:"Todo created succesfully", 
    todo:data[0]
});
};
//get all the todos

export const getUserTodos=async(req,res)=>{
    const {userId}=req.params;
    const {data,error}=await supabase
    .from("todos1")
    .select("*")
    .eq("user_id",userId);
if(error){
    return res.status(400).json({error:"unable to fetch todos"})
}
res.status(200).json({todos:data})
};
//update todos

export const updateTodo=async(req,res)=>{
    const {todoId}=req.params;
    const{data:todo}=await supabase
    .from("todos1")
    .select("*")
    .eq("id",todoId)
    .single();

    if(!todo){
        return res.status(404).json({error:"todo not found"})
    }

    const {data,error}=await supabase
    .from("todos1")
    .update(req.body)
    .eq("id",todoId)
    .select();
  if(error){
    return res.status(500).json({error:error.message})
  }
  res.status(200).json({
    message:"Todo updated successfully",
    todo:data[0],
  });
};
//delete todos
export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await supabase
    .from("todos1")
    .delete()
    .eq("id", todoId);

  if (error) {
    return res.status(400).json({ error: "Invalid todo ID" });
  }

  res.status(200).json({
    message: "Todo deleted successfully",
  });
};
