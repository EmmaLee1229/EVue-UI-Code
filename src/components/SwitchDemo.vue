<template>
    <Switch :value =checked @input="checked=$event"/>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue'
    import { ref } from 'vue';
    export default {
        components:{
            Switch
        },
        setup(){
            const checked = ref(true)
            return{checked}
        }
    }
</script>

<style lang="scss" scoped>

</style>