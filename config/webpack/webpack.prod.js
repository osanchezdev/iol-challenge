const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[hash].min.js',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'node_vendors', // part of the bundle name and
          // can be used in chunks array of HtmlWebpackPlugin
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
        common: {
          test: /[\\/]src[\\/]components[\\/]/,
          chunks: 'all',
          minSize: 0,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  devServer: {
    stats: {
      warnings: false,
    },
  },
});
