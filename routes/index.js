module.exports = function(app) {  
    app.get('/',function(req,res) {
        res.render('index');
    });
    app.get('/home',function(req,res) {
        res.render('personal-todo');
    });


    app.post('/tryLogin',function(req,res) {

        //로그인 시도 후 home으로 리다이렉트
        res.redirect('/home');
    });
}