<template>
    <h1>Switch 组件示例 </h1>
    <code-demo :component="Switch1Demo"></code-demo>
    <code-demo :component="Switch2Demo"></code-demo>

</template>

<script lang="ts">
    import Switch1Demo from './SwitchCode/Switch1Demo.vue'
    import Switch2Demo from './SwitchCode/Switch2Demo.vue'
    import CodeDemo from "./CodeDemo.vue";
    export default {
        components:{
            CodeDemo
        },
        setup(){

            return{Switch1Demo,Switch2Demo}
        }
    }
</script>

