<template>
    <h1>对话框示例</h1>
    <Button @click="toggle">点击打开对话框</Button>
        <Dialog :isvisible="visible" @update:isvisible="visible=$event" :closeOnclickOverlay="false" :yes="yes" :no="no">
            <template v-slot:content>
                <p>这是一段文字</p>
            </template>
            <template v-slot:title>
                <strong>这是一个标题</strong>
            </template>
        </Dialog>
    <br>
    <h1>用TS实现一句话打开对话框</h1>
    <Button @click="showDialog">点击打开对话框</Button>
</template>

<script lang="ts">
    import Dialog from "../lib/Dialog.vue";
    import Button from "../lib/Button.vue";
    import { ref } from "vue";
    import { openDialog } from "../lib/openDialog";

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
            };
            const showDialog=()=>{
                openDialog({title:"标题",content:"你好",yes:()=>{
                    console.log('yes')
                    },no:()=>{
                    console.log('no')
                    }})
            }
            return {
                visible,toggle,yes,no,showDialog
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>