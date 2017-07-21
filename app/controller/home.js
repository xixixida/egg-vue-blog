'use strict';
var fs = require('fs');

module.exports = app => {
	class HomeController extends app.Controller { * index() {
			yield this.ctx.render('index.html');
		} * news(ctx) {
			const lanmu = yield ctx.service.mysql.fondlanmu()
			this.ctx.body = {
				lanmu: lanmu,
				user: ctx.session.name,
				id: ctx.session.id
			}
		} 
	}
	return HomeController;
};