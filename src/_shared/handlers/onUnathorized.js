module.exports = (ctx, message) => {
    ctx.status = 401;
    ctx.body = message;
    return 
}