const jwt = require('jsonwebtoken');

module.exports=function VerifyMiddle(req, res, next){

    if(req.cookies.token){
        return next();
    }
    res.redirect('/auth');
}