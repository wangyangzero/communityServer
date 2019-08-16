const router = require('koa-router')();
const mongoose = require('mongoose');
const baseUrl = 'mongodb://192.168.0.115:27000/community';
mongoose.connect(baseUrl,{useNewUrlParser: true});
const blogs = require('../modals/user/blog');

router.get('/user/blog',async ctx => {
    try {
        const data = await blogs.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = data;
    }catch (e) {
        console.log('加载数据失败')
    }
});

module.exports = router;
