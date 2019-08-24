/**
 * 获取主页资源信息
 * @type {*|void}
 */
const router = require('koa-router')();
const mongoose = require('mongoose');
const baseUrl = 'mongodb://community:123456@192.168.0.115:27000/community';
mongoose.connect(baseUrl,{useNewUrlParser: true});
const techWebsites = require('../modals/information/techWebsite');
const fireInfo = require('../modals/information/fireInfo');
const newInfo = require('../modals/information/newInfo');
const laboratory = require('../modals/information/laboratory');

//获取技术网站信息
router.get('/resource/website', async ctx => {
    try {
        const data = await techWebsites.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = data;
    }catch (e) {
        console.log('加载数据失败')
    }

});

//获取最热信息
router.get('/resource/fireInfo', async ctx => {
    try {
        const data = await fireInfo.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = data;
    }catch (e) {
        console.log('加载数据失败')
    }
});

//查询最热信息
router.post('/resource/fireInfo/check',async ctx =>{
    const findResult = await fireInfo.find({_id:ctx.request.body.id});
    if(findResult.length > 0){
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = findResult
    } else {
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '抱歉，您要查询的新闻不存在'
    }
});

//添加最热信息
router.post('/resource/fireInfo/add',async ctx =>{
    const addf = ctx.request.body;
    const newFireInfo = new fireInfo({
        data:{
            href: addf.href,
            title: addf.title,
            avatar: addf.avatar,
            description: addf.description,
            content: addf.content,
            tag: addf.tag,
            tagColor: addf.tagColor
        }
    });
    await newFireInfo.save();
    ctx.status = 200;
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = '添加热点新闻成功';
});

//删除最热信息
router.post('/resource/fireInfo/delete',async ctx =>{
    const findResult = await fireInfo.find({_id:ctx.request.body.id});
    if(findResult.length > 0){
        await fireInfo.deleteOne({_id:ctx.request.body.id});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '删除热点新闻成功'
    } else {
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '抱歉，您要删除的新闻不存在'
    }
});

//修改最热信息
router.post('/resource/fireInfo/update',async ctx =>{
    const findResult = await fireInfo.find({_id:ctx.request.body.id});
    const updatef = ctx.request.body;
    if(findResult.length > 0){
        await fireInfo.findByIdAndUpdate(updatef.id,{
            data:{
                href: updatef.href,
                title: updatef.title,
                avatar: updatef.avatar,
                description: updatef.description,
                content: updatef.content,
                tag: updatef.tag,
                tagColor: updatef.tagColor
            }
        });
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '修改热点新闻成功'
    } else {
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '抱歉，您要修改的新闻不存在'
    }
});

router.get('/resource/newInfo', async ctx => {
    try {
        const data = await newInfo.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = data;
    }catch (e) {
        console.log('加载数据失败')
    }
});

//查询最热信息
router.post('/resource/newInfo/check',async ctx =>{
    const findResult = await newInfo.find({_id:ctx.request.body.id});
    if(findResult.length > 0){
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = findResult
    } else {
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '抱歉，您要查询的新闻不存在'
    }
});

//添加最新信息
router.post('/resource/newInfo/add',async ctx =>{
    const addn = ctx.request.body;
    const newNewInfo = new newInfo({
        data:{
            href: addn.href,
            title: addn.title,
            avatar: addn.avatar,
            description: addn.description,
            content: addn.content,
            tag: addn.tag,
            tagColor: addn.tagColor
        }
    });
    await newNewInfo.save();
    ctx.status = 200;
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = '添加新闻成功';
});

//删除最新信息
router.post('/resource/newInfo/delete',async ctx =>{
    const findResult = await newInfo.find({_id:ctx.request.body.id});
    if(findResult.length > 0){
        await newInfo.deleteOne({_id:ctx.request.body.id});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '删除新闻成功'
    } else {
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '抱歉，您要删除的新闻不存在'
    }
});

//修改最新信息
router.post('/resource/newInfo/update',async ctx =>{
    const findResult = await newInfo.find({_id:ctx.request.body.id});
    const updaten = ctx.request.body;
    if(findResult.length > 0){
        await newInfo.findByIdAndUpdate(updaten.id,{
            data:{
                href: updaten.href,
                title: updaten.title,
                avatar: updaten.avatar,
                description: updaten.description,
                content: updaten.content,
                tag: updaten.tag,
                tagColor: updaten.tagColor
            }
        });
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '修改新闻成功'
    } else {
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '抱歉，您要修改的新闻不存在'
    }
});

//获取图书馆信息
router.get('/laboratory', async ctx =>{
    try {
        const data = await laboratory.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = data;
    }catch (e) {
        console.log('加载数据失败')
    }
});

//新闻查询
router.post('/news/check', async ctx => {
    const findResult1 = await fireInfo.find({_id:ctx.request.body.id});
    const findResult2 = await newInfo.find({_id:ctx.request.body.id});
    if(findResult1.length > 0 || findResult2.length > 0){
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = findResult1.length > 0 ? findResult1[0] : findResult2[0];
    } else{
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.body = '抱歉，您要打开的新闻不存在'
    }
});

module.exports = router;
