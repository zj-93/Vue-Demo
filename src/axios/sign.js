import request from './request'

export function signUp(data) {
    return request({
        url: '/api/signUp',
        method: 'post',
        data
    })
}

export function signIn(data) {
    return request({
        url: '/api/signIn',
        method: 'post',
        data
    })
}

export function getUserInfo(params) {
    return request({
        url: '/api/getUserInfo',
        method: 'get',
        params
    })
}

export function importPic(data) {
    return request({
        url: '/api/import',
        method: 'post',
        data
    })
}
