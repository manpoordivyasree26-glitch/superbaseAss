import dotenv from "dotenv";
dotenv.config();

// load server AFTER env is ready
import("./server.js");
