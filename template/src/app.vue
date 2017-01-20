<template>
    <div id="app">
        <h3>\{{title}}</h3>
        <hello />
        {{#router}}
            <router-link to="info">查看项目信息</router-link>
        {{/router}}
    </div>
</template>

<style scoped>
    h3{
        color: red;
    }
</style>

<script>
    import Hello from '@components/hello';

    export default{
        data(){
            return {
                title: 'vue-webpack'
            }
        },

        components:{
            Hello
        }
    }
</script>
