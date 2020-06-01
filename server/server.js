const Koa = require('koa')
const koaStaicCache = require('koa-static-cache')
let {resolve} = require('path')
let server = new Koa();
server.listen(8081);

server.use(koaStaicCache(resolve('./www')),{
    maxAge : 60 * 60 * 24 ,
    gzip : true
})

