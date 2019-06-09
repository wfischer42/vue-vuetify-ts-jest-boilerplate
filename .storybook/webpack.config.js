const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = async ({ config }) => {
  // module.exports = (_baseConfig, _env, defaultConfig) => {
  config.resolve.extensions.push(
    '.ts',
    '.tsx',
    '.vue',
    '.css',
    '.less',
    '.scss',
    '.sass',
    '.html',
  )

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },
    ],
  })
  config.module.rules.push({
    test: /\.less$/,
    loaders: ['style-loader', 'css-loader', 'less-loader'],
  })
  config.module.rules.push({
    test: /\.styl$/,
    loader: 'style-loader!css-loader!stylus-loader',
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  return config
}
