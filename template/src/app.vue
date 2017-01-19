<template>
    <div id="app">
        <h3>{{name}}</h3>
        <hello />
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
                name: 'vue-webpack'
            }
        },

        components:{
            Hello
        }
    }
</script>
