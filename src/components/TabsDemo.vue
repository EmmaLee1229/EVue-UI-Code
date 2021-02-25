<template>
    <code-demo :component="TabsDemo1"></code-demo>
    <code-demo :component="TabsDemo2"></code-demo>
</template>

<script lang="ts">
    import TabsDemo1 from "./TabsCode/TabsDemo1.vue";
    import TabsDemo2 from "./TabsCode/TabsDemo2.vue";
    import CodeDemo from "./CodeDemo.vue";
    export default {
        components:{
            CodeDemo
        },
        setup(){
            return {
                TabsDemo1,TabsDemo2
            }
        }
    }
</script>
