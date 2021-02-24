<template>
   <h1>Tabs组件</h1>
    <Tabs v-model:selected="x">
        <Tab title="导航1">标题一</Tab>
        <Tab title="导航2">标题二</Tab>
    </Tabs>
</template>

<script lang="ts">
    import Tab from "../lib/Tab.vue";
    import Tabs from "../lib/Tabs.vue";
    import { ref } from "vue";

    export default {
        components:{
            Tab:Tab,
            Tabs:Tabs
        },
        setup(){
            const x = ref('导航1')
            return {
                x
            }
        }
    }
</script>

<style lang="scss" >

</style>