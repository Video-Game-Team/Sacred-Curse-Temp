const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/state',
    createProxyMiddleware({
      target: 'https://sacredcurese.com/',
      secure: false,
      changeOrigin: true,
    })
  );
};
npm 