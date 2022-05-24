import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
const userSchema = mongoose.Schema({
    email: "string",
    username: "string",
    password: "string",
    color: "string"
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User',userSchema);

export default User;
