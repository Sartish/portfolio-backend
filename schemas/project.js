export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
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
					{ title: 'Design', value: 'design' },
					{ title: 'HTML', value: 'html' },
					{ title: 'CSS', value: 'css' },
					{ title: 'JavaScript', value: 'javascript' },
					{ title: 'Tailwind', value: 'tailwind' },
				],
			}
		},
	]
}