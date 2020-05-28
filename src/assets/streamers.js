const streamers = [
    {
      id: "1",
      name: "Matty_Qu",
      twitch: "https://www.twitch.tv/matty_qu",
      personal: "",
      social: "https://twitter.com/home",
      bio: "Hi! Name is Matty_qu, I'm a queer streamer here to scream a smile on everyone's faces.  I enjoy a variety of games, but I play mostly asymmetrical horror and sims.  Also, my favorite color is mint. ",
      img:require('./img/streamers/Matty_Qu.jpg')
    },
    {
      id: "2",
      name: "quinnntastic",
      twitch: "https://twitch.tv/quinnntastic",
      personal: "https://tastic.me/",
      social: "https://twitter.com/quinnntastic_",
      bio: "I am a queer nonbinary disabled/chronically ill Latinx TTRPG creator, writer, and streamer! I advocate for stronger representation of marginalized groups across media, especially in gaming.  ",
      img:require('./img/streamers/quinnntastic.jpg')
    },
    {
      id: "3",
      name: "Dagonmar",
      twitch: "https://twitch.tv/dagonmar",
      personal: "http://www.dagonmar.tv",
      social: "https://twitter.com/dagonmartv",
      bio: "Dagonmar is a lewd streamer with a focus on story-heavy games. From lewd and outrgeous comedy, to cute puppy dogs, Dagonmar and his community has something for everyone. ",
      img:require('./img/streamers/Dagonmar.jpg')
    },
    {
      id: "4",
      name: "Dubusaeyo",
      twitch: "https://www.twitch.tv/dubusaeyo",
      personal: "https://dubusaeyo.tv",
      social: "https://www.twitter.com/dubusaeyo",
      bio: "I am a chill Twitch streamer who identifies as asexual, aromantic and agender. I love to play a variety of games, especially story and LGBTQIA+ themed games.",
      img:require('./img/streamers/Dubusaeyo.jpg')
    },
    {
      id: "5",
      name: "J0hnJ0hnn",
      twitch: "https://www.twitch.tv/j0hnj0hnn",
      personal: "",
      social: "https://www.twitter.com/j0hn_j0hnn",
      bio: "I'm a 29-year-old proud, body positive gay man. I'm the Co-Founder of Rainbow Arcade, an all LGBTQIA+ Stream Team on Twitch. I love to make people laugh with my quick wit and bubbly personality. ",
      img:require('./img/streamers/J0hnJ0hnn.jpg')
    },
    {
      id: "6",
      name: "JeffBrutlag",
      twitch: "https://twitch.tv/jeffbrutlag",
      personal: "https://jeffbrutlag.com",
      social: "https://twitter.com/jeffbrutlag",
      bio: "I'm a gay streamer focused on story-driven games, horror games, and some simulation games! I'm also a team leader for the Plant Army, a team centered around chat interaction, inclusivity, and positivity. ",
      img:require('./img/streamers/JeffBrutlag.jpg')
    },
    {
      id: "7",
      name: "veritasunae",
      twitch: "https://www.twitch.tv/veritasunae",
      personal: "",
      social: "https://www.twitter.com/veritasunae",
      bio: "I'm a pansexual, agender streamer from Australia, who loves both playing and working on visual novels in between my doctoral work at university. I also really enjoy platformers, puzzle games and Nintendo. ",
      img:require('./img/streamers/veritasunae.jpg')
    },
    {
      id: "8",
      name: "Gabethegamer2011",
      twitch: "https://www.twitch.tv/gabethegamer2011",
      personal: "",
      social: "https://twitter.com/Gabethegamer202 ",
      bio: "I am a 26 Latin gay boy living the Cali Dream. I'm a variety caster with a great attitude, laid-back and ready to make friendships and give you a safe space to chill.",
      img:require('./img/streamers/Gabethegamer2011.jpg')
    },
    {
      id: "9",
      name: "Sierra Myst",
      twitch: "https://www.twitch.tv/sierraxmyst",
      personal: "",
      social: "https://www.twitter.com/sierraxmyst",
      bio: "Sierra Myst is a drag queen from space. She offers fun, creative content in her drag streams followed by a variety of fun games like Animal Crossing, Pokemon, and FF:XIV.",
      img:require('./img/streamers/SierraMyst.jpg')
    },
    {
      id: "10",
      name: "SGAK",
      twitch: "https://www.twitch.tv/sgak",
      personal: "https://sgak19.wixsite.com/stellan",
      social: "https://twitter.com/sgak",
      bio: "I'm that weird-looking nerdy gay pinko commie gamer who is also cuddly and nice (Stellan from Sweden). ",
      img:require('./img/streamers/SGAK.jpg')
    },
    {
      id: "11",
      name: "DandyDamlo",
      twitch: "https://www.twitch.tv/dandydamlo",
      personal: "",
      social: "https://twitter.com/SlamloDamlo",
      bio: "Hello! I'm DandyDamlo. My pronouns are they/them! I'm Non-binary. The goal of my streams is to have be chill, create a welcoming environment where discussion is welcome, and to have some goofs!",
      img:require('./img/streamers/DandyDamlo.jpg')
    },
    {
      id: "12",
      name: "awnr",
      twitch: "https://twitch.tv/awnr",
      personal: "https://awnr.tv",
      social: "https://twitter.com/awnr",
      bio: "When games started showcasing queer characters, Awnr began to see games in a new light. He hopes to spark that same sense of recognition on Twitch, constantly looking at things through a LGBTQIA+ lens.",
      img:require('./img/streamers/awnr.jpg')
    },
    {
      id: "13",
      name: "NincompoopEXE",
      twitch: "https://www.twitch.tv/nincompoopexe",
      personal: "",
      social: "https://twitter.com/NincompoopEXE",
      bio: "I'm Simon, a 30-year-old Swedish gaymer who's dreamt about making gaming content for years. Now I do my best to create a safe community and a place where people can come, be happy and be themselves.",
      img:require('./img/streamers/NincompoopEXE.jpg')
    },
    {
      id: "14",
      name: "Wii Gay",
      twitch: "https://www.twitch.tv/wii_gay",
      personal: "",
      social: "https://www.instagram.com/mmdizzie",
      bio: "I'm a 33-year-old queer/trans POC gamer from the south but now living my best gay life in NYC. Used to play guitar and sing in punk bands – now I'm playing queer video games.",
      img:require('./img/streamers/WiiGay.jpg')
    },
    {
      id: "15",
      name: "FoxQueen",
      twitch: "https://twitch.tv/foxqueen",
      personal: "",
      social: "https://twitter.com/rompingfox",
      bio: "My name's Alice, aka FoxQueen. I'm a variety streamer that mainly focuses on story heavy games, primarily visual novels, JRPGs, and RPGs. I like focusing on having a very chill interactive stream.",
      img:require('./img/streamers/FoxQueen.jpg')
    },
    {
      id: "16",
      name: "iambrandon",
      twitch: "https://www.twitch.tv/iambrandon",
      personal: "",
      social: "https://twitter.com/iamBrandonTV",
      bio: "I am a Twitch variety caster who is also a huge nerd who works in the gaming industry, loves D&D and am the ultimate horror fan. I am proud to positively represent being POC and a part of the LGBT community.",
      img:require('./img/streamers/iambrandon.jpg')
    },
    {
      id: "17",
      name: "ArcadeAshelyn",
      twitch: "https://www.twitch.tv/arcadeashelyn",
      personal: "",
      social: "",
      bio: "I am a pansexual and transfeminine variety streamer that focuses on creating a welcoming community, especially for those of us who are part of the LGBTQIA+ spectrum or others who would like to learn more!",
      img:require('./img/streamers/ArcadeAshelyn.jpg')
    },
    {
      id: "18",
      name: "SlicedRaven",
      twitch: "https://twitch.tv/slicedraven",
      personal: "",
      social: "https://twitter.com/slicedraven",
      bio: "She/Her Pronouns. A variety streamer with a love for horror and humor. I run first playthroughs, Early Access and love to showcase indie titles. Self proclaimed lesbian supreme, facing my fears in flannel.",
      img:require('./img/streamers/SlicedRaven.jpg')
    },
    {
      id: "19",
      name: "dragtrashly",
      twitch: "http://twitch.tv/dragtrashly",
      personal: "https://dragtrashly.com/",
      social: "https://twitter.com/dragtrashly",
      bio: "I'm a drag queen gamer, streamer, performer, comedian, model, celebrity, or whichever of my many delusions you prefer. I include gaming inspirations in my looks and play a variety of games on stream. ",
      img:require('./img/streamers/dragtrashly.jpg')
    },
    {
      id: "20",
      name: "MeteorMatt",
      twitch: "https://www.twitch.tv/meteormatt",
      personal: "",
      social: "https://www.twitter.com/meteormattgames",
      bio: "I'm a gay variety streamer living on the west coast, and I'm very lucky to have a very supportive community. I also love fundraising for LGBTQIA+ charities, including The Trevor Project and Trans Lifeline.",
      img:require('./img/streamers/MeteorMatt.jpg')
    },
    {
      id: "21",
      name: "Coconut_Prince",
      twitch: "https://www.twitch.tv/coconut_prince",
      personal: "",
      social: "https://twitter.com/Coconut__Prince",
      bio: "I am a 26-year-old gay man living in California. I specialize in curating a mellow atmosphere to relax my viewers with a uniquely immersive auditory experience with my voice and with selected musical interludes.",
      img:require('./img/streamers/Coconut_Prince.jpg')
    },
    {
      id: "22",
      name: "DEERE",
      twitch: "https://www.twitch.tv/deere",
      personal: "https://www.streamqueens.net",
      social: "https://www.twitter.com/deardeere",
      bio: "I am DEERE, let's play what you fear! Serving you spooks & lewks, you can find me every Wed & Friday at twitch.tv/DEERE!",
      img:require('./img/streamers/DEERE.jpg')
    },
    {
      id: "23",
      name: "ProjectRuby",
      twitch: " https://www.twitch.tv/projectruby",
      personal: "",
      social: "https://www.twitter.com/projectruby",
      bio: "I'm a variety queer streamer from Portugal. I host a weekly talk show, play video games and sing. I strive to build an inclusive community where people can be themselves.",
      img:require('./img/streamers/ProjectRuby.jpg')
    },
    {
      id: "24",
      name: "OpheliaUp",
      twitch: "https://www.twitch.tv/opheliaup",
      personal: "https://www.opheliaup.com",
      social: "https://www.instagram.com/missopheliaup",
      bio: "I'm a San Diego based Drag Queen streamer on Twitch who specializes in gothy glamor! I play a wide variety of RPGs and action games while providing a safe space for LGBTQ+ individuals and their allies.",
      img:require('./img/streamers/OpheliaUp.jpg')
    },
    {
      id: "25",
      name: "QueenNickiMirage",
      twitch: "https://www.twitch.tv/QueenNickiMirage",
      personal: "",
      social: "https://www.twitter.com/NickiMirageLIVE",
      bio: "Nicki Mirage is a Florida-based drag queen, cosplayer, PhD student, and Twitch Affiliate! They're known in their local scene as \"The Five Dollar Fornicator of Drag\" and subscribers know why! ",
      img:require('./img/streamers/QueenNickiMirage.jpg')
    },
    {
      id: "26",
      name: "nemesisnetwork",
      twitch: "https://www.twitch.tv/nemesisnetwork",
      personal: "",
      social: "https://www.twitter.com/nemesislacroix",
      bio: "I am part of Team Stream Queens, an active drag content creator. I am Twitch's exclusive Bratz doll. I'm a retro gamer with lots of love to share my art on this platform.",
      img:require('./img/streamers/nemesisnetwork.jpg')
    },
    {
      id: "27",
      name: "Evidious515",
      twitch: "https://www.twitch.tv/Evidious515",
      personal: "",
      social: "https://www.twitter.com/Evidious515",
      bio: "Evidious515 (E.V./Evi) is a bearded, busty, beer loving drag queen streaming for Team Stream Queens from the beautiful Midwest! They enjoy giving a good laugh (at their expense) to brighten anyone's mood.",
      img:require('./img/streamers/Evidious515.jpg')
    },
    {
      id: "28",
      name: "xsorcier",
      twitch: "https://www.twitch.tv/xsorcier",
      personal: "",
      social: "https://www.twitter.com/xsorcier",
      bio: "I'm a Twitch streamer focused on chill friendly streams, part of the Team Stream Queens. My streams are both focused on creative/building kind of games and horror games.",
      img:require('./img/streamers/xsorcier.jpg')
    },
    {
      id: "29",
      name: "Dona Tarte",
      twitch: "https://www.twitch.tv/donatarte",
      personal: "https://www.donatarte.com",
      social: "https://www.instagram.com/Dona_Tarte",
      bio: "Hii! My name is Dona! I am a drag queen, twitch streamer and baker. Every week I stream drag makeup, gaming and host my drag baking show, Dona Bakes. ",
      img:require('./img/streamers/DonaTarte.jpg')
    },
    {
      id: "30",
      name: "Joy Stique",
      twitch: "https://www.twitch.tv/joy_stique",
      personal: "",
      social: "https://www.twitter.com/joystique",
      bio: "I am Twitch's resident drag monarch because I am both a King and a Queen! I play a wide variety of games and love to have fun/chill!  ",
      img:require('./img/streamers/JoyStique.jpg')
    },
    {
      id: "31",
      name: "Stephneee_Plz",
      twitch: "https://www.twitch.tv/stephneee_plz",
      personal: "https://linktr.ee/stephneee_plz",
      social: "https://twitter.com/stephneee_plz",
      bio: "A very silly pansexual/bisexual streamer focused on being positive, while seriously talking about the things that drive a lot of people to negativity. Best known for dying in games and laughing about it!",
      img:require('./img/streamers/Stephneee_Plz.jpg')
    },
    {
      id: "32",
      name: "Granny",
      twitch: "http://www.twitch.tv/Granny",
      personal: "",
      social: "https://twitter.com/DEARGRANNY",
      bio: "I stream from a Hobbit Home using my typewriter and camcorder! I enjoy blessing the World Wide Web and making me Grandkids laugh. ",
      img:require('./img/streamers/Granny.jpg')
    },
    {
      id: "33",
      name: "Cash Monet",
      twitch: "https://www.twitch.tv/cashmonetdrag",
      personal: " https://www.instagram.com/cashmonetdrag",
      social: "https://www.twitter.com/imcashmonet",
      bio: "San Francisco Drag Performer. Had a nerd monthly show called Pastel Gore. Twitch Streamer and gamer!",
      img:require('./img/streamers/CashMonet.jpg')
    },
    {
      id: "34",
      name: "Chelora",
      twitch: "https://www.twitch.tv/chelora",
      personal: "",
      social: "https://twitter.com/Chel0ra",
      bio: "Hi! I'm Chelora and I'm a variety drag queen streamer and a member of the Team Stream Queens. I create a wide variety of content focused on creating a positive environment and a safe space for everyone.",
      img:require('./img/streamers/Chelora.jpg')
    },
    {
      id: "35",
      name: "ThatGayGinger",
      twitch: "https://www.twitch.tv/thatgayginger",
      personal: "",
      social: "https://www.Twitter.com/that_gayginger",
      bio: "I'm a very loud, queer, socially anxious caterpillar who plays a lot of story games. I'm from NYC, but live in CA now! I'm nonbinary!",
      img:require('./img/streamers/ThatGayGinger.jpg')
    },
    {
      id: "36",
      name: "RinnSohma",
      twitch: "https://www.twitch.tv/rinnsohma",
      personal: "",
      social: "https://www.twitter.com/rinnsohma",
      bio: "I'm a variety Twitch streamer who identifies as pansexual. My main focus on Twitch is to continue building an inclusive community and safe space for everyone.",
      img:require('./img/streamers/RinnSohma.jpg')
    },
    {
      id: "37",
      name: "honeybri_",
      twitch: "https://www.twitch.tv/honeybri_",
      personal: "",
      social: "https://twitter.com/honeybri_live",
      bio: "I am a pansexual woman who is passionate about creating an inclusive space for all. I have a special love for Nintendo and story driven games.",
      img:require('./img/streamers/honeybri_.jpg')
    },
    {
      id: "38",
      name: "CurryKalel",
      twitch: "https://www.twitch.tv/currykalel",
      personal: "",
      social: "https://twitter.com/CurryKalel",
      bio: "I'm a variety streamer who enjoys any game I can get my hands on. I am known to play a lot of Overwatch and DBD and a bunch of social games with friends.",
      img:require('./img/streamers/CurryKalel.jpg')
    },
    {
      id: "39",
      name: "justicekazzy",
      twitch: "https://www.twitch.tv/justicekazzy",
      personal: "",
      social: "https://twitter.com/JusticeKazzy_",
      bio: "I am a trans masc half-Japanese streamer currently located in Germany. I foster an LGBT+ inclusive community on Twitter and Twitch and talk about LGBT+ issues around the globe to spread awareness.",
      img:require('./img/streamers/justicekazzy.jpg')
    },
    {
      id: "40",
      name: "GlennAngel",
      twitch: "https://www.twitch.tv/glennangel",
      personal: "https://helloglennangel.com/",
      social: "https://twitter.com/HelloGlennAngel",
      bio: "I am a gay Latino streamer who focuses on multiplayer games (especially FFXIV, ESO and GW2). I like to be high energy and very welcoming because I love chatting with others and making them smile.",
      img:require('./img/streamers/GlennAngel.jpg')
    },
    {
      id: "41",
      name: "CrevLM",
      twitch: "https://www.twitch.tv/crevlm",
      personal: "https://www.streamersphere.com",
      social: "https://www.twitter.com/crevlmtv",
      bio: "Hi I’m Lisa/Crev. I’m a disabled retired USAF veteran and also a bisexual content creator on Twitch. I love building a space where people of all walks of life can feel comfortable.",
      img:require('./img/streamers/CrevLM.jpg')
    },
    {
      id: "42",
      name: "urbanbohemian",
      twitch: "https://www.twitch.tv/urbanbohemian",
      personal: "https://urbanbohemian.com",
      social: "https://www.twitter.com/urbanbohemian",
      bio: "Brian is a black queer variety streamer, writer, and foodie with a “PhD in Brunch.” He mostly plays narrative/action RPGs and the occasional looter shooter.",
      img:require('./img/streamers/BrianGray(urbanbohemian).jpg')
    },
    {
      id: "43",
      name: "skittzipoo",
      twitch: "https://www.twitch.tv/skittzipoo",
      personal: "",
      social: "https://twitter.com/skittzipoo",
      bio: "I am a variety streamer on Twitch who plays a lot of indie games, creates cosplay, and much more! My main focus is to foster a welcoming and positive community while having fun.",
      img:require('./img/streamers/skittzipoo.jpg')
    },
    {
      id: "44",
      name: "Miss Cookie Doe",
      twitch: "https://www.twitch.tv/misscookiedoe",
      personal: "https://twitter.com/mscookiedoe",
      social: "",
      bio: "Hi I'm Miss Cookie Doe, a drag streamer on twitch. I do my drag queen transformations and then play games. My favorite games are The Sims 4, Animal Crossing and Final Fantasy.",
      img:require('./img/streamers/MissCookieDoe.jpg')
    },
    {
      id: "45",
      name: "kilcannon",
      twitch: "https://www.twitch.tv/kilcannon",
      personal: "https://www.kilcannon.com",
      social: "https://www.instagram.com/thekilcannon",
      bio: "Kilcannon is also referred to as Kil or Daddycannon by many in the Twitch community. He’s a huge goofball that enjoys a broad variety of games ranging from MMOs, digital card games, FPS's, to RPGs.",
      img:require('./img/streamers/kilcannon.jpg')
    },
    {
      id: "46",
      name: "gaymerglenn",
      twitch: "https://www.twitch.tv/gaymerglenn",
      personal: "https://www.instagram.com/abcdefglenn",
      social: "https://www.twitter.com/gaymerglenn",
      bio: "My name is Glenn and I am a dog dad, taco enthusiast and Overwatch streamer! I am well known amongst my friends and community for being recklessly optimistic and a chaotic good energy in this world.",
      img:require('./img/streamers/gaymerglenn.jpg')
    },
    {
      id: "47",
      name: "Justin",
      twitch: "https://www.twitch.tv/justin_nick",
      personal: "https://www.instagram.com/justinickpgh",
      social: "https://www.twitter.com/justin_moore",
      bio: "Justin is a gay variety streamer on Twitch who is obsessed with story-driven games! His streams revolve around being a fun, inclusive space for all. Co-founder of the Rainbow Arcade.",
      img:require('./img/streamers/Justin.jpg')
    },
    {
      id: "48",
      name: "Psyche",
      twitch: "https://www.twitch.tv/Psyche",
      personal: "https://www.psycheplays.com",
      social: "https://www.twitter.com/PsychePlays",
      bio: "I'm a bisexal, Partnered streamer from Northern Ireland. I make an inclusive, positive, and welcoming space. We love space, sandbox, and story games, and particularly value shared experiences.",
      img:require('./img/streamers/Psyche.jpg')
    },
    {
      id: "49",
      name: "paijemonstre",
      twitch: "https://www.twitch.tv/paijemonstre",
      personal: "https://paijemonstre.wixsite.com/paijemonstre",
      social: "https://www.twitter.com/paijemonstre",
      bio: "I am a high-energy (super kawaii) streamer, illustrator, and bisexual. I pride myself in creating a kind community where people feel content being their authentic selves.",
      img:require('./img/streamers/paijemonstre.jpg')
    },
    {
      id: "50",
      name: "HoboHaus",
      twitch: "https://www.twitch.tv/hobohaus",
      personal: "https://ectobabble.com",
      social: "https://twitter.com/ectobabble",
      bio: "Welcome to Hobo Haus, a ruptured planet in space filled with fantastical creatures, art, and travellers of all shapes and sizes. Have a seat as we explore your world and invite you to explore ours.",
      img:require('./img/streamers/HoboHaus.jpg')
    },
    {
      id: "51",
      name: "Spofie",
      twitch: "https://www.twitch.tv/spofie",
      personal: "",
      social: "https://www.twitter.com/spofiee",
      bio: "I’m a daily streamer of Final Fantasy and variety games. I identify as pansexual and focus on having a cozy community!",
      img:require('./img/streamers/Spofie.jpg')
    },
    {
      id: "52",
      name: "ChiliFarmer",
      twitch: "https://www.twitch.tv/chilifarmer",
      personal: "",
      social: "https://www.youtube.com/c/chilifarmer",
      bio: "I am a blind reaction streamer with a focus on JRPGs and animation. I am passionate about fostering LGBTQIA+ community especially for young adults living in small towns and non-accepting communities.",
      img:require('./img/streamers/ChiliFarmer.jpg')
    },
    {
      id: "53",
      name: "acorntreeinc",
      twitch: "https://www.twitch.tv/acorntreeinc",
      personal: "",
      social: "https://twitter.com/AcornTwee",
      bio: "I love to encourage growth and spread love and positivity. I'm an illustrator that plays a variety of games, but lately a lot of builders like Cities: Skylines or The Sims. I also love adventures, puzzles, and FPS. ",
      img:require('./img/streamers/acorntreeinc.jpg')
    },
    {
      id: "54",
      name: "Meastoso",
      twitch: "https://www.twitch.tv/meastoso/",
      personal: "https://meastoso.com/",
      social: "https://www.instagram.com/meastoso",
      bio: "A FFXIV-focused broadcaster who also co-hosts a gaymer bear themed YouTube show. Meast is passionate about entrepreneurship, software development, foodies, traveling, and LGBTQIA+ equality.",
      img:require('./img/streamers/Meastoso.jpg')
    },
    {
      id: "55",
      name: "Jude Valentin",
      twitch: "https://www.twitch.tv/mermaidqueenjude",
      personal: "https://www.mermaidqueenjude.com",
      social: "https://www.twitter.com/merqueenjude",
      bio: "I am a content creator and storyteller who prides herself in having a compassionate and empathetic community. I have dedicated my career to changing the landscape of who is allowed to be an entertainer. ",
      img:require('./img/streamers/JudeValentin.jpg')
    },
    {
      id: "56",
      name: "Player_Michaelous",
      twitch: "https://www.twitch.tv/player_michaelous",
      personal: "",
      social: "https://twitter.com/Play_Michaelous",
      bio: "I stream part-time while working full time in logistics as an import agent. I found the experience to be quite lovely to be able to communicate with chat and meet people throughout this experience. ",
      img:require('./img/streamers/Player_Michaelous.jpg')
    },
    {
      id: "57",
      name: "Minnty",
      twitch: "https://twitch.tv/minntycream",
      personal: "",
      social: "https://twitter.com/minntycream",
      bio: "Hey, I'm a bisexual 24yo from Spain. I'm a very nice and calm person that enjoys meeting new people and make new friends. I love playing videogames and I'm a LGBT+ and feminism activist in my country. ",
      img:require('./img/streamers/Minnty.jpg')
    },
    {
      id: "58",
      name: "TinyTriesThings",
      twitch: "https://www.twitch.tv/tinytriesthings",
      personal: "",
      social: "https://www.twitter.com/tinytriesthings",
      bio: "I am a variety LGBTQIA+ content Creator streaming multiple titles including indie, RPG and platformer as well as crafting. I'm the community engagement manager for an LGBTQIA+ stream team, the Rainbow Collective.",
      img:require('./img/streamers/TinyTriesThings.jpg')
    },
    {
      id: "59",
      name: "Ryoko82",
      twitch: "https://www.twitch.tv/ryoko82",
      personal: "",
      social: "",
      bio: "I'm Ryoko! I'm Gender Fluid and I love dressing up and cute outfits and wigs. I love all kinds of games!",
      img:require('./img/streamers/Ryoko82.jpg')
    },
    {
      id: "60",
      name: "miabyte",
      twitch: "https://www.twitch.tv/miabyte",
      personal: "",
      social: "https://www.twitter.com/themiabyte",
      bio: "I am a UK based full time content creator and partnered variety streamer on Twitch. I make videos about gaming, puzzles and food, and streaming narrative driven games for my wonderful community.",
      img:require('./img/streamers/miabyte.jpg')
    },
    {
      id: "61",
      name: "ripleyviolet",
      twitch: "https://twitch.tv/ripleyviolet",
      personal: "https://www.ripleyviolet.com",
      social: "https://www.twitter.com/RipleyStorm",
      bio: "I'm a fulltime Variety streamer and Intersex/Transgender Furry artist. I focus on Fundraising, community support, 8- & 16-bit retrogames, and am a voice actor. ",
      img:require('./img/streamers/ripleyviolet.jpg')
    },
    {
      id: "62",
      name: "Andromenary",
      twitch: "https://www.twitch.tv/andromenary",
      personal: "",
      social: "https://twitter.com/andromenary",
      bio: "We are Jae, Five and Kenneth, and we are Andromenary, we are all part of the LGBTQ+ community. We enjoy a range of games from story-based games to FPS and everything in between.",
      img:require('./img/streamers/Andromenary.jpg')
    },
    {
      id: "63",
      name: "sealburn",
      twitch: "https://www.twitch.tv/sealburn",
      personal: "",
      social: "https://twitter.com/sealburn",
      bio: "I'm a 26-year-old working in media and living in Los Angeles. I love playing indie and story-driven games as well as horror games.",
      img:require('./img/streamers/sealburn.jpg')
    },
    {
      id: "64",
      name: "Maesoa",
      twitch: "https://www.twitch.tv/maesoa",
      personal: "",
      social: "https://twitter.com/maesoa",
      bio: "My game interests vary but I aim to be a welcoming individual with a focus on interacting. I keep things pretty chill in my streams and get to know the people in the stream.",
      img:require('./img/streamers/Maesoa.jpg')
    },
    {
      id: "65",
      name: "Elix9",
      twitch: "https://www.twitch.tv/elix9",
      personal: "",
      social: "https://www.twitter.com/elix_9",
      bio: "HR Professional by day, Drag Queen gamer by night, Elix9 (the 9 is silent) is a Latina queen who enjoys horror games and winning your local scream queen competition.",
      img:require('./img/streamers/Elix9.jpg')
    },
    {
      id: "66",
      name: "Mischa",
      twitch: "https://www.twitch.tv/mischacrossing",
      personal: "",
      social: "https://www.twitter.com/mischacrossing",
      bio: "Mischa streams story-driven adventure and life sim games, with a focus on cultivating a friendly community with a warm, cozy atmosphere. ",
      img:require('./img/streamers/Mischa.jpg')
    },
    {
      id: "67",
      name: "MegaPetros",
      twitch: "https://www.Twitch.tv/MegaPetros",
      personal: "",
      social: "https://www.twitter.com/prasmusson",
      bio: "36-year-old Swedish gaymer. Love pizza, gym and kanelbullar. Work in quality assurance, software testing. Play most games but prefer a controller better than mouse and keyboard. ",
      img:require('./img/streamers/MegaPetros.jpg')
    },
    {
      id: "68",
      name: "heyAnnieMok",
      twitch: "http://twitch.tv/heyanniemok",
      personal: "http://cargocollective.com/heyanniemok",
      social: "http://twitter.com/heyanniemok",
      bio: "Annie Mok is a writer-artist, musician, game dev, & streamer. She focuses on games with character.",
      img:require('./img/streamers/heyAnnieMok.jpg')
    },
    {
      id: "69",
      name: "Sammymjay",
      twitch: "https://www.twitch.tv/sammymjay",
      personal: "",
      social: "https://twitter.com/sammy_m_jay",
      bio: "I've been a streamer now for a year and a half, I started streaming to improve my mental health and it's just grown from there, now getting into bodyart and painting. I'm a horror enthusiast who mainly plays Dead by daylight ",
      img:require('./img/streamers/Sammymjay.jpg')
    },
    {
        id: "70",
        name: "Captain Valken David",
        twitch: "https://www.twitch.tv/capnvalkendavid",
        personal: "https://streamlabs.com/capnvalkendavid",
        social: "https://twitter.com/CapnValkenDavid",
        bio: "Heyyo, I'm the Captain! I'm a queer trans drag artist who roleplays as a pirate 90% of the time! I create a safe space for other queer folk and weirdos. We do casual RPGs, Competitive FPS, and speedruns!",
        img:require('./img/streamers/CaptainValken.jpg')
      }
  ]
  export default streamers