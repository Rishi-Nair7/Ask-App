export function getHome(req,res){
    if(req.isAuthenticated()){
        res.send(true);
    }else{
        res.send(false);
    }
}