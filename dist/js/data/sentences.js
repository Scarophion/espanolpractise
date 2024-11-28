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
                "espanol": "t�"
            },
            {
                "english": "he",
                "espanol": "�l"
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
                        "tense": "pret�rito",
                        "form": ["�", "iste", "i�", "imos", "isteis", "ieron"]
                    },
                    {
                        "tense": "presente",
                        "form": ["o", "es", "e", "emos", "�is", "en"]
                    },
                    {
                        "tense": "futuro",
                        "form": ["er�", "er�s", "er�", "eremos", "er�is", "er�n"]
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
                                    "espanol": "un s�ndwich"
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