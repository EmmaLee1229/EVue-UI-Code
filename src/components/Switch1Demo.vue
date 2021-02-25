<demo>
    常规用法
</demo>
<template>
    <Switch v-model:value =checked v-model:text = text />
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue'
    import { ref } from 'vue';
    export default {
        components:{
            Switch:Switch
        },
        setup(){
            const checked = ref(false)
            const text = ref("off")
            return{checked,text}
        }
    }
</script>
