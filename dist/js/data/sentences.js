const data =
{
    "subjects":
        [
            {
                "english": "I",
                "espanol": "Yo"
            },
            {
                "english": "You",
                "espanol": "Tú"
            },
            {
                "english": "He",
                "espanol": "Él"
            },
            {
                "english": "We",
                "espanol": "Nosotros"
            },
            {
                "english": "You all",
                "espanol": "Vosotros"
            },
            {
                "english": "They",
                "espanol": "Ellos"
            }
        ],

    "regConj":
        [
            {
                "type": "er",
                "conjugation": [
                    {
                        "tense": "pretérito",
                        "form": ["í", "iste", "ió", "imos", "isteis", "ieron"]
                    },
                    {
                        "tense": "presente",
                        "form": ["o", "es", "e", "emos", "éis", "en"]
                    },
                    {
                        "tense": "futuro",
                        "form": ["eré", "erás", "erá", "eremos", "eréis", "erán"]
                    }
                ]
            },
            {
                "type": "ar",
                "conjugation": [
                    {
                        "tense": "pretérito",
                        "form": ["é", "aste", "ó", "amos", "asteis", "eron"]
                    },
                    {
                        "tense": "presente",
                        "form": ["o", "as", "a", "amos", "áis", "an"]
                    },
                    {
                        "tense": "futuro",
                        "form": ["aré", "arás", "ará", "aremos", "aréis", "arán"]
                    }
                ]
            },
            {
                "type": "ir",
                "conjugation": [
                    {
                        "tense": "pretérito",
                        "form": ["í", "iste", "ió", "imos", "isteis", "ieron"]
                    },
                    {
                        "tense": "presente",
                        "form": ["o", "es", "e", "imos", "ís", "en"]
                    },
                    {
                        "tense": "futuro",
                        "form": ["iré", "irás", "irá", "iremos", "iréis", "irán"]
                    }
                ]
            }
        ],

    "verbGroups":
        [
            {
                "name": "regular verbs",
                "verbs":
                    [
                        {
                            "name": "comer",
                            "irregular": false,
                            "type": "er",
                            "root": "com",
                            "englishconj": [
                                {
                                    "tense": "past",
                                    "form": ["ate"]
                                },
                                {
                                    "tense": "present",
                                    "form": ["eat", "eat", "eats", "eat", "eat", "eat"]
                                },
                                {
                                    "tense": "future",
                                    "form": ["will eat"]
                                }],
                            "endings": [
                                {
                                    "english": "an apple",
                                    "espanol": "una manzana"
                                },
                                {
                                    "english": "a sandwich",
                                    "espanol": "un sándwich"
                                },
                                {
                                    "english": "a pie",
                                    "espanol": "un pastel"
                                }
                            ]
                        },
                        {
                            "name": "aprender",
                            "irregular": false,
                            "type": "er",
                            "root": "aprend",
                            "englishconj": [
                                {
                                    "tense": "past",
                                    "form": ["learned"]
                                },
                                {
                                    "tense": "present",
                                    "form": ["learn", "learn", "learns", "learn", "learn", "learn"]
                                },
                                {
                                    "tense": "future",
                                    "form": ["will learn"]
                                }],
                            "endings": [
                                {
                                    "english": "spanish",
                                    "espanol": "español"
                                },
                                {
                                    "english": "to read",
                                    "espanol": "leer"
                                },
                                {
                                    "english": "about particle physics",
                                    "espanol": "sobre física de partículas"
                                }
                            ]
                        },
                        {
                            "name": "beber",
                            "irregular": false,
                            "type": "er",
                            "root": "beb",
                            "englishconj": [
                                {
                                    "tense": "past",
                                    "form": ["drank"]
                                },
                                {
                                    "tense": "present",
                                    "form": ["drink", "drink", "drinks", "drink", "drink", "drink"]
                                },
                                {
                                    "tense": "future",
                                    "form": ["will drink"]
                                }],
                            "endings": [
                                {
                                    "english": "beer",
                                    "espanol": "cerveza"
                                },
                                {
                                    "english": "in the Spread Eagle",
                                    "espanol": "en el Águila Extendida"
                                },
                                {
                                    "english": "in the afternoon",
                                    "espanol": "por la tarde"
                                }
                            ]
                        },
                        {
                            "name": "escuchar",
                            "irregular": false,
                            "type": "ar",
                            "root": "escuch",
                            "englishconj": [
                                {
                                    "tense": "past",
                                    "form": ["listened"]
                                },
                                {
                                    "tense": "present",
                                    "form": ["listen", "listen", "listens", "listen", "listen", "listen"]
                                },
                                {
                                    "tense": "future",
                                    "form": ["will listen"]
                                }],
                            "endings": [
                                {
                                    "english": "to the radio",
                                    "espanol": "la radio"
                                },
                                {
                                    "english": "to the wind",
                                    "espanol": "el viento"
                                },
                                {
                                    "english": "for the bell",
                                    "espanol": "la campana"
                                }
                            ]
                        },
                        {
                            "name": "trabajar",
                            "irregular": false,
                            "type": "ar",
                            "root": "trabaj",
                            "englishconj": [
                                {
                                    "tense": "past",
                                    "form": ["worked"]
                                },
                                {
                                    "tense": "present",
                                    "form": ["work", "work", "works", "work", "work", "work"]
                                },
                                {
                                    "tense": "future",
                                    "form": ["will work"]
                                }],
                            "endings": [
                                {
                                    "english": "all day",
                                    "espanol": "todo el día"
                                },
                                {
                                    "english": "for the man",
                                    "espanol": "para el Hombre"
                                },
                                {
                                    "english": "in an office",
                                    "espanol": "en el oficina"
                                }
                            ]
                        },
                        {
                            "name": "cambiar",
                            "irregular": false,
                            "type": "ar",
                            "root": "cambi",
                            "englishconj": [
                                {
                                    "tense": "past",
                                    "form": ["changed"]
                                },
                                {
                                    "tense": "present",
                                    "form": ["change", "change", "changes", "change", "change", "change"]
                                },
                                {
                                    "tense": "future",
                                    "form": ["will change"]
                                }],
                            "endings": [
                                {
                                    "english": "the locks",
                                    "espanol": "las cerraduras"
                                },
                                {
                                    "english": "jobs",
                                    "espanol": "de trabajo"
                                },
                                {
                                    "english": "because change is invitable",
                                    "espanol": "porque el cambio es inevitable"
                                }
                            ]
                        },
                        {
                            "name": "escribir",
                            "irregular": false,
                            "type": "ir",
                            "root": "escrib",
                            "englishconj": [
                                {
                                    "tense": "past",
                                    "form": ["wrote"]
                                },
                                {
                                    "tense": "present",
                                    "form": ["write", "write", "writes", "write", "write", "write"]
                                },
                                {
                                    "tense": "future",
                                    "form": ["will write"]
                                }],
                            "endings": [
                                {
                                    "english": "an essay",
                                    "espanol": "un esayo"
                                },
                                {
                                    "english": "to the newspaper",
                                    "espanol": "al periódico"
                                },
                                {
                                    "english": "Harry Potter fan fiction",
                                    "espanol": "fan fiction de Harry Potter"
                                }
                            ]
                        },
                        {
                            "name": "decidir",
                            "irregular": false,
                            "type": "ir",
                            "root": "decid",
                            "englishconj": [
                                {
                                    "tense": "past",
                                    "form": ["decided"]
                                },
                                {
                                    "tense": "present",
                                    "form": ["decide", "decide", "decides", "decide", "decide", "decide"]
                                },
                                {
                                    "tense": "future",
                                    "form": ["will decide"]
                                }],
                            "endings": [
                                {
                                    "english": "to leave immediately",
                                    "espanol": "irme inmediatamente"
                                },
                                {
                                    "english": "to quit",
                                    "espanol": "dejarlo"
                                },
                                {
                                    "english": "to write a book",
                                    "espanol": "escribir un libro"
                                }
                            ]
                        },
                        {
                            "name": "vivir",
                            "irregular": false,
                            "type": "ir",
                            "root": "viv",
                            "englishconj": [
                                {
                                    "tense": "past",
                                    "form": ["lived"]
                                },
                                {
                                    "tense": "present",
                                    "form": ["live", "live", "lives", "live", "live", "live"]
                                },
                                {
                                    "tense": "future",
                                    "form": ["will live"]
                                }],
                            "endings": [
                                {
                                    "english": "in the city",
                                    "espanol": "en la ciudad"
                                },
                                {
                                    "english": "in a castle",
                                    "espanol": "un castillo"
                                },
                                {
                                    "english": "to work",
                                    "espanol": "para trabajar"
                                }
                            ]
                        }
                    ]
            }
        ]
}