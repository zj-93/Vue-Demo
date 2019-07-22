import request from './request'

export function getFoodList(data) {
    return request({
        url: '/food/getFoodList',
        method: 'post',
        data
    })
}

export function getFoodListDetail(data) {
    return request({
        url: '/food/getFoodListDetail',
        method: 'post',
        data
    })
}