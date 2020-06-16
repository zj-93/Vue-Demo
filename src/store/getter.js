const getters = {
    scrollState: state => state.common.scrollState,
    scrollFlag: state => state.common.scrollFlag,
    shipNum: state => state.common.shipNum,
    payListArr: state => state.common.payListArr,
    payList: state => state.common.payList,
    totalMoney: state => state.common.totalMoney,
    userInfo: state => state.userInfo.userInfo,
  }
  export default getters