<demo>
    常规用法
</demo>
<template>
        <Button>你好</Button>
        <Button themes="button">你好</Button>
        <Button themes="link">你好</Button>
        <Button themes="text">你好</Button>
</template>

<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default{
        components: {
            Button:Button
        }

    }
</script>
