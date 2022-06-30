import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/reset.less'
import 'animate.css';
import { Button, Image, Form, FormItem, Input, Link, Icon, Message, Header, Container, Aside, Main } from 'element-ui';
Vue.use(Button)
Vue.use(Image)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Link)
Vue.use(Icon)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.config.productionTip = false
Vue.prototype.$message = Message
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
