/**
 * 获取主页资源信息
 * @type {*|void}
 */
const router = require('koa-router')();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/community',{useNewUrlParser: true});
const techWebsites = require('../modals/information/techWebsite');
const fireInfo = require('../modals/information/fireInfo');
const newInfo = require('../modals/information/newInfo');
const laboratory = require('../modals/information/laboratory');

router.get('/resource/website', async ctx => {
    await techWebsites.find({},function (err,data) {
        if(err) console.log('读取文件失败');
        else{
            ctx.status = 200;
            ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            ctx.body = data
        }
    })

});

router.get('/resource/fireInfo', async ctx => {
    await fireInfo.find({},function (err,data) {
        if(err) console.log('读取文件失败');
        else{
            ctx.status = 200;
            ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            ctx.body = data
        }
    })
});

router.get('/resource/newInfo', async ctx => {
    await newInfo.find({},function (err,data) {
        if(err) console.log('读取文件失败');
        else{
            ctx.status = 200;
            ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            ctx.body = data
        }
    })
});

router.get('/laboratory', async ctx =>{
    await laboratory.find({},function (err,data) {
        if(err) console.log('读取文件失败');
        else{
            ctx.status = 200;
            ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            ctx.body = data
        }
    })
});

module.exports = router;
