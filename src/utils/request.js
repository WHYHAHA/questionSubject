import axios from "axios"
import { ElMessage } from "element-plus"
import { VueAxios } from "./axios"

//post请求头
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8"
// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 30000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = error => {
    if (error.response) {
        // 状态码
        switch (error.response.status) {
            case 404:
                window.$message.error("客户端请求错误!")
                break
            case 400:
                window.$message.error("客户端请求有语法错误，不能被服务器所理解!")
                break
            case 403:
                window.$message.error({
                    message: "权限不足,请联系管理员!"
                })
                break
            case 500:
                window.$message.error("服务器发生不可预期的错误!")
                break
            default:
                window.$message.error("未知错误!")
        }
    } else if (String(error).includes("timeout")) {
        window.$message.error("接口请求超时，请联系管理员或稍后再试")
    }

    return Promise.reject(error)
}

// request interceptor 请求监听
request.interceptors.request.use(config => {
    return config
}, errorHandler)

// request interceptor 返回监听
request.interceptors.response.use(
    response => {
        if (response.data.code != 0) {
            ElMessage({
                message: response.data.msg,
                type: "error"
            })
        }
        return response.data
    },
    error => {
        // ...请求失败后的后续操作
        errorHandler(error)
    }
)

const installer = {
    vm: {},
    install(Vue) {
        Vue.use(VueAxios, request)
    }
}

export default request

export { installer as VueAxios, request as axios }
