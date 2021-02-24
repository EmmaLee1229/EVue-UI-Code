<template>
        <div class="evue-tabs">
            <div class="evue-tabs-nav" ref="container">
                <div @click="changeSelected(t)"  v-for="(t,index) in titles" :ref="el => { if (t===selected) selectedItem = el }" class="evue-tabs-nav-item" :class="{selected: t=== selected}" :key="index" >{{t}}</div>
                <div class="evue-tabs-nav-indicator" ref="indicator"></div>
            </div>
             <div class="evue-tabs-content">
                 <component class="evua-tabs-content-item" v-for="c in defaults" :class="{selected:c.props.title===selected}" :is="c" />
             </div>
        </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    import { ref, onMounted, onUpdated, watchEffect } from 'vue';
    export default {
        props:{
            selected:{
                type:String
            }
        },

        setup(props,context){
            const selectedItem = ref<HTMLDivElement>(null);
            const indicator =ref<HTMLDivElement>(null);
            const container = ref<HTMLDivElement>(null);
            const getValue=()=>{
                const {width} = selectedItem.value.getBoundingClientRect()
            indicator.value.style.width = width+'px'
            const {left:left1} = selectedItem.value.getBoundingClientRect()
            const {left:left2} = container.value.getBoundingClientRect()
            const left = left1 -left2
            indicator.value.style.left = left +'px'
        };
            watchEffect(getValue,
                {
                    flush: 'post'
                });
            // onMounted(getValue);
            // onUpdated(getValue);
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

            return {defaults,titles,changeSelected,selectedItem,indicator,container}
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
            position: relative;
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
            &-indicator {
                position: absolute;
                height: 3px;
                background: $blue;
                left: 0;
                bottom: -1px;
                width: 100px;
                transition: all 250ms;
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