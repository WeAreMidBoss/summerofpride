(function(e){function t(t){for(var s,n,o=t[0],l=t[1],c=t[2],d=0,g=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&g.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);m&&m(t);while(g.length)g.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},i={app:0},r=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"017b":function(e,t,a){e.exports=a.p+"img/translifeline.47317977.png"},"034f":function(e,t,a){"use strict";a("85ec")},"035a":function(e,t,a){e.exports=a.p+"img/Store.dc98ca2f.svg"},"0e30":function(e,t,a){},"0ff5":function(e,t,a){e.exports=a.p+"img/PressKitPurple.ec3ed985.svg"},"280c":function(e,t,a){},"3e1c":function(e,t,a){e.exports=a.p+"img/Facebook.9916e3d6.svg"},4194:function(e,t,a){"use strict";a("b011")},"471c":function(e,t,a){"use strict";a("c893")},"4e08":function(e,t,a){"use strict";a("0e30")},"514e":function(e,t,a){e.exports=a.p+"img/TwitterPurple.ef23799d.svg"},5544:function(e,t,a){e.exports=a.p+"img/sims4.05690a1e.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Nav"),a("main",{attrs:{role:"main"}},[e._m(0),a("div",{attrs:{id:"main-content"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("h1",{staticClass:"text-center",attrs:{"data-aos":"slide-up"}},[e._v("Get Ready for the Season of Pride!")]),a("p",{attrs:{"data-aos":"slide-up"}},[e._v("The Season of Pride is a month-long event of LGBTQIA+ (queer) streamers playing queer games, throughout the month of July. These fun “gaymers” will be playing some of the best and most unique games that showcase positive representation of queer characters and stories. Tune in and discover some really great games, and follow some really fun streamer personalities.")]),e._m(1),e._m(2),a("hr"),e._m(3),a("hr"),a("h2",{staticClass:"text-center heading-streamers",attrs:{"data-aos":"slide-up"}},[e._v("STREAMERS")]),a("sync-loader",{attrs:{loading:e.streamersLoading,color:e.loaderColor,size:e.loaderSize}}),a("streamers-swiper",{attrs:{loading:e.streamersLoading,profiles:e.profiles}}),a("h2",{staticClass:"text-center heading-games",attrs:{"data-aos":"slide-up"}},[e._v("GAMES")]),a("sync-loader",{attrs:{loading:e.gamesLoading,color:e.loaderColor,size:e.loaderSize}}),a("games-swiper",{attrs:{loading:e.gamesLoading,games:e.games}}),a("h2",{staticClass:"text-center heading-games",attrs:{"data-aos":"slide-up"}},[e._v("SCHEDULE")]),a("p",{attrs:{"data-aos":"slide-up"}},[e._v("Local time: "+e._s(e.timezone))]),a("sync-loader",{attrs:{loading:e.scheduleLoading,color:e.loaderColor,size:e.loaderSize}}),a("schedule-swiper",{attrs:{loading:e.scheduleLoading,schedules:e.schedules,profiles:e.profiles,games:e.games}}),a("hr"),e._m(4)],1)])])]),a("Footer"),e.showStreamerModal?a("ModalStreamers",{attrs:{profile:this.profile},on:{close:e.closeStreamerInfo}}):e._e(),e.showGameModal?a("ModalGames",{attrs:{game:this.game},on:{close:e.closeGameInfo}}):e._e()],1)],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"jumbotron",attrs:{"data-aos":"zoom-in"}},[s("img",{staticClass:"d-none d-sm-block",attrs:{src:a("6d38"),alt:"Season of Pride"}}),s("img",{staticClass:"d-sm-none",attrs:{src:a("68a6"),alt:"Season of Pride"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{attrs:{"data-aos":"slide-up"}},[e._v("This year, we’re also supporting three wonderful charities—"),a("a",{attrs:{href:"https://www.thetrevorproject.org/",target:"_blank"}},[e._v("The Trevor Project")]),e._v(", "),a("a",{attrs:{href:"https://www.translifeline.org/",target:"_blank"}},[e._v("Trans Lifeline")]),e._v(" and "),a("a",{attrs:{href:"https://gaymerx.org/",target:"_blank"}},[e._v("GaymerX")]),e._v(". Tune into any stream and share your support if you can.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"charities row",attrs:{align:"center"}},[s("div",{staticClass:"charity col"},[s("div",[s("a",{attrs:{href:"https://gaymerx.org/",target:"_target"}},[s("img",{attrs:{src:a("f923"),alt:"GaymerX"}})])]),e._v(" "),s("div",{staticClass:"donate",attrs:{align:"center"}},[s("a",{attrs:{href:"https://tiltify.com/+summer-of-pride-2020/summer-of-pride-2020-gaymerx",target:"_target"}},[e._v("DONATE")])])]),s("div",{staticClass:"charity col"},[s("div",[s("a",{attrs:{href:"https://www.thetrevorproject.org/",target:"_target"}},[s("img",{attrs:{src:a("e8fc"),alt:"The Trevor Project"}})])]),e._v(" "),s("div",{staticClass:"donate"},[s("a",{attrs:{href:"https://tiltify.com/+summer-of-pride-2020/summer-of-pride-2020-trevor-project",target:"_target"}},[e._v("DONATE")])])]),s("div",{staticClass:"charity col"},[s("div",[s("a",{attrs:{href:"https://www.translifeline.org/",target:"_target"}},[s("img",{attrs:{src:a("017b"),alt:"Trans Lifeline"}})])]),e._v(" "),s("div",{staticClass:"donate"},[s("a",{attrs:{href:"https://tiltify.com/+summer-of-pride-2020/summer-of-pride-trans-lifeline",target:"_target"}},[e._v("DONATE")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-12 mail-list-container",attrs:{"data-aos":"zoom-out"}},[a("div",{attrs:{id:"mc_embed_signup"}},[a("form",{staticClass:"validate",attrs:{action:"https://midboss.us5.list-manage.com/subscribe/post?u=56b65e1f2b3ba5e696ffa9e29&id=748c34fc41",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[a("div",{attrs:{id:"mc_embed_signup_scroll"}},[a("label",{attrs:{for:"mce-EMAIL"}},[a("h3",[e._v("Stay Up-to-Date On the Event!")])]),a("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"Email address",required:""}}),a("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[a("input",{attrs:{type:"text",name:"b_56b65e1f2b3ba5e696ffa9e29_748c34fc41",tabindex:"-1",value:""}})]),a("input",{staticClass:"button",attrs:{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe"}})])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"brands"},[s("h1",[e._v("Supporting Organizations")]),s("a",{attrs:{href:"#",target:"_target"}},[s("img",{attrs:{src:a("5544"),alt:"The Sims 4"}})]),s("a",{attrs:{href:"#",target:"_target"}},[s("img",{attrs:{src:a("6058"),alt:"Anna Purna"}})]),s("a",{attrs:{href:"https://igda.org/",target:"_target"}},[s("img",{attrs:{src:a("aed3"),alt:"IGDA"}})]),s("a",{attrs:{href:"https://www.cartoonnetwork.com/",target:"_target"}},[s("img",{attrs:{src:a("8d2c"),alt:"Cartoon Network Games"}})]),e._v(" "),s("br"),s("a",{attrs:{href:"https://www.greenmangaming.com/",target:"_target"}},[s("img",{attrs:{src:a("f47a"),alt:"Green Man Gaming"}})]),s("a",{attrs:{href:"https://www.devolverdigital.com/",target:"_target"}},[s("img",{attrs:{src:a("9a70"),alt:"Devolver Digital"}})]),s("a",{attrs:{href:"https://grumpyfacestudios.com/",target:"_target"}},[s("img",{attrs:{src:a("9494"),alt:"Grumpyface"}})])])}],n=(a("96cf"),a("1da1")),o=[{id:2,name:"AshtonRoses",pronouns:"They / Them",twitch:"https://www.twitch.tv/ashtonroses",personal:"",social:"https://twitter.com/Ashton_Roses",bio:"I've been streaming for 3 years. I've been slightly MIA recently due to personal reasons, but I'm planning to come back soon. I play a variety of games but normally go through phases of playing one game as of late. ",img:"AshtonRoses.jpg"},{id:3,name:"kilcannon",pronouns:"He / Him",twitch:"https://www.twitch.tv/kilcannon",personal:"https://www.kilcannon.com",social:"https://www.twitter.com/thekilcannon",bio:"Kilcannon is a huge goofball that enjoys a broad variety of games ranging from MMOs, digital card games, FPS's, to RPGs. His streams are all about creating a safe space for affirmational, positive community development.",img:"kilcannon.jpg"},{id:4,name:"RyokoSpacePirate",pronouns:"They / Them",twitch:"https://www.twitch.tv/ryokospacepirate",personal:"",social:"",bio:"I'm Ryoko! I'm Pansexual and Gender Fluid and I love video games! ",img:"RyokoSpacePirate.jpg"},{id:5,name:"TinyTrees",pronouns:"She / Her",twitch:"https://www.twitch.tv/tinytrees",personal:"",social:"https://twitter.com/TinyTreesTV",bio:"TinyTrees is a queer content creator focusing on story-based games, crafting & full-time regular charity work on her streams. She enjoys challenge game narratives, applying them to real work experiences & using games to connect with her community",img:"TinyTrees.jpg"},{id:6,name:"Stephneee_Plz",pronouns:"She / Her",twitch:"https://www.twich.tv/stephneee_plz",personal:"",social:"https://www.twitter.com/stephneee_plz",bio:"Just a lil dork havin fun and play vidja games, with a special emphasis on kindness, care, and respect. Two degrees & work doing research. Happy pansexual bean",img:"Stephneee_Plz.jpg"},{id:7,name:"Player_Michaelous",pronouns:"He / Him",twitch:"https://www.twitch.tv/player_michaelous",personal:"",social:"https://twitter.com/Play_Michaelous?s=09",bio:"Gaymer lad with a big love for gaming. Been a massive fan growing up with a major fondness for the Resident Evil and Kingdom Hearts series in particular. ",img:"Player_Michaelous.jpg"},{id:8,name:"Faevyn",pronouns:"he/they",twitch:"https://www.twitch.tv/faevyn",personal:"https://www.faevyn.com/",social:"https://www.twitter.com/faevyn",bio:"Faevyn (he/they) enjoys bringing the love and comfort of gaming to those around them. Upon joining Twitch, Faevyn has become an affiliated streamer, and strives to use gaming to connect with and do good for as many people as possible.",img:"Faevyn.jpg"}],l=o,c=[{id:2,name:"2064: Read Only Memories",desc:"2064: Read Only Memories is a cyberpunk thriller that explores the social challenges of tomorrow through classic adventure gaming. A journalist-turned-detective teams up with Turing, the world’s first sapient machine, to unmask a conspiracy that will shake the foundations of Neo-San Francisco.",warning:"Age 17+: Violence, Blood, Suggestive Themes, Strong Language",url:"https://store.steampowered.com/app/330820/2064_Read_Only_Memories/",youtube:"",img:"2064.jpg"},{id:3,name:"A Mortician's Tale",desc:"A Mortician's Tale is a short, story-driven game about a mortician tasked with running a funeral home.",warning:"Infrequent/Mild Alcohol, Tobacco, or Drug Use or References",url:"https://store.steampowered.com/app/578720/A_Morticians_Tale/",youtube:"",img:"MorticiansTale.jpg"},{id:4,name:"A Normal Lost Phone",desc:"A Normal Lost Phone is a game about exploring the intimacy of an unknown person whose phone was found by the player.",warning:"Age 17+: Suggestive Themes, Strong Language",url:"https://store.steampowered.com/app/523210/A_Normal_Lost_Phone/",youtube:"",img:"ANormalLostPhone.jpg"},{id:5,name:"Ace in Space",desc:"Your name is Adrian Clarke and you've been given the opportunity to live the rest of your life on a distant planet under the watchful eyes of benevolent robots. Help shape society on T-3R4, build relationships with the other settlers, and keep Earth updated through your blog!",warning:"​Depictions of Mental Illness, Cancer, Death, Suicidal Thoughts, Alcohol, Sex/Sexual Content, Undead/Zombie/Ghoul",url:"https://store.steampowered.com/app/1220710/Ace_In_Space/",youtube:"",img:"AceInSpace.jpg"}],m=c,d=[{day:"Thursday, July 1",b1Start:"2021-07-01T9:00:00-07:00",b1Time:"9am - 12pm",b1Name:"Player_Michaelous",b1Game1:"2064: Read Only Memories",b1Game2:"",b2Start:"2021-07-01T12:00:00-07:00",b2Time:"12pm - 3pm",b2Name:"QueenNickiMirage",b2Game1:"Later Daters",b2Game2:"",b3Start:"2021-07-01T15:00:00-07:00",b3Time:"3pm - 6pm",b3Name:"kilcannon",b3Game1:"Outer Wilds",b3Game2:"",b4Start:"2021-07-01T18:00:00-07:00",b4Time:"6pm - 9pm",b4Name:"quinnntastic",b4Game1:"Kitty Powers' Love Life",b4Game2:"",b5Start:"2021-07-01T21:00:00-07:00",b5Time:"9pm - 12am",b5Name:"Cashmonetdrag",b5Game1:"Your Royal Gayness",id:2},{day:"Friday, July 2",b1Start:"2021-07-02T9:00:00-07:00",b1Time:"9am - 12pm",b1Name:"Chelora",b1Game1:"A Mortician's Tale",b1Game2:"",b2Start:"2021-07-02T12:00:00-07:00",b2Time:"12pm - 3pm",b2Name:"mxhufflebuff",b2Game1:"Life is Strange",b2Game2:"",b3Start:"2021-07-02T15:00:00-07:00",b3Time:"3pm - 6pm",b3Name:"NemesisNetwork ",b3Game1:"Afterparty",b3Game2:"",b4Start:"2021-07-02T18:00:00-07:00",b4Time:"6pm - 9pm",b4Name:"TwilightKing94",b4Game1:"Kitty Powers' Matchmaker",b4Game2:"",b5Start:"2021-07-02T21:00:00-07:00",b5Time:"9pm - 12am",b5Name:"DEERE",b5Game1:"The Sims 4",id:3}],g=d,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-backdrop animate__animated animate__faster",class:e.isClosing?"animate__fadeOut":"animate__fadeIn",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[s("div",{staticClass:"modal-streamers animate__animated animate__faster",class:e.isClosing?"animate__zoomOutDown":"animate__zoomInUp",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[s("header",{staticClass:"modal-streamers-header"},[e._t("header",[e._v(" ... "),s("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:e.close}},[e._v(" ✖ ")])])],2),s("section",{directives:[{name:"scroll-lock",rawName:"v-scroll-lock",value:!e.isClosing,expression:"!isClosing"}],staticClass:"modal-streamers-body"},[e._t("body",[s("div",{staticClass:"row"},[s("div",{staticClass:"modal-img-container col-md-6 col-sm-12"},[s("img",{staticClass:"modal-img",attrs:{src:e.publicPath+"streamers/"+e.profile.img}})]),s("div",{staticClass:"modal-description col-md-6 col-sm-12"},[s("div",{staticClass:"modal-streamer-title"},[s("span",{staticClass:"modal-name"},[e._v(e._s(e.profile.name))]),s("span",{staticClass:"modal-pronouns"},[e._v(e._s(e.profile.pronouns))])]),s("span",{staticClass:"modal-description-text"},[e._v(e._s(e.profile.bio))]),s("span",{staticClass:"modal-description-social text-center"},[e.profile.twitch?s("a",{attrs:{href:e.profile.twitch,target:"_blank"}},[s("img",{staticClass:"modal-social",attrs:{src:a("75e7")}})]):e._e(),e.profile.social?s("a",{attrs:{href:e.profile.social,target:"_blank"}},[s("img",{staticClass:"modal-social",attrs:{src:a("fa2e")}})]):e._e(),e.profile.personal?s("a",{attrs:{href:e.profile.personal,target:"_blank"}},[s("img",{staticClass:"modal-social",attrs:{src:a("fbe9")}})]):e._e()])])])])],2)])])},u=[],h={name:"ModalStreamers",props:{profile:{required:!0}},data:function(){return{publicPath:"",isClosing:!1}},methods:{close:function(){var e=this;this.isClosing=!0,setTimeout((function(){e.$emit("close"),e.isClosing=!1}),250)}}},f=h,b=(a("4e08"),a("2877")),w=Object(b["a"])(f,p,u,!1,null,"766560db",null),v=w.exports,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal-backdrop animate__animated animate__faster",class:e.isClosing?"animate__fadeOut":"animate__fadeIn",on:{click:function(t){return t.target!==t.currentTarget?null:e.close(t)}}},[s("div",{staticClass:"modal-games animate__animated animate__faster",class:e.isClosing?"animate__zoomOutDown":"animate__zoomInUp",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[s("header",{staticClass:"modal-games-header"},[e._t("header",[e._v(" ... "),s("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:e.close}},[e._v(" ✖ ")])])],2),s("section",{directives:[{name:"scroll-lock",rawName:"v-scroll-lock",value:!e.isClosing,expression:"!isClosing"}],staticClass:"modal-games-body"},[e._t("body",[s("div",{staticClass:"row"},[s("div",{staticClass:"modal-img-container col-sm-12"},[s("img",{staticClass:"modal-img",attrs:{src:e.publicPath+"games/"+e.game.img}}),s("span",{staticClass:"modal-description-social-mobile text-center"},[e.game.url?s("a",{attrs:{href:e.game.url,target:"_blank"}},[s("img",{staticClass:"modal-social",attrs:{src:a("035a")}})]):e._e(),e.game.url2?s("a",{attrs:{href:e.game.url2,target:"_blank"}},[s("img",{staticClass:"modal-social",attrs:{src:a("cffc")}})]):e._e(),e.game.url3?s("a",{attrs:{href:e.game.url3,target:"_blank"}},[s("img",{staticClass:"modal-social",attrs:{src:a("fbe9")}})]):e._e()])]),s("div",{staticClass:"modal-description col-sm-12"},[s("span",{staticClass:"modal-name"},[e._v(e._s(e.game.name))]),s("span",{staticClass:"modal-description-text"},[e._v(e._s(e.game.desc))]),e.game.warning?s("div",{staticClass:"modal-warning"},[s("div",{staticClass:"modal-warning-wrapper"},[s("span",{staticClass:"modal-warning-title"},[e._v("CONTENT DESCRIPTOR")]),e._v(" "),s("span",{staticClass:"modal-warning-descriptor"},[e._v(" "+e._s(e.game.warning))])])]):e._e(),s("span",{staticClass:"modal-description-social text-center"},[e.game.url?s("a",{attrs:{href:e.game.url,target:"_blank"}},[s("img",{staticClass:"modal-social",attrs:{src:a("035a")}})]):e._e(),e.game.url2?s("a",{attrs:{href:e.game.url2,target:"_blank"}},[s("img",{staticClass:"modal-social",attrs:{src:a("cffc")}})]):e._e(),e.game.url3?s("a",{attrs:{href:e.game.url3,target:"_blank"}},[s("img",{staticClass:"modal-social",attrs:{src:a("fbe9")}})]):e._e()])])]),s("div",{staticClass:"modal-warning-mobile row"},[s("div",{staticClass:"modal-warning-mobile-container col-sm-12"},[e.game.warning?s("div",{staticClass:"modal-warning-mobile-body"},[s("div",{staticClass:"modal-warning-wrapper"},[s("span",{staticClass:"modal-warning-title"},[e._v("CONTENT DESCRIPTOR")]),e._v(" "),s("span",{staticClass:"modal-warning-descriptor"},[e._v(" "+e._s(e.game.warning))])])]):e._e()])])])],2)])])},y=[],C={name:"modalGames",props:{game:{required:!0}},data:function(){return{publicPath:"",isClosing:!1}},methods:{close:function(){var e=this;this.isClosing=!0,setTimeout((function(){e.$emit("close"),e.isClosing=!1}),250)}}},S=C,G=(a("810a"),Object(b["a"])(S,_,y,!1,null,"a518c82e",null)),T=G.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"streamers",attrs:{"data-aos":"slide-left"}},[a("transition",{attrs:{name:"fade"}},[e.loading?e._e():a("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:e.swiperOptions,"data-toggle":"modal","data-target":"#modal-streamers"}},[e._l(e.profiles,(function(t,s){return a("swiper-slide",{key:s,staticClass:"swiper-slide",nativeOn:{click:function(t){return e.showStreamerInfo(s)}}},[a("img",{attrs:{src:e.publicPath+"streamers/"+t.img}}),a("span",{staticClass:"streamer-name"},[e._v(e._s(t.name))])])})),a("div",{staticClass:"streamers-pagination swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),a("div",{staticClass:"streamers-button-prev swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"streamers-button-next swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)},k=[],x=a("7212"),N=(a("a7a3"),{name:"StreamersSwiper",props:["profiles","loading"],components:{Swiper:x["Swiper"],SwiperSlide:x["SwiperSlide"]},directives:{swiper:x["directive"]},data:function(){return{publicPath:"",swiperOptions:{autoplay:{delay:3e3,speed:2500},loop:!0,navigation:{nextEl:".streamers-button-next",prevEl:".streamers-button-prev"},pagination:{el:".streamers-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{1:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:5,spaceBetween:30}}}}},methods:{showStreamerInfo:function(e){this.$parent.showStreamerInfo(e)}}}),P=N,B=(a("471c"),Object(b["a"])(P,I,k,!1,null,"3e95d612",null)),M=B.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"games",attrs:{"data-aos":"slide-right"}},[a("transition",{attrs:{name:"fade"}},[e.loading?e._e():a("swiper",{ref:"swiperGames",staticClass:"swiper",attrs:{options:e.swiperOptions,"data-toggle":"modal","data-target":"#modal-games"}},[e._l(e.games,(function(t,s){return a("swiper-slide",{key:s,staticClass:"swiper-slide",nativeOn:{click:function(t){return e.showGameInfo(s)}}},[a("img",{attrs:{src:e.publicPath+"games/"+t.img}}),a("span",{staticClass:"game-name"},[e._v(e._s(t.name))])])})),a("div",{staticClass:"games-pagination swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),a("div",{staticClass:"games-button-prev swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"games-button-next swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)},E=[],O={name:"GamesSwiper",props:["games","loading"],components:{Swiper:x["Swiper"],SwiperSlide:x["SwiperSlide"]},directives:{swiper:x["directive"]},data:function(){return{publicPath:"",swiperOptions:{autoplay:{delay:3e3,speed:2500},loop:!0,navigation:{nextEl:".games-button-next",prevEl:".games-button-prev"},pagination:{el:".games-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{575:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:3,spaceBetween:30}}}}},methods:{showGameInfo:function(e){this.$parent.showGameInfo(e)}}},D=O,L=(a("4194"),Object(b["a"])(D,j,E,!1,null,"42f96d08",null)),A=L.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"schedule",attrs:{"data-aos":"slide-up"}},[a("transition",{attrs:{name:"fade"},on:{enter:e.enter}},[e.loading?e._e():a("swiper",{ref:"swiperSchedule",staticClass:"swiper",attrs:{options:e.swiperOptions}},[e._l(e.schedules,(function(t,s){return a("swiper-slide",{key:s,staticClass:"swiper-slide"},[a("span",{staticClass:"schedule-day"},[e._v(e._s(e.getDay(t.b1Start)))]),a("table",{staticClass:"schedule-table"},[a("tbody",[a("tr",{class:e.isTime(t.b1Start)?"active":""},[a("th",{staticClass:"schedule-hours",attrs:{scope:"row"}},[e._v(e._s(e.convertDateToLocal(t.b1Start)+" - "+e.calculateEndTime(t.b1Start)))]),a("td",{on:{click:function(a){e.showStreamerInfo(e.getIdByName(t.b1Name))}}},[a("img",{staticClass:"schedule-profile-img",attrs:{src:e.publicPath+"streamers/"+e.profiles[e.getIdByName(t.b1Name)].img}}),a("span",{staticClass:"schedule-streamer-name"},[e._v(e._s(e.profiles[e.getIdByName(t.b1Name)].name))])]),a("td",[a("img",{staticClass:"schedule-game-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b1Game1)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b1Game1))}}}),a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b1Game1)].name))]),t.b1Game2?a("span",[a("img",{staticClass:"schedule-game-img schedule-game-two-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b1Game2)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b1_game2))}}})]):e._e(),t.b1Game2?a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b1Game2)].name))]):e._e()])]),a("tr",{class:e.isTime(t.b2Start)?"active":""},[a("th",{staticClass:"schedule-hours",attrs:{scope:"row"}},[e._v(e._s(e.convertDateToLocal(t.b2Start)+" - "+e.calculateEndTime(t.b2Start)))]),a("td",{on:{click:function(a){e.showStreamerInfo(e.getIdByName(t.b2Name))}}},[a("img",{staticClass:"schedule-profile-img",attrs:{src:e.publicPath+"streamers/"+e.profiles[e.getIdByName(t.b2Name)].img}}),a("span",{staticClass:"schedule-streamer-name"},[e._v(e._s(e.profiles[e.getIdByName(t.b2Name)].name))])]),a("td",[a("img",{staticClass:"schedule-game-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b2Game1)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b2Game1))}}}),a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b2Game1)].name))]),t.b2Game2?a("span",[a("img",{staticClass:"schedule-game-img schedule-game-two-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b2Game2)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b2Game2))}}})]):e._e(),t.b2Game2?a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b2Game2)].name))]):e._e()])]),a("tr",{class:e.isTime(t.b3Start)?"active":""},[a("th",{staticClass:"schedule-hours",attrs:{scope:"row"}},[e._v(e._s(e.convertDateToLocal(t.b3Start)+" - "+e.calculateEndTime(t.b3Start)))]),a("td",{on:{click:function(a){e.showStreamerInfo(e.getIdByName(t.b3Name))}}},[a("img",{staticClass:"schedule-profile-img",attrs:{src:e.publicPath+"streamers/"+e.profiles[e.getIdByName(t.b3Name)].img}}),a("span",{staticClass:"schedule-streamer-name"},[e._v(e._s(e.profiles[e.getIdByName(t.b3Name)].name))])]),a("td",[a("img",{staticClass:"schedule-game-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b3Game1)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b3Game1))}}}),a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b3Game1)].name))]),t.b3Game2?a("span",[a("img",{staticClass:"schedule-game-img schedule-game-two-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b3Game2)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b3_game2))}}})]):e._e(),t.b3Game2?a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b3Game2)].name))]):e._e()])]),a("tr",{class:e.isTime(t.b4Start)?"active":""},[a("th",{staticClass:"schedule-hours",attrs:{scope:"row"}},[e._v(e._s(e.convertDateToLocal(t.b4Start)+" - "+e.calculateEndTime(t.b4Start)))]),a("td",{on:{click:function(a){e.showStreamerInfo(e.getIdByName(t.b4Name))}}},[a("img",{staticClass:"schedule-profile-img",attrs:{src:e.publicPath+"streamers/"+e.profiles[e.getIdByName(t.b4Name)].img}}),a("span",{staticClass:"schedule-streamer-name"},[e._v(e._s(e.profiles[e.getIdByName(t.b4Name)].name))])]),a("td",[a("img",{staticClass:"schedule-game-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b4Game1)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b4Game1))}}}),a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b4Game1)].name))]),t.b4Game2?a("span",[a("img",{staticClass:"schedule-game-img schedule-game-two-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b4Game2)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b4_game2))}}})]):e._e(),t.b4Game2?a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b4Game2)].name))]):e._e()])]),a("tr",{class:e.isTime(t.b5Start)?"active":""},[a("th",{staticClass:"schedule-hours",attrs:{scope:"row"}},[e._v(e._s(e.convertDateToLocal(t.b5Start)+" - "+e.calculateEndTime(t.b5Start)))]),a("td",{on:{click:function(a){e.showStreamerInfo(e.getIdByName(t.b5Name))}}},[a("img",{staticClass:"schedule-profile-img",attrs:{src:e.publicPath+"streamers/"+e.profiles[e.getIdByName(t.b5Name)].img}}),a("span",{staticClass:"schedule-streamer-name"},[e._v(e._s(e.profiles[e.getIdByName(t.b5Name)].name))])]),a("td",[a("img",{staticClass:"schedule-game-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b5Game1)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b5Game1))}}}),a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b5Game1)].name))]),t.b5Game2?a("span",[a("img",{staticClass:"schedule-game-img schedule-game-two-img",attrs:{src:e.publicPath+"games/"+e.games[e.getGameIdByName(t.b5Game2)].img},on:{click:function(a){e.showGameInfo(e.getGameIdByName(t.b5Game2))}}})]):e._e(),t.b5Game2?a("span",{staticClass:"schedule-game-name"},[e._v(e._s(e.games[e.getGameIdByName(t.b5Game2)].name))]):e._e()])])])])])})),a("div",{staticClass:"schedule-pagination swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),a("div",{staticClass:"schedule-button-prev swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{staticClass:"schedule-button-next swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1)},$=[],z=(a("c740"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),{name:"ScheduleSwiper",props:["schedules","profiles","games","loading"],components:{Swiper:x["Swiper"],SwiperSlide:x["SwiperSlide"]},directives:{swiper:x["directive"]},data:function(){return{publicPath:"",initialSlideSet:!1,initialSlide:0,startingDate:"2021-07-01 9:00:00-07:00",swiperOptions:{loop:!0,navigation:{nextEl:".schedule-button-next",prevEl:".schedule-button-prev"}}}},computed:{swiper:function(){return this.$refs.swiperSchedule.$swiper}},mounted:function(){},methods:{enter:function(){0==this.initialSlideSet&&(this.initialSlide=this.getInitialSlide(this.startingDate),this.swiper.slideTo(this.initialSlide),console.log("initialSlide:"+this.initialSlide))},showStreamerInfo:function(e){this.$parent.showStreamerInfo(e)},showGameInfo:function(e){this.$parent.showGameInfo(e)},convertDateToLocal:function(e){var t=e,a=new Date(t);return a=a.toLocaleString("en-US",{hour:"2-digit",hour12:!0}),a},calculateEndTime:function(e){var t=e,a=new Date(t);return a.setHours(a.getHours()+3),a=a.toLocaleString("en-US",{hour:"2-digit",hour12:!0}),a},getDay:function(e){var t=e,a=new Date(t);return a=a.toLocaleString("en-US",{day:"numeric",weekday:"long",month:"long"}),a},getIdByName:function(e){var t=this.profiles.findIndex((function(t){return t.name==e}));return-1!==t?t:0},getGameIdByName:function(e){var t=this.games.findIndex((function(t){return t.name==e}));return-1!==t?t:0},getInitialSlide:function(e){var t=new Date(e),a=new Date,s=a.getTime()-t.getTime();return s=Math.round(s/864e5),this.initialSlideSet=!0,s>=0&&s<=32?s+1:1},isTime:function(e){var t=new Date(e);"Invalid Date"==t&&(e=Date.parse(e.toString().replace("T"," ")),t=new Date(e));var a=new Date,s=a.getTime()-t.getTime();return s=Math.floor(s/36e5%24),this.getDay(t)==this.getDay(a)&&s>=0&&s<3}}}),F=z,H=(a("cf17"),Object(b["a"])(F,R,$,!1,null,"e890e0dc",null)),q=H.exports,U=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("nav",{staticClass:"navbar navbar-expand-sm"},[s("div",{staticClass:"container"},[s("a",{staticClass:"navbar-brand d-none d-sm-block",attrs:{href:"#"}},[s("img",{attrs:{src:a("bc01"),alt:"Midboss Logo"}})]),s("a",{staticClass:"navbar-brand d-sm-none",attrs:{href:"#"}},[s("img",{attrs:{src:a("63ce"),alt:"Midboss Logo"}})]),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#mainNav","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("div",{staticClass:"social-links justify-content-end"},[s("a",{attrs:{href:"https://twitter.com/MidBoss",target:"_blank"}},[s("img",{attrs:{src:a("514e"),alt:"Twitter"}})]),s("a",{attrs:{href:"https://www.facebook.com/WeAreMidBoss",target:"_blank"}},[s("img",{attrs:{src:a("6ab7"),alt:"Facebook"}})]),s("a",{attrs:{href:"http://midboss.com/press/sop",target:"_blank"}},[s("img",{attrs:{src:a("0ff5"),alt:"Press Kit"}})])])])])])}],V=(a("5b49"),{}),J=Object(b["a"])(V,U,K,!1,null,null,null),W=J.exports,X=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 col-sm-12 footer-copy"},[e._v(" © Copyright "),s("span",{attrs:{id:"year"}}),s("br"),e._v(" MidBoss, LLC. ")]),s("div",{staticClass:"col-md-4 col-sm-12"},[s("div",{staticClass:"social-links justify-content-end"},[s("a",{attrs:{href:"https://twitter.com/MidBoss",target:"_blank"}},[s("img",{attrs:{src:a("fa2e"),alt:"Twitter"}})]),s("a",{attrs:{href:"https://www.facebook.com/WeAreMidBoss",target:"_blank"}},[s("img",{attrs:{src:a("3e1c"),alt:"Facebook"}})]),s("a",{attrs:{href:"http://twitch.tv/wearemidboss",target:"_blank"}},[s("img",{attrs:{src:a("75e7"),alt:"Twitch"}})]),s("a",{attrs:{href:"http://midboss.com/press/sop",target:"_blank"}},[s("img",{attrs:{src:a("dc0b"),alt:"Press Kit"}})])])])])])])}],Q={},Z=Object(b["a"])(Q,X,Y,!1,null,null,null),ee=Z.exports,te=a("bc3a"),ae=a.n(te),se=a("9b1a"),ie=a("f5af"),re=a.n(ie),ne=(a("e829"),a("dc60"),{name:"App",components:{ModalStreamers:v,ModalGames:T,Nav:W,Footer:ee,StreamersSwiper:M,GamesSwiper:A,ScheduleSwiper:q,SyncLoader:se["a"]},data:function(){return{animated:!1,streamersLoading:!0,gamesLoading:!0,scheduleLoading:!0,loaderColor:"#51c6d6",loaderSize:"20px",showStreamerModal:!1,showGameModal:!1,schedule:[],schedules:g,profile:[],profiles:l,game:[],games:m,errors:[],timezone:""}},computed:{},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return re.a.init({once:!0,disable:"mobile"}),e.timezone=e.getTimezone(),t.prev=2,t.next=5,ae.a.get("https://api.sheety.co/6bbc237c1ab91b28fd038c18cce46217/soP2021ProcessedData/jsonStreamers");case 5:a=t.sent,e.profiles=a.data.jsonStreamers,e.shuffle(e.profiles),e.streamersLoading=!1,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),e.errors.push(t.t0);case 14:return t.prev=14,t.next=17,ae.a.get("https://api.sheety.co/6bbc237c1ab91b28fd038c18cce46217/soP2021ProcessedData/jsonGames");case 17:s=t.sent,e.games=s.data.jsonGames,e.shuffle(e.games),e.gamesLoading=!1,t.next=26;break;case 23:t.prev=23,t.t1=t["catch"](14),e.errors.push(t.t1);case 26:return t.prev=26,t.next=29,ae.a.get("https://api.sheety.co/6bbc237c1ab91b28fd038c18cce46217/soP2021ProcessedData/jsonSchedule");case 29:i=t.sent,e.schedules=i.data.jsonSchedule,e.scheduleLoading=!1,t.next=37;break;case 34:t.prev=34,t.t2=t["catch"](26),e.errors.push(t.t2);case 37:case"end":return t.stop()}}),t,null,[[2,11],[14,23],[26,34]])})))()},mounted:function(){},watch:{showStreamerModal:function(){return this.showStreamerModal?(this.disableScrolling,void console.log("disabled")):(this.enableScrolling,void console.log("enabled"))}},methods:{showStreamerInfo:function(e){this.profile=this.profiles[e],this.showStreamerModal=!0},closeStreamerInfo:function(){this.showStreamerModal=!1},showGameInfo:function(e){this.game=this.games[e],this.showGameModal=!0},closeGameInfo:function(){this.showGameModal=!1},shuffle:function(e){var t,a,s=e.length;while(0!==s)a=Math.floor(Math.random()*s),s-=1,t=e[s],e[s]=e[a],e[a]=t;return e},getTimezone:function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},disableScrolling:function(){var e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}},enableScrolling:function(){window.onscroll=function(){}}}}),oe=ne,le=(a("034f"),Object(b["a"])(oe,i,r,!1,null,null,null)),ce=le.exports,me=(a("4989"),a("ab8b"),a("1157"),a("77ed"),a("f40c"));s["default"].config.productionTip=!1,s["default"].use(me["a"]),new s["default"]({render:function(e){return e(ce)}}).$mount("#app")},"58de":function(e,t,a){},"5b49":function(e,t,a){"use strict";a("58de")},6058:function(e,t,a){e.exports=a.p+"img/annapurna.65d53d86.png"},"63ce":function(e,t,a){e.exports=a.p+"img/MidBossLogoCastleMobile.db9ddd0b.svg"},"68a6":function(e,t,a){e.exports=a.p+"img/SeasonOfPride2021_Mobile.f1681c59.jpg"},"6ab7":function(e,t,a){e.exports=a.p+"img/FacebookPurple.3f1b8f35.svg"},"6d38":function(e,t,a){e.exports=a.p+"img/SeasonOfPride2021_Banner.3dd89d5c.jpg"},"75e7":function(e,t,a){e.exports=a.p+"img/Twitch.892dbed6.svg"},"810a":function(e,t,a){"use strict";a("d090")},"85ec":function(e,t,a){},"8d2c":function(e,t,a){e.exports=a.p+"img/CN_GAMES.f42a52ac.png"},9494:function(e,t,a){e.exports=a.p+"img/Grumpyface.c340b4a8.png"},"9a70":function(e,t,a){e.exports=a.p+"img/Devolver.9048f34a.png"},aed3:function(e,t,a){e.exports=a.p+"img/igda.14c01119.png"},b011:function(e,t,a){},bc01:function(e,t,a){e.exports=a.p+"img/MidBossLogo.3e07310f.svg"},c893:function(e,t,a){},cf17:function(e,t,a){"use strict";a("280c")},cffc:function(e,t,a){e.exports=a.p+"img/Social.a4ffd8ea.svg"},d090:function(e,t,a){},dc0b:function(e,t,a){e.exports=a.p+"img/PressKit.1c597650.svg"},dc60:function(e,t,a){},e8fc:function(e,t,a){e.exports=a.p+"img/trevorproject.dac67374.png"},f47a:function(e,t,a){e.exports=a.p+"img/greenmangaming.ad3bcbd7.png"},f923:function(e,t,a){e.exports=a.p+"img/gaymerx.0a926bf7.png"},fa2e:function(e,t,a){e.exports=a.p+"img/Twitter.13aa18ea.svg"},fbe9:function(e,t,a){e.exports=a.p+"img/Website.07583503.svg"}});
//# sourceMappingURL=app.053a8241.js.map