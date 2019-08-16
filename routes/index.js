/**
 * 获取主页资源信息
 * @type {*|void}
 */
const router = require('koa-router')();
const mongoose = require('mongoose')
const baseUrl = 'mongodb://community:123456@192.168.0.115:27000/community';
mongoose.connect(baseUrl,{useNewUrlParser: true});
const techWebsites = require('../modals/information/techWebsite');
const fireInfo = require('../modals/information/fireInfo');
const newInfo = require('../modals/information/newInfo');
const laboratory = require('../modals/information/laboratory');

router.get('/resource/website', async ctx => {
    try {
        const data = await techWebsites.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = data;
    }catch (e) {
        console.log('加载数据失败')
    }

});

router.get('/resource/fireInfo', async ctx => {
    try {
        const data = await fireInfo.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = data;
    }catch (e) {
        console.log('加载数据失败')
    }
});

router.get('/resource/newInfo', async ctx => {
    try {
        const data = await newInfo.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = data;
    }catch (e) {
        console.log('加载数据失败')
    }
});

router.get('/laboratory', async ctx =>{
    try {
        const data = await laboratory.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = data;
    }catch (e) {
        console.log('加载数据失败')
    }
});

module.exports = router;
