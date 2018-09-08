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
    mods: { theme: 'islands' },
	mix: {
			block: 'theme',
			mods: { color: 'whitepaper-default',
                    space: 'default',
                    size: 'default',
                    gap: 'medium',
                    menu: 'default',
                    font: 'museo' }
		},
            content: [
                        {
                            block: 'pt-card',
                            mods: { view: 'default' },
                            content: [
                                {
                                elem: 'header',
                                elemMods: { 'space-a': 'l', align: 'between', 'vertical-align': 'bottom' },
                                content: [
                                            {
                                            block: 'pt-icon-plus',
                                            mods: { distribute: 'between','vertical-align': 'center' },
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
                                                                mods: { name: 'add-1', size: 's', view: 'secondary' }
                                                                    }
                                                            }]
                                            }
                                        ]
                                },
                                {
                                elem: 'content',
                                elemMods: { 'space-a': 'l', align: 'between', 'vertical-align': 'bottom' },
                                content: [
                                    {
                                    block: 'pt-list',
                                    content: [
                                                 {
                                        elem: 'item',
                                        elemMods: { 'space-h': 'xs', border: 'bottom' },
                                        content: [
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
                                                            mods: { name: 'user', size: 'm', view: 'secondary' }
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
                                                            mods: { name: 'phone-1', size: 'm', view: 'secondary' }
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
                                                            mods: { name: 'mail-1', size: 'm', view: 'secondary' }
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
