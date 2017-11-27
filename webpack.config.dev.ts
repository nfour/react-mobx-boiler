import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import baseConfig from './webpack.config';

export const config = <webpack.Configuration & { entry: any }> webpackMerge(baseConfig, <webpack.Configuration> {
  devtool: 'source-map',

  devServer: {
    contentBase: './src',
    compress: false,

    hot: true,

    watchOptions: {
      aggregateTimeout: 100,
    },

    stats: {
      chunkModules: false,
    },
  },

  output: {
    path: `${__dirname}/src`,
    filename: '[name].[hash].js',

  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});

// tslint:disable-next-line:no-default-export
export default config;
