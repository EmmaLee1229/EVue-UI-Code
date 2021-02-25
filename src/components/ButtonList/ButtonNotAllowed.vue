<demo>
  Button禁用示例
</demo>
<template>
        <Button themes="button" disabled>禁用按钮</Button>
        <Button themes="link" disabled>禁用链接按钮</Button>
        <Button themes="text" disabled>禁用按钮</Button>
</template>
<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default{
        components: {
            Button:Button
        }

    }
</script>
