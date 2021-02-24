<template>
        <div class="evue-tabs">
            <div class="evue-tabs-nav">
                <div @click="changeSelected(t)" class="evue-tabs-nav-item" v-for="(t,index) in titles"  :class="{selected: t=== selected}" :key="index" >{{t}}</div>
            </div>
             <div class="evue-tabs-content">
                 <component class="evua-tabs-content-item" v-for="c in defaults" :class="{selected:c.props.title===selected}" :is="c" />
             </div>
        </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    export default {
        props:{
            selected:{
                type:String
            }
        },
        setup(props,context){

            const defaults = context.slots.default();
            defaults.forEach(tag=>{
                if(tag.type!==Tab){
                    throw new Error('Tabs的子标签必须是Tab')
                }
            });
            const titles = defaults.map(t=>t.props.title);
            const changeSelected=(title:string)=>{
                context.emit('update:selected',title)
            }

            return {defaults,titles,changeSelected}
        }
    }
</script>

<style lang="scss">
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
    .evua-tabs-content-item {
        display: none;
        &.selected {
            display: block;
        }
    }
</style>