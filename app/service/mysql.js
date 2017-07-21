module.exports = app => {
	return class User extends app.Service { 
		* adduser(data) {
			const result = yield app.mysql.insert('user', data);
			const insertSuccess = result.affectedRows
			if (insertSuccess) {
				return {
					id: result.insertId,
					status: 1
				}
			} else {
				return {
					status: 0
				}
			}
		}

		* fonduser(data) {
			const user = yield this.app.mysql.get('user', data);
			return user
		} * fondlanmu() {
			const lanmu = yield this.app.mysql.select('lanmu')
			return lanmu
		}

		* articleall(id, limit = 1) {
			if (id == 0) {
				const data = yield this.app.mysql.select('article', {
					limit: limit * 15,
					columns:['id','biaoti','intime','user_id','lanmu']
				})
				if(data){
					return {
						status:1,
						message:data
					}
				}else{
					return {status:0}
				}
				
			} else {
				const data = yield this.app.mysql.select('article', {
					where: {
						lanmu: id
					},
					limit: limit * 15,
					columns:['id','biaoti','intime','user_id','lanmu']
				})
				if(data){
					return {
						status:1,
						message:data
					}
				}else{
					return {status:0}
				}
			}
		}
		//后台
		* Alogin(data){
			const result = yield this.app.mysql.select('admin', {
                where:data
            });
			const insertSuccess = result.affectedRows
			if (insertSuccess) {
				return {
					id: result.insertId,
					status: 1
				}
			} else {
				return {
					status: 0
				}
			}
		}
	}
};