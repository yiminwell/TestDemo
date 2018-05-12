// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//导入bootstrap.css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//App.vue定义了App组件对象
import App from './App';
//导入容器对象
import {store} from './store';


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },  //组件注册
  store,  //将容器对象挂载到Vue实例
  
  template: '<App/>'  //使用了组件App
})
