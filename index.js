import { database } from './mongodb'
import Koa from 'koa'
import KoaStatic from 'koa-static'
import { ApolloServer } from 'apollo-server-koa'
import myGraphQLSchema from './graphql/schema.js'
import Router from 'koa-router'
const requestRouter = require('./router')
import { auth } from './config/auth'
import { errHandle } from './config/errHandle'

database()

console.log(`----分割线---- \n
 https://segmentfault.com/a/1190000012720317#articleHeader1 \n
 https://github.com/naihe138/GraphQL-demo \n
 http://www.ruanyifeng.com/blog/2017/08/koa.html \n
 http://graphql.cn/ \n
 https://www.apollographql.com/docs/apollo-server/migration-two-dot.html\n
 mongoose api https://mongoosejs.com/docs/index.html \n
 ----分割线----`)

const server = new ApolloServer({schema: myGraphQLSchema})
const app = new Koa()
const port = 3000
const path = '/api'
const router = new Router()

//在applyMiddleware前调用jwt验证中间件和其它中间件
app.use(auth)
app.use(errHandle)
app.use(KoaStatic(__dirname + '/public'))
router.use('', requestRouter.routes())
app.use(router.routes())
   .use(router.allowedMethods())

server.applyMiddleware({app, path})
app.listen(port, () => {
    console.log(`🚀 Server ready at http://${'localhost'}:${port}${server.graphqlPath}`)
})