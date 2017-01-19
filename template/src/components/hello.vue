<template lang="html">
    <p class="desc">
        {{desc}}
    </p>
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
