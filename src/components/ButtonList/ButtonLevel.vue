<demo>
    Button重要性示例
</demo>
<template>
        <Button>默认一般等级</Button>
        <Button levels="normal">一般等级</Button>
        <Button levels="main">重要</Button>
        <Button levels="dangerous">危险</Button>
</template>
<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default{
        components: {
            Button:Button
        }

    }
</script>
