var path = require('path');
module.exports = {
	entry: './react/app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module:{
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: /node_modules/,
				options: require(path.resolve(__dirname, 'eslint.config.js'))
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use:['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use:['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		inline: true,
		port: 3000
	}
}
