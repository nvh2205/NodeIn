const jwt = require('jsonwebtoken')

class AuthController {
  showPage(req, res, next) {
      if(req.cookies.email){
          return res.redirect('/');
      }
    res.render("login");
  }

  login(req, res, next) {
    const { email, password } = req.body;


    if (password != "123456" || email != "test@gmail.com") {
      return res.render("login", { err: "Err" });
    }

    const accessToken = jwt.sign(
			{ email: email },
			process.env.ACCESS_TOKEN_SECRET
		)

    res.cookie("token", `${accessToken}`, { expires: new Date(Date.now() + 900000) });
    res.redirect('/');
  }
}

module.exports = new AuthController();
