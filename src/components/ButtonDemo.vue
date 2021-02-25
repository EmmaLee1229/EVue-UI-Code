<template>
    <h1>Button样式示例</h1>
    <code-demo :component="ButtonThemes"></code-demo>
    <code-demo :component="ButtonSize" />
    <code-demo :component="ButtonLevel"></code-demo>
    <code-demo :component="ButtonNotAllowed"></code-demo>
    <code-demo :component="ButtonLoading"></code-demo>
    <code-demo :component="ButtonRound"></code-demo>
</template>

<script lang="ts">
 import Button from "../lib/Button.vue";
 import CodeDemo from "./CodeDemo.vue";
 import ButtonThemes from './ButtonList/ButtonThemes.vue'
 import ButtonSize from './ButtonList/ButtonSize.vue'
 import ButtonLevel from "./ButtonList/ButtonLevel.vue";
 import ButtonNotAllowed from "./ButtonList/ButtonNotAllowed.vue";
 import ButtonLoading from "./ButtonList/ButtonLoading.vue";
 import ButtonRound from "./ButtonList/ButtonRound.vue";
 export default {
     components:{
         Button:Button,
         CodeDemo,
     },
     setup(){
         return {ButtonThemes,ButtonSize,ButtonLevel,ButtonNotAllowed,ButtonLoading,ButtonRound}
     }
 }
</script>

