<demo>
    Button加载示例
</demo>
<template>
        <Button themes="button" loading>加载按钮</Button>
        <Button >加载完毕</Button>
</template>

<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default{
        components: {
            Button:Button
        }
    }
</script>
