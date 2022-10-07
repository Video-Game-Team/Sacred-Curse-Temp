const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.get(
    '/state',
    createProxyMiddleware({
      target: 'https://sacredcurse.com/',
      secure: false,
      changeOrigin: true,
    })
  );
};
