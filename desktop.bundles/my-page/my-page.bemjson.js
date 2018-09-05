module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'my-page.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'my-page.min.js' }],
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'nm-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'ibm' }
		},
		{
			block: 'component',
			mods: { nm: 'default' }
		}
	],
	content: [

		{
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' } },
			attrs: {
				'style': 'background: rgba(0,0,0,0.4);'
			},
			content: [

				/* История */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1200px;'
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
													block: 'history',
													mix: [
														{ block: 'decorator', mods: { 'space-t': 'xxxxl', 'space-h': 'l', 'space-b': 'l' } },
														{ block: 'pt-list', mods: { view: 'default' } },
													],
													content: [
														{
															elem: 'header',
															mix: { block: 'decorator', mods: { 'space-b': 'xxl' } },
															content: [
																{
																	block: 'text',
																	mods: { size: 'xxxl', view: 'primary', weight: 'black' },
																	content: 'Название моего блока'
																}
															]
														},
														{
															elem: 'content',
															content: [
																{
																	elem: 'section',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xxl' } },
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'space-b': 'm' } },
																			mods: { size: 'xl', view: 'primary', weight: 'black' },
																			content: 'Пункт 1'
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'tele2', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', size: 'm', weight: 'semibold' } },
																							content: 'Tele2'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 500 ₽'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'mts', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', size: 'm', weight: 'semibold' } },
																							content: 'МТС'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 420 ₽'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'itunes', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', weight: 'semibold', size: 'm' } },
																							content: 'iTunes'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 1 490 ₽'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'section',
																	mix: { block: 'pt-list', elem: 'item', elemMods: { 'indent-b': 'xxl' } },
																	content: [
																		{
																			block: 'text',
																			mix: { block: 'decorator', mods: { 'space-b': 'm' } },
																			mods: { size: 'xl', view: 'primary', weight: 'black' },
																			content: '19 May'
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'mts', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', size: 'm', weight: 'semibold' } },
																							content: 'МТС'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 1 000 ₽'
																				}
																			]
																		},
																		{
																			elem: 'item',
																			mix: { block: 'pt-list', elem: 'item', elemMods: { 'space-b': 'l', 'distribute': 'between', 'vertical-align': 'center' } },
																			content: [
																				{
																					block: 'pt-icon-plus',
																					mods: { 'vertical-align': 'center' },
																					mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
																					content: [
																						{
																							elem: 'icon',
																							elemMods: { 'indent-r': 's' },
																							mix: { block: 'brand-logo', mods: { name: 'yota', size: 'xs' } }
																						},
																						{
																							elem: 'block',
																							mix: { block: 'text', mods: { view: 'primary', weight: 'semibold', size: 'm' } },
																							content: 'Yota'
																						}
																					]
																				},
																				{
																					block: 'text',
																					mods: { size: 'm', view: 'primary', weight: 'semibold', align: 'right' },
																					content: '− 360 ₽'
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
				},
				/* /История */

			]
		}
	]
};
