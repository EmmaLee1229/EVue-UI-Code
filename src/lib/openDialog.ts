import Dialog from './Dialog.vue';
import {createApp,h} from 'vue';
export const openDialog=(options)=>{
    const {content,title,yes,no} = options;
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({render(){
        return h(Dialog,{isvisible:true,
        'onUpdate:isvisible':(newVisible)=>{
               if(newVisible ===false){
                   //@ts-ignore
                   app.unmount(div)
                   div.remove()
               }
            },
            yes,no,
        },{content,title})
    }})
        app.mount(div)

}