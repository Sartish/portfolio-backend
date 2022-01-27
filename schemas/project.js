export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'id',
			title: 'ID',
			type: 'number',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
		},
		{
			name: 'linkproject',
			title: 'Link to deployed project',
			type: 'url',
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'text',
			title: 'Text',
			type: 'string',
			maxLength: 100,
		},
		{
			name: 'linkcode',
			title: 'Link to github',
			type: 'url',
		},
		{
			name: 'tech',
			title: 'Skill',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'Design ', value: ' design ' },
					{ title: 'HTML ', value: ' html ' },
					{ title: 'CSS ', value: ' css ' },
					{ title: 'JavaScript ', value: ' javascript ' },
					{ title: ' Tailwind ', value: 'tailwind ' },
					{ title: ' React ', value: ' React ' },
					{ title: ' Redux ', value: ' Redux ' },
					{ title: ' TypeScript ', value: ' Typescript ' },
					{ title: ' Sanity ', value: ' Sanity ' },
					{ title: ' MongoDB ', value: ' MongoDB ' },
					{ title: ' Express', value: ' Express ' },
					{ title: ' API ', value: ' API ' },
					{ title: ' Responsive ', value: ' Responsive ' },
					{ title: ' Nodejs ', value: ' Nodejs ' },
					{ title: ' Sass ', value: ' Sass ' },
					{ title: ' Nextjs ', value: ' Nextjs' },
				],
			}
		},
	]
}