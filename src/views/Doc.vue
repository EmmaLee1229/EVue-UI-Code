<template>
    <div class="layout">
        <TopNav class="nav" />
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                    <li><router-link to="/doc/intro">介绍</router-link></li>
                    <li><router-link to="/doc/install">安装</router-link></li>
                    <li><router-link to="/doc/get-start">开始使用</router-link></li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>
<script lang="ts">
    import TopNav from "../components/Topnav.vue";
    import { inject, Ref } from "vue";
    export default {
        components:{
            TopNav: TopNav
        },
        setup(){
            const asideVisible=inject<Ref<boolean>>('asideVisible');
            return {asideVisible};
        }
    }
</script>
<style lang="scss" scoped>
    @keyframes bdrolate {
        0% {
            transform: rotateY(90deg);
        }
        100% {
            transform: rotateY(0deg);
        }
    }
    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
        > .nav {
            flex-shrink: 0;
        }
        > .content {
            flex-grow: 1;
            padding-top: 60px;
            padding-left: 156px;
            @media (max-width: 500px) {
                padding-left: 0;
            }
        }
    }
    .content {
        display: flex;
        > aside {
            flex-shrink: 0;
        }
        > main {
            flex-grow: 1;
            padding: 16px;

        }
    }
    aside {
        width: 150px;
        padding: 16px 0;
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;
        height: 100%;
        z-index: 10;
        box-shadow: 1px 0 3px rgba(0,0,0,0.09);
        > h2 {
            margin-bottom: 4px;
            padding: 0 16px;
            color: darken(#7d5a5a,20%);
        }
        > ol {
            > li {
                color: #7d5a5a;
                position: relative;
                > a{
                    padding: 4px 16px;
                    display: block;

                }
                .router-link-active{
                    background: lighten(#7d5a5a,50%);
                    &::after{
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 150px;
                        height: 2px;
                        background: lighten(#7d5a5a,30%);
                        animation: bdrolate 800ms;

                    }
                }


            }
        }
    }
    main {
        overflow: auto;
    }
</style>