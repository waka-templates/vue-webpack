<template lang="html">
    <div class="info">
        <h3>Project Name:{{name}}</h3>
        <h3>Project Version:{{version}}</h3>
        <h3>Author:{{author}}</h3>
        <h3>Desc: {{description}}</h3>
    </div>
</template>

<script>
export default {
    data(){
        return{
            info:'project info'
        }
    }
}
</script>

<style lang="css">
</style>
