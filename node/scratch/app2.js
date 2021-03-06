var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');
var json = require('./sound/soudJson');
var request = require('request');
var fs = require('fs-extra');
var url = require('url');
var path = require('path');
var async = require('async');



var concurrencyCount = 0;
var n = 0;
var fetchUrl = function (url, callback,name) {
    // delay 的值在 2000 以内，是个随机的整数
    n++;
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒','第'+n+'个');
    
    const req = superagent.get(url);
    const res = req.pipe(fs.createWriteStream(path.join(__dirname, 'sound/asset', name)))
    setTimeout(function () {
        concurrencyCount--;
        callback(null, name);
    }, delay);
};

async.mapLimit(json, 5, function (url, callback) {
    fetchUrl('https://cdn.assets.scratch.mit.edu/internalapi/asset/'+url.md5+'/get/',callback,url.md5)
  }, function (err, result) {
    console.log('final:');
    console.log(result);
  });

