import request from './request'

export function getFoodList(data) {
    return request({
        url: 'admin/food/getFoodList',
        method: 'post',
        data
    })
}

export function getFoodListDetail(data) {
    return request({
        url: 'admin/food/getFoodListDetail',
        method: 'post',
        data
    })
}