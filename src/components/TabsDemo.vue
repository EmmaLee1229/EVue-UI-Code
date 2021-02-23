<template>
   <h1>Tabs组件</h1>
    <Tabs>
        <Tab title="导航1">标题一</Tab>
        <Tab title="导航2">标题二</Tab>
    </Tabs>
</template>

<script lang="ts">
    import Tab from "../lib/Tab.vue";
    import Tabs from "../lib/Tabs.vue";

    export default {
        components:{
            Tab:Tab,
            Tabs:Tabs
        }
    }
</script>

<style lang="scss" scoped>

</style>