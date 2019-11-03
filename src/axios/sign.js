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