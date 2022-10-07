const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/state',
    createProxyMiddleware({
      target: 'https://www.sacredcurse.com/',
      secure: false,
      changeOrigin: true,
    })
  );
};
