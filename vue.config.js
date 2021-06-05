module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://192.168.199.209:8080',
          pathRewrite:{
              '^/api':'/mock'
          }
        },
      }
    }
  }