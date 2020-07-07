import loading from './component/loading.vue'
const components = {
    install(Vue){
       Vue.component( 'loading', loading)
    }
    }
    if(typeof window !== 'undefined' && window.Vue) {
       window.Vue.use(components)
    }
    //暴露接口
    export default components