const path = require('path');
const DotEnv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [path.resolve(__dirname, 'react-client/src/js/index.jsx')],
  output: {
    path: path.resolve(__dirname, 'react-client/dist'),
    filename: 'bundle.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-spread']
          }
        }
      },
      {
				test: /\.jsx$/,
				include: [
					path.resolve(__dirname, 'react-client/src/js/')
				],
				use: {
					loader: 'eslint-loader',
					options: {configFile: path.join(__dirname, '.eslintrc.json')}
				}
			},
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  devServer: {
    contentBase: './react-client/dist',
    hot: true
  },
  plugins: [
    new DotEnv(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
