import request from './request'
const baseUrl = '//172.16.80.50:3000'

export function getFoodList(data) {
    return request({
        url: '/food/getFoodList',
        method: 'post',
        data
    })
}

export function getFoodListDetail(data) {
    return request({
        url: baseUrl + '/food/getFoodListDetail',
        method: 'post',
        data
    })
}

export function getTravelListDetail(data) {
    return request({
        url: 'admin/api/articleList',
        method: 'post',
        data
    })
}