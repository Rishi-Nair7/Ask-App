import Post from "../models/post.js";

export function getPosts(req,res){
    Post.find({}, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
}

export function addPost(req,res){
    const post = req.body;
    const newPost = new Post({
        question: post.question,
        answer:[]
    })
    newPost.save();
    res.send("OK");
}

export function displayPost(req,res){
    const id = req.body.id;
    Post.findById(id, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
}

export function addAns(req,res){
    const obj = req.body;
    const id = obj.id;
    const ans = obj.ans;
    Post.findByIdAndUpdate(id, { $push: { answer: ans  } } ,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Ok")
        }
    })
}