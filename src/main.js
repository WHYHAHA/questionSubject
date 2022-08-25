import { createApp } from "vue"
import App from "./App.vue"

import vuex from "@/store"

// naive-ui 框架导入
import naive from "naive-ui"
// vueRouter
import router from "./router"

// 通用字体
import "vfonts/Lato.css"
// 等宽字体
import "vfonts/FiraCode.css"
// 全局样式引入
import "./css/pc.css"

// 全局指令
import publicVueDirective from "@/utils/directive"

const app = createApp(App)

app.use(publicVueDirective)
app.use(naive)
app.use(vuex)
app.use(router)
app.mount("#app")
