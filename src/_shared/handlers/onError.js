module.exports = (ctx, message) => {
  ctx.status = 400;
  ctx.body = message;
};
