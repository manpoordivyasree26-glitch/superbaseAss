import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/* ======================
   SIGNUP API
====================== */
app.post("/signup", async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const { data: existingUser } = await supabase
      .from("users7")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("users7").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword,
      },
    ]);

    if (error) throw error;

    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   USER PROFILE API
====================== */
app.get("/myprofile", async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const { data, error } = await supabase
      .from("users7")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
