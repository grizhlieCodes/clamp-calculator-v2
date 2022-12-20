export const cssStyles = [
	{
		rule: {
			before: {
				fontSize: 'font-size: ',
				width: 'width: ',
				height: 'height: ',
				lineHeight: 'line-height: ',
				none: ''
			},
			after: ';',
			spacing: ' '
		},
		name: 'CSS'
	},
	{
		rule: {
			before: `--changeThis: `,
			after: `;`,
			spacing: ` `
		},
		name: 'CSS Variable'
	},
	{
		rule: {
			before: {
				fontSize: 'text-[',
				width: 'w-[',
				height: 'h-[',
				lineHeight: 'leading-[',
				none: ''
			},
			after: ']',
			spacing: '_'
		},
		name: 'Tailwind'
	},
	{
		rule: {
			before: {
				fontSize: `'changeThis': [`,
				width: `'changeThis': '`,
				height: `'changeThis': '`,
				lineHeight: `'changeThis': '`,
				none: ``
			},
			after: {
				fontSize: `', {}],`,
				width: `',`,
				height: `',`,
				lineHeight: `',`,
				none: ''
			},
			spacing: ' '
		},
		name: 'Tailwind Config'
	},
	{
		rule: {
			before: `$changeThis: `,
			after: `;`,
			spacing: ` `
		},
		name: 'SASS Variable'
	}
];

export const cssProperties = [
	{ rule: 'width', name: 'Width' },
	{ rule: 'fontSize', name: 'Font-Size' },
	{ rule: 'height', name: 'Height' },
	{ rule: 'lineHeight', name: 'Line-Height' },
	{ rule: 'none', name: 'None' }
];