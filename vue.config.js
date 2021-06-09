module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://192.168.199.209:8081',
          pathRewrite:{
              '^/api':'/mock'
          }
        },
      }
    }
  }