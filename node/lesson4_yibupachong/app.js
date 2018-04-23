var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');
var url = require('url');


var app = express();
var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl).end(function(err, res){
    if(err){
        return next(err)
    }
    var topicUrls = [];
    var $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        var href = url.resolve(cnodeUrl, $element.attr('href'));
        topicUrls.push(href);
    });
    // console.log(topicUrls);

    var ep = new eventproxy();

    ep.after('topic_html', topicUrls.length, function (topics) {
            topics = topics.map(function(topic){
                var topicUrl = topic[0];
                var topicHtml = topic[1];
                var $ = cheerio.load(topicHtml);
                // console.log($('.topic_full_title').text().trim(),$('.reply_content').eq(0).text().trim(),'======================================')
                return ({
                    title:$('.topic_full_title').text().trim(),
                    href:topicUrl,
                    comment:$('.reply_content').eq(0).find(' .markdown-text').html()
                })
            })
        app.get('/',function(req, res){
            res.send(topics)
        })
       
    });

    topicUrls.forEach(function(topicUrl,i){
        superagent.get(topicUrl).end(function(err, res){
            // if(err){
            //     console.log('err------------------------------------>>>>>>>>>>>>>>>>>>>>>>>',err)
            // }
            ep.emit('topic_html',[topicUrl, res.text]);
        })
    })


})

app.listen(3000,function(req, res){
    console.log('listen at port 3000')
})