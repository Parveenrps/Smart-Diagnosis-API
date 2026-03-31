import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import diagnoseRoutes from "./routes/diagnose.route.js";

const app = express();

app.use(express.json());

app.use("/", diagnoseRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
})
.catch((error)=>{
    console.log("Error connecting to MongoDB", error);
});

export default app;