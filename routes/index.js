/**
 * 获取主页资源信息
 * @type {*|void}
 */
const router = require('koa-router')();
const techWebsites = require('../modals/information/techWebsite');
const fireInfo = require('../modals/information/fireInfo');
const newInfo = require('../modals/information/newInfo');
const laboratory = require('../modals/information/laboratory');

router.get('/resource/website', async ctx => {
    ctx.status = 200;
    //解决跨域问题
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.body = techWebsites
});

router.get('/resource/fireInfo', async ctx => {
    ctx.status = 200;
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.body = fireInfo
});

router.get('/resource/newInfo', async ctx => {
    ctx.status = 200;
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.body = newInfo;
});

router.get('/laboratory', async ctx =>{
    ctx.status = 200;
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.body = laboratory;
});

module.exports = router;
