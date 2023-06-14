console.log("Working");
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json()); 
app.use('/api/v1', router);

// mongodb connection
mongoose.connect('mongodb+srv://madhuri13:diebold123@cluster0.ay3ihrp.mongodb.net/crudWithExternalServiceDB')
.then(() => console.log("DB Conneccted"))
.catch((err) => console.log("db error => ", err));

app.listen(8000, () => console.log("Working on port 8000")); // port