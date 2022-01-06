export default {
	name: 'primaryproject',
	title: 'PrimaryProject',
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
	]
}