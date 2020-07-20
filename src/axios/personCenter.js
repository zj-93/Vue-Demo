import request from './request'

export function updateUserInfo(data) {
    return request({
        url: '/api/updateUserInfo',
        method: 'post',
        data
    })
}

export function importPhoto(data) {
    return request({
        url: '/api/import',
        method: 'post',
        data
    })
}

export function realRegister(data) {
    return request({
        url: '/api/realRegister',
        method: 'post',
        data
    })
}
