<template>
    <h1>对话框示例</h1>
    <Button @click="toggle">点击打开对话框</Button>
    <Dialog :isvisible="visible" @update:isvisible="visible=$event" :closeOnclickOverlay="false" :yes="yes" :no="no"></Dialog>
</template>

<script lang="ts">
    import Dialog from "../lib/Dialog.vue";
    import Button from "../lib/Button.vue";
    import { ref } from "vue";

    export default {
        components:{
            Dialog:Dialog,
            Button:Button
        },
        setup(){
            const visible=ref(false)
            const toggle =()=>{
                visible.value=!visible.value
            };
            const yes=()=>{
                return false
            }
            const no =()=>{
                return true
            }
            return {
                visible,toggle,yes,no
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>