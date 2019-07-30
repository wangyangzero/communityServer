const router = require('koa-router')();
const blog = require('../modals/user/blog')


router.get('/user/blog', ctx => {
  ctx.status = 200;
  ctx.body = blog;
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router;
