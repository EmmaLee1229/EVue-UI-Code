<template>
    <TopNav/>
    <div class="Content">
        <div class="aside">边栏</div>
        <div class="main">主内容</div>
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