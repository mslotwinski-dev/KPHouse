// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('@vue/cli-service')
import * as path from 'path'

module.exports = defineConfig({
  pwa: {
    name: 'KP House',
    themeColor: '#2EA52E',
    appleMobileWebAppCapable: 'yes',
    workboxPluginMode: 'GenerateSW',
  },
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '>>': path.resolve(__dirname, 'public/'),
      },
    },
  },
  devServer: {
    port: 2137,
    host: '',
  },
})
