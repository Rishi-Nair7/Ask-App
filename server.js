import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import homeRoutes from "./routes/home.js";
import failRoutes from "./routes/fail.js";
import profileRoutes from "./routes/profile.js";
import cors from "cors";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import session from "express-session";
import User from "./models/user.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(authRoutes);
app.use(postRoutes);
app.use(homeRoutes);
app.use(failRoutes);
app.use(profileRoutes);
const CONNECTION_URL = process.env.DATABASE;

mongoose.connect(CONNECTION_URL);

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/build"));
}
app.listen(PORT, function(){
    console.log("Running on port "+ PORT);
})