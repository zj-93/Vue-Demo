import request from './request'

export function getImgList(data) {
  return request({
      url: '/api/getImgList',
      method: 'post',
      data
  })
}