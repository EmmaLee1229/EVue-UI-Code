<template>
    <code-demo :component="DialogDemo1"></code-demo>
    <code-demo :component="OneDialog"></code-demo>
</template>

<script lang="ts">
    import CodeDemo from './CodeDemo.vue';
    import DialogDemo1 from "./DialogCode/DialogDemo1.vue";
    import OneDialog from "./DialogCode/OneDialog.vue";
    export default {
        components:{
            CodeDemo
        },
        setup(){
            return {
                DialogDemo1,OneDialog
            }
        }
    }

</script>
