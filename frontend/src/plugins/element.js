import Vue from 'vue'
import { Button, Form, Input, FormItem, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
// 将消息组件绑定至全局变量Vue原型上
Vue.prototype.$message = Message
