const { check, validationResult } = require("express-validator");
const ValidatorLogin =()=>{
  return [
    check("email").isEmail(),
    check("password").isLength({ min: 6 }),
    (req, res, next)=>{
  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("login", { err: "Err!!!!" });
      }
  
      next();
    }
  ]
} 


const validator={
  ValidatorLogin:ValidatorLogin
}


module.exports={validator}