const User=require("../models/user");
exports.getLogin = (req, res, next) => {
   //const isLoggedIn=req.get('Cookie').split('=')[1]==="true";
   console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated:false
  });
};

exports.postLogin = (req, res, next) => {
  
    User.findById('6208014f18a76aeb4af26f89')
      .then(user => {
        req.session.isLoggedIn=true;
        req.session.user = user;
        res.redirect('/');
      })
      .catch(err => console.log(err));
 
};
