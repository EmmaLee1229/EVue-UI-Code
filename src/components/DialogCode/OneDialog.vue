<demo>
    用TS实现一句话打开对话框
</demo>
<template>
    <Button @click="showDialog">点击打开对话框</Button>
</template>

<script lang="ts">
    import Button from "../../lib/Button.vue";
    import { openDialog } from "../../lib/openDialog";
    export default {
        components:{
            Button:Button,
        },
        setup(){
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
                    },closeOnclickOverlay:()=>{}})
            }
            return {
                yes,no,showDialog
            }
        }
    }

</script>
