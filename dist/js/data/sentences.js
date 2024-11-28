const data =
{
    "subjects":
        [
            {
                "english": "i",
                "espanol": "yo"
            },
            {
                "english": "you",
                "espanol": "tú"
            },
            {
                "english": "he",
                "espanol": "él"
            },
            {
                "english": "we",
                "espanol": "nosotros"
            },
            {
                "english": "you all",
                "espanol": "vosotros"
            },
            {
                "english": "they",
                "espanol": "ellos"
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
                        }
                    ]
            }
        ]
}