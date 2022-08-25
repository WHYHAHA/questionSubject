<template>
    <div></div>
</template>

<script>
    import { defineComponent, reactive, toRefs, onMounted, computed } from "vue"
    export default defineComponent({
        props: {
            openUpload: {
                // 显示
                type: Boolean,
                default: false
            }
        },
        components: {},
        setup(props, { emit }) {
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
<style lang="" scoped></style>
