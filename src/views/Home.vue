<template>
   <TopNav :visible="false"/>
    <div class="banner">
        <h1>EVue-UI</h1>
        <h3>基于Vue3和TS开发的框架</h3>
        <p class="actions">
            <a href="https://github.com/EmmaLee1229/EVue-UI-Code">GitHub</a>
            <router-link to="/doc/intro">开始</router-link>
        </p>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-Vue"></use>
                </svg>
                <h3>基于Vue3开发</h3>
                <p>使用了 Vue 3 Composition API</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-typescript"></use>
                </svg>
                <h3>基于 TypeScript </h3>
                <p>源代码采用 TypeScript 书写</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-gongju"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
    import TopNav from "../components/Topnav.vue";
    export default {
        components:{
            TopNav: TopNav
        }

    }
</script>
<style lang="scss" scoped>
    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: darken( #7d5a5a,20%);
        background: linear-gradient(349deg, rgba(212,214,220,1) 0%, rgba(164,125,125,1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
        >h1 {
            font-size: 36px;
            font-weight:bold;
        }
        >h3{
            margin-top: 10px;
        }
        > .actions{
            padding: 16px 0;
            a {
                color: white;
                margin:0 8px;
                background: #a98687;
                border-shadow: 1px 1px 1px rgba(164,125,125,0.5);
                display: inline-block;
                $h: 28px;
                line-height: $h;
                border-radius: $h/2;
                padding:  4px 20px;
                &:hover {
                    text-decoration: none;
                    transform: translateY(-4px);
                }
            }
        }
    }
    .features {
        margin: 64px auto;
        width: 400px;
        @media (min-width: 800px) {
            width: 800px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }
        >ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                width: 400px;
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas: "icon title" "icon text";
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;

                > svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }

                > h3 {
                    grid-area: title;
                    font-size: 28px;
                }

                > p {
                    grid-area: text
                }
            }

        }
    }
</style>
