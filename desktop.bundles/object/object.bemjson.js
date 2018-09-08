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
    mods: { theme: 'nm' },
	mix: {
			block: 'theme',
			mods: { color: 'whitepaper-default',
                    space: 'default',
                    size: 'default',
                    gap: 'medium',
                    menu: 'default',
                    font: 'museo'
				  }
		},
            content: [
                        {
                            block: 'pt-card',
                            mods: { shadow: 'cloud', view: 'default' },
                            content: [
                                {
                                elem: 'content',
                                elemMods: { 'space-h': 'l', 'space-v': 'm'},
                                content: [
                                            {
                                            block: 'pt-icon-plus',
                                            mods: { 'vertical-align': 'center', 'distribute': 'between' },
                                            content: [
                                                            {
                                                                elem: 'block',
                                                                mix: { block: 'text', mods: { size: 'm', view: 'brand', weight: 'bold' } },
                                                                content: 'Информация о клиенте'
                                                            },
                                                            {
                                                            elem: 'icon',
                                                            elemMods: { 'indent-r': 'xs' },
                                                            content: {
                                                                block: 'icon',
                                                                mods: { name: 'edit', size: 's', view: 'secondary' }
                                                                    }
                                                            }
													]
                                            }
                                        ]
                                },
                                {
                                elem: 'content',
                                elemMods: { 'space-h': 'l', 'space-t': 'xs', 'space-b': 'xs'},
                                content: [
                                    {
                                    block: 'pt-list',
                                    content: [
                                                 {
                                        elem: 'item',
                                        content: [
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
                                                            mods: { name: 'human', size: 'm', view: 'secondary' }
                                                        }
                                                    },
                                                    {
                                                        elem: 'block',
                                                        mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                                        content: 'John Doe'
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
                                                            mods: { name: 'phone', size: 'm', view: 'secondary' }
                                                        }
                                                    },
                                                    {
                                                        elem: 'block',
                                                        mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                                        content: '+7 012 345-67-89'
                                                    }]
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                elemMods: { 'space-v': 'xs' },
                                                content: {
                                                    block: 'pt-icon-plus',
                                                    mods: { 'vertical-align': 'center' },
                                                    content: [
                                                    {
                                                        elem: 'icon',
                                                        elemMods: { 'indent-r': 'xs' },
                                                        content: {
                                                            block: 'icon',
                                                            mods: { name: 'mail', size: 'm', view: 'secondary' }
                                                        }
                                                    },
                                                    {
                                                        elem: 'block',
                                                        mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                                        content: 'user@mail.com'
                                                    }]
                                            }
                                        }]
                                    }
                                             ]
                                         }
                                        ]
                                }
                            ]
                        }
            		 ]
			 };
