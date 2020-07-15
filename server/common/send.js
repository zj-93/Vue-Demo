const send = function (res,code, msg , data) {
  res.json(
    {
      code: code,
      msg: msg,
      data: data || {}
    }
  )
}

module.exports = send