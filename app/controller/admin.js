'use strict';

module.exports = app => {
	class AdminController extends app.Controller {

		* index() {
			
			const ctx = this.ctx
			if(ctx.session.Aid){
				 yield ctx.render('admin/index.html')
			}else{
				yield ctx.render('admin/login.html')
			}
			
		}

		* login() {
			const ctx = this.ctx
			yield ctx.render('admin/login.html')
		}

		* yz() {
			const ctx = this.ctx
			const name = ctx.request.body.admin;
			const pwd = ctx.request.body.pwd;
			const data = {
				name: name,
				pwd: pwd
			}
			const a = yield ctx.service.mysql.Alogin(data)
			if (a) {
				ctx.session.Aid = a.id;
				ctx.session.Aname = a.name;
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
	return AdminController;
};