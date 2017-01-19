<template lang="html">
    <div class="desc">
        <p>{{desc}}</p>
        <img src="../assets/logo.png" alt="logo">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                desc: 'A simple template webpack + vuejs setup for projects'
            }
        },
    }
</script>

<style lang="css">
    .desc{
        color: blue
    }
</style>
