import Loading from './component/loading.vue'  //UI组件库
import common from './commonJs/common'  //js插件、数据处理方法
const components = [Loading]
const install = function(Vue, opts = {}) {
   components.forEach(component => {
     Vue.component(component.name, component);
   });
 };
 if(typeof window !== 'undefined' && window.Vue) {
   install(window.Vue);
 }
 //暴露接口
 export {install,Loading,common}


//组件引用只要在main.js里面引用
//  例如: import {Loading} from 'component-vue' Vue.component('loading', Loading); Vue.use(Loading)

//js插件引用:在需要的文件页面引用
// 例如：import {common } from 'component-vue'



