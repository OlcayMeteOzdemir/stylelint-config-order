module.exports = {
	plugins: ['stylelint-order'],
	customSyntax: 'postcss-scss',
	rules: {
		'order/order': [
			'dollar-variables',
			'custom-properties',
			'at-rules',
			{
				type: 'at-rule',
				name: 'extend',
			},
			{
				type: 'at-rule',
				name: 'include',
			},
			'declarations',
			{
				type: 'at-rule',
				name: 'supports',
			},
			{
				type: 'at-rule',
				name: 'media',
			},
			'rules',
		],
		'order/properties-alphabetical-order': null,
	},
};
