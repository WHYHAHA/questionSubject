<template>
    <div class="bg">
        <el-config-provider :locale="locale"> </el-config-provider>
    </div>
</template>

<script>
    import { defineComponent, reactive, toRefs, onMounted } from "vue"
    export default defineComponent({
        props: {
            openUpload: {
                // 显示
                type: Boolean,
                default: false
            }
        },
        components: {},
        setup() {
            const refs = {}
            const state = reactive({})
            const computeds = {}
            const methods = {}
            const apis = {}
            onMounted(() => {})
            return {
                ...refs,
                ...computeds,
                ...methods,
                ...apis,
                ...toRefs(state)
            }
        }
    })
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        padding: 0;
        margin: 0;
    }
    .bg {
        width: 100%;
        height: 100vh;
        background: url(@/assets/bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #1f1f1f;
        background-position: center;
        background-attachment: fixed;
        position: relative;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .box-card {
        width: 80%;
        margin: 0 auto;
    }
</style>
