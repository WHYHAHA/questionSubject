module.exports = {
    // 表示当前目录为根目录，eslint规则被限制到该目录下
    root: true,
    // env 表示启用 eslint 检测的环境
    env: {
        // 在node 环境下启动 eslint
        node: true
    },
    // eslint 中基础配置需要继承的配置
    extends: ["plugin:vue/essential", "eslint:recommended"],

    /*
     * 需要修改的启用规则及其错误级别
     *
     * 错误级别
     * off 或 0   -  关闭规则
     * warn 或 1  -  开启规则，使用警告级别错误 warn (不会导致程序退出)
     * error 或 2 -  开启规则，使用错误级别错误 error (当触发时 程序会退出)
     */
    rules: {
        "no-console": process.env.NODE_ENV === "prod" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "prod" ? "warn" : "off",
        "vue/no-v-model-argument": "off",
        "vue/custom-event-name-casing": "off",
        "vue/no-unused-vars": "off",
        //在vue中的template中如果标签内只有很短的内容，不要求其换行
        "vue/singleline-html-element-content-newline": "off",
        // 要求组件名称始终为多字
        "vue/multi-word-component-names": "off"
    }
}
