<demo>
    常规用法
</demo>
<template>
    <Tabs v-model:selected="x">
        <Tab title="导航1">标题一</Tab>
        <Tab title="导航2导航2导航2导航2">标题二</Tab>
        <Tab title="导航3" >标题三</Tab>
    </Tabs>
</template>
<script lang="ts">
    import Tab from "../../lib/Tab.vue";
    import Tabs from "../../lib/Tabs.vue";
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
