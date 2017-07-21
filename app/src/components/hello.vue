<template>
<table class="table">
    <tr v-for='(v,i) in article'>
        <td width='10%' ><strong v-text='v.user_id'></strong></td>
        <td width='75%'><span ><router-link :to="{ name: 'article', params: { id: v.id }}" v-text='v.biaoti' ></router-link></span></td>
        <td width='15%'><span class="badge" v-text='v.intime' ></span></td>
    </tr>
</table>

</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                article: ''
            }
        },
        beforeMount() {
            let id = this.$route.params.id

            this.$http.get('/article/' + id).then(response => {
                // get body data
                if (response.body.status == 1) {
                    this.article = response.body.message;

                } else {
                    alert('请求失败')
                }

            }, response => {
                // error callback
            });
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                let id = this.$route.params.id

                this.$http.get('/article/' + id).then(response => {
                    // get body data
                    if (response.body.status == 1) {
                        this.article = response.body.message;

                    } else {
                        alert('请求失败')
                    }
                }, response => {
                    // error callback
                });
            }
        }
    }

</script>

<style scoped>


</style>
