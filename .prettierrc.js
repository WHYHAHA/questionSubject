module.exports = {
    // tab缩进大小,默认为2
    "tabWidth": 4,
    // 超过100自动换行
    "printWidth": 140,
    // 使用tab缩进，默认false
    "useTabs": false,
    // 使用分号, 默认true
    "semi": false,
    // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
    "singleQuote": false,
    // 行尾逗号,默认none,可选 none|es5|all
    // es5 包括es5中的数组、对象
    // all 包括函数对象等所有可选
    "trailingComma": "none",
    // 对象中的空格 默认true
    // true: { foo: bar }
    // false: {foo: bar}
    "bracketSpacing": true,
    // 将>多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）。
    "bracketLine": true,
    // JSX标签闭合位置 默认false
    // false: <div
    //          className=""
    //          style={{}}
    //       >
    // true: <div
    //          className=""
    //          style={{}} >
    "jsxBracketSameLine": false,
    // 箭头函数参数括号 默认avoid 可选 avoid| always
    // avoid 能省略括号的时候就省略 例如x => x
    // always 总是有括号
    "arrowParens": "avoid",
    // markdown 文本的换行 
    // "always"- 如果散文超过打印宽度，则换行。
    // "never"- 将每个散文块展开成一行。
    // "preserve"- 什么都不做，让散文保持原样。首次在 v1.9.0 中可用
    "proseWrap": "never",
    "endOfLine": "auto",
    // 是否给vue中的 <script> and <style>标签加缩进
    "vueIndentScriptAndStyle": true,
    // 是否格式化嵌入到JS中的html标记的代码段或者Markdown语法 auto-格式化 off-不格式化
    "embeddedLanguageFormatting": 'auto',
}