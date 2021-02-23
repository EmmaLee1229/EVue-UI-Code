<template>
        <button class="evue-button" :class="classes" :disabled="disabled">
            <img v-if="loading" src="../assets/loading.png" class=" evue-loadingIndicator">
            <slot />
        </button>
</template>
<script lang="ts">
    import {computed} from 'vue'
    export default {
        props:{
            themes:{
                type:String,
                default:'button'
            },
            sizes:{
                type:String,
                default: 'normal'
            },
            levels:{
                type:String,
                default: 'normal'
            },
            disabled:{
                type:Boolean,
                default:false
            },
            loading:{
                type:Boolean,
                default:false
            },
            outline:{
                type:String,
                default:'normal'
            },
            icon:{
                type:String,
                default:''
            }


        },
        setup(props){
            const classes = computed(()=>{
               return{[`evue-themes-${props.themes}`]:props.themes,
                   [`evue-sizes-${props.sizes}`]:props.sizes,
                   [`evue-levels-${props.levels}`]:props.levels,
                   [`evue-outline-${props.outline}`]:props.outline,
               }
            })
            return {
                classes
            }
        }
    }
</script>
<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $radius: 4px;
    .evue-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);

        & + & {
            margin-left: 8px;
        }

        &:hover {
            transform: translateY(-4px);
        }

        &:hover,
        &:focus {
            color: $blue;
            border-color: $blue;
        }

        &:focus {
            outline: none;
        }

        /*由于火狐上面那个focus不支持*/
        &::-moz-focus-inner {
            border: 0;
        }

        &.evue-themes-link {
            border-color: transparent;
            box-shadow: none;
            color: $blue;

            &:hover, &:focus {
                color: lighten($blue, 10%);
            }
        }

        &.evue-themes-text {
            border-color: transparent;
            box-shadow: none;
            color: inherit;

            &:hover, &:focus {
                background: darken(white, 5%);;
            }
        }

        &.evue-themes-button, &.evue-themes-link, &.evue-themes-text {
            &.evue-sizes-large {
                font-size: 24px;
                height: 48px;
                padding: 0 16px;
            }
        }

        &.evue-themes-button, &.evue-themes-text, &.evue-themes-link {
            &.evue-sizes-small {
                font-size: 12px;
                height: 20px;
                padding: 0 4px;
            }
        }

        &.evue-themes-button {
            &.evue-levels-main {
                background: $blue;
                color: white;
                border-color: $blue;

                &:hover,
                &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }
            }

            &.evue-levels-dangerous {
                color: white;
                background: red;
                border-color: red;

                &:hover,
                &:focus {
                    background: darken(red, 10%);
                    border-color: darken(red, 10%);
                }
            }
        }

        &.evue-themes-button {
            &[disabled] {
                cursor: not-allowed;
                color: grey;

                &:hover {
                    border-color: grey;
                }
            }
        }

        &.evue-themes-link, &.evue-themes-text {
            &[disabled] {
                cursor: not-allowed;
                color: grey;
            }
        }

        &.evue-themes-button {
            &.evue-outline-round{
                border-radius: $h/2;
            }
        }
        &.evue-themes-button {
            &.evue-outline-circle{
                border-radius: 50%;
            }
        }
        .evue-loadingIndicator {
            height: 14px;
            width: 14px;
            display: inline-block;
            margin-right: 8px;
            border-radius: 8px;
            animation: evue-spin 1s infinite linear;
        }

        @keyframes evue-spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }


    }
</style>
