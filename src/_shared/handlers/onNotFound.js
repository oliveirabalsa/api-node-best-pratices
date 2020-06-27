module.exports = (ctx, message) => {
    ctx.status = 404;
    ctx.body = message;
    return 
}