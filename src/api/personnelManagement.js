// 相关APi
import request from "@/utils/request"

const personnelManagement = {
    // post接口
    getList: "/word/wordPersonInfo/getPageList",
    getUserList: "/word/wordPersonInfo/getList",
    add: "/word/wordPersonInfo/create",
    update: "/word/wordPersonInfo/updateModel",
    getDetail: "/word/wordPersonInfo/getDetailById",
    delete: "/word/wordPersonInfo/deleteById",
    getEcharts: "/word/wordPersonInfo/getViesInfo"
}

// 获取列表
export function getListApi(data) {
    return request({
        url: personnelManagement.getList,
        method: "post",
        data: data
    })
}
// 获取列表
export function getUserListApi(data) {
    return request({
        url: personnelManagement.getUserList,
        method: "post",
        data: data
    })
}

// 添加
export function addApi(data) {
    return request({
        url: personnelManagement.add,
        method: "post",
        data: data
    })
}
// 修改
export function updateApi(data) {
    return request({
        url: personnelManagement.update,
        method: "post",
        data: data
    })
}
// 获取详情
export function getDetailApi(data) {
    return request({
        url: personnelManagement.getDetail,
        method: "post",
        data: data
    })
}
// 删除
export function deleteApi(data) {
    return request({
        url: personnelManagement.delete,
        method: "post",
        data: data
    })
}
// 获取echarts
export function getEchartsApi(data) {
    return request({
        url: personnelManagement.getEcharts,
        method: "post",
        data: data
    })
}
