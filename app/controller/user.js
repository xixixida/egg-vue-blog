'use strict';

module.exports = app => {
	class UserController extends app.Controller { 
		* index(ctx) {

			const name = ctx.request.body.name;
			const pwd = ctx.request.body.pwd;
			const data = {
				name: name,
				pwd: pwd
			}
			const a = yield ctx.service.mysql.fonduser(data)
			if (a) {
				ctx.session.id = a.id ;
				ctx.session.name = a.name;
				ctx.body = {
					message: a.id,
					status: 1
				}
			} else {
				ctx.body = {
					message: 0,
					status: 0
				}
			}
		} 
		
		* add(ctx) {
			const name = ctx.request.body.name;
			const pwd = ctx.request.body.pwd;
			const data = {
				name: name,
				pwd: pwd
			}
			const a = yield ctx.service.mysql.adduser(data)
			if (a) {
				 ctx.session.id = a.id ;
				ctx.session.name = a.name
				ctx.body = {
					message: a.id,
					status: 1
				}
			} else {
				ctx.body = {
					message: 0,
					status: 0
				}
			}
		}

	}
	return UserController;
};