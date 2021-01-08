const path = require('path');

module.exports = async ({ config }) => {
	// Add images and fonts
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

	config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, './')];

	// Allow for README.md to be included inside of the README.stories.mdx file while being outside of the src
	config.resolve.plugins.splice(
		config.resolve.plugins.findIndex(({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'),
		1,
	);

	return config;
};
