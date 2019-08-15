const router = require('koa-router')();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/community',{useNewUrlParser: true});
const blogs = require('../modals/user/blog')

router.get('/user/blog',async ctx => {
    await blogs.find({},function (err,data) {
        if(err) console.log('获取数据失败');
        else{
            ctx.status = 200;
            ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            ctx.body = data;
        }
    });
});

module.exports = router;
