const authToken = '123'
const auth = async (ctx, next) => {
    console.log(ctx)
    if(authToken === '123') {
        console.log('验证成功')
    }
    await next()
}
export {
    auth
}