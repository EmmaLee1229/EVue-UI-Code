<template>
   <TopNav/>
    <div class="banner">
        <h1>EVue-ui</h1>
        <h3>一个厉害的UI框架</h3>
        <p class="actions">
            <a >Github</a>
            <a >开始</a>
        </p>
    </div>
</template>
<script lang="ts">
    import TopNav from "../components/Topnav.vue";
    export default {
        components:{
            TopNav: TopNav
        }
    }
</script>
<style lang="scss" scoped>

</style>
