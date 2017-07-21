'use strict';

module.exports = app => {
	
	//前台
    app.get('/', 'home.index');
	//后台
	app.get('/admin','admin.index')
	app.get('/admin/login','admin.login')
	app.post('/login/yz','admin.yz')
	//ajax
    app.get('/news', 'home.news');
    app.get('/article/:id', 'article.info');
	app.get('/scrf','scrf.index');
	app.post('/user','user.index');
	app.post('/user/add','user.add');
	
	
	
	
	
};
