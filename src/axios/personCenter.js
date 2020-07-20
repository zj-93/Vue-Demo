import request from './request'

export function updateUserInfo(data) {
    return request({
        url: '/api/updateUserInfo',
        method: 'post',
        data
    })
}
