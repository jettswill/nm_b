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
    mods: { theme: 'nm-portal' },
	mix: {
			block: 'theme',
			mods: { color: 'nm-portal',
                    space: 'default',
                    size: 'default',
                    gap: 'medium',
                    menu: 'default',
                    font: 'tahoma'
				  }
		},
            content: [
                        {
                            block: 'pt-card-block',
                            mods: { shadow: 'card', view: 'default', 'border-radius':'xxs' },
                            content: [
                                        {
                                            elem: 'header',
                                            elemMods: { height: 'm', distribute: 'between', border:'b', 'space-h':'l' },
                                            content: [
                                                                        {
                                                                            elem: 'block',
                                                                            mix: { block: 'text', mods: { size: 'm', view: 'primary', weight: 'bold' } },
                                                                            content: 'Информация о клиенте'
                                                                        },
                                                                        {
                                                                            elem: 'icon',
                                                                            elemMods: { 'indent-r': 'xs' },
                                                                            content: {
                                                                                block: 'icon',
                                                                                mods: { name: 'edit', size: 's', view: 'primary'}
                                                                                     }
                                                                        }
                                                     ]
                                        },
                                        {
                                        elem: 'content',
                                        elemMods: { 'space-h': 'l', 'space-t': 's', 'space-b': 'm'},
                                        content: [
                                            {
                                            block: 'pt-list',
                                            content: [
                                                        {
                                                        elem: 'item',
                                                        elemMods: {'space-b': 's'},
                                                        content: {
                                                            block: 'pt-icon-plus',
                                                            mods: { 'vertical-align': 'center' },
                                                            content: [
                                                            {
                                                                elem: 'icon',
                                                                elemMods: { 'indent-r': 'xs' },
                                                                content: {
                                                                    block: 'icon',
                                                                    mods: { name: 'human', size: 'm', view: 'ghost' }
                                                                }
                                                            },
                                                            {
                                                                elem: 'text',
                                                                mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                                                content: 'John Doe'
                                                            }]
                                                                }
                                                        },
                                                        {
                                                            elem: 'item',
                                                            elemMods: {'space-b': 's'},
                                                            content: {
                                                                block: 'pt-icon-plus',
                                                                mods: { 'vertical-align': 'center' },
                                                                content: [
                                                                {
                                                                    elem: 'icon',
                                                                    elemMods: { 'indent-r': 'xs' },
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { name: 'phone', size: 'm', view: 'ghost' }
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'text',
                                                                    mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                                                    content: '+7 012 345-67-89'
                                                                }]
                                                            }
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'pt-icon-plus',
                                                                mods: { 'vertical-align': 'center' },
                                                                content: [
                                                                {
                                                                    elem: 'icon',
                                                                    elemMods: { 'indent-r': 'xs' },
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { name: 'mail', size: 'm', view: 'ghost' }
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'text',
                                                                    mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                                                    content: 'user@mail.com'
                                                                }]
                                                                    }
                                                        }
                                                     ]
                                                 }
                                            ]
                                        }
                                    ]
                                }
            		        ]
			 };
