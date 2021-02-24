<template>
    <div class="topNav">
        <svg v-if="visible" class="toggleAside" @click="toggleMenu">
            <use xlink:href="#icon--xialacaidan"></use>
        </svg>
        <router-link to="/" class="logo" ><svg class="icon">
            <use xlink:href="#icon-uicn"></use>
        </svg></router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc/intro">文档</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Ref,inject} from 'vue';
    export default  {
        props:{
            visible:{
                type:Boolean,
                default:true
            }
        },
        setup(){
            let asideVisible = inject<Ref<boolean>>('asideVisible');
            const toggleMenu=()=>{
                asideVisible.value=!asideVisible.value;
            }
            return {toggleMenu};
        },

    }
</script>

<style lang="scss" scoped>
    @keyframes shake {
        0% {
            transform: rotate(0);
        }
        33% {
            transform: rotate(20deg);
        }
        66%{
            transform: rotate(-20deg);
        }
        100% {
            transform: rotate(0);
        }
    }
    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        20% {
            transform: translateY(2px);
        }
        50%{
            transform: translateY(0);
        }
        80% {
            transform: translateY(1px);
        }
        100% {
            transform: translateY(0);
        }

    }
    .topNav {
        color: #7d5a5a;
        background: white;
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 3px rgba(0,0,0,0.09);
        > .logo {
            max-width: 6em;
            margin-right: auto;
            >svg {
                height: 32px;
                width: 32px;
                font-weight: bold;
                &:hover {
                    animation: shake linear 500ms;
                }
            }
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            > li {
                margin: 0 1em;
                font-size: 20px;
                &:hover {
                    transform: scale(0.8);
                }
            }
        }
        > .toggleAside {
            width: 24px;
            height: 24px;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
            &:hover {
                animation: bounce linear 500ms;
            }

        }
        @media (max-width: 500px) {
            > .menu {
                display: none;
            }
            > .logo {
                margin: 0 auto;
            }
            > .toggleAside {
                display: inline-block;
            }
        }
    }
</style>