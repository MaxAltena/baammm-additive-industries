const path = require('path');

module.exports = async ({ config }) => {
	// Fonts
	config.module.rules.push({
		test: /\.(png|jpg|svg|otf|ttf)$/,
		use: [
			{
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
				},
			},
		],
		include: path.resolve(__dirname, '../'),
	});

	return config;
};
