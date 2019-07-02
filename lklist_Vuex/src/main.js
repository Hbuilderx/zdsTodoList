import Vue from 'vue'
import App from './App'
import './assets/css/base.css'
import store from "./store/index"

new Vue({
  el:"#app",
  store,
  render:h=>h(App), //注册组件
  template:'<App/>'
});

