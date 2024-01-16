const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;
const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: 'http://localhost:3001/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  stats: 'verbose',
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'core',
      filename: 'remoteEntry.js',
      remotes: {
        plugin: 'plugin@http://localhost:3002/remoteEntry.js',
        plugin2: 'plugin2@http://localhost:3003/remoteEntry2.js'
      },
      exposes: {
        './Button': './src/Button',
        './ButtonWrapper': './src/ButtonWrapper',
      },
      // sharing code based on the installed version, to allow for multiple vendors with different versions
      shared: [
        {
          ...deps,
          react: {
            // eager: true,
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            // eager: true,
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify('development')
      }
  })
  ],
};
