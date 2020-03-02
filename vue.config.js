module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('file-loader')
      .test( /\.(png|jpe?g|gif|gltf|svg)$/i)
      .use('file-loader')
      .loader('file-loader')
      .end()
  }
}
