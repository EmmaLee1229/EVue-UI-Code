<demo>
    Button圆角示例
</demo>
<template>
    <Button outline="normal">普通按钮</Button>
    <Button outline="round">圆角按钮</Button>
    <Button outline="circle">圆</Button>

</template>

<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default{
        components: {
            Button:Button
        }
    }
</script>
