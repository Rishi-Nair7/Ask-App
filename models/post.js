import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    question: String,
    answer: [Object]
});


const Post = mongoose.model("Post",postSchema);

export default Post;