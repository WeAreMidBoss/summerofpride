const streamers = [
  {
    id: "1",
    name: "AshtonRoses",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/ashtonroses",
    personal: "",
    social: "https://twitter.com/Ashton_Roses",
    bio: "I've been streaming for 3 years. I've been slightly MIA recently due to personal reasons, but I'm planning to come back soon. I play a variety of games but normally go through phases of playing one game as of late. ",
    img:require('./img/streamers/AshtonRoses.jpg')
  },
  {
    id: "2",
    name: "kilcannon",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/kilcannon",
    personal: "https://www.kilcannon.com",
    social: "https://www.twitter.com/thekilcannon",
    bio: "Kilcannon is a huge goofball that enjoys a broad variety of games ranging from MMOs, digital card games, FPS's, to RPGs. His streams are all about creating a safe space for affirmational, positive community development.",
    img:require('./img/streamers/kilcannon.jpg')
  },
  {
    id: "3",
    name: "RyokoSpacePirate",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/ryokospacepirate",
    personal: "",
    social: "",
    bio: "I'm Ryoko! I'm Pansexual and Gender Fluid and I love video games! ",
    img:require('./img/streamers/RyokoSpacePirate.jpg')
  },
  {
    id: "4",
    name: "TinyTrees",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/tinytrees",
    personal: "",
    social: "https://twitter.com/TinyTreesTV",
    bio: "TinyTrees is a queer content creator focusing on story-based games, crafting & full-time regular charity work on her streams. She enjoys challenge game narratives, applying them to real work experiences & using games to connect with her community",
    img:require('./img/streamers/TinyTrees.jpg')
  },
  {
    id: "5",
    name: "Stephneee_Plz",
    pronouns: "She / Her",
    twitch: "https://www.twich.tv/stephneee_plz",
    personal: "",
    social: "https://www.twitter.com/stephneee_plz",
    bio: "Just a lil dork havin fun and play vidja games, with a special emphasis on kindness, care, and respect. Two degrees & work doing research. Happy pansexual bean",
    img:require('./img/streamers/Stephneee_Plz.jpg')
  },
  {
    id: "6",
    name: "Player_Michaelous",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/player_michaelous",
    personal: "",
    social: "https://twitter.com/Play_Michaelous?s=09",
    bio: "Gaymer lad with a big love for gaming. Been a massive fan growing up with a major fondness for the Resident Evil and Kingdom Hearts series in particular. ",
    img:require('./img/streamers/Player_Michaelous.jpg')
  },
  {
    id: "7",
    name: "Faevyn",
    pronouns: "he/they",
    twitch: "https://www.twitch.tv/faevyn",
    personal: "https://www.faevyn.com/",
    social: "https://www.twitter.com/faevyn",
    bio: "Faevyn (he/they) enjoys bringing the love and comfort of gaming to those around them. Upon joining Twitch, Faevyn has become an affiliated streamer, and strives to use gaming to connect with and do good for as many people as possible.",
    img:require('./img/streamers/Faevyn.jpg')
  },
  {
    id: "8",
    name: "AcornTreeInc",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/acorntreeinc",
    personal: "",
    social: "https://twitter.com/AcornTwee",
    bio: "They/Them pronouns. I focus on just being myself, and letting people be themselves too. I believe that everyone is continually growing and learning, and we can all do that together! ",
    img:require('./img/streamers/AcornTreeInc.jpg')
  },
  {
    id: "9",
    name: "Veritas Unae",
    pronouns: "Any pronouns (he/they preferred)",
    twitch: "https://www.twitch.tv/veritasunae",
    personal: "",
    social: "https://www.twitter.com/veritasunae",
    bio: "I'm a fan of all things puzzles, platforming and picturesque! I hope you can stop by and join my passion for rich storytelling and beautiful environments. As a pansexual agender streamer myself, I hope you find my community warm and inviting.",
    img:require('./img/streamers/VeritasUnae.jpg')
  },
  {
    id: "10",
    name: "Cashmonetdrag",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/cashmonetdrag",
    personal: "https://instagram.com/cashmonetdrag",
    social: "https://www.twitter.com/imcashmonet",
    bio: "Cash Monet is a performer, maker, and dry humor aficionado. Her style is kitschy, glitchy, and a little sticky inspiring from asian culture, video games, and nerd culture. She's cold, hard, Cash Monet",
    img:require('./img/streamers/Cashmonetdrag.jpg')
  },
  {
    id: "11",
    name: "SGAK",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/sgak",
    personal: "https://linktr.ee/stellankarlsson",
    social: " https://www.twitter.com/SGAK",
    bio: "A colorful genderqueer variety twitch gaymer with a passion for cuteness ♡ ",
    img:require('./img/streamers/SGAK.jpg')
  },
  {
    id: "12",
    name: "sealburn",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/sealburn",
    personal: "",
    social: "https://www.twitter.com/sealburn",
    bio: "Hello! I’m sealburn, a gay variety streamer on Twitch who mainly plays horror-survival, story-driven, and co-op games. I love engaging and providing immersive gameplay while getting easily scared and screaming a little too loud. ",
    img:require('./img/streamers/sealburn.jpg')
  },
  {
    id: "13",
    name: "ReadyPlayerGabe",
    pronouns: "He / Him",
    twitch: " https://www.twitch.tv/ReadyPlayerGabe",
    personal: "",
    social: "https://www.instagram.com/ReadyPlayerGabe",
    bio: "Hey I’m ReadyPlayerGabe   “RPG” for short and guess what?! I'm Back for Another Awesome Year of Pride, With some Chill Gameplay and Conversation's. It's Time to Take this Season of Pride by Storm and fly our Color’s High. Without regrets.    ",
    img:require('./img/streamers/ReadyPlayerGabe.jpg')
  },
  {
    id: "14",
    name: "urbanbohemian",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/urbanbohemian",
    personal: "https://urbanbohemian.com",
    social: "https://twitter.com/urbanbohemian",
    bio: "Brian is a Black queer variety streamer, writer, and foodie with a “PhD in Brunch”. He plays visual novels, action RPGs, cozy games and the occasional looter shooter. He loves to have a good time on stream and bring love & disco to every viewer.",
    img:require('./img/streamers/urbanbohemian.jpg')
  },
  {
    id: "15",
    name: "mxhufflebuff",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/mxhufflebuff",
    personal: "",
    social: "https://www.twitter.com/mxhufflebuff",
    bio: "HuffleBuff is a quirky & kind genderqueer variety streamer. They strive to create a safe space for all people to feel valid & accepted. Through joy, laughter & vulnerable conversation, they are making the world a better place, one stream at a time.",
    img:require('./img/streamers/mxhufflebuff.jpg')
  },
  {
    id: "16",
    name: "Hashtag Trashly",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/dragtrashly",
    personal: "https://dragtrashly.com/",
    social: "https://twitter.com/dragtrashly",
    bio: "Drag queen gaymer, performer, comedian, twitch partner, dumpster model. Streams makeup, cosplay, and a variety of games.",
    img:require('./img/streamers/HashtagTrashly.jpg')
  },
  {
    id: "17",
    name: "haaeli",
    pronouns: "They / Them",
    twitch: "https://www.google.com/url?q=https://www.twitch.tv/haaeli",
    personal: "",
    social: "https://www.instagram.com/haaeli_heals",
    bio: "I'm primarily a WoW Classic streamer, but I also 🖤 streaming scary, strange, indie and co-op games! Blue is my natural hair color. I'll use any excuse to do cosplay. I like shiny rocks and telling you why I think you’re cool.",
    img:require('./img/streamers/haaeli.jpg')
  },
  {
    id: "18",
    name: "LukeBoogie",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/lukeboogie",
    personal: "",
    social: "https://twitter.com/LukeBoogieGames",
    bio: "Giant Hairy dude, Videogame lover, nerd, geek, nonbinary spooky scary skeleton, DnD enthusiast and Rampant Demisexual who wants to create a safe space and make people laugh",
    img:require('./img/streamers/LukeBoogie.jpg')
  },
  {
    id: "19",
    name: "Minntycream",
    pronouns: "They / Them, She / Her",
    twitch: "https://twitch.tv/minntycream",
    personal: "",
    social: "https://twitter.com/minntycream",
    bio: "Hey! My name is Minnty or Aisha and I'm a little bisexual and non-binary blob from Spain. I love animals, plants and very cute things. I play a very big variety of games that lets my creativity and my positivity flow! ",
    img:require('./img/streamers/Minntycream.jpg')
  },
  {
    id: "20",
    name: "MerylStrip",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/merylstrip",
    personal: "",
    social: "https://twitter.com/BrettDBurger",
    bio: "Hello! My name is MerylStrip, I'm from the Midwest coast and I'm a queer variety streamer on Twitch. I love playing just about anything from story-driven to horror to FPS. I love to laugh and say \"Ope!\" a lot when surprised.",
    img:require('./img/streamers/MerylStrip.jpg')
  },
  {
    id: "21",
    name: "Dubu",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/dubusaeyo",
    personal: "",
    social: "https://twitter.com/dubusaeyo",
    bio: "Dubu is an Australian streamer who identifies as Asexual, Aromantic and Agender and loves story, LGBTQIA+, VR and RPG games. They're always super chill (and scuffed) and every stream is a cosy stream, even if the gameplay is intense!",
    img:require('./img/streamers/Dubu.jpg')
  },
  {
    id: "22",
    name: "Miabyte",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/miabyte",
    personal: "https://www.miabyte.co.uk",
    social: "https://twitter.com/themiabyte",
    bio: "I'm Miabyte. Twitch Partner & variety streamer, Gayming Mag Podcast host and advocate for trans representation in the gaming industry. I focus on creating inclusive spaces, taking viewers on an adventure and making everyone's day a little bit better.",
    img:require('./img/streamers/Miabyte.jpg')
  },
  {
    id: "23",
    name: "ArchyVision",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/archyvision",
    personal: "",
    social: "https://twitter.com/callmearchy",
    bio: "A career hobbyist and designer, Archy is an Atlanta-based variety streamer with a short attention span. He’s a UX / UI Designer by day, and typically playing a horror or story-based game in the evenings.",
    img:require('./img/streamers/ArchyVision.jpg')
  },
  {
    id: "24",
    name: "Ace",
    pronouns: "She / Her",
    twitch: "http://twitch.tv/a_typicalqueer",
    personal: "",
    social: "http://twitter.com/a_typicalqueer",
    bio: "Ace is a Black queer content creator who aims to stand in the gap for individuals who look like her. Ace mainly plays Devour, Phasmophobia and Rogue Company.",
    img:require('./img/streamers/Ace.jpg')
  },
  {
    id: "25",
    name: "Rinn",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/rinnsohma",
    personal: "",
    social: "https://twitter.com/RinnSohma",
    bio: "Hi, I'm Rinn, a pansexual part-time streamer with a love for story-driven/exploration focused games. Outside of streaming I'm an archaeology graduate, work at a university, and consume copious amounts of science fiction & fantasy.",
    img:require('./img/streamers/Rinn.jpg')
  },
  {
    id: "26",
    name: "Ken2pt0",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/ken2pt0",
    personal: "",
    social: "https://twitter.com/ken2pt0 ",
    bio: "Ken2pt0 focuses on Final Fantasy, Overwatch, & Pokémon. Viewers always get a healthy dose of KEN, stands for KINDNESS (uplifting fun!), EVOLUTION (new approaches, games,), & NANCY-BOI (LGBTQIA+ content). Ken is like an Eevee, limitless potential ",
    img:require('./img/streamers/Ken2pt0.jpg')
  },
  {
    id: "27",
    name: "8BitDylan",
    pronouns: "He / Him",
    twitch: "http://www.twitch.tv/8bitdylan",
    personal: "",
    social: "http://twitter.com/8bitdylan",
    bio: "My name is 8BitDylan and I'm a certified MESS! Doesn't matter what we are doing over here as long as you are entertained is what we care about. Twitch Partner of 6 years and climbing.",
    img:require('./img/streamers/8BitDylan.jpg')
  },
  {
    id: "28",
    name: "Delphron",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/delphron",
    personal: "",
    social: "https://twitter.com/Delphron",
    bio: "Originally from Ireland, Delphron, a gay, ace creator now living in America with his husband, creates content through a variety of games as a vtuber.  ",
    img:require('./img/streamers/Delphron.jpg')
  },
  {
    id: "29",
    name: "stefanduck",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/stefanduck",
    personal: "",
    social: "https://twitter.com/stefanduck_tv",
    bio: "Hi! My name is Jackson, but y'all can call me stefanduck! I'm a mechanical engineer during the day, but at night I'm an LGBTQIA+ variety streamer on Twitch, where I like to play all sorts of games from spooky to cozy! ",
    img:require('./img/streamers/stefanduck.jpg')
  },
  {
    id: "30",
    name: "Andromenary",
    pronouns: "They / Them, Kenneth (he/him), Five (she/her), Jae (they/them)",
    twitch: "https://www.twitch.tv/andromenary",
    personal: "",
    social: "https://twitter.com/andromenary",
    bio: "We are Kenneth, Five and Jae, and we make up Andromenary, a queer streamer gang tired of searching for our place, we decided to make our own! Our streams consist of gaming, funky narration and sudden bursts into song. We hope to see you all in orbit!",
    img:require('./img/streamers/Andromenary.jpg')
  },
  {
    id: "31",
    name: "SlicedRaven",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/slicedraven",
    personal: "",
    social: "https://www.twitter.com/slicedraven",
    bio: "They call me Raven! I am a nuerodiverse lesbian streamer and I live for good vibes, friends and coffee. The nest is a cozy corner of twitch to chat about life, support eachother and be as nerdy as you want to be. Tune in for Horror, Stories, and Art!",
    img:require('./img/streamers/SlicedRaven.jpg')
  },
  {
    id: "32",
    name: "bootsyyyy",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/bootsyyyy",
    personal: "https://www.lovejess.co",
    social: "https://www.twitter.com/bootsyyyy3",
    bio: "bootsyyyy is a pansexual creative whirlwind with a soft spot for all things cozy and cute. She is an illustrator, artist, and avid video game lover; Bad at games, but plays them anyway. She survives on immaculate vibes and Diet Dr. Pepper.",
    img:require('./img/streamers/bootsyyyy.jpg')
  },
  {
    id: "33",
    name: "FoxQueen",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/foxqueen",
    personal: "",
    social: "",
    bio: "Hiya! My names Alice aka FoxQueen! I'm a super gay (pansexual) variety streamer who focuses on JRPGs and anime-esc games! My current obsession's are FFXIV, Genshin Impact, and Hades! ",
    img:require('./img/streamers/FoxQueen.jpg')
  },
  {
    id: "34",
    name: "SincerelyUnique",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/sincerelyunique",
    personal: "",
    social: "https://twitter.com/twouniquefouru",
    bio: "Unique is a 22-year old streamer from Texas. When he's not working, he's streaming and loves to talk about games with everyone. He believes in the community-building capability of games and enjoys including everyone in on the fun.",
    img:require('./img/streamers/SincerelyUnique.jpg')
  },
  {
    id: "35",
    name: "Joy_Stique",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/joy_stique",
    personal: "",
    social: "https://www.twitter.com/joy_stique",
    bio: "Joy Stique is Twitch's resident Drag Monarch because they are both a king AND a queen! They play a wide variety of games, bringing their chaotic thembo energy to every game they play!",
    img:require('./img/streamers/Joy_Stique.jpg')
  },
  {
    id: "36",
    name: "meleemira",
    pronouns: "They / Them, She / Her",
    twitch: "https://twitch.tv/meleemira",
    personal: "",
    social: "https://www.twitter.com/meleemira",
    bio: "Meleemira (she/they) is a black, queer variety streamer with a focus on story-based, indie, and simulation games. Their community values chat interaction, inclusivity, charity, and more all while promoting a safe space to exist for everyone.",
    img:require('./img/streamers/meleemira.jpg')
  },
  {
    id: "37",
    name: "BeccaBeckery",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/BeccaBeckery",
    personal: "",
    social: "https://www.twitter.com/BeccaBeckery",
    bio: "I am bi/pan, demisexual, Irish content creator, whose content is focused around charity events, and raising awareness for disabilities and the LGBTQIA+ community. I mainly play games like Stardew, Marbles, and more recently Biomutant and Apex :)",
    img:require('./img/streamers/BeccaBeckery.jpg')
  },
  {
    id: "38",
    name: "JeffBrutlag",
    pronouns: "They / Them, He / Him",
    twitch: "https://twitch.tv/jeffbrutlag",
    personal: "https://jeffbrutlag.com",
    social: "https://twitter.com/jeffbrutlag",
    bio: "JeffBrutlag is a variety streamer and writer, focusing on games with stories, horror games, Nintendo games, some simulation games, and community interaction. They also often talk about how to make your spaces safer, as well as various queer topics.",
    img:require('./img/streamers/JeffBrutlag.jpg')
  },
  {
    id: "39",
    name: "RedSonja",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/redsonja",
    personal: "",
    social: "https://www.twitter.com/redsonja575",
    bio: "Hi! I'm Redsonja, former speedrunner and still ranked top ten in the world in the cuphead leaderboards. I stream mostly WoW content nowadays. I am hella gay and probably better at games than you. ",
    img:require('./img/streamers/RedSonja.jpg')
  },
  {
    id: "40",
    name: "Feynris7",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/feynris7",
    personal: "https://www.feynris.com",
    social: "https://www.twitter.com/feynris7",
    bio: "Hey I'm Feyn or Dan (He/Him) On any given day I could be putting out fires in the kitchen while *attempting* to bake, screaming at jump scares, enjoying a mukbang, making a snow man, or even trying to power through a game. But its always a good time.",
    img:require('./img/streamers/Feynris7.jpg')
  },
  {
    id: "41",
    name: "ShadowTtar",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/shadowttar",
    personal: "",
    social: "https://www.instagram.com/shadowttar/",
    bio: "I'm a Scottish variety streamer who is a very passionate cosplayer. I immigrated to the US in 2019 after spending 5 summers working at a camp teaching Archery & outdoor activities like Climbing/Hiking. I stream 5 days a week & love meeting new people",
    img:require('./img/streamers/ShadowTtar.jpg')
  },
  {
    id: "42",
    name: "LiquidRina",
    pronouns: "They / Them, She / Her, He / Him, Ze / Zir, Xe / Xir",
    twitch: "https://www.twitch.tv/liquidrina",
    personal: "https://liquidrina.carrd.co/",
    social: "https://twitter.com/LiquidRina",
    bio: "Rina (ze/they/he/she) is a qtpoc streamer who wants to try a little bit of everything. Ze is also a VA who loves to stream indie games, play ttrpgs, and create cursed little objects to share with the world.",
    img:require('./img/streamers/LiquidRina.jpg')
  },
  {
    id: "43",
    name: "AllyRaeven",
    pronouns: "She / Her, any",
    twitch: "https://www.twitch.tv/allyraeven",
    personal: "",
    social: "https://www.twitter.com/allyraeven",
    bio: "AllyRaeven (she/her/any) is a queer, bisexual, and chronically ill variety streamer on Twitch. Her Raeven's Nest community is inclusive, cozy, and wholesome, with just the right amount of chaos.",
    img:require('./img/streamers/AllyRaeven.jpg')
  },
  {
    id: "44",
    name: "quinnntastic",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/quinnntastic",
    personal: "https://tastic.me/",
    social: "https://twitter.com/quinnntastic_",
    bio: "Quinn (she/they) is a queer nonbinary polyam disabled/chronically ill Latine streamer and creative. They strive to celebrate queer joy and cultivate a space for relaxation and revelry!",
    img:require('./img/streamers/quinnntastic.jpg')
  },
  {
    id: "45",
    name: "DEERE",
    pronouns: "She / Her",
    twitch: "https://twitch.tv/deere",
    personal: "",
    social: "https://twitter.com/deardeere",
    bio: "My name is DEERE, let's play what you fear! Named Gayming Mag's LGBTQ Streamer of the Year & Founder of Team Stream Queens, her mission is to carve out a space where drag is fun and accessible through Twitch!",
    img:require('./img/streamers/DEERE.jpg')
  },
  {
    id: "46",
    name: "LezBaeAnna",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/lezbaeanna",
    personal: "",
    social: "https://www.instagram.com/lezbaeanna/",
    bio: "LEZ BE HONEST, I am LezBaeAnna! A Non-Binary Latinx Drag Artist who plays a variety of games such as Bioshock, DBD, and Pokemon. But I also play some scary games too! Proud member of Team Stream Queens. Here to create a safe space to vibe!",
    img:require('./img/streamers/LezBaeAnna.jpg')
  },
  {
    id: "47",
    name: "Chelora",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/chelora",
    personal: "",
    social: "https://twitter.com/Chel0ra",
    bio: "Chelora is a Trans/Nonbinary Canadian drag artist who loves color, bugs, spiders and puns!  She streams a wide variety of new and old games and works with Team Stream Queens on their social committee!",
    img:require('./img/streamers/Chelora.jpg')
  },
  {
    id: "48",
    name: "Chara Couture",
    pronouns: "They / Them, She / Her",
    twitch: "https://twitch.tv/characouture",
    personal: "",
    social: "https://www.twitter.com/chara_couture",
    bio: "A genderfluid fashion illustrator, drag queen, variety streamer, and all-around nerd who combines art and makeup to celebrate iconic characters and character designs from the gaming pantheon.",
    img:require('./img/streamers/CharaCouture.jpg')
  },
  {
    id: "49",
    name: "MARISOL",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/MARISOLLORDS",
    personal: "https://www.marisollords.com",
    social: "https://www.instagram.com/marisollords",
    bio: "A Latinx, non-binary, drag queen based in Florida. Performing live and streaming makeup and video games on twitch are their passion. ",
    img:require('./img/streamers/MARISOL.jpg')
  },
  {
    id: "50",
    name: "AnnieKrevice",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/anniekrevice",
    personal: "",
    social: "https://twitter.com/AnnieKrevice",
    bio: "Annie Krevice is a trans drag queen and streamer from Melbourne, Australia. She's a little bit daggy, a little bit lewd, and loves to play online with friends and live her e-girl fantasy.",
    img:require('./img/streamers/AnnieKrevice.jpg')
  },
  {
    id: "51",
    name: "Maesoa",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/maesoa",
    personal: "",
    social: "https://twitter.com/maesoa",
    bio: "I'm Maesoa or Mae for short and I'm a very queer variety streamer whom loves puns, bad jokes and games. I aim to create safe spaces for all people while also trying to entertain. I aim to make people laugh and/or smile. ",
    img:require('./img/streamers/Maesoa.jpg')
  },
  {
    id: "52",
    name: "NemesisNetwork ",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/nemesisnetwork",
    personal: "",
    social: "https://www.twitter.com/nemesislacroix",
    bio: "My name is Nemesis and I’m Twitch’s exclusive nonbinary BRATZ doll.  I run the network on Twitch every Tuesday, Thursday, Saturday, & Sunday!  I’m a retro variety streamer that predominantly plays Wii, Gamecube, and N64 games! ",
    img:require('./img/streamers/NemesisNetwork.jpg')
  },
  {
    id: "53",
    name: "Amanda Xpress",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/amandaxpress",
    personal: "",
    social: "https://www.instagram.com/amandaxpress",
    bio: "Amanda Xpress is the laid-back (wink wink) So-Cal queen that enjoys good grub and a good balad. She's everyone's favorite Asian takeout.",
    img:require('./img/streamers/AmandaXpress.jpg')
  },
  {
    id: "54",
    name: "Dona Tarte",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/donatarte",
    personal: "https://www.donatarte.com/",
    social: "https://twitter.com/dona_tarte",
    bio: "Dona Tarte is a variety streamer, Irish icon and Queen of Baking on Twitch! Expect Drag, Horror, Baking and a tonne of charity events all held up by a fabulous community.",
    img:require('./img/streamers/DonaTarte.jpg')
  },
  {
    id: "55",
    name: "Dagonmar",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/dagonmar",
    personal: "https://dagonmar.tv",
    social: "https://www.twitter.com/dagonmartv",
    bio: "Dagonmar puts on funny and lewd content and has built amazing, welcoming, and close-knit community. Come see why he's been featured in multiple gaming news articles!",
    img:require('./img/streamers/Dagonmar.jpg')
  },
  {
    id: "56",
    name: "Passion's Planet",
    pronouns: "She / Her",
    twitch: "https://www.twitch.tv/passionsplanet",
    personal: "https://passionsplanet.carrd.co/",
    social: "https://twitter.com/PassionsPlanet",
    bio: "She's a streamer, editor, DJ and an all around big breasted trans bimbo who will live in your head rent free.  It's truly Passion's Planet, and you're just livin' in it.",
    img:require('./img/streamers/PassionsPlanet.jpg')
  },
  {
    id: "57",
    name: "QueenNickiMirage",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/queennickimirage",
    personal: "",
    social: "https://twitter.com/NickiMirageLIVE",
    bio: "Nicki Mirage is a Florida-based drag queen, cosplayer, and Twitch Partner with a PhD in Bio Engineering! They've been doing drag 8 years and variety streaming 2 years.  Catch them doing makeup, gaming, and performing on Twitch.tv/QueenNickiMirage!",
    img:require('./img/streamers/QueenNickiMirage.jpg')
  },
  {
    id: "58",
    name: "Apple Aday",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/appleadayxo",
    personal: "",
    social: "https://www.tiktok.com/@appleadayxo?lang=en",
    bio: "Apple Aday is funny, stupid and gorgeous. She loves to eat and terribly plays video games. Catch her with a brand new talk show guest and drag show every month! ",
    img:require('./img/streamers/AppleAday.jpg')
  },
  {
    id: "59",
    name: "Polople",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/Polople",
    personal: "",
    social: "https://twitter.com/jamespolople",
    bio: "Polople or James is a 23 year old queer stream from South Australia. They play and stream a range of games, but mainly focusing on RPG/Story Driven titles. ",
    img:require('./img/streamers/Polople.jpg')
  },
  {
    id: "60",
    name: "Snow Heartlock",
    pronouns: "They / Them",
    twitch: "https://www.twitch.tv/snowheartlock",
    personal: "",
    social: "https://twitter.com/snoh_mlem",
    bio: "Hey there! I'm Snow, a non-binary, coffee loving streamer who mainly plays JRPGs! Lately I've been really into the OG NieR, and I have plans in playing Automata and Replicant! I like to think that my stream is a really chill and cozy enviroment~!",
    img:require('./img/streamers/SnowHeartlock.jpg')
  },
  {
    id: "61",
    name: "NincompoopEXE",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/nincompoopexe",
    personal: "",
    social: "https://twitter.com/NincompoopEXE",
    bio: "My name is Simon, AKA NincompoopEXE! I'm a gay Swede who streams a variety of games over on Twitch. You'll usually find me playing RPGs, open world games & indie games, all while creating an open, safe & welcoming community for everyone who joins.",
    img:require('./img/streamers/NincompoopEXE.jpg')
  },
  {
    id: "62",
    name: "ObbyTheBird",
    pronouns: "They / Them, She / Her",
    twitch: "https://www.twitch.tv/obbythebird",
    personal: "",
    social: "https://www.twitter.com/obbythebird",
    bio: "Hi, I'm Obby! Obby the Bird! I am a nonbinary birdbrain cruising my way through life with laughter and fart jokes. Oh! And cartoons, I adore cartoons.",
    img:require('./img/streamers/ObbyTheBird.jpg')
  },
  {
    id: "63",
    name: "Aphasia Speaks",
    pronouns: "They / Them, She / Her, He / Him",
    twitch: " https://www.twitch.tv/Aphasiaspeaks",
    personal: "",
    social: "https://twitter.com/AphasiaSpeaks",
    bio: "I am Aphasia Speaks! A genderqueer black digital content creator, and drag artist. I  am loud and just a little shady. But i also have a heart of gold that loves to meet new people and share the love!",
    img:require('./img/streamers/AphasiaSpeaks.jpg')
  },
  {
    id: "64",
    name: "cwitine",
    pronouns: "She / Her",
    twitch: "http://twitch.tv/cwitine",
    personal: "",
    social: "http://instagram.com/christine.mp3",
    bio: "I am a lesbian streamer ready to kick butt in anything. I love music production and playing lots of games.",
    img:require('./img/streamers/cwitine.jpg')
  },
  {
    id: "65",
    name: "Glitter",
    pronouns: "He / Him",
    twitch: "https://twitch.tv/fistfulofglittergaming",
    personal: "",
    social: "https://twitter.com/FoGlitterGaming",
    bio: "Hi I'm Glitter! I'm a queer Latinx variety streamer who likes to laugh way too loud and can't read in-game maps like...at all.",
    img:require('./img/streamers/Glitter.jpg')
  },
  {
    id: "66",
    name: "chasecubed",
    pronouns: "They / Them, She / Her, He / Him",
    twitch: "https://www.twitch.tv/chasecubed",
    personal: "https://chasecubed.carrd.co/",
    social: "https://chasecubed.carrd.co/",
    bio: "Chase here! I'm a disabled gay streamer, artist, writer, gamer, game dev, and cosplayer. I'm developing games that I, and others within the LGBTQIA+ and disability community, can identify with--representation matters. ",
    img:require('./img/streamers/chasecubed.jpg')
  },
  {
    id: "67",
    name: "the_juliancito",
    pronouns: "He / Him",
    twitch: "https://www.twitch.tv/the_juliancito",
    personal: "",
    social: "https://www.twitter.com/the_juliancito",
    bio: "Julián, aka the_juliancito, is a queer, trans, Puerto Rican, Jewish, content creator who fosters a passionate community that thrives on activism for the LGBTQIA+ community and more.",
    img:require('./img/streamers/the_juliancito.jpg')
  }
]
  export default streamers