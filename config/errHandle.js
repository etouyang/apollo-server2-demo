const errHandle = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.status = 400
        console.log('Error handler:', err.message)
    }
}
export {
    errHandle
}