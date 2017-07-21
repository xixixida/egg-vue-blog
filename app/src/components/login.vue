<template>
	<div>
		这是login
		<div class="login bg-warning" v-show='show.a4'>
			<header class="row">
				<h3 class="col-xs-6" @click='fun1(0)'>账户登录</h3>
				<h3 class="col-xs-6" @click='fun1(1)'>用户注册</h3>
			</header>
			<div class='cen' v-show='show.a1'>
				<div class="input-group">
					<span class="input-group-addon glyphicon glyphicon-user" id="basic-addon1"></span>
					<input type="text" class="form-control" placeholder="用户名" aria-describedby="basic-addon1" v-model='lo.du'>
				</div>
				<div class="input-group">
					<span class="input-group-addon glyphicon glyphicon-lock" id="basic-addon2"></span>
					<input type="password" class="form-control" placeholder="密码" aria-describedby="basic-addon2" v-model='lo.ds'>
				</div>
				<div class='foot'>
					<span>忘记密码</span>
				</div>
				<div>
					<button type="button" class="btn btn-primary btn-lg btn-block" @click='dl()'>登录</button>
				</div>
			</div>
			<div class='cen' v-show='show.a2'>
				<div class="input-group">
					<span class="input-group-addon glyphicon glyphicon-user" id="basic-addon1"></span>
					<input type="text" class="form-control" placeholder="用户名" aria-describedby="basic-addon1 " v-model='lo.zu'>
				</div>
				<div class="input-group">
					<span class="input-group-addon glyphicon glyphicon-lock" id="basic-addon2"></span>
					<input type="password" class="form-control" placeholder="密码" aria-describedby="basic-addon2" v-model="lo.zs">
				</div>
				<div class='foot'>
					忘记密码
				</div>
				<div>
					<button type="button" class="btn btn-primary btn-lg btn-block" @click='zc()'>注册</button>
				</div>
			</div>
		</div>
		<div class="login bg-warning" v-show='show.a3'>
			{{name}}

		</div>

	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				lo: {
					du: '',
					ds: '',
					zu: '',
					zs: ''
				},
				show: {
					a1: 1,
					a2: 0,
					a3: 0,
					a4: 1
				}
			}
		},
		watch: {
			'$route': 'lofin'

		},
		computed: {
			name() {
				return this.$store.state.name
			}
		},
		beforeMount() {
			
			
		},
		 updated(){
            this.lofin()
        },
		methods: {
			lofin() {
					if (this.$store.state.name) {
						this.fun1(2)
						
					}
					
				},
				fun1(a) {
					if (a == 0) {
						this.show.a1 = true
						this.show.a2 = false
						this.show.a3 = false
						this.show.a4 = true

					} else if (a == 1) {
						this.show.a1 = false
						this.show.a2 = true
						this.show.a3 = false
						this.show.a4 = true

					} else {
						this.show.a1 = false
						this.show.a2 = false
						this.show.a3 = true
						this.show.a4 = false
					}
				},
				dl() {
					var data = {
						name: this.lo.du,
						pwd: this.lo.ds,
						_csrf: csrf.value
					}

					this.$http.post('/user', data).then(response => {
						if (response.body.status == 0) {
							alert('用户名或密码不正确')
						} else {
							this.fun1(2)
							this.$store.state.name = this.lo.du
							this.$store.state.id = response.body.message
						}

					}, response => {
						alert('服务器连接失败')
					});
				},
				zc() {
					var data = {
						name: this.lo.zu,
						pwd: this.lo.zs,
						_csrf: csrf.value
					}
					this.$http.post('/user/add', data).then(response => {
						if (response.body.status == 0) {
							alert('用户名或密码不正确')
						} else {
							this.fun1(2)
							this.$store.state.name = this.lo.du
							this.$store.state.id = response.body.message
						}

					}, response => {
						alert('服务器连接失败')
					});

				},
				post(data) {

				}
		}

	}
</script>

<style scoped>
	.login {
		height: 350px;
		padding: 15px;
	}
	
	.login header {
		height: 60px;
		padding: -15px;
	}
	
	.cen div {
		margin-top: 25px;
		padding: -15px;
	}
	
	.foot {
		text-align: right;
	}
</style>