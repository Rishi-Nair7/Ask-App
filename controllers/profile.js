export function getProfile(req,res){
    if(req.isAuthenticated()){
        const info = {
            username : req.user.username,
            email : req.user.email,
            color: req.user.color
        }
        res.send(info);
    }else{
        res.send(null);
    }
}