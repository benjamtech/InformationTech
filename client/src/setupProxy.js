const { createProxyMiddleware } = require('http-proxy-middleware');

/*
 This is a proxy for development.
 In production netlify redirects are used.
 _redirects file in public folder.
*/

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            changeOrigin: true,
            secure: false,
            ws: true,
            target: 'http://localhost:80',
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};