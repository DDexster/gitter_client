var path = require('path');
module.exports = {
	entry: './react/app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module:{
		preLoaders: [
		{
			test: /\.js$/,
			loader: 'eslint-loader',
			exclude: /node_modules/,
			query: require(path.resolve(__dirname, 'eslint.config.js'))
		}
		],
		loaders: [
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			loaders:['style-loader', 'css-loader']
		},
		{
			test: /\.scss$/,
			exclude: /node_modules/,
			loaders:['style-loader', 'css-loader', 'sass-loader']
		}
		]
	}
}
