export let hiking = {
    KRUPA_PER_PERSON: 70,
    MAKARON_PER_PERSON: 90,
    TUSHENKA_PER_PERSON: 1 / 4,
    SOUCE_PER_PERSON: 40,
    selected_hike_id: -1,
    get_amount(type, participant_count) {
        if (type === '1 шт') {
            return 1;
        } else if (type === '4 чел/пачка') {
            return Math.ceil(participant_count / 4);
        } else if (type === 'зерно') {
            return this.KRUPA_PER_PERSON * participant_count;
        } else if (type === 'макароны') {
            return this.MAKARON_PER_PERSON * participant_count;
        } else if (type === 'соус') {
            return this.SOUCE_PER_PERSON * participant_count;
        }
    },
    calc_types: { 'зерно': 1, '4 чел/пачка': 2, 'соус': 3, 'сухофрукты': 3, '1 шт': 4, 'макароны': 5 },
    hikes: {
        0: {
            name: 'ЛПВД',
            participant_count: 12,
            description: 'Лыжный пвд по марийке в январские празники',
            days: {
                0: {
                    name: 'Первый день лайтовый, размяться и поплавать в озеле Шуть-Ер',
                    description: 'Стартанем в 7:00 от Энерго Инстритута. Доедем до Керебеляка. Далее в сторону о. Шуть-Ер. Остановимся на южной стороне озера.',
                    date: new Date('December 21, 2021 00:00:00'),
                    eatings: {
                        0: {
                            eating_category: 'Завтрак',
                            name: 'Молочная овсяная каша',
                            description: '',
                            ingredients: {
                                0: {
                                    name: 'овсянка',
                                    calc_type: 'зерно',
                                },
                                1: {
                                    name: 'сгущенка',
                                    calc_type: 'соус',
                                },
                                2: {
                                    name: 'изюм',
                                    calc_type: 'сухофрукты',
                                },
                                3: {
                                    name: '',
                                    calc_type: '',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            }
                        },
                        1: {
                            eating_category: 'Обед',
                            name: 'Суп уха',
                            description: 'Сырые овощи обработать, добавить лавровый лист и разные специи. Сушеные овощи отмочить заранее.',
                            ingredients: {
                                0: {
                                    name: 'рыбные консервы',
                                    calc_type: '4 чел/пачка',
                                },
                                1: {
                                    name: 'специи для ухи',
                                    calc_type: '1 шт',
                                },
                                2: {
                                    name: 'картофель',
                                    calc_type: 'овощи',
                                },
                                3: {
                                    name: 'лук',
                                    calc_type: 'овощи',
                                },
                                4: {
                                    name: 'морковь',
                                    calc_type: 'овощи',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            }
                        },
                        2: {
                            eating_category: 'Ужин',
                            name: 'Макароны',
                            description: 'С тушенкой и томатной пастой. Добавить специи из общака.',
                            ingredients: {
                                0: {
                                    name: 'макароны',
                                    calc_type: 'макароны',
                                },
                                1: {
                                    name: 'томаты консервированные',
                                    calc_type: '1 шт',
                                },
                                2: {
                                    name: 'тушенка',
                                    calc_type: '4 чел/пачка',
                                },
                                3: {
                                    name: 'специи для макарон болоньезе',
                                    calc_type: '1 шт',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            },
                        }
                    }
                },
                1: {
                    name: 'Домой через Ошутьялы',
                    description: 'Выйдем в сторону деревни Ошутьялы. Посетим озеро Тот-Ер. Побродим по болотам.',
                    date: new Date('December 22, 2021 00:00:00'),
                    eatings: {
                        0: {
                            eating_category: 'Завтрак',
                            name: 'Каша дружба',
                            description: '',
                            ingredients: {
                                0: {
                                    name: 'рис',
                                    calc_type: 'зерно',
                                },
                                1: {
                                    name: 'пшено',
                                    calc_type: 'зерно',
                                },
                                2: {
                                    name: 'сгущенка',
                                    calc_type: 'соус',
                                },
                                3: {
                                    name: 'изюм',
                                    calc_type: 'сухофрукты',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            }
                        },
                        1: {
                            eating_category: 'Обед',
                            name: 'Борщ',
                            description: 'Сырые овощи обработать, добавить лавровый лист и разные специи. Сушеные овощи отмочить заранее.',
                            ingredients: {
                                0: {
                                    name: 'тушенка',
                                    calc_type: '4 чел/пачка',
                                },
                                1: {
                                    name: 'заправка для борща',
                                    calc_type: '4 чел/пачка',
                                },
                                2: {
                                    name: 'картофель',
                                    calc_type: 'овощи',
                                },
                                3: {
                                    name: 'лук',
                                    calc_type: 'овощи',
                                },
                                4: {
                                    name: 'морковь',
                                    calc_type: 'овощи',
                                },
                                5: {
                                    name: 'чеснок',
                                    calc_type: '1 шт',
                                },
                            }
                        },
                        2: {
                            eating_category: 'Ужин',
                            name: 'Макароны',
                            description: 'С тушенкой и томатной пастой. Добавить специи из общака.',
                            ingredients: {
                                0: {
                                    name: 'макароны',
                                    calc_type: 'макароны',
                                },
                                1: {
                                    name: 'томаты консервированные',
                                    calc_type: '1 шт',
                                },
                                2: {
                                    name: 'тушенка',
                                    calc_type: '4 чел/пачка',
                                },
                                3: {
                                    name: 'специи для макарон болоньезе',
                                    calc_type: '1 шт',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            },
                        }
                    }
                }
            },
        },
        1: {
            name: 'Ноябрьская единичка',
            participant_count: 12,
            description: 'Поход первой категории сложности по марийским лесам',
            days: {
                0: {
                    name: 'Первый день лайтовый, размяться и поплавать в озеле Шуть-Ер',
                    description: 'Стартанем в 7:00 от Энерго Инстритута. Доедем до Керебеляка. Далее в сторону о. Шуть-Ер. Остановимся на южной стороне озера.',
                    date: new Date('December 29, 2021 00:00:00'),
                    eatings: {
                        0: {
                            eating_category: 'Завтрак',
                            name: 'Молочная овсяная каша',
                            description: '',
                            ingredients: {
                                0: {
                                    name: 'овсянка',
                                    calc_type: 'зерно',
                                },
                                1: {
                                    name: 'сгущенка',
                                    calc_type: 'соус',
                                },
                                2: {
                                    name: 'изюм',
                                    calc_type: 'сухофрукты',
                                },
                                3: {
                                    name: '',
                                    calc_type: '',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            }
                        },
                        1: {
                            eating_category: 'Обед',
                            name: 'Суп уха',
                            description: 'Сырые овощи обработать, добавить лавровый лист и разные специи. Сушеные овощи отмочить заранее.',
                            ingredients: {
                                0: {
                                    name: 'рыбные консервы',
                                    calc_type: '4 чел/пачка',
                                },
                                1: {
                                    name: 'специи для ухи',
                                    calc_type: '1 шт',
                                },
                                2: {
                                    name: 'картофель',
                                    calc_type: 'овощи',
                                },
                                3: {
                                    name: 'лук',
                                    calc_type: 'овощи',
                                },
                                4: {
                                    name: 'морковь',
                                    calc_type: 'овощи',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            }
                        },
                        2: {
                            eating_category: 'Ужин',
                            name: 'Макароны',
                            description: 'С тушенкой и томатной пастой. Добавить специи из общака.',
                            ingredients: {
                                0: {
                                    name: 'макароны',
                                    calc_type: 'макароны',
                                },
                                1: {
                                    name: 'томаты консервированные',
                                    calc_type: '1 шт',
                                },
                                2: {
                                    name: 'тушенка',
                                    calc_type: '4 чел/пачка',
                                },
                                3: {
                                    name: 'специи для макарон болоньезе',
                                    calc_type: '1 шт',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            },
                        }
                    }
                },
                1: {
                    name: 'Домой через Ошутьялы',
                    description: 'Выйдем в сторону деревни Ошутьялы. Посетим озеро Тот-Ер. Побродим по болотам.',
                    date: new Date('December 30, 2021 00:00:00'),
                    eatings: {
                        0: {
                            eating_category: 'Завтрак',
                            name: 'Каша дружба',
                            description: '',
                            ingredients: {
                                0: {
                                    name: 'рис',
                                    calc_type: 'зерно',
                                },
                                1: {
                                    name: 'пшено',
                                    calc_type: 'зерно',
                                },
                                2: {
                                    name: 'сгущенка',
                                    calc_type: 'соус',
                                },
                                3: {
                                    name: 'изюм',
                                    calc_type: 'сухофрукты',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            }
                        },
                        1: {
                            eating_category: 'Обед',
                            name: 'Борщ',
                            description: 'Сырые овощи обработать, добавить лавровый лист и разные специи. Сушеные овощи отмочить заранее.',
                            ingredients: {
                                0: {
                                    name: 'тушенка',
                                    calc_type: '4 чел/пачка',
                                },
                                1: {
                                    name: 'заправка для борща',
                                    calc_type: '4 чел/пачка',
                                },
                                2: {
                                    name: 'картофель',
                                    calc_type: 'овощи',
                                },
                                3: {
                                    name: 'лук',
                                    calc_type: 'овощи',
                                },
                                4: {
                                    name: 'морковь',
                                    calc_type: 'овощи',
                                },
                                5: {
                                    name: 'чеснок',
                                    calc_type: '1 шт',
                                },
                            }
                        },
                        2: {
                            eating_category: 'Ужин',
                            name: 'Макароны',
                            description: 'С тушенкой и томатной пастой. Добавить специи из общака.',
                            ingredients: {
                                0: {
                                    name: 'макароны',
                                    calc_type: 'макароны',
                                },
                                1: {
                                    name: 'томаты консервированные',
                                    calc_type: '1 шт',
                                },
                                2: {
                                    name: 'тушенка',
                                    calc_type: '4 чел/пачка',
                                },
                                3: {
                                    name: 'специи для макарон болоньезе',
                                    calc_type: '1 шт',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            },
                        }
                    }
                }
            },
        },
        2: {
            name: 'Велопоход',
            participant_count: 12,
            description: 'Целый месяц будем колесить по Азии',
            days: {
                0: {
                    name: 'Первый день лайтовый, размяться и поплавать в озеле Шуть-Ер',
                    description: 'Стартанем в 7:00 от Энерго Инстритута. Доедем до Керебеляка. Далее в сторону о. Шуть-Ер. Остановимся на южной стороне озера.',
                    date: new Date('December 21, 2021 00:00:00'),
                    eatings: {
                        0: {
                            eating_category: 'Завтрак',
                            name: 'Молочная овсяная каша',
                            description: '',
                            ingredients: {
                                0: {
                                    name: 'овсянка',
                                    calc_type: 'зерно',
                                },
                                1: {
                                    name: 'сгущенка',
                                    calc_type: 'соус',
                                },
                                2: {
                                    name: 'изюм',
                                    calc_type: 'сухофрукты',
                                },
                                3: {
                                    name: '',
                                    calc_type: '',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            }
                        },
                        1: {
                            eating_category: 'Обед',
                            name: 'Суп уха',
                            description: 'Сырые овощи обработать, добавить лавровый лист и разные специи. Сушеные овощи отмочить заранее.',
                            ingredients: {
                                0: {
                                    name: 'рыбные консервы',
                                    calc_type: '4 чел/пачка',
                                },
                                1: {
                                    name: 'специи для ухи',
                                    calc_type: '1 шт',
                                },
                                2: {
                                    name: 'картофель',
                                    calc_type: 'овощи',
                                },
                                3: {
                                    name: 'лук',
                                    calc_type: 'овощи',
                                },
                                4: {
                                    name: 'морковь',
                                    calc_type: 'овощи',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            }
                        },
                        2: {
                            eating_category: 'Ужин',
                            name: 'Макароны',
                            description: 'С тушенкой и томатной пастой. Добавить специи из общака.',
                            ingredients: {
                                0: {
                                    name: 'макароны',
                                    calc_type: 'макароны',
                                },
                                1: {
                                    name: 'томаты консервированные',
                                    calc_type: '1 шт',
                                },
                                2: {
                                    name: 'тушенка',
                                    calc_type: '4 чел/пачка',
                                },
                                3: {
                                    name: 'специи для макарон болоньезе',
                                    calc_type: '1 шт',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            },
                        }
                    }
                },
                1: {
                    name: 'Домой через Ошутьялы',
                    description: 'Выйдем в сторону деревни Ошутьялы. Посетим озеро Тот-Ер. Побродим по болотам.',
                    date: new Date('December 22, 2021 00:00:00'),
                    eatings: {
                        0: {
                            eating_category: 'Завтрак',
                            name: 'Каша дружба',
                            description: '',
                            ingredients: {
                                0: {
                                    name: 'рис',
                                    calc_type: 'зерно',
                                },
                                1: {
                                    name: 'пшено',
                                    calc_type: 'зерно',
                                },
                                2: {
                                    name: 'сгущенка',
                                    calc_type: 'соус',
                                },
                                3: {
                                    name: 'изюм',
                                    calc_type: 'сухофрукты',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            }
                        },
                        1: {
                            eating_category: 'Обед',
                            name: 'Борщ',
                            description: 'Сырые овощи обработать, добавить лавровый лист и разные специи. Сушеные овощи отмочить заранее.',
                            ingredients: {
                                0: {
                                    name: 'тушенка',
                                    calc_type: '4 чел/пачка',
                                },
                                1: {
                                    name: 'заправка для борща',
                                    calc_type: '4 чел/пачка',
                                },
                                2: {
                                    name: 'картофель',
                                    calc_type: 'овощи',
                                },
                                3: {
                                    name: 'лук',
                                    calc_type: 'овощи',
                                },
                                4: {
                                    name: 'морковь',
                                    calc_type: 'овощи',
                                },
                                5: {
                                    name: 'чеснок',
                                    calc_type: '1 шт',
                                },
                            }
                        },
                        2: {
                            eating_category: 'Ужин',
                            name: 'Макароны',
                            description: 'С тушенкой и томатной пастой. Добавить специи из общака.',
                            ingredients: {
                                0: {
                                    name: 'макароны',
                                    calc_type: 'макароны',
                                },
                                1: {
                                    name: 'томаты консервированные',
                                    calc_type: '1 шт',
                                },
                                2: {
                                    name: 'тушенка',
                                    calc_type: '4 чел/пачка',
                                },
                                3: {
                                    name: 'специи для макарон болоньезе',
                                    calc_type: '1 шт',
                                },
                                4: {
                                    name: '',
                                    calc_type: '',
                                },
                                5: {
                                    name: '',
                                    calc_type: '',
                                },
                            },
                        }
                    }
                },
            },
        },
    }, // пока не используется
    foods: {
        0: {
            name: 'овсянка',
            category: 'крупа',
            description: 'крупа на развес'
        },
        1: {
            name: 'сгущенка',
            category: 'соус',
            description: 'вне категорий'
        },
        2: {
            name: 'изюм',
            category: 'овощи и фрукты',
            description: 'товар на развес'
        },
        3: {
            name: 'тушенка',
            category: 'консервы мясные',
            description: 'банка на несколько человек'
        },
        4: {
            name: 'морковь',
            category: 'овощ',
            description: 'товар на развес'
        },
    }, // пока не используется
    eating_categories: {
        0: {
            name: 'Завтрак',
            priority: 0,
        },
        1: {
            name: 'Перекус 1',
            priority: 1,
        },
        2: {
            name: 'Обед',
            priority: 2,
        },
        3: {
            name: 'Перекус 2',
            priority: 3,
        },
        4: {
            name: 'Ужин',
            priority: 4,
        }
    }
}