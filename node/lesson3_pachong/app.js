var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/',function(req, res, next){
    superagent('https://cnodejs.org/')
        .end(function(error, sres){
            if(error){
                return next(error)
            }

            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (i, e) {
                let title = $(e).attr('title');
                let href = $(e).attr('href');
                items.push({
                    'title': title,
                    'href': href
                })
            })
            // console.log($)
            res.send(items);
        })
})

app.listen(3000,function(req, res){
    console.log('running a port 3000')
})


