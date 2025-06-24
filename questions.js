const quizDataFromFile = [
  {
    "question": "anbieten",
    "correct": "to offer",
    "choices": [
      "to feel",
      "to put",
      "to get",
      "to offer"
    ]
  },
  {
    "question": "anderen",
    "correct": "other",
    "choices": [
      "to allow",
      "begin",
      "to take (sth./so.) / to pick (sth./so.) / to give a lift",
      "other"
    ]
  },
  {
    "question": "abgeben",
    "correct": "to give (sth.) in / to submit (sth.) / to deliver (sth.)",
    "choices": [
      "to allow",
      "to press",
      "to come",
      "to give (sth.) in / to submit (sth.) / to deliver (sth.)"
    ]
  },
  {
    "question": "ändern",
    "correct": "to change",
    "choices": [
      "to hope",
      "to turn on",
      "to collect",
      "to change"
    ]
  },
  {
    "question": "abholen",
    "correct": "pick up",
    "choices": [
      "to guess",
      "pick up",
      "to lend",
      "other"
    ]
  },
  {
    "question": "abschließen",
    "correct": "to lock, to finish",
    "choices": [
      "to register / to enroll / to apply",
      "to fall in love",
      "to have a fight",
      "to lock, to finish"
    ]
  },
  {
    "question": "anfangen",
    "correct": "to begin",
    "choices": [
      "against",
      "should / shall",
      "airport",
      "to begin"
    ]
  },
  {
    "question": "ankommen",
    "correct": "arrive",
    "choices": [
      "arrive",
      "tire",
      "girl",
      "to cost"
    ]
  },
  {
    "question": "anmachen",
    "correct": "to turn on",
    "choices": [
      "to carry",
      "to turn on",
      "to have a barbecue",
      "to fit / to suit"
    ]
  },
  {
    "question": "sich anmelden",
    "correct": "to register / to enroll / to apply",
    "choices": [
      "to register / to enroll / to apply",
      "to lend",
      "to rest",
      "to hike"
    ]
  },
  {
    "question": "anrufen",
    "correct": "call",
    "choices": [
      "to sit down",
      "to lend",
      "to speak",
      "call"
    ]
  },
  {
    "question": "ansehen",
    "correct": "look at",
    "choices": [
      "look at",
      "to hope",
      "over there",
      "to dance"
    ]
  },
  {
    "question": "antworten",
    "correct": "reply",
    "choices": [
      "to prepare",
      "to tell",
      "reply",
      "to see"
    ]
  },
  {
    "question": "arbeiten",
    "correct": "work",
    "choices": [
      "pick up",
      "work",
      "to play",
      "above"
    ]
  },
  {
    "question": "sich ärgern",
    "correct": "to be angry",
    "choices": [
      "to be angry",
      "outside",
      "to be absence / to be missing",
      "aside / beside"
    ]
  },
  {
    "question": "ausfüllen",
    "correct": "to fill (in)",
    "choices": [
      "to die",
      "to fill (in)",
      "to visit",
      "to run away"
    ]
  },
  {
    "question": "ausgeben",
    "correct": "to spend (sth.)",
    "choices": [
      "outside",
      "to prepare",
      "to spend (sth.)",
      "to become"
    ]
  },
  {
    "question": "ausgehen",
    "correct": "go out",
    "choices": [
      "go out",
      "to wait",
      "tomorrow",
      "to move"
    ]
  },
  {
    "question": "ausmachen",
    "correct": "to turn (sth.) off",
    "choices": [
      "to fall in love",
      "to play",
      "to remember",
      "to turn (sth.) off"
    ]
  },
  {
    "question": "auspacken",
    "correct": "unpacking",
    "choices": [
      "to save",
      "welcome",
      "to practice",
      "unpacking"
    ]
  },
  {
    "question": "sich ausruhen",
    "correct": "to rest",
    "choices": [
      "to rest",
      "to want",
      "single / individual / separate",
      "to run away"
    ]
  },
  {
    "question": "aussehen",
    "correct": "to appear / to look like (sth.)",
    "choices": [
      "pronounce",
      "to agree sth. / to reach an agreement",
      "to drive away",
      "to appear / to look like (sth.)"
    ]
  },
  {
    "question": "aufhören",
    "correct": "stop",
    "choices": [
      "get out / get off",
      "stop",
      "to close (sth.) / to shut (sth.)",
      "to move"
    ]
  },
  {
    "question": "aufmachen",
    "correct": "open",
    "choices": [
      "to undertake sth. / to venture",
      "should / shall",
      "open",
      "to live"
    ]
  },
  {
    "question": "aufpassen",
    "correct": "watch out",
    "choices": [
      "to cost",
      "watch out",
      "to want",
      "other"
    ]
  },
  {
    "question": "aussprechen",
    "correct": "pronounce",
    "choices": [
      "pronounce",
      "chicken",
      "to buy",
      "to have"
    ]
  },
  {
    "question": "aussteigen",
    "correct": "get out / get off",
    "choices": [
      "to go",
      "to dream",
      "get out / get off",
      "to go back"
    ]
  },
  {
    "question": "aufräumen",
    "correct": "to clean up",
    "choices": [
      "to congratulate",
      "get out / get off",
      "to be called",
      "to clean up"
    ]
  },
  {
    "question": "aufstehen",
    "correct": "get up",
    "choices": [
      "to ride",
      "to feel",
      "get up",
      "single / individual / separate"
    ]
  },
  {
    "question": "austragen",
    "correct": "to deliver (sth.) / to carry (sth.) out",
    "choices": [
      "to lend",
      "to deliver (sth.) / to carry (sth.) out",
      "to build",
      "to try"
    ]
  },
  {
    "question": "beenden",
    "correct": "to end (sth.) / to finish (sth.) / to break up",
    "choices": [
      "because of",
      "to end (sth.) / to finish (sth.) / to break up",
      "to try",
      "to wish"
    ]
  },
  {
    "question": "beginnen",
    "correct": "begin",
    "choices": [
      "to sleep",
      "to lose",
      "begin",
      "day after tomorrow"
    ]
  },
  {
    "question": "begründen",
    "correct": "justify",
    "choices": [
      "stomach",
      "to jog",
      "justify",
      "to appear / to look like (sth.)"
    ]
  },
  {
    "question": "backen",
    "correct": "to bake",
    "choices": [
      "to win",
      "pick up",
      "to bake",
      "to stand"
    ]
  },
  {
    "question": "baden",
    "correct": "to bathe",
    "choices": [
      "watch out",
      "to earn",
      "dry",
      "to bathe"
    ]
  },
  {
    "question": "bekommen",
    "correct": "to get",
    "choices": [
      "to deliver",
      "to organize",
      "to get",
      "to fall in love"
    ]
  },
  {
    "question": "benutzen",
    "correct": "to use",
    "choices": [
      "to change / to switch",
      "depart",
      "to use",
      "to divide"
    ]
  },
  {
    "question": "beraten",
    "correct": "to advise",
    "choices": [
      "to have a barbecue",
      "to advise",
      "to phone (so.)",
      "to need"
    ]
  },
  {
    "question": "basteln",
    "correct": "to tinker / to do handicrafts",
    "choices": [
      "to guess",
      "to lie / to tell a lie",
      "to tinker / to do handicrafts",
      "to draw"
    ]
  },
  {
    "question": "bauen",
    "correct": "to build",
    "choices": [
      "tire",
      "to cry",
      "to build",
      "to come here"
    ]
  },
  {
    "question": "berichten",
    "correct": "to report",
    "choices": [
      "to discard sth. / to litter / to throw away",
      "to report",
      "to hand back / to give back",
      "to play"
    ]
  },
  {
    "question": "beschreiben",
    "correct": "to describe",
    "choices": [
      "to pay",
      "the day before yesterday",
      "to lie (down) / to recline",
      "to describe"
    ]
  },
  {
    "question": "beantworten",
    "correct": "to answer",
    "choices": [
      "to transfer / to change (transport)",
      "to know (so./sth.)",
      "to answer",
      "to send"
    ]
  },
  {
    "question": "sich bedanken",
    "correct": "to thank so. (for sth.)",
    "choices": [
      "to come back / to return",
      "little",
      "each",
      "to thank so. (for sth.)"
    ]
  },
  {
    "question": "bedeuten",
    "correct": "mean",
    "choices": [
      "mean",
      "to help",
      "to phone (so.)",
      "to hear"
    ]
  },
  {
    "question": "sich beschweren",
    "correct": "to complain",
    "choices": [
      "to park",
      "to last",
      "to swim",
      "to complain"
    ]
  },
  {
    "question": "sich beeilen",
    "correct": "to hurry up",
    "choices": [
      "to fit / to suit",
      "at the bottom / downstairs / below",
      "to hurry up",
      "to close / to conclude"
    ]
  },
  {
    "question": "besichtigen",
    "correct": "to visit",
    "choices": [
      "to last",
      "unpacking",
      "dry",
      "to visit"
    ]
  },
  {
    "question": "bleiben",
    "correct": "to stay",
    "choices": [
      "to stay",
      "can",
      "tomorrow",
      "to win"
    ]
  },
  {
    "question": "bestätigen",
    "correct": "to confirm",
    "choices": [
      "to check",
      "to confirm",
      "to order",
      "to hang"
    ]
  },
  {
    "question": "bestehen",
    "correct": "consist",
    "choices": [
      "to book",
      "to note",
      "consist",
      "to want"
    ]
  },
  {
    "question": "bestellen",
    "correct": "to order",
    "choices": [
      "stop",
      "watch out",
      "to get changed",
      "to order"
    ]
  },
  {
    "question": "besuchen",
    "correct": "to visit",
    "choices": [
      "to check",
      "to pay",
      "to become",
      "to visit"
    ]
  },
  {
    "question": "braten",
    "correct": "to roast meat",
    "choices": [
      "to roast meat",
      "who / whom",
      "to meet",
      "to phone (so.)"
    ]
  },
  {
    "question": "brauchen",
    "correct": "to need",
    "choices": [
      "to need",
      "to travel",
      "vacation",
      "to bring along / to bring (so./sth.)"
    ]
  },
  {
    "question": "sich bewerben",
    "correct": "to make an application / to apply for sth.",
    "choices": [
      "to win",
      "to participate / to take part",
      "to make an application / to apply for sth.",
      "tomorrow"
    ]
  },
  {
    "question": "bezahlen",
    "correct": "to pay",
    "choices": [
      "chicken",
      "to discuss",
      "bun / small bread",
      "to pay"
    ]
  },
  {
    "question": "bringen",
    "correct": "bring",
    "choices": [
      "to play along",
      "bring",
      "back",
      "to pay"
    ]
  },
  {
    "question": "Brötchen",
    "correct": "bun / small bread",
    "choices": [
      "have to / must",
      "to save",
      "bun / small bread",
      "to visit"
    ]
  },
  {
    "question": "bisschen",
    "correct": "little",
    "choices": [
      "to think",
      "to snow",
      "little",
      "at the bottom / downstairs / below"
    ]
  },
  {
    "question": "buchen",
    "correct": "to book",
    "choices": [
      "to book",
      "to fall in love",
      "different",
      "to shift sth. / to move sth."
    ]
  },
  {
    "question": "bitten",
    "correct": "to ask for (sth.)",
    "choices": [
      "to get changed",
      "to ask for (sth.)",
      "to give",
      "justify"
    ]
  },
  {
    "question": "buchstabieren",
    "correct": "to spell",
    "choices": [
      "to complain",
      "against",
      "to hang",
      "to spell"
    ]
  },
  {
    "question": "chatten",
    "correct": "to chat",
    "choices": [
      "to belong to",
      "to chat",
      "to remove sth.",
      "to dance"
    ]
  },
  {
    "question": "dauern",
    "correct": "to last",
    "choices": [
      "to celebrate",
      "to last",
      "to win",
      "to change"
    ]
  },
  {
    "question": "denken",
    "correct": "to think",
    "choices": [
      "to die",
      "to think",
      "to rent",
      "garden"
    ]
  },
  {
    "question": "diskutieren",
    "correct": "to discuss",
    "choices": [
      "to download",
      "to discuss",
      "Goodbye (on the phone)",
      "to describe"
    ]
  },
  {
    "question": "daneben",
    "correct": "aside / beside",
    "choices": [
      "aside / beside",
      "to play",
      "to translate",
      "to celebrate"
    ]
  },
  {
    "question": "draußen",
    "correct": "outside",
    "choices": [
      "to cut oneself",
      "outside",
      "day after tomorrow",
      "to use"
    ]
  },
  {
    "question": "danken",
    "correct": "to thank",
    "choices": [
      "to have breakfast",
      "to thank",
      "to turn on",
      "to drive away"
    ]
  },
  {
    "question": "drinnen",
    "correct": "indoors",
    "choices": [
      "to cut oneself",
      "indoors",
      "to discuss",
      "to exchange"
    ]
  },
  {
    "question": "drüben",
    "correct": "over there",
    "choices": [
      "over there",
      "to miss",
      "to agree sth. / to reach an agreement",
      "to send"
    ]
  },
  {
    "question": "drücken",
    "correct": "to press",
    "choices": [
      "to press",
      "to take a shower",
      "to lie / to tell a lie",
      "girl"
    ]
  },
  {
    "question": "drucken",
    "correct": "to print",
    "choices": [
      "to carry",
      "welcome",
      "to print",
      "to bathe"
    ]
  },
  {
    "question": "einladen",
    "correct": "to invite",
    "choices": [
      "pronounce",
      "to have",
      "to do",
      "to invite"
    ]
  },
  {
    "question": "einpacken",
    "correct": "to wrap (sth.) / to pack (sth.)",
    "choices": [
      "to rent sth. (out) / to let sth.",
      "to wrap (sth.) / to pack (sth.)",
      "to hurry up",
      "to search"
    ]
  },
  {
    "question": "einsteigen",
    "correct": "to get in / to board / to enter",
    "choices": [
      "to cancel",
      "to get in / to board / to enter",
      "reply",
      "get out / get off"
    ]
  },
  {
    "question": "dürfen",
    "correct": "can / may / to be allowed to do (sth.)",
    "choices": [
      "to sign",
      "can / may / to be allowed to do (sth.)",
      "to lie (down) / to recline",
      "to bring along / to bring (so./sth.)"
    ]
  },
  {
    "question": "sich eintragen",
    "correct": "to register / to sign in",
    "choices": [
      "look at",
      "to register / to sign in",
      "to practice",
      "to stand"
    ]
  },
  {
    "question": "sich duschen",
    "correct": "to take a shower",
    "choices": [
      "to take a shower",
      "to study",
      "look at",
      "to describe"
    ]
  },
  {
    "question": "einzeln",
    "correct": "single / individual / separate",
    "choices": [
      "the day before yesterday",
      "to clean",
      "to get",
      "single / individual / separate"
    ]
  },
  {
    "question": "einziehen",
    "correct": "to move in",
    "choices": [
      "to calculate",
      "to move in",
      "to participate",
      "to wake so. up"
    ]
  },
  {
    "question": "empfehlen",
    "correct": "to recommend",
    "choices": [
      "welcome",
      "to last",
      "to like",
      "to recommend"
    ]
  },
  {
    "question": "enden",
    "correct": "to end in (sth.) / to finish / to close",
    "choices": [
      "to end in (sth.) / to finish / to close",
      "to become",
      "to plan",
      "single / individual / separate"
    ]
  },
  {
    "question": "sich entschuldigen",
    "correct": "to apologize",
    "choices": [
      "to investigate",
      "to take photos",
      "to apologize",
      "to lay / to put"
    ]
  },
  {
    "question": "einkaufen",
    "correct": "to shop / to do the shopping",
    "choices": [
      "tire",
      "to belong to",
      "to be interested in (so./sth.) / to care about (so./sth.)",
      "to shop / to do the shopping"
    ]
  },
  {
    "question": "sich erinnern",
    "correct": "to remember",
    "choices": [
      "to chat",
      "to remember",
      "open",
      "to show / to demonstrate"
    ]
  },
  {
    "question": "erklären",
    "correct": "to explain",
    "choices": [
      "change / exchange",
      "to reach",
      "to explain",
      "gladly"
    ]
  },
  {
    "question": "erlauben",
    "correct": "to allow",
    "choices": [
      "to allow",
      "to plan",
      "arrive",
      "to believe"
    ]
  },
  {
    "question": "fehlen",
    "correct": "to be absence / to be missing",
    "choices": [
      "welcome",
      "to be absence / to be missing",
      "to keep going",
      "to practice"
    ]
  },
  {
    "question": "erreichen",
    "correct": "to reach",
    "choices": [
      "to reach",
      "satisfied",
      "to close / to conclude",
      "to like"
    ]
  },
  {
    "question": "feiern",
    "correct": "to celebrate",
    "choices": [
      "to celebrate",
      "laugh",
      "to make an application / to apply for sth.",
      "to begin"
    ]
  },
  {
    "question": "Ferien",
    "correct": "vacation",
    "choices": [
      "Lost property",
      "to hike",
      "to swim",
      "vacation"
    ]
  },
  {
    "question": "erzählen",
    "correct": "to tell",
    "choices": [
      "to tell",
      "little",
      "to watch TV",
      "to wish"
    ]
  },
  {
    "question": "fernsehen",
    "correct": "to watch TV",
    "choices": [
      "to collect",
      "to go away",
      "to tinker / to do handicrafts",
      "to watch TV"
    ]
  },
  {
    "question": "essen",
    "correct": "to eat",
    "choices": [
      "to feel",
      "to eat",
      "stop",
      "to translate"
    ]
  },
  {
    "question": "Essen",
    "correct": "food / meal",
    "choices": [
      "to go",
      "to apologize",
      "to move in",
      "food / meal"
    ]
  },
  {
    "question": "fahren",
    "correct": "to drive",
    "choices": [
      "to be called",
      "to build",
      "to drive",
      "to see"
    ]
  },
  {
    "question": "abfahren",
    "correct": "depart",
    "choices": [
      "to drive",
      "depart",
      "to be called",
      "to bake"
    ]
  },
  {
    "question": "finden",
    "correct": "to find",
    "choices": [
      "to find",
      "to calculate",
      "to remove sth.",
      "to sign"
    ]
  },
  {
    "question": "fallen",
    "correct": "to fall",
    "choices": [
      "to fall",
      "to wish",
      "justify",
      "to run away"
    ]
  },
  {
    "question": "frühstücken",
    "correct": "to have breakfast",
    "choices": [
      "to have breakfast",
      "to taste",
      "to remove sth.",
      "to save (sth.)"
    ]
  },
  {
    "question": "fliegen",
    "correct": "fly",
    "choices": [
      "fly",
      "small shop",
      "to snow",
      "to celebrate"
    ]
  },
  {
    "question": "abfliegen",
    "correct": "depart",
    "choices": [
      "to ride",
      "change / exchange",
      "depart",
      "to have"
    ]
  },
  {
    "question": "sich fühlen",
    "correct": "to feel",
    "choices": [
      "to feel",
      "to marry",
      "to have a fight",
      "to dance"
    ]
  },
  {
    "question": "Fundsachen",
    "correct": "Lost property",
    "choices": [
      "Lost property",
      "to rest",
      "to miss",
      "to learn"
    ]
  },
  {
    "question": "Flughafen",
    "correct": "airport",
    "choices": [
      "aside / beside",
      "to last",
      "airport",
      "to thank"
    ]
  },
  {
    "question": "fotografieren",
    "correct": "to take photos",
    "choices": [
      "to become",
      "to take photos",
      "to explain",
      "tire"
    ]
  },
  {
    "question": "fragen",
    "correct": "to ask",
    "choices": [
      "to ask",
      "to show / to demonstrate",
      "to get",
      "to wake so. up"
    ]
  },
  {
    "question": "Garten",
    "correct": "garden",
    "choices": [
      "to fit / to suit",
      "to know (so./sth.)",
      "to fall",
      "garden"
    ]
  },
  {
    "question": "geben",
    "correct": "to give",
    "choices": [
      "to see",
      "to stay / to live",
      "to give",
      "to give (sth.) in / to submit (sth.) / to deliver (sth.)"
    ]
  },
  {
    "question": "sich freuen",
    "correct": "to be glad / to rejoice",
    "choices": [
      "to bring along / to bring (so./sth.)",
      "together",
      "to participate / to take part",
      "to be glad / to rejoice"
    ]
  },
  {
    "question": "geboren",
    "correct": "born",
    "choices": [
      "yesterday",
      "born",
      "in between",
      "to want"
    ]
  },
  {
    "question": "gefallen",
    "correct": "to like",
    "choices": [
      "to know (so./sth.)",
      "call",
      "to like",
      "to park"
    ]
  },
  {
    "question": "gegen",
    "correct": "against",
    "choices": [
      "against",
      "to realize / to notice / to memorize",
      "to cut oneself",
      "to be glad / to rejoice"
    ]
  },
  {
    "question": "gewinnen",
    "correct": "to win",
    "choices": [
      "to mean",
      "to win",
      "to have a fight",
      "to apologize"
    ]
  },
  {
    "question": "gehen",
    "correct": "to go",
    "choices": [
      "to go",
      "to have a fight",
      "to fold",
      "to search"
    ]
  },
  {
    "question": "glauben",
    "correct": "to believe",
    "choices": [
      "against",
      "to organize",
      "to order",
      "to believe"
    ]
  },
  {
    "question": "gehören",
    "correct": "to belong to",
    "choices": [
      "open",
      "to belong to",
      "airport",
      "to bathe"
    ]
  },
  {
    "question": "gratulieren",
    "correct": "to congratulate",
    "choices": [
      "to congratulate",
      "to end in (sth.) / to finish / to close",
      "to collect",
      "to bake"
    ]
  },
  {
    "question": "grillen",
    "correct": "to have a barbecue",
    "choices": [
      "to participate",
      "to have a barbecue",
      "to deliver (sth.) / to carry (sth.) out",
      "to dance"
    ]
  },
  {
    "question": "gern",
    "correct": "gladly",
    "choices": [
      "to mean",
      "reply",
      "gladly",
      "to give (sth.) in / to submit (sth.) / to deliver (sth.)"
    ]
  },
  {
    "question": "gestern",
    "correct": "yesterday",
    "choices": [
      "yesterday",
      "to stay (over night)",
      "to give",
      "to print"
    ]
  },
  {
    "question": "haben",
    "correct": "to have",
    "choices": [
      "to sign",
      "to spend (sth.)",
      "bun / small bread",
      "to have"
    ]
  },
  {
    "question": "Hähnchen",
    "correct": "chicken",
    "choices": [
      "chicken",
      "to talk / to speak",
      "to show / to demonstrate",
      "to reach"
    ]
  },
  {
    "question": "halten",
    "correct": "to hold (sth.) / to stop",
    "choices": [
      "to hold (sth.) / to stop",
      "bring",
      "to close (sth.) / to shut (sth.)",
      "to come here"
    ]
  },
  {
    "question": "herstellen",
    "correct": "to produce",
    "choices": [
      "to rant / to grumble",
      "to produce",
      "to come back / to return",
      "to move"
    ]
  },
  {
    "question": "herunterladen",
    "correct": "to download",
    "choices": [
      "to apologize",
      "to come",
      "call",
      "to download"
    ]
  },
  {
    "question": "hängen",
    "correct": "to hang",
    "choices": [
      "to check",
      "to wish",
      "to pay",
      "to hang"
    ]
  },
  {
    "question": "hinten",
    "correct": "in the back",
    "choices": [
      "to travel",
      "vacation",
      "in the back",
      "sweets"
    ]
  },
  {
    "question": "heiraten",
    "correct": "to marry",
    "choices": [
      "to bathe",
      "to marry",
      "to park",
      "to jog"
    ]
  },
  {
    "question": "hoffen",
    "correct": "to hope",
    "choices": [
      "to hope",
      "work",
      "to understand",
      "to be called"
    ]
  },
  {
    "question": "heißen",
    "correct": "to be called",
    "choices": [
      "to find",
      "to be called",
      "to get to know",
      "to let"
    ]
  },
  {
    "question": "holen",
    "correct": "pick up",
    "choices": [
      "pick up",
      "to eat",
      "to call so. sth. / to mention",
      "to try"
    ]
  },
  {
    "question": "helfen",
    "correct": "to help",
    "choices": [
      "to begin",
      "Lost property",
      "to help",
      "rain"
    ]
  },
  {
    "question": "hören",
    "correct": "to hear",
    "choices": [
      "to love",
      "to hear",
      "to repair",
      "to visit"
    ]
  },
  {
    "question": "her kommen",
    "correct": "to come here",
    "choices": [
      "to reach",
      "to have a barbecue",
      "to build",
      "to come here"
    ]
  },
  {
    "question": "husten",
    "correct": "to cough",
    "choices": [
      "to hold (sth.) / to stop",
      "to cough",
      "to wash oneself",
      "to divide"
    ]
  },
  {
    "question": "sich über informieren",
    "correct": "to inform oneself about (so./sth.) / to catch up on sth.",
    "choices": [
      "can",
      "to inform oneself about (so./sth.) / to catch up on sth.",
      "open",
      "move out"
    ]
  },
  {
    "question": "sich interessieren",
    "correct": "to be interested in (so./sth.) / to care about (so./sth.)",
    "choices": [
      "to come back / to return",
      "to miss",
      "to be interested in (so./sth.) / to care about (so./sth.)",
      "to cost"
    ]
  },
  {
    "question": "kaufen",
    "correct": "to buy",
    "choices": [
      "stomach",
      "to lie / to tell a lie",
      "to buy",
      "to lie (down) / to recline"
    ]
  },
  {
    "question": "jeden",
    "correct": "each",
    "choices": [
      "over there",
      "to belong to",
      "each",
      "to wake so. up"
    ]
  },
  {
    "question": "kennen",
    "correct": "to know (so./sth.)",
    "choices": [
      "to stay",
      "to know (so./sth.)",
      "next",
      "to undertake sth. / to venture"
    ]
  },
  {
    "question": "kennenlernen",
    "correct": "to get to know",
    "choices": [
      "to die",
      "satisfied",
      "to get to know",
      "to drive"
    ]
  },
  {
    "question": "joggen",
    "correct": "to jog",
    "choices": [
      "to take a shower",
      "to translate",
      "to agree sth. / to reach an agreement",
      "to jog"
    ]
  },
  {
    "question": "Kindergarten",
    "correct": "kindergarten",
    "choices": [
      "yesterday",
      "to cut oneself",
      "to fall in love",
      "kindergarten"
    ]
  },
  {
    "question": "klappen",
    "correct": "to fold",
    "choices": [
      "to visit",
      "to fold",
      "dry",
      "to draw"
    ]
  },
  {
    "question": "kriegen",
    "correct": "to get",
    "choices": [
      "lunch",
      "to wash oneself",
      "to ask",
      "to get"
    ]
  },
  {
    "question": "kochen",
    "correct": "to cook",
    "choices": [
      "to take",
      "to cook",
      "work out",
      "to discuss"
    ]
  },
  {
    "question": "Kuchen",
    "correct": "cake",
    "choices": [
      "to rent sth. (out) / to let sth.",
      "to feel",
      "to spend (sth.)",
      "cake"
    ]
  },
  {
    "question": "sich kümmern",
    "correct": "to take care of",
    "choices": [
      "to lock, to finish",
      "consist",
      "to take care of",
      "to appear / to look like (sth.)"
    ]
  },
  {
    "question": "kommen",
    "correct": "to come",
    "choices": [
      "Lost property",
      "to come",
      "to get to know",
      "to visit"
    ]
  },
  {
    "question": "können",
    "correct": "can",
    "choices": [
      "can",
      "rain",
      "to save (sth.)",
      "Lost property"
    ]
  },
  {
    "question": "kündigen",
    "correct": "to cancel",
    "choices": [
      "to cancel",
      "to like",
      "to sit",
      "to rain"
    ]
  },
  {
    "question": "kontrollieren",
    "correct": "to check / to controll",
    "choices": [
      "fly",
      "to fall in love",
      "little",
      "to check / to controll"
    ]
  },
  {
    "question": "lachen",
    "correct": "laugh",
    "choices": [
      "to stay / to live",
      "to deliver",
      "laugh",
      "gladly"
    ]
  },
  {
    "question": "Laden",
    "correct": "small shop",
    "choices": [
      "to hold (sth.) / to stop",
      "small shop",
      "to know",
      "to travel"
    ]
  },
  {
    "question": "kosten",
    "correct": "to cost",
    "choices": [
      "to take",
      "to lay / to put",
      "to lie (down) / to recline",
      "to cost"
    ]
  },
  {
    "question": "lügen",
    "correct": "to lie / to tell a lie",
    "choices": [
      "dry",
      "born",
      "to lie / to tell a lie",
      "to try"
    ]
  },
  {
    "question": "lassen",
    "correct": "to let",
    "choices": [
      "to feel",
      "to recommend",
      "to get to know",
      "to let"
    ]
  },
  {
    "question": "laufen",
    "correct": "to run",
    "choices": [
      "to rant / to grumble",
      "to cook",
      "girl",
      "to run"
    ]
  },
  {
    "question": "leben",
    "correct": "to live",
    "choices": [
      "to see",
      "can",
      "to offer",
      "to live"
    ]
  },
  {
    "question": "machen",
    "correct": "to do",
    "choices": [
      "to talk",
      "to do",
      "stop",
      "to get"
    ]
  },
  {
    "question": "Leben",
    "correct": "Life",
    "choices": [
      "to take place / to occur",
      "Life",
      "to give (sth.) in / to submit (sth.) / to deliver (sth.)",
      "to guess"
    ]
  },
  {
    "question": "Mädchen",
    "correct": "girl",
    "choices": [
      "to try",
      "reply",
      "girl",
      "to change"
    ]
  },
  {
    "question": "Magen",
    "correct": "stomach",
    "choices": [
      "stomach",
      "because of",
      "to study",
      "to go for a walk"
    ]
  },
  {
    "question": "legen",
    "correct": "to lay / to put",
    "choices": [
      "to cut oneself",
      "to lay / to put",
      "dry",
      "to wake so. up"
    ]
  },
  {
    "question": "malen",
    "correct": "to paint",
    "choices": [
      "to carry",
      "to invite",
      "to practice",
      "to paint"
    ]
  },
  {
    "question": "leihen",
    "correct": "to lend",
    "choices": [
      "to lend",
      "bring",
      "garden",
      "to drive"
    ]
  },
  {
    "question": "lernen",
    "correct": "to learn",
    "choices": [
      "to sign",
      "to learn",
      "to come along",
      "to bake"
    ]
  },
  {
    "question": "lesen",
    "correct": "to read",
    "choices": [
      "to register / to enroll / to apply",
      "to feel",
      "to sell",
      "to read"
    ]
  },
  {
    "question": "lieben",
    "correct": "to love",
    "choices": [
      "to lend",
      "to love",
      "to call",
      "each"
    ]
  },
  {
    "question": "meinen",
    "correct": "to mean",
    "choices": [
      "to mean",
      "to chat",
      "to be right",
      "to dress / to put (sth.) on / to attract"
    ]
  },
  {
    "question": "liefern",
    "correct": "to deliver",
    "choices": [
      "to imagine",
      "to deliver",
      "to remember",
      "can / may / to be allowed to do (sth.)"
    ]
  },
  {
    "question": "liegen",
    "correct": "to lie (down) / to recline",
    "choices": [
      "to transfer / to change (transport)",
      "to put",
      "each",
      "to lie (down) / to recline"
    ]
  },
  {
    "question": "meisten",
    "correct": "most",
    "choices": [
      "to sign",
      "most",
      "to draw",
      "to pay"
    ]
  },
  {
    "question": "morgen",
    "correct": "tomorrow",
    "choices": [
      "to renovate",
      "Lost property",
      "tomorrow",
      "to pay"
    ]
  },
  {
    "question": "merken",
    "correct": "to realize / to notice / to memorize",
    "choices": [
      "have to / must",
      "pronounce",
      "to realize / to notice / to memorize",
      "yesterday"
    ]
  },
  {
    "question": "mieten",
    "correct": "to rent",
    "choices": [
      "to watch TV",
      "to rent",
      "to repair",
      "to forbid sth. / to prohibit / to ban sth."
    ]
  },
  {
    "question": "müssen",
    "correct": "have to / must",
    "choices": [
      "have to / must",
      "to have a barbecue",
      "to dance",
      "to fold"
    ]
  },
  {
    "question": "mitbringen",
    "correct": "to bring along / to bring (so./sth.)",
    "choices": [
      "to calculate",
      "to fold",
      "to practice",
      "to bring along / to bring (so./sth.)"
    ]
  },
  {
    "question": "mitspielen",
    "correct": "to play along",
    "choices": [
      "to make a gift / to give sth. to so.",
      "to disturb",
      "to play along",
      "to discuss"
    ]
  },
  {
    "question": "mitmachen",
    "correct": "to participate",
    "choices": [
      "pronounce",
      "to ask",
      "to participate",
      "get out / get off"
    ]
  },
  {
    "question": "mitkommen",
    "correct": "to come along",
    "choices": [
      "to take photos",
      "to lie / to tell a lie",
      "to repair",
      "to come along"
    ]
  },
  {
    "question": "mitnehmen",
    "correct": "to take (sth./so.) / to pick (sth./so.) / to give a lift",
    "choices": [
      "pick up",
      "to take place / to occur",
      "to take (sth./so.) / to pick (sth./so.) / to give a lift",
      "kindergarten"
    ]
  },
  {
    "question": "Mittagessen",
    "correct": "lunch",
    "choices": [
      "lunch",
      "stop",
      "to clean",
      "to try"
    ]
  },
  {
    "question": "möchten",
    "correct": "to want",
    "choices": [
      "to sleep",
      "day after tomorrow",
      "to want",
      "to lie (down) / to recline"
    ]
  },
  {
    "question": "neben",
    "correct": "next",
    "choices": [
      "next",
      "to roast meat",
      "to organize",
      "to need"
    ]
  },
  {
    "question": "modern",
    "correct": "modern",
    "choices": [
      "modern",
      "to collect",
      "different",
      "to paint"
    ]
  },
  {
    "question": "mögen",
    "correct": "to like",
    "choices": [
      "to organize",
      "to like",
      "to travel",
      "to happen"
    ]
  },
  {
    "question": "nehmen",
    "correct": "to take",
    "choices": [
      "to take",
      "to belong to",
      "to know",
      "to translate"
    ]
  },
  {
    "question": "offen",
    "correct": "open",
    "choices": [
      "most",
      "open",
      "airport",
      "rain"
    ]
  },
  {
    "question": "öffnen",
    "correct": "to open",
    "choices": [
      "to organize",
      "against",
      "to open",
      "to want"
    ]
  },
  {
    "question": "nennen",
    "correct": "to call so. sth. / to mention",
    "choices": [
      "to call so. sth. / to mention",
      "to know",
      "to get",
      "bring"
    ]
  },
  {
    "question": "organisieren",
    "correct": "to organize",
    "choices": [
      "Lost property",
      "to organize",
      "to talk",
      "to last"
    ]
  },
  {
    "question": "notieren",
    "correct": "to note",
    "choices": [
      "to carry",
      "to open",
      "to note",
      "to like"
    ]
  },
  {
    "question": "packen",
    "correct": "to pack",
    "choices": [
      "to reserve",
      "to take photos",
      "to pack",
      "to participate / to take part"
    ]
  },
  {
    "question": "parken",
    "correct": "to park",
    "choices": [
      "to inform oneself about (so./sth.) / to catch up on sth.",
      "to put",
      "to park",
      "gladly"
    ]
  },
  {
    "question": "oben",
    "correct": "above",
    "choices": [
      "tire",
      "to hand back / to give back",
      "above",
      "to wake so. up"
    ]
  },
  {
    "question": "passen",
    "correct": "to fit / to suit",
    "choices": [
      "to fit / to suit",
      "work",
      "to need",
      "tomorrow"
    ]
  },
  {
    "question": "passieren",
    "correct": "to happen",
    "choices": [
      "at the bottom / downstairs / below",
      "to have a barbecue",
      "to try",
      "to happen"
    ]
  },
  {
    "question": "prüfen",
    "correct": "to check",
    "choices": [
      "to check",
      "pick up",
      "cake",
      "to get to know"
    ]
  },
  {
    "question": "putzen",
    "correct": "to clean",
    "choices": [
      "get out / get off",
      "to clean",
      "open",
      "to shift sth. / to move sth."
    ]
  },
  {
    "question": "planen",
    "correct": "to plan",
    "choices": [
      "to stay (over night)",
      "to describe",
      "to plan",
      "to visit"
    ]
  },
  {
    "question": "raten",
    "correct": "to guess",
    "choices": [
      "to rent sth. (out) / to let sth.",
      "to sell",
      "to close / to conclude",
      "to guess"
    ]
  },
  {
    "question": "rauchen",
    "correct": "to smoke",
    "choices": [
      "to smoke",
      "to plan",
      "move out",
      "to imagine"
    ]
  },
  {
    "question": "rechnen",
    "correct": "to calculate",
    "choices": [
      "to cough",
      "to calculate",
      "to pack",
      "to undertake sth. / to venture"
    ]
  },
  {
    "question": "recht haben",
    "correct": "to be right",
    "choices": [
      "to check / to controll",
      "to pack",
      "to be right",
      "to listen"
    ]
  },
  {
    "question": "reden",
    "correct": "to talk / to speak",
    "choices": [
      "to stay",
      "Life",
      "to tell",
      "to talk / to speak"
    ]
  },
  {
    "question": "Regen",
    "correct": "rain",
    "choices": [
      "to come here",
      "satisfied",
      "to search",
      "rain"
    ]
  },
  {
    "question": "probieren",
    "correct": "to try",
    "choices": [
      "to make a gift / to give sth. to so.",
      "to advise",
      "to discuss",
      "to try"
    ]
  },
  {
    "question": "regnen",
    "correct": "to rain",
    "choices": [
      "to live",
      "to like",
      "to run back",
      "to rain"
    ]
  },
  {
    "question": "Reifen",
    "correct": "tire",
    "choices": [
      "tire",
      "to meet",
      "to produce",
      "food / meal"
    ]
  },
  {
    "question": "reisen",
    "correct": "to travel",
    "choices": [
      "yesterday",
      "to travel",
      "to try",
      "to change"
    ]
  },
  {
    "question": "reiten",
    "correct": "to ride",
    "choices": [
      "to ride",
      "to shop / to do the shopping",
      "to participate",
      "to bring along / to bring (so./sth.)"
    ]
  },
  {
    "question": "renovieren",
    "correct": "to renovate",
    "choices": [
      "to renovate",
      "rain",
      "to stay (over night)",
      "to jog"
    ]
  },
  {
    "question": "sagen",
    "correct": "to say (sth.) / to tell",
    "choices": [
      "to say (sth.) / to tell",
      "to taste",
      "car / carriage / wagon",
      "each"
    ]
  },
  {
    "question": "sammeln",
    "correct": "to collect",
    "choices": [
      "outside",
      "to collect",
      "chicken",
      "to bring along / to bring (so./sth.)"
    ]
  },
  {
    "question": "reparieren",
    "correct": "to repair",
    "choices": [
      "to bring away",
      "to phone (so.)",
      "to repair",
      "to take place / to occur"
    ]
  },
  {
    "question": "reservieren",
    "correct": "to reserve",
    "choices": [
      "to reserve",
      "to turn on",
      "satisfied",
      "to check / to controll"
    ]
  },
  {
    "question": "schaffen",
    "correct": "to create",
    "choices": [
      "to hope",
      "to get in / to board / to enter",
      "to wrap (sth.) / to pack (sth.)",
      "to create"
    ]
  },
  {
    "question": "riechen",
    "correct": "to smell",
    "choices": [
      "to smell",
      "watch out",
      "to repeat",
      "to live"
    ]
  },
  {
    "question": "scheinen",
    "correct": "seem to be / to seem / to shine",
    "choices": [
      "seem to be / to seem / to shine",
      "to wish",
      "to hear",
      "to transfer"
    ]
  },
  {
    "question": "schenken",
    "correct": "to make a gift / to give sth. to so.",
    "choices": [
      "to make a gift / to give sth. to so.",
      "to stand",
      "to read",
      "to hold (sth.) / to stop"
    ]
  },
  {
    "question": "Rücken",
    "correct": "back",
    "choices": [
      "to cook",
      "back",
      "to say (sth.) / to tell",
      "to paint"
    ]
  },
  {
    "question": "schicken",
    "correct": "to send",
    "choices": [
      "to transfer",
      "to stay",
      "each",
      "to send"
    ]
  },
  {
    "question": "schimpfen",
    "correct": "to rant / to grumble",
    "choices": [
      "to rant / to grumble",
      "to run back",
      "to repeat",
      "to pay"
    ]
  },
  {
    "question": "rufen",
    "correct": "to call",
    "choices": [
      "to fit / to suit",
      "to print",
      "to call",
      "car / carriage / wagon"
    ]
  },
  {
    "question": "schlafen",
    "correct": "to sleep",
    "choices": [
      "to sleep",
      "open",
      "to study",
      "to download"
    ]
  },
  {
    "question": "schließen",
    "correct": "to close / to conclude",
    "choices": [
      "to sit",
      "to discuss",
      "to close / to conclude",
      "to pay"
    ]
  },
  {
    "question": "schwimmen",
    "correct": "to swim",
    "choices": [
      "to collect",
      "to say (sth.) / to tell",
      "satisfied",
      "to swim"
    ]
  },
  {
    "question": "schmecken",
    "correct": "to taste",
    "choices": [
      "to transfer / to change (transport)",
      "to taste",
      "to get",
      "to win"
    ]
  },
  {
    "question": "sehen",
    "correct": "to see",
    "choices": [
      "to confirm",
      "to hike",
      "to appear / to look like (sth.)",
      "to see"
    ]
  },
  {
    "question": "sich schneiden",
    "correct": "to cut oneself",
    "choices": [
      "to come back / to return",
      "to cut oneself",
      "to sell",
      "to register / to enroll / to apply"
    ]
  },
  {
    "question": "schneien",
    "correct": "to snow",
    "choices": [
      "to sit down",
      "to snow",
      "vacation",
      "to go back"
    ]
  },
  {
    "question": "schreiben",
    "correct": "to write",
    "choices": [
      "to write",
      "to know",
      "to hear",
      "to be glad / to rejoice"
    ]
  },
  {
    "question": "sich setzen",
    "correct": "to sit down",
    "choices": [
      "to drink",
      "to sit down",
      "to register / to sign in",
      "to try"
    ]
  },
  {
    "question": "singen",
    "correct": "to sing",
    "choices": [
      "to sing",
      "cake",
      "to phone (so.)",
      "to agree sth. / to reach an agreement"
    ]
  },
  {
    "question": "spielen",
    "correct": "to play",
    "choices": [
      "to taste",
      "to chat",
      "to play",
      "to drive back"
    ]
  },
  {
    "question": "sitzen",
    "correct": "to sit",
    "choices": [
      "to come",
      "to sit",
      "to want",
      "to be glad / to rejoice"
    ]
  },
  {
    "question": "sprechen",
    "correct": "to speak",
    "choices": [
      "at the bottom / downstairs / below",
      "to phone (so.)",
      "to speak",
      "to hurry up"
    ]
  },
  {
    "question": "stattfinden",
    "correct": "to take place / to occur",
    "choices": [
      "to say (sth.) / to tell",
      "call",
      "to check / to controll",
      "to take place / to occur"
    ]
  },
  {
    "question": "sollen",
    "correct": "should / shall",
    "choices": [
      "should / shall",
      "to help",
      "airport",
      "to pay"
    ]
  },
  {
    "question": "stehen",
    "correct": "to stand",
    "choices": [
      "yesterday",
      "bring",
      "to call so. sth. / to mention",
      "to stand"
    ]
  },
  {
    "question": "stellen",
    "correct": "to put",
    "choices": [
      "to lend",
      "at the bottom / downstairs / below",
      "to put",
      "to answer"
    ]
  },
  {
    "question": "sparen",
    "correct": "to save (sth.)",
    "choices": [
      "to exchange",
      "to divide",
      "to save (sth.)",
      "to draw"
    ]
  },
  {
    "question": "sterben",
    "correct": "to die",
    "choices": [
      "to die",
      "to prepare",
      "to end (sth.) / to finish (sth.) / to break up",
      "to come"
    ]
  },
  {
    "question": "spazieren gehen",
    "correct": "to go for a walk",
    "choices": [
      "to go for a walk",
      "to rent",
      "to tinker / to do handicrafts",
      "to smell"
    ]
  },
  {
    "question": "stören",
    "correct": "to disturb",
    "choices": [
      "to disturb",
      "born",
      "to study",
      "depart"
    ]
  },
  {
    "question": "speichern",
    "correct": "to save",
    "choices": [
      "have to / must",
      "to save",
      "to come",
      "to buy"
    ]
  },
  {
    "question": "sich streiten",
    "correct": "to have a fight",
    "choices": [
      "to get in / to board / to enter",
      "to have a fight",
      "to get",
      "to watch TV"
    ]
  },
  {
    "question": "teilnehmen",
    "correct": "to participate / to take part",
    "choices": [
      "aside / beside",
      "to participate / to take part",
      "to apologize",
      "to run back"
    ]
  },
  {
    "question": "telefonieren",
    "correct": "to phone (so.)",
    "choices": [
      "to wash oneself",
      "day after tomorrow",
      "to phone (so.)",
      "to take away"
    ]
  },
  {
    "question": "studieren",
    "correct": "to study",
    "choices": [
      "to rant / to grumble",
      "to lose",
      "to play",
      "to study"
    ]
  },
  {
    "question": "suchen",
    "correct": "to search",
    "choices": [
      "to rent",
      "to watch TV",
      "to search",
      "to compare"
    ]
  },
  {
    "question": "surfen",
    "correct": "to surf",
    "choices": [
      "to transfer / to change (transport)",
      "to get",
      "to surf",
      "to want"
    ]
  },
  {
    "question": "Süßigkeiten",
    "correct": "sweets",
    "choices": [
      "to call so. sth. / to mention",
      "to rent",
      "sweets",
      "to invite"
    ]
  },
  {
    "question": "tanzen",
    "correct": "to dance",
    "choices": [
      "to explain",
      "little",
      "to dance",
      "to smell"
    ]
  },
  {
    "question": "tragen",
    "correct": "to carry",
    "choices": [
      "to carry",
      "to go away",
      "rain",
      "to change / to switch"
    ]
  },
  {
    "question": "trainieren",
    "correct": "work out",
    "choices": [
      "work out",
      "can",
      "to read",
      "justify"
    ]
  },
  {
    "question": "austauschen",
    "correct": "change / exchange",
    "choices": [
      "to make a gift / to give sth. to so.",
      "change / exchange",
      "to practice",
      "to congratulate"
    ]
  },
  {
    "question": "tauschen",
    "correct": "to exchange",
    "choices": [
      "to practice",
      "to use",
      "to exchange",
      "to change"
    ]
  },
  {
    "question": "träumen",
    "correct": "to dream",
    "choices": [
      "to dream",
      "chicken",
      "to taste",
      "rain"
    ]
  },
  {
    "question": "teilen",
    "correct": "to divide",
    "choices": [
      "begin",
      "to like",
      "to watch TV",
      "to divide"
    ]
  },
  {
    "question": "sich treffen",
    "correct": "to meet",
    "choices": [
      "to meet",
      "airport",
      "to drive",
      "to turn (sth.) off"
    ]
  },
  {
    "question": "trinken",
    "correct": "to drink",
    "choices": [
      "to drink",
      "to roast meat",
      "to organize",
      "to understand"
    ]
  },
  {
    "question": "trocken",
    "correct": "dry",
    "choices": [
      "depart",
      "to lock, to finish",
      "kindergarten",
      "dry"
    ]
  },
  {
    "question": "unten",
    "correct": "at the bottom / downstairs / below",
    "choices": [
      "to stay",
      "chicken",
      "at the bottom / downstairs / below",
      "to note"
    ]
  },
  {
    "question": "sich unterhalten",
    "correct": "to talk",
    "choices": [
      "go out",
      "to talk",
      "to clean",
      "open"
    ]
  },
  {
    "question": "unternehmen",
    "correct": "to undertake sth. / to venture",
    "choices": [
      "to undertake sth. / to venture",
      "to fall in love",
      "to bring away",
      "to create"
    ]
  },
  {
    "question": "üben",
    "correct": "to practice",
    "choices": [
      "to pack",
      "to wait",
      "to practice",
      "to paint"
    ]
  },
  {
    "question": "unterschreiben",
    "correct": "to sign",
    "choices": [
      "to sign",
      "girl",
      "to want",
      "to go back"
    ]
  },
  {
    "question": "übermorgen",
    "correct": "day after tomorrow",
    "choices": [
      "arrive",
      "to cough",
      "day after tomorrow",
      "to participate"
    ]
  },
  {
    "question": "untersuchen",
    "correct": "to investigate",
    "choices": [
      "to shop / to do the shopping",
      "to get in / to board / to enter",
      "to investigate",
      "to say (sth.) / to tell"
    ]
  },
  {
    "question": "übernachten",
    "correct": "to stay (over night)",
    "choices": [
      "to stay (over night)",
      "to marry",
      "to listen",
      "small shop"
    ]
  },
  {
    "question": "übersetzen",
    "correct": "to translate",
    "choices": [
      "to die",
      "to participate / to take part",
      "to translate",
      "open"
    ]
  },
  {
    "question": "überweisen",
    "correct": "to transfer",
    "choices": [
      "to roast meat",
      "indoors",
      "to put",
      "to transfer"
    ]
  },
  {
    "question": "umsteigen",
    "correct": "to transfer / to change (transport)",
    "choices": [
      "to transfer / to change (transport)",
      "to note",
      "to recommend",
      "to disturb"
    ]
  },
  {
    "question": "umziehen",
    "correct": "to move",
    "choices": [
      "work",
      "to reach",
      "to divide",
      "to move"
    ]
  },
  {
    "question": "sich umziehen",
    "correct": "to get changed",
    "choices": [
      "to travel",
      "to get changed",
      "to repair",
      "to ask for (sth.)"
    ]
  },
  {
    "question": "verbieten",
    "correct": "to forbid sth. / to prohibit / to ban sth.",
    "choices": [
      "to take a shower",
      "the day before yesterday",
      "to forbid sth. / to prohibit / to ban sth.",
      "to see"
    ]
  },
  {
    "question": "verdienen",
    "correct": "to earn",
    "choices": [
      "to lock, to finish",
      "to be interested in (so./sth.) / to care about (so./sth.)",
      "to earn",
      "to transfer"
    ]
  },
  {
    "question": "vereinbaren",
    "correct": "to agree sth. / to reach an agreement",
    "choices": [
      "to end (sth.) / to finish (sth.) / to break up",
      "to agree sth. / to reach an agreement",
      "gladly",
      "to divide"
    ]
  },
  {
    "question": "vergessen",
    "correct": "to forget",
    "choices": [
      "to be absence / to be missing",
      "to plan",
      "to forget",
      "to create"
    ]
  },
  {
    "question": "vergleichen",
    "correct": "to compare",
    "choices": [
      "aside / beside",
      "to rest",
      "to change",
      "to compare"
    ]
  },
  {
    "question": "verkaufen",
    "correct": "to sell",
    "choices": [
      "garden",
      "to complain",
      "to sell",
      "to have"
    ]
  },
  {
    "question": "vorbereiten",
    "correct": "to prepare",
    "choices": [
      "to prepare",
      "to hear",
      "to try",
      "to complain"
    ]
  },
  {
    "question": "sich verletzen",
    "correct": "to hurt oneself",
    "choices": [
      "yesterday",
      "to hurt oneself",
      "to like",
      "to park"
    ]
  },
  {
    "question": "sich verlieben",
    "correct": "to fall in love",
    "choices": [
      "to fall in love",
      "to hurt oneself",
      "to travel",
      "to have"
    ]
  },
  {
    "question": "vorgestern",
    "correct": "the day before yesterday",
    "choices": [
      "over there",
      "to cancel",
      "the day before yesterday",
      "to hurry up"
    ]
  },
  {
    "question": "verlieren",
    "correct": "to lose",
    "choices": [
      "tire",
      "bring",
      "to lose",
      "to register / to enroll / to apply"
    ]
  },
  {
    "question": "vermieten",
    "correct": "to rent sth. (out) / to let sth.",
    "choices": [
      "to rent sth. (out) / to let sth.",
      "to lay / to put",
      "in the back",
      "to offer"
    ]
  },
  {
    "question": "verpassen",
    "correct": "to miss",
    "choices": [
      "to help so. with sth.",
      "to thank",
      "to miss",
      "to call"
    ]
  },
  {
    "question": "sich vorstellen",
    "correct": "to imagine",
    "choices": [
      "watch out",
      "cake",
      "to be absence / to be missing",
      "to imagine"
    ]
  },
  {
    "question": "verreisen",
    "correct": "to travel",
    "choices": [
      "to close (sth.) / to shut (sth.)",
      "to understand",
      "to travel",
      "to take care of"
    ]
  },
  {
    "question": "verschieben",
    "correct": "to shift sth. / to move sth.",
    "choices": [
      "pick up",
      "to like",
      "to agree sth. / to reach an agreement",
      "to shift sth. / to move sth."
    ]
  },
  {
    "question": "Wagen",
    "correct": "car / carriage / wagon",
    "choices": [
      "to wrap (sth.) / to pack (sth.)",
      "to use",
      "car / carriage / wagon",
      "to bring along / to bring (so./sth.)"
    ]
  },
  {
    "question": "wählen",
    "correct": "to choose / to select / to dial / to vote",
    "choices": [
      "to choose / to select / to dial / to vote",
      "to show / to demonstrate",
      "to discuss",
      "to repeat"
    ]
  },
  {
    "question": "verschieden",
    "correct": "different",
    "choices": [
      "to register / to enroll / to apply",
      "to take (sth./so.) / to pick (sth./so.) / to give a lift",
      "different",
      "to begin"
    ]
  },
  {
    "question": "verstehen",
    "correct": "to understand",
    "choices": [
      "in between",
      "to have a barbecue",
      "to understand",
      "different"
    ]
  },
  {
    "question": "versuchen",
    "correct": "to try",
    "choices": [
      "stomach",
      "to have breakfast",
      "to try",
      "rain"
    ]
  },
  {
    "question": "wandern",
    "correct": "to hike",
    "choices": [
      "work",
      "to thank",
      "to hike",
      "to park"
    ]
  },
  {
    "question": "warten",
    "correct": "to wait",
    "choices": [
      "to rent sth. (out) / to let sth.",
      "to give",
      "to wait",
      "to hang"
    ]
  },
  {
    "question": "wen",
    "correct": "who / whom",
    "choices": [
      "who / whom",
      "to discard sth. / to litter / to throw away",
      "to ask",
      "to spell"
    ]
  },
  {
    "question": "werden",
    "correct": "to become",
    "choices": [
      "to have a fight",
      "to lie / to tell a lie",
      "to become",
      "gladly"
    ]
  },
  {
    "question": "sich waschen",
    "correct": "to wash oneself",
    "choices": [
      "to wash oneself",
      "to be angry",
      "to wrap (sth.) / to pack (sth.)",
      "who / whom"
    ]
  },
  {
    "question": "wechseln",
    "correct": "to change / to switch",
    "choices": [
      "to change / to switch",
      "to have",
      "to clean up",
      "to appear / to look like (sth.)"
    ]
  },
  {
    "question": "wecken",
    "correct": "to wake so. up",
    "choices": [
      "to sign",
      "to write",
      "to note",
      "to wake so. up"
    ]
  },
  {
    "question": "wegbringen",
    "correct": "to bring away",
    "choices": [
      "to advise",
      "to bring away",
      "to apologize",
      "to appear / to look like (sth.)"
    ]
  },
  {
    "question": "wegfahren",
    "correct": "to drive away",
    "choices": [
      "to drive away",
      "the day before yesterday",
      "to celebrate",
      "single / individual / separate"
    ]
  },
  {
    "question": "weggehen",
    "correct": "to go away",
    "choices": [
      "to help so. with sth.",
      "to go away",
      "pronounce",
      "to remember"
    ]
  },
  {
    "question": "weglaufen",
    "correct": "to run away",
    "choices": [
      "to register / to enroll / to apply",
      "to lock, to finish",
      "Goodbye (on the phone)",
      "to run away"
    ]
  },
  {
    "question": "wegmachen",
    "correct": "to remove sth.",
    "choices": [
      "to get",
      "to remove sth.",
      "to remember",
      "to make an application / to apply for sth."
    ]
  },
  {
    "question": "wegnehmen",
    "correct": "to take away",
    "choices": [
      "to sell",
      "to bring away",
      "to inform oneself about (so./sth.) / to catch up on sth.",
      "to take away"
    ]
  },
  {
    "question": "wegwerfen",
    "correct": "to discard sth. / to litter / to throw away",
    "choices": [
      "in between",
      "to discard sth. / to litter / to throw away",
      "get out / get off",
      "to discuss"
    ]
  },
  {
    "question": "wiederholen",
    "correct": "to repeat",
    "choices": [
      "single / individual / separate",
      "to belong to",
      "reply",
      "to repeat"
    ]
  },
  {
    "question": "wegen",
    "correct": "because of",
    "choices": [
      "because of",
      "to understand",
      "to sit",
      "to discuss"
    ]
  },
  {
    "question": "Wiederhören",
    "correct": "Goodbye (on the phone)",
    "choices": [
      "together",
      "to lose",
      "to shop / to do the shopping",
      "Goodbye (on the phone)"
    ]
  },
  {
    "question": "Wiedersehen",
    "correct": "Goodbye (in person) / meet again",
    "choices": [
      "Goodbye (in person) / meet again",
      "to say (sth.) / to tell",
      "to turn on",
      "vacation"
    ]
  },
  {
    "question": "willkommen",
    "correct": "welcome",
    "choices": [
      "to ride",
      "welcome",
      "to sign",
      "to visit"
    ]
  },
  {
    "question": "wissen",
    "correct": "to know",
    "choices": [
      "can",
      "to know",
      "to give",
      "to participate"
    ]
  },
  {
    "question": "weinen",
    "correct": "to cry",
    "choices": [
      "to collect",
      "to talk / to speak",
      "to help",
      "to cry"
    ]
  },
  {
    "question": "weitermachen",
    "correct": "to keep going",
    "choices": [
      "to win",
      "welcome",
      "to keep going",
      "to lie (down) / to recline"
    ]
  },
  {
    "question": "weiterhelfen",
    "correct": "to help so. with sth.",
    "choices": [
      "to help so. with sth.",
      "to report",
      "to last",
      "to undertake sth. / to venture"
    ]
  },
  {
    "question": "wohnen",
    "correct": "to stay / to live",
    "choices": [
      "to stay / to live",
      "to love",
      "to reach",
      "stomach"
    ]
  },
  {
    "question": "wollen",
    "correct": "to want",
    "choices": [
      "next",
      "to watch TV",
      "to want",
      "to guess"
    ]
  },
  {
    "question": "wünschen",
    "correct": "to wish",
    "choices": [
      "to write",
      "to advise",
      "to marry",
      "to wish"
    ]
  },
  {
    "question": "zufrieden",
    "correct": "satisfied",
    "choices": [
      "in between",
      "pick up",
      "satisfied",
      "to participate"
    ]
  },
  {
    "question": "zuhören",
    "correct": "to listen",
    "choices": [
      "to make a gift / to give sth. to so.",
      "to lose",
      "to listen",
      "to hang"
    ]
  },
  {
    "question": "zahlen",
    "correct": "to pay",
    "choices": [
      "to thank",
      "to have a barbecue",
      "each",
      "to pay"
    ]
  },
  {
    "question": "zeichnen",
    "correct": "to draw",
    "choices": [
      "to stay",
      "to prepare",
      "in the back",
      "to draw"
    ]
  },
  {
    "question": "zumachen",
    "correct": "to close (sth.) / to shut (sth.)",
    "choices": [
      "to end (sth.) / to finish (sth.) / to break up",
      "to produce",
      "to close (sth.) / to shut (sth.)",
      "to surf"
    ]
  },
  {
    "question": "zeigen",
    "correct": "to show / to demonstrate",
    "choices": [
      "because of",
      "to rent",
      "to show / to demonstrate",
      "unpacking"
    ]
  },
  {
    "question": "zurückfahren",
    "correct": "to drive back",
    "choices": [
      "welcome",
      "should / shall",
      "to drive back",
      "to spell"
    ]
  },
  {
    "question": "zurückgeben",
    "correct": "to hand back / to give back",
    "choices": [
      "to hand back / to give back",
      "to get in / to board / to enter",
      "the day before yesterday",
      "to like"
    ]
  },
  {
    "question": "zurückgehen",
    "correct": "to go back",
    "choices": [
      "change / exchange",
      "to wrap (sth.) / to pack (sth.)",
      "tomorrow",
      "to go back"
    ]
  },
  {
    "question": "zurückkommen",
    "correct": "to come back / to return",
    "choices": [
      "to come back / to return",
      "at the bottom / downstairs / below",
      "to repeat",
      "to watch TV"
    ]
  },
  {
    "question": "zurücklaufen",
    "correct": "to run back",
    "choices": [
      "to go",
      "to take (sth./so.) / to pick (sth./so.) / to give a lift",
      "watch out",
      "to run back"
    ]
  },
  {
    "question": "zusammen",
    "correct": "together",
    "choices": [
      "to discard sth. / to litter / to throw away",
      "together",
      "to invite",
      "to pay"
    ]
  },
  {
    "question": "zwischen",
    "correct": "in between",
    "choices": [
      "to live",
      "to reach",
      "in between",
      "to visit"
    ]
  },
  {
    "question": "anziehen",
    "correct": "to dress / to put (sth.) on / to attract",
    "choices": [
      "to dress / to put (sth.) on / to attract",
      "the day before yesterday",
      "reply",
      "to download"
    ]
  },
  {
    "question": "ausziehen",
    "correct": "move out",
    "choices": [
      "to speak",
      "to forbid sth. / to prohibit / to ban sth.",
      "move out",
      "to see"
    ]
  }
];