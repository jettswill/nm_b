module.exports = {
	block: 'page',
	title: 'Карточка бронирования',
	favicon: '/favicon.png',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'reservation-page.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
		  ],
	scripts: [{ elem: 'js', url: 'reservation-page.min.js' }],
    mods: { theme: 'nm-portal' },
	mix: [
        {
			block: 'theme',
			mods: { color: 'nm-portal',
                    space: 'default',
                    size: 'default',
                    gap: 'medium',
                    menu: 'default',
                    font: 'tahoma'
				  }
		}
    ],
    content: [
        {
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' } },
			attrs: {
				'style': 'background: rgba(0,0,0,0.04);'
            },
            content: [

                {
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
                                                {
                                                    block: 'pt-card-block',
                                                    mods: { shadow: 'card', view: 'default', 'border-radius':'xxs'},
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            elemMods: { height: 'm', distribute: 'between', border:'b', 'space-h':'m' },
                                                            content: [
                                                                {
                                                                    elem: 'block',
                                                                    mix: { block: 'text', mods: { size: 'm', view: 'primary', weight: 'bold' } },
                                                                    content: 'Этапы сделки'
                                                                },
                                                                {
                                                                    elem: 'button',
                                                                    elemMods: { 'indent-r': 'xs' },
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { name: 'arrow-down', size: 's', view: 'primary'}
                                                                             }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                        elem: 'content',
                                                        elemMods: { 'space-h': 'm', 'space-t': 's', 'space-b': 'm'},
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
                                                },
                                                {
                                                    block: 'pt-card-block',
                                                    mods: { shadow: 'card', view: 'default', 'border-radius':'xxs'},
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            elemMods: { height: 'm', distribute: 'between', border:'b', 'space-h':'m' },
                                                            content: [
                                                                {
                                                                    elem: 'block',
                                                                    mix: { block: 'text', mods: { size: 'm', view: 'primary', weight: 'bold' } },
                                                                    content: 'Интересующий объект'
                                                                },
                                                                {
                                                                    elem: 'button',
                                                                    elemMods: { 'indent-r': 'xs' },
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { name: 'arrow-down', size: 's', view: 'primary'}
                                                                             }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                        elem: 'content',
                                                        elemMods: { 'space-h': 'm', 'space-t': 's', 'space-b': 'm'},
                                                        content: [
                                                            {
                                                            block: 'pt-list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    elemMods: {'space-b': 's'},
                                                                    content: {
                                                                        block: 'parameter-list',
                                                                        mods: { 'vertical-align': 'center' },
                                                                        content: [
                                                                            {
                                                                                elem: 'text',
                                                                                mix: {
                                                                                    block: 'text',
                                                                                    mods: { size: 'm', view: 'secondary', display: 'inline-block', width:'parameter'}
                                                                                },
                                                                                content: 'Тип объекта'
                                                                            },
                                                                            {
                                                                                elem: 'text',
                                                                                mix: {
                                                                                    block: 'text',
                                                                                    mods: { size: 'm', view: 'primary', display: 'inline-block'  }
                                                                                },
                                                                                content: '2К'
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        elemMods: {'space-b': 's'},
                                                                        content: {
                                                                            block: 'parameter-list',
                                                                            mods: { 'vertical-align': 'center' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'text',
                                                                                    mix: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'm', view: 'secondary', display: 'inline-block', width:'parameter'}
                                                                                    },
                                                                                    content: 'Номер'
                                                                                },
                                                                                {
                                                                                    elem: 'text',
                                                                                    mix: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'm', view: 'primary', display: 'inline-block'  }
                                                                                    },
                                                                                    content: '№940'
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        elemMods: {'space-b': 's'},
                                                                        content: {
                                                                            block: 'parameter-list',
                                                                            mods: { 'vertical-align': 'center' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'text',
                                                                                    mix: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'm', view: 'secondary', display: 'inline-block', width:'parameter'}
                                                                                    },
                                                                                    content: 'Площадь'
                                                                                },
                                                                                {
                                                                                    elem: 'text',
                                                                                    mix: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'm', view: 'primary', display: 'inline-block'  }
                                                                                    },
                                                                                    content: '84,2 м²'
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        elemMods: {'space-b': 's'},
                                                                        content: {
                                                                            block: 'parameter-list',
                                                                            mods: { 'vertical-align': 'top' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'text',
                                                                                    mix: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'm', view: 'secondary', display: 'inline-block', width:'parameter'}
                                                                                    },
                                                                                    content: 'Жилой комплекс'
                                                                                },
                                                                                {
                                                                                    elem: 'text',
                                                                                    mix: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'm', view: 'primary', display: 'inline-block'  }
                                                                                    },
                                                                                    content: 'IP-квартал Сколковский 1 оч. корп. 5'
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        elemMods: {'space-b': 's'},
                                                                        content: {
                                                                            block: 'parameter-list',
                                                                            mods: { 'vertical-align': 'center' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'text',
                                                                                    mix: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'm', view: 'secondary', display: 'inline-block', width:'parameter'}
                                                                                    },
                                                                                    content: 'Срок сдачи'
                                                                                },
                                                                                {
                                                                                    elem: 'text',
                                                                                    mix: {
                                                                                        block: 'text',
                                                                                        mods: { size: 'm', view: 'primary', display: 'inline-block'  }
                                                                                    },
                                                                                    content: 'IV 2019'
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                    ]
                                                                 }
                                                            ]
                                                        },
                                                        {
                                                        elem: 'content',
                                                        elemMods: { 'space-h': 'm', 'space-t': 's', 'space-b': 'm'},
                                                        content: [
                                                            {
                                                            block: 'button',
                                                            mods: { width: 'full', size: 'l', view: 'action',  width: 'available' },
                                                            text: 'Подробнее об объекте'
                                                            }
                                                        ]
                                                        }
                                                    ]
                                                }
											]
										},
                                        {
											elem: 'fraction',
											elemMods: { col: '8'},
											content: [
                                                {
                                                    block: 'pt-card-block',
                                                    mods: { shadow: 'card', view: 'default', 'border-radius':'xxs'},
                                                    content: [
                                                        {
                                                            elem: 'header',
                                                            elemMods: { height: 'm', distribute: 'between', border:'b', 'space-h':'m' },
                                                            content: [
                                                                {
                                                                    elem: 'block',
                                                                    mix: { block: 'text', mods: { size: 'm', view: 'primary', weight: 'bold' } },
                                                                    content: 'Этапы сделки'
                                                                },
                                                                {
                                                                    elem: 'button',
                                                                    elemMods: { 'indent-r': 'xs' },
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { name: 'arrow-down', size: 's', view: 'primary'}
                                                                             }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                        elem: 'content',
                                                        elemMods: { 'space-h': 'm', 'space-t': 's', 'space-b': 'm'},
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
};
