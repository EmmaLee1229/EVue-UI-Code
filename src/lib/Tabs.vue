<template>
        <div class="evue-tabs">
            <div class="evue-tabs-nav">
                <div  class="evue-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
            </div>
             <div class="evue-tabs-content">
                    <component class="evue-tabs-content-item" v-for="(d,index) in defaults" :key="index" :is="d"></component>
             </div>
        </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    export default {
    setup(props,context){
        const defaults = context.slots.default();
        defaults.forEach(tag=>{
            if(tag.type!==Tab){
                throw new Error('Tabs的子标签必须是Tab')
            }
        });
        const titles = defaults.map(t=>t.props.title)

        return {defaults,titles}
    }
    }
</script>

<style lang="scss" scoped>
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .evue-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;
                &:first-child {
                    margin-left: 0;
                }
                &.selected {
                    color: $blue;
                }
            }
        }
        &-content {
            padding: 8px 0;
        }
    }
</style>