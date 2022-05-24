import User from "../models/user.js";
import passport from "passport";
export  function postLogin(req,res){
    const credentials=req.body;
    const user = new User(credentials);
    
     req.login(user, function(err){
        if(err){
            console.log("error");
            
        }else{
             passport.authenticate("local",{ failureRedirect: '/fail' })(req,res,function(){
                const info = {
                    username: req.user.username,
                    email: req.user.email,
                    auth: true
                }
                res.send(info);
            })
        }
    })
    

};

export function postRegister(req,res){
    const credentials=req.body;
    User.findOne({username: credentials.username}, function(err,result){
        if(err){
            console.log(err);
        }else{
            if(result===null){
                const newUser = new User({
                    username: credentials.username,
                    email: credentials.email,
                    color: credentials.color
                });
                
                User.register(newUser, credentials.password, function(err,user){
                    if(err){
                        console.log(err);
                    }else{
                         passport.authenticate("local",{ failureRedirect: '/fail' })(req,res,function(){
                            
                            const info = {
                                username: req.user.username,
                                email: req.user.email,
                                auth: true
                            }
                            res.send(info);

                        })
                    }
                })
            }
            
            
        }
    })
};

export function logOut(req,res){
    req.logout();
    res.send(true);
}