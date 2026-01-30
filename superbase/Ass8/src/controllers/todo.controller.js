import { supabase } from "../config/supabase.js";

/* CREATE TODO */
export const createTodo = async (req, res) => {
  const { title } = req.body;

  const { data, error } = await supabase
    .from("todos3")
    .insert([{ title, userId: req.user.userId }]);

  if (error) return res.status(400).json({ message: error.message });

  res.status(201).json({ message: "Todo created" });
};

/* GET TODOS */
export const getTodos = async (req, res) => {
  const { data } = await supabase
    .from("todos3")
    .select("*")
    .eq("userId", req.user.userId);

  res.json(data);
};

/* UPDATE TODO */
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const { data: todo } = await supabase
    .from("todos3")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== req.user.userId)
    return res.status(403).json({ message: "Access denied" });

  await supabase
    .from("todos3")
    .update({ title, completed })
    .eq("id", id);

  res.json({ message: "Todo updated" });
};

/* DELETE TODO */
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const { data: todo } = await supabase
    .from("todos3")
    .select("*")
    .eq("id", id)
    .single();

  if (!todo || todo.userId !== req.user.userId)
    return res.status(403).json({ message: "Access denied" });

  await supabase.from("todos3").delete().eq("id", id);

  res.json({ message: "Todo deleted" });
};
