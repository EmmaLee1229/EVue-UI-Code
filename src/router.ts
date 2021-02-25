import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
const history = createWebHashHistory();
import {h} from 'vue'
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md';
import install from './markdown/install.md';
import getstart from './markdown/getstart.md';
const md=(string)=>{
    return h(Markdown,{content:string,key:string})
}
export const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc
            ,children:[{
                path:'',
                component:DocDemo
            },{
                path:'intro',
                component:md(intro)
            },
                {
                    path:'install',
                    component:md(install)
                },
                {
                    path:'get-start',
                    component:md(getstart)
                },
                {
                path:'switch',
                component:Switch
            },
                {
                    path:'button',
                    component:Button
                },{
                    path:'dialog',
                    component:Dialog
                },{
                    path:'tabs',
                    component:Tabs
                }
            ]
        }
    ]
});
