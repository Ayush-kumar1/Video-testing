import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
const app = express();
const PORT = 5000;
import authRouter from "./routes/auth.js";
import wishlistRouter from "./routes/Wishlist.js";

// passowrd-2a5zlXAkQttxiSjJ
const dbURL = "mongodb+srv://ADMIN:2a5zlXAkQttxiSjJ@cluster0.5biv2.mongodb.net/VideoDB?retryWrites=true&w=majority";

app.use(express.json())
app.use(cors())
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.use("/", authRouter);

app.use("/", wishlistRouter);

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})