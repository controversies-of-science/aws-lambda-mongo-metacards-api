module.exports = {
	entry: {
		cards: './cards.es',
		metacards: './metacards.es'
	},
	target: 'node',
	module: {
		loaders: [
    		{
        		test: /\.js$/,
        		loaders: [ 'babel' ],
        		exclude: /node_modules/,
    		}
    	]
	},
	output: {
    	libraryTarget: 'commonjs',
    	path: 'build',
    	filename: '[name].js'
  	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		}),
	]
}
