<template>
    <button @click="toggle" class="evue-switch" :class="{'evue-checked':value}">
        <span></span>
        <p class="evue-text-on" v-if="value">on</p>
        <p class="evue-text-off" v-else >off</p></button>
</template>

<script lang="ts">
    export default {
        props:{
            value:Boolean,
            text:String
        },
        setup(props,context){
            const toggle =()=> {
                context.emit('update:value', !props.value)
            }
            return {
                toggle
            }

        }
    }
</script>

<style lang="scss">
    $h: 22px;
    $h2: $h - 4px;
    .evue-switch{
        height: $h;
        width: $h*2;
        border: none;
        background: grey;
        border-radius: $h/2;
        position: relative;
        > span{
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background:white;
            border-radius: $h2 / 2;
            transition: all 250ms;
        }
        >p {
            display: inline-block;
            width: 14px;
            height: $h;
            font-size: 14px;
            color: #fff;
            margin: 4px 7px 2px 22px;
            transition: margin 0.25s ease-in-out;
        }
        &.evue-checked {
            background: lightgreen;
            > span {
                left: calc(100% - #{$h2} - 2px);
            }
            > p {
                margin: 4px 25px 0 7px;
            }
        }
        &:focus{
            outline: none;
        }
        &:active{
            > span {width: $h2 + 4px;}
        }
        &evue-.checked:active{
            > span {width: $h2 + 4px; margin-left: -4px;}
        }

    }

</style>