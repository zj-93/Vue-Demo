var fs = require('fs');
var svgCaptcha = require('svg-captcha');
const express = require('express')
const app = express()


function index() {
}

function start(response) {
  fs.readFile('./html/index.html', 'utf-8', function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(data);
  })
}

function upload(response) {
  const cha = svgCaptcha.create();
  response.writeHead(200, { "Content-Type": "text/xml" });
  response.end(cha.data, response)
}

exports.index = index
exports.start = start
exports.upload = upload