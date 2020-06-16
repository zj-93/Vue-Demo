import cookie from '@/until/setCookie'
import { getUserInfo } from "@/axios/sign.js";

const userName = cookie.getCookie('userName');

const person = {
  state: {
    userInfo: {
      nickName: '',
      userName: '',
      sex: '',
      birthDate: ''
    }
  },
  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
  },
  actions: {
    GetUserInfo( { commit } ){
      return new Promise((resolve, reject) => {
        getUserInfo({ userName: userName }).then(res => {
          const userInfo = { ...res.data }
          commit('SET_USER_INFO', userInfo)
          resolve(res)
        }, () => {
          reject(res)
        });
      })
    }
  }
}
export default person