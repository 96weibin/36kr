const Koa = require('koa')
const koaStaicCache = require('koa-static-cache')
const router = require('koa-router')()
const fs = require('fs')
let {resolve} = require('path')
let server = new Koa();
server.listen(8081);


server.use(koaStaicCache(resolve('../dist')),{
    maxAge : 60 * 60 * 24 ,
    gzip : true
})

server.use(router.routes())
router.get('/',async(ctx, next)=>{
    let f1 = fs.readFileSync('../dist/index.html')
    ctx.response.body = f1.toString()
    //流读取   pipe到 ctx.res不知道为什么不好使
})


