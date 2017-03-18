var nodeExternals = require('webpack-node-externals'),
	path = require('path');

module.exports = {
	entry: {
		metacards: path.join(__dirname, 'metacards.es'),
		cards: path.join(__dirname, 'cards.es')
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
				include: __dirname,
        		exclude: /node_modules/,
    		}
    	]
	},
	output: {
    	libraryTarget: 'commonjs',
		path: path.join(__dirname, 'build'),
    	filename: '[name].js'
  	},
	plugins: []
}
