const Login = require('../models/LoginModel');

exports.index = (req, res)=>{
    if(req.session.user) return res.render('login-logado');
    return res.render('login');
};

exports.register = async (req, res)=>{
    try{
        const login = new Login(req.body);
        await login.register();
    
        if(login.errors.length>0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('http://localhost:3000/login/index');
            });
            return
        }
        req.flash('success', 'Usuario criado com sucesso');
        req.session.save(function(){
            return res.redirect('http://localhost:3000/login/index');
        });
    } catch(e){
        console.log(e);
        return res.render('404');
    }
};

exports.login = async (req, res)=>{
    try{
        const login = new Login(req.body);
        await login.login();
    
        if(login.errors.length>0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('http://localhost:3000/login/index');
            });
            return
        }
        req.flash('success', 'login realizado com sucesso');
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('http://localhost:3000/login/index');
        });
    } catch(e){
        console.log(e);
        return res.render('404');
    }
};

exports.logout = (req, res) =>{
    req.session.destroy();
    res.redirect('http://localhost:3000/index');
}