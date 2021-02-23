<template>
    <div>Button 示例</div>
    <h1>Button样式示例</h1>
    <br>
    <div>
        <Button>你好</Button>
        <Button themes="button">你好</Button>
        <Button themes="link">你好</Button>
        <Button themes="text">你好</Button>
    </div>
    <br>
    <h1>Button尺寸示例</h1>
    <br>
    <div>
        <Button>默认普通尺寸</Button>
        <Button sizes="normal">normal Button</Button>
        <Button sizes="large">large Button</Button>
        <Button sizes="small">small Button</Button>
        <br>
        <br>
        <Button>默认普通尺寸</Button>
        <Button sizes="normal" themes="link">normal Button</Button>
        <Button sizes="large" themes="link">large Button</Button>
        <Button sizes="small" themes="link">small Button</Button>
        <br>
        <br>
        <Button>默认普通尺寸</Button>
        <Button sizes="normal" themes="text">normal Button</Button>
        <Button sizes="large" themes="text">large Button</Button>
        <Button sizes="small" themes="text">small Button</Button>
    </div>
    <br>
    <br>
    <h1>Button重要性示例</h1>
    <br>
    <div>
        <Button>默认一般等级</Button>
        <Button levels="normal">一般等级</Button>
        <Button levels="main">重要</Button>
        <Button levels="dangerous">危险</Button>
    </div>
    <br>
    <h1>Button禁用示例</h1>
    <br>
    <div>
        <Button themes="button" disabled>禁用按钮</Button>
        <Button themes="link" disabled>禁用链接按钮</Button>
        <Button themes="text" disabled>禁用按钮</Button>
    </div>
    <br>
    <h1>Button加载示例</h1>
    <br>
    <div>
        <Button themes="button" loading>加载按钮</Button>
        <Button >加载完毕</Button>
    </div>
    <h1>Button圆角示例</h1>
    <br>
    <div>
        <Button outline="normal">普通按钮</Button>
        <Button outline="round">圆角按钮</Button>
        <Button outline="circle">圆</Button>
    </div>
</template>

<script lang="ts">
 import Button from "../lib/Button.vue";

 export default {
     components:{
         Button:Button
     },
     setup(){
         const onClick=()=>{
             console.log('hi');
         };

         return {onClick}
     }
 }
</script>

<style lang="scss" scoped>

</style>