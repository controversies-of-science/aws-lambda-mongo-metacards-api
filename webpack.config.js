var nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		cards: './cards.es',
		metacards: './metacards.es'
	},
	target: 'node',
	// because 'aws-sdk' is not compatible with webpack,
	// we exclude all node dependencies
	externals: [nodeExternals()],
	module: {
		loaders: [
    		{
        		test: /\.es$/,
        		loaders: [ 'babel-loader' ],
        		exclude: /node_modules/,
    		}
    	]
	},
	output: {
    	libraryTarget: 'commonjs',
    	path: 'build',
    	filename: '[name].js'
  	},
	plugins: []
}
