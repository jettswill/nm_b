module.exports = {
	block: 'page',
	title: 'object',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'object.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'object.min.js' }],
	mix: {
			block: 'theme',
			mods: { color: 'nm-default',
                    space: 'default',
                    size: 'default',
                    gap: 'medium',
                    menu: 'default',
                    font: 'museo' }
		},
            content: [
                        {
                            block: 'pt-card',
                            mods: { view: 'default', border: 'all', shadow: 'cloud' },
                            content: [
                                    {
                                        elem: 'content',
                                        mods: {'space-a': 'l'},
                                        content: [
                                            {
                                                elem: 'block',
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: {view: 'secondary', size:'xxxl'},
                                                        content:'yeeeeap'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'image',
                                        mods: { 'shadow': 'top'},
                                        content: {
                                            tag: 'img',
                                            attrs: {
                                                src: 'https://bemdesign.github.io/bem-design/assets/i/london.png'
                                                    }
                                    }
                },
                {
                    elem: 'content',
                    mods: { 'align' : 'center'},
                    content: [
                        {
                            block: 'pt-icon-plus',
                            mods: { 'align': 'center'},
                            mix: { block:'decorator', mods: {'intent-b': 'xxxl' } },
                            content: [
                                {
                                    elem: 'icon',
                                    elemMods: {'intent-r': 'xs'},
                                    content: [
                                        {
                                            block: 'icon',
                                            mods: { name: 'time', size: 'm'}
                                        },
                                {
                                    elem: 'block',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'xxl', view: 'secondary'},
                                            content: 'Back in the days'
                                        }
                                    ]


                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'content'
                },
                {
                    elem: 'footer'
                }]
            }
        ]
};
