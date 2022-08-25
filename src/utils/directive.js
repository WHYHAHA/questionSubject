// 节流
// eslint-disable-next-line no-unused-vars
const throttle = function throttle(func, wait) {
    if (typeof func !== "function") throw new TypeError("func must be a function!")
    wait = +wait
    if (isNaN(wait)) wait = 300
    let timer = null,
        previous = 0,
        result
    return function proxy(...params) {
        let now = +new Date(),
            remaining = wait - (now - previous),
            self = this
        if (remaining <= 0) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            previous = now
            result = func.apply(self, params)
            return result
        }
        if (!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer)
                timer = null
                previous = +new Date()
                result = func.apply(self, params)
            }, remaining)
        }
        return result
    }
}

/**
 * 防抖指令
 * @param {*} func 需要防抖的方法
 * @param {*} wait 防抖时间
 * @param {*} immediate 是否立即开始防抖
 * @param {*} type 类型一般为 click
 * 示例：
 * v-debounce="{
        func: handleValidateClick,
        wait: 3000,
        immediate: true,
        type: 'click'
    }
 *
 */
const debounce = function debounce(func, wait, immediate) {
    if (typeof func !== "function") throw new TypeError("func must be a function!")
    if (typeof wait === "undefined") {
        wait = 500
        immediate = false
    }
    if (typeof wait === "boolean") {
        immediate = wait
        wait = 500
    }
    if (typeof immediate === "undefined") {
        immediate = false
    }
    if (typeof wait !== "number") throw new TypeError("wait must be a number!")
    if (typeof immediate !== "boolean") throw new TypeError("immediate must be a boolean!")
    let timer = null,
        result
    return function proxy(...params) {
        let self = this,
            callNow = !timer && immediate
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            if (!immediate) result = func.apply(self, params)
        }, wait)
        if (callNow) result = func.apply(self, params)
        return result
    }
}

const common_config_debounce = {
    beforeMount(el, binding) {
        let { func, wait = 300, immediate = true, params = [], type = "click" } = binding.value
        const handle = debounce,
            proxy = function proxy(...args) {
                return func.call(this, ...params.concat(args))
            }
        el.$type = type
        el.$handle = handle(proxy, wait, immediate)
        el.addEventListener(el.$type, el.$handle)
    },
    unmounted(el) {
        el.removeEventListener(el.$type, el.$handle)
    }
}

/**
 * 聚焦指令
 * 示例：
 * <input v-focus />
 */
const common_config_focus = {
    // 在绑定元素的 attribute 或事件监听器被应用之前调用, 在指令需要附加须要在普通的 v-on 事件监听器前调用的事件监听器时，这很有用
    created() {},
    // 当指令第一次绑定到元素并且在挂载父组件之前调用
    beforeMount() {},
    // 在绑定元素的父组件被挂载后调用
    mounted(el) {
        el.focus()
    },
    // 在更新包含组件的 VNode 之前调用
    beforeUpdate() {},
    // 在包含组件的 VNode 及其子组件的 VNode 更新后调用
    updated() {},
    // 在卸载绑定元素的父组件之前调用
    beforeUnmount() {},
    // 当指令与元素解除绑定且父组件已卸载时, 只调用一次
    unmounted() {}
}

/**
 * 复制指令
 * <button v-copy="msg" >点击复制</button> 或 <button v-copy:[success]="msg" >点击复制</button>
 */
const common_config_copy = {
    beforeMount(el, binding) {
        el.targetContent = binding.value
        const success = binding.arg
        el.addEventListener("click", () => {
            if (!el.targetContent) return console.warn("没有需要复制的目标内容")
            // 创建textarea标签
            const textarea = document.createElement("textarea")
            // 设置相关属性
            textarea.readOnly = "readonly"
            textarea.style.position = "fixed"
            textarea.style.top = "-99999px"
            // 把目标内容赋值给它的value属性
            textarea.value = el.targetContent
            // 插入到页面
            document.body.appendChild(textarea)
            // 调用onselect()方法
            textarea.select()
            // 把目标内容复制进剪贴板, 该API会返回一个Boolean
            const res = document.execCommand("Copy")
            res && console.log("复制成功，剪贴板内容：" + el.targetContent)
            // 移除textarea标签
            document.body.removeChild(textarea)
            res && success ? success(el.targetContent) : console.log("复制成功，剪贴板内容：" + el.targetContent)
        })
    },
    updated(el, binding) {
        // 实时更新最新的目标内容
        el.targetContent = binding.value
    },
    unmounted(el) {
        el.removeEventListener("click", () => {})
    }
}

let ownPermission = ["user", "order"]
/**
 * 权限指令
 * @param {*} el
 * @param {*} permission 权限模块
 * 示例:
 * <button v-permission="'user'">用户模块</button>
 */
const toolPermission = function toolPermission(el, permission) {
    if (permission && !ownPermission.includes(permission)) {
        el.parentNode && el.parentNode.removeChild(el) // 关键代码, 没有权限则删除元素
    }
}

const common_config_permission = {
    mounted(el, binding) {
        toolPermission(el, binding.value)
    },
    updated(el, binding) {
        toolPermission(el, binding.value)
    }
}

// 所有公共指令注册
const publicVueDirective = {}
publicVueDirective.install = function (Vue) {
    Vue.directive("debounce", common_config_debounce)
    Vue.directive("focus", common_config_focus)
    Vue.directive("copy", common_config_copy)
    Vue.directive("permission", common_config_permission)

    // Vue.directive('throttle', common_config)
}
export default publicVueDirective
