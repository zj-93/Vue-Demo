import request from './request'
const baseUrl = '//172.16.80.50:3000'

export function getFoodList(data) {
    return request({
        url: '/api/foodList',
        method: 'post',
        data
    })
}

export function getFoodListDetail(data) {
    return request({
        url: '/api/foodList',
        method: 'post',
        data
    })
}

export function getTravelListDetail(data) {
    return request({
        url: '/api/articleList',
        method: 'post',
        data
    })
}