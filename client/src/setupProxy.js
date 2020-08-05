const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // node.js의 서버 포트는 5000이므로 아래와 같이 명시 
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};