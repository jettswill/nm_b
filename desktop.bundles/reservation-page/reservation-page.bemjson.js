module.exports = {
	block: 'page',
	title: 'Карточка бронирования',
	favicon: '/favicon.png',
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
                    gap: 'small',
                    menu: 'default',
                    font: 'tahoma'
				  }
		},
  content: [
            {
        			block: 'tpl-layout',
        			mix: { block: 'decorator', mods: { 'space-v': 'xl' } },
        			attrs: {
        				'style': 'background: rgba(0,0,0,0.04);'
                    },
                    content: [

                        /* Левая колонка */
                        {
                            elem: 'section',
                            content: [
                                {
                                    elem: 'container',
                                    elemMods: {align: 'center'},
                                    attrs: {
                                        'style': 'width: 1008px'
                                    },
                                    content: [
                                        {
                                            block: 'tpl-grid',
                                            mods: {columns: '12', 'col-gap':'half', 'row-gap':'full'},
                                            content: [
                                                {
                                                    elem: 'fraction',
                                                    elemMods: { col: '4'},
                                                    content: [
                                                        {
                                                            block: 'stepper',
                                                            content: [
                                                                {
                                                                    elem: 'header',
                                                                    content: [
                                                                        {
                                                                            block: 'pt-icon-plus',
                                                                            mods: { 'vertical-align': 'center' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'block',
                                                                                    content: [
                                                                                        {
                                                                                            block: 'text',
                                                                                            content: 'Этапы сделки'
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    elem: 'icon',
                                                                                    content: {
                                                                                        block: 'icon',
                                                                                        mods: { name: 'edit', size: 's', view: 'primary'}
                                                                                    }
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        /* Левая колонка */

                        ]
            }
  ]
};
