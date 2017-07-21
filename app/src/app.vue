<template>
	<div id="app" class="container-fluid">
		<header class="head">
			<img src="../public/images/top2.jpg" class="img-responsive" width="100%" @click='projects(1)' alt="">
		</header>
		<div class="row news">
			<ul class="appul container">
				<li>
					<router-link :to="{ name: 'home', params: { id: '0' }}">推荐</router-link>
				</li>
				<li v-for='(v,i) in news'>
					<router-link :to="{ name: 'home', params: { id: v.id }}" v-text='v.name'></router-link>
				</li>

			</ul>

		</div>
		<div class='container'>
			<div class="row">
				<div class="col-md-9">
					<router-view class='panel  hello' name='hello'></router-view>
					<router-view class='panel hello' name='article' ></router-view>
				</div>
				<div class="col-md-3">
                    <router-view></router-view>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import '../public/css/bootstrap.css'
	import '../public/js/bootstrap.min.js'


	export default {

		name: 'app',
		data() {
			return {
				error: null
			}
		},
		props: [' message '],
		beforeMount() {
            
            
		},
        mounted(){
            console.log(4)
        },
        beforeUpdate(){
            console.log(5)
        },
        updated(){
            console.log(6)
        },
        activated(){
            console.log(7)
        },
		computed:{
            news(){
                return this.$store.state.lanmu
            }
		},
		methods: {
			projects() {
				
				
			},
			zc() {

			}

		}
	}
</script>

<style>
	body{
		background: #ccc;
	}
	.head {
		height: 200px;
		overflow: hidden;
	}
	
	.news {
		height: 40px;
		background: #0f0;
	}
	
	.appul {
		height: 40px;
	}
	
	.appul li {
		display: inline-block;
		border: 1px solid red;
		background: rgba(255, 0, 45, 0.5);
	}
	
	.appul li a {
		display: inline-block;
		width: 100px;
		color: black;
		text-align: center;
		line-height: 38px;
		font-size: 20px;
	}
	
	.appul .router-link-active {
		color: aliceblue;
	}
	.hello{
		background: #fff;
		
	}
	
</style>