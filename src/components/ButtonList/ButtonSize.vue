<demo>
    不同themes的尺寸展示
</demo>
<template>
    <Button>默认普通尺寸</Button>
    <Button sizes="normal">normal Button</Button>
    <Button sizes="large">large Button</Button>
    <Button sizes="small">small Button</Button>
    <br/>
    <Button>默认普通尺寸</Button>
    <Button sizes="normal" themes="link">normal Button</Button>
    <Button sizes="large" themes="link">large Button</Button>
    <Button sizes="small" themes="link">small Button</Button>
    <br/>
    <Button>默认普通尺寸</Button>
    <Button sizes="normal" themes="text">normal Button</Button>
    <Button sizes="large" themes="text">large Button</Button>
    <Button sizes="small" themes="text">small Button</Button>
</template>

<script lang="ts">
    import Button from "../../lib/Button.vue";
    export default{
        components: {
            Button:Button
        }

    }
</script>
