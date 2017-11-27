import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import * as pkgJson from './package.json';

export const config = <webpack.Configuration> {
  context: `${__dirname}/src/client`,
  entry: {
    bundle: ['react-hot-loader/patch', 'core-js/es7', './index.tsx'],
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),

    new HtmlWebpackPlugin({
      title: pkgJson.description || pkgJson.name,
      filename: 'index.html',
      template: './index.html',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  resolve: { extensions: ['.js', '.tsx', '.ts', '.json'] },
  performance: { hints: false },
  module: {
    rules: [
      // TS
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader/webpack', 'ts-loader'],
        exclude: /node_modules/,
      },

      // JSON
      {
        test: /\.json$/,
        loader: ['react-hot-loader/webpack', 'json-loader'],
      },

      // CSS
      {
        test: /\.css$/,
        loader: ['react-hot-loader/webpack', 'style-loader', 'css-loader'],
      },

      // ASSETS
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|svg)$/,
        use: [
          { loader: 'url-loader', options: { limit: 8192 } },
        ],
      },
    ],
  },
};

// tslint:disable-next-line:no-default-export
export default config;
