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
                component:h(Markdown,{path:'../markdown/intro.md',key:'1'})
            },
                {
                    path:'install',
                    component:h(Markdown,{path:'../markdown/install.md',key:'2'})
                },
                {
                    path:'get-start',
                    component:h(Markdown,{path:'../markdown/getstart.md',key:'3'})
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
