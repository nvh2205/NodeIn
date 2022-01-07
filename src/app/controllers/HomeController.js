class HomeController{
    home(req,res,next){
        res.render('index');
    }
}
module.exports =new HomeController();