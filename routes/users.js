const router = require('koa-router')();
const blogs = require('../modals/user/blog');
const userInfo = require('../modals/user/userInfo');
const message = require('../modals/user/messageBoard');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const passport = require('koa-passport');
//废弃的博客接口
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

//用户留言板
router.post('/user/message',async ctx =>{
    const msg = ctx.request.body;
    const newMsg = new message({
        username: msg.username,
        avatar: msg.avatar,
        msg: msg.msg,
        date: msg.date,
    });
    await newMsg.save();
    ctx.status = 200;
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.body = newMsg;
});

//注册用户
router.post('/user/register',async ctx => {
    const users = ctx.request.body;
    //查询用户
    const findResult = await userInfo.find({username:users.username});
    //判断用户是否已存在
    if(findResult.length > 0) {
        ctx.status = 500;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = {
            error: '用户名已经被使用',
            status: 500,
        };
    } else {
        //生成新用户
        const newUser = new userInfo({
            username: users.username,
            nickname: users.nickname,
            //md5加密
            password: md5(users.password),
        });

        //存储到数据库
        await newUser.save();
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = {
            data: '注册成功',
            status: 200,
        }
    }
});

//用户登录
router.post('/user/login',async ctx => {
    //查询用户
    const findResult = await userInfo.find({username:ctx.request.body.username});
    const user = findResult[0];
    //判断用户是否存在
    if(findResult.length === 0){
        ctx.status = 404;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = {
            error: '用户不存在',
            status: 404,
        };
    } else {
        //校验密码
        let result = await md5(ctx.request.body.password);
        if(result === user.password){
            //验证通过,返回token
            const payload = {id:user.id,username:user.username};
            const token = jwt.sign(payload,'secret',{expiresIn: 3600});
            ctx.status = 200;
            ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            ctx.body = {
                data: '登录成功',
                status: 200,
                token: "Bearer " + token,
            };
        } else{
            ctx.status = 404;
            ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
            ctx.body = {
                error: '密码错误',
                status: 404,
            };
        }
    }
});

//登录成功返回用户数据
router.get('/user/current',passport.authenticate('jwt', { session: false }),async ctx => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.body = {
        id: ctx.state.user.id,
        username: ctx.state.user.username,
        nickname: ctx.state.user.nickname,
        avatar: ctx.state.user.avatar,
        message: ctx.state.user.message,
        exp:ctx.state.user.exp,
        Authorization: ctx.state.user.Authorization,
    };
});

//获取用户列表
router.get('/user/info',async ctx => {
    try {
        const data = await userInfo.find({});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = data;
    }catch (e) {
        console.log('获取用户数据失败')
    }
});

//删除用户
router.post('/user/delete',async ctx =>{
    const findResult = await userInfo.find({_id:ctx.request.body.id});
    if(findResult.length > 0){
        await userInfo.deleteOne({_id:ctx.request.body.id});
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = '删除用户成功'
    } else {
        ctx.status = 404;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = '抱歉，您要删除的用户不存在'
    }
});

//修改用户
router.post('/user/update',async ctx =>{
    const findResult = await userInfo.find({_id:ctx.request.body.id});
    const updateu = ctx.request.body;
    if(findResult.length > 0){
        await userInfo.findByIdAndUpdate(updateu.id,{
            username: updateu.username,
            password: updateu.password,
            nickname: updateu.nickname,
            avatar: updateu.avatar,
            Authorization: updateu.Authorization,
        });
        ctx.status = 200;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = '修改用户成功'
    } else {
        ctx.status = 404;
        ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        ctx.body = '抱歉，您要修改的用户不存在'
    }
});

module.exports = router;
