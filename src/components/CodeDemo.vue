<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component"></component>
        </div>
        <div class="demo-actions">
            <Button @click="ontoggle">查看代码</Button>
        </div>
        <div class="demo-code" v-if="codeVisible">
            <pre class="language-html" v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')" />
        </div>
    </div>
</template>

<script lang="ts">
    import Button from "../lib/Button.vue";
    import 'prismjs';
    const Prism = (window as any).Prism
    import 'prismjs/themes/prism-okaidia.css'
    import { ref } from "vue";
    export default {
        props:{
            component:Object
        },
        components:{
            Button:Button
        },
        setup(){
            let codeVisible = ref<Boolean>(false)
            const ontoggle =()=>{
                codeVisible.value=!codeVisible.value
            }
            return{Prism,codeVisible,ontoggle}
        }
    }
</script>
<style lang="scss" scoped>
    $border-color: #d9d9d9;
    h1,h2,h3,h4,h5,h6 {
        color:darken(#7d5a5a,10%);
    }
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;

        > h2 {
            font-size: 20px;
            padding: 8px 16px;
            border-bottom: 1px solid $border-color;

        }

        &-component {
            padding: 16px;
        }

        &-actions {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;
            > button:hover{
                transform: scale(0.9);
            }
        }

        &-code {
            padding: 8px 16px;
            border-top: 1px dashed $border-color;

            > pre {
                line-height: 1.1;
                font-family: Consolas, 'Courier New', Courier, monospace;
                margin: 0;
            }
        }
    }
</style>
