(function(e){function t(t){for(var r,o,s=t[0],l=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0340":function(e,t,n){e.exports=n.p+"img/gigantic.93ab6a33.jpg"},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0917":function(e,t,n){var r={"./james.jpg":"da351","./joe.jpg":"110e","./mark.jpeg":"d638"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="0917"},"0a29":function(e,t,n){},"110e":function(e,t,n){e.exports=n.p+"img/joe.90431c52.jpg"},"1b39":function(e,t,n){"use strict";var r=n("8476"),a=n.n(r);a.a},"2ba2":function(e,t,n){"use strict";var r=n("81c1"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("llnav",{ref:"nav"}),n("div",{attrs:{id:"scrollbar"}},[n("div",{ref:"logoScroll",attrs:{id:"logoScroll"},on:{mousedown:function(t){e.clicked=!0},mouseup:function(t){e.clicked=!1}}})]),n("div",{ref:"inner",attrs:{id:"content"}},[n("div",{ref:"atf",staticClass:"block"},[n("div",{staticClass:"brg"}),n("div",{attrs:{id:"logoCont"}},[n("llogo",{ref:"logo",attrs:{rot:e.rot}}),n("div",{staticClass:"mtn"})],1)]),n("div",{staticClass:"block",attrs:{id:"imagination"}},[n("p",{staticClass:"cta_copy",attrs:{id:"test"}},[e._v("Lorem ipsum dolor sit amet, consectetur adipising. We are a "),n("llink",{attrs:{href:"#experience"}},[e._v("team of developers")]),e._v(" Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. "),n("br"),n("llink",{attrs:{href:"#team"}},[e._v("proven track record of experiences")]),e._v(" Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum "),n("llink",{attrs:{href:"#imagination"}},[e._v("imagination")]),e._v(" Etiam mattis ullamcorper dui. Aliquam erat volutpat, lorem "),n("llink",{attrs:{href:"#contact"}},[e._v("join us")]),e._v(" oCras condimentum velit eget dui.")],1)]),n("div",{staticClass:"block content",attrs:{id:"team"}},[e._m(0),n("div",{staticClass:"innercont"},e._l(e.profiles,(function(e,t){return n("llprofile",{key:t,attrs:{profile:e}})})),1)]),n("div",{staticClass:"block content",attrs:{id:"experience"}},[e._m(1),e._l(e.experiences,(function(e,t){return n("llgame",{key:t,attrs:{game:e}})}))],2),e._m(2)])],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"innercont"},[n("h2",[e._v("Team of experienced developers.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"innercont"},[n("h2",[e._v("Proven track record of creating legendary experiences.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"block",attrs:{id:"contact"}},[n("div",{staticClass:"innercont"},[e._v(" Join us ")])])}],o=n("cffa"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:e.href,target:e.target}},[n("div",{ref:"top",staticClass:"top"}),n("div",{ref:"bot",staticClass:"bot"}),n("span",[e._t("default")],2)])},l=[],u={name:"llink",props:{target:{type:String,default:""},href:{type:String,default:"#"}},mounted:function(){var e=this;this.$el.addEventListener("mouseout",(function(){o["a"].to(e.$refs["top"],.4,{opacity:0}),o["a"].to(e.$refs["bot"],.4,{opacity:0})})),this.$el.addEventListener("mouseenter",(function(){o["a"].from(e.$refs["top"],.2,{left:"-20"}),o["a"].from(e.$refs["bot"],.2,{right:"-20"}),o["a"].to(e.$refs["top"],.4,{opacity:1}),o["a"].to(e.$refs["bot"],.4,{opacity:1})}))}},c=u,d=(n("2ba2"),n("2877")),f=Object(d["a"])(c,s,l,!1,null,"262861d6",null),p=f.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"logoContainer"}},[r("img",{attrs:{src:n("bbb8"),alt:""}}),r("div",{staticClass:"test"},[r("div",{staticClass:"top"}),r("div",{staticClass:"bot"})])])}],v=(n("a9e3"),{name:"llogo",props:{rot:{type:Number,default:0}},watch:{rot:function(e){o["a"].to(".test",.3,{transform:"rotate("+e+"deg)"})}},mounted:function(){o["a"].from("img",1,{autoAlpha:0,delay:.3}),o["a"].from(".top",.5,{width:0,height:0}),o["a"].from(".bot",.5,{width:0,height:0})}}),h=v,b=(n("dfc8"),Object(d["a"])(h,m,g,!1,null,"4b3000f5",null)),y=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile"},[n("div",{staticClass:"img",style:{backgroundImage:"url('"+e.i+"')"}}),n("h3",[e._v(e._s(e.profile.name)+" "),n("div",[e._v(e._s(e.profile.title))])]),n("p",[e._v(e._s(e.profile.description))])])},j=[],k={name:"lprofile",props:{profile:{type:Object}},data:function(){return{i:null}},mounted:function(){this.i=n("0917")("./"+this.profile.img),o["a"].from(this.$el,1,{opacity:0,delay:this.$vnode.key-this.$vnode.key/1.4})}},C=k,w=(n("9c14"),Object(d["a"])(C,_,j,!1,null,"25917cc0",null)),x=w.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cont"},[n("div",{staticClass:"inner"},[n("div",{ref:"desc",staticClass:"pos"},[n("h3",[e._v(e._s(e.game.name))]),n("p",[e._v(e._s(e.game.desc))])])]),n("div",{staticClass:"gImg",style:{backgroundImage:"url('"+e.i+"')"}})])},O=[],q={name:"llgame",props:{game:{type:Object}},data:function(){return{i:null}},methods:{},mounted:function(){this.i=n("faf8")("./"+this.game.img),(this.$vnode.key+1)%2==0?this.$refs["desc"].style.float="right":this.$refs["desc"].style.float="left"}},S=q,E=(n("1b39"),Object(d["a"])(S,$,O,!1,null,"4c81ae29",null)),D=E.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("ul",[n("li",[n("a",{attrs:{href:"#team"}},[e._v("Team.")])]),n("li",[n("a",{attrs:{href:"#experience"}},[e._v("Experience.")])]),n("li",[n("a",{attrs:{href:"#imagination"}},[e._v("Imagination.")])]),n("li",[n("a",{attrs:{href:"#contact"}},[e._v("Contact.")])])])])}],I={},M=I,P=(n("73c2"),Object(d["a"])(M,A,T,!1,null,null,null)),L=P.exports,G={name:"App",components:{llink:p,llogo:y,llprofile:x,llgame:D,llnav:L},mounted:function(){var e=this,t=!1,n=this.$refs["atf"].getBoundingClientRect();o["a"].from(this.$refs["nav"].$el,.9,{autoAlpha:0,delay:.3}),this.$refs["inner"].addEventListener("scroll",(function(r){r.preventDefault();var a=r.target.scrollTop;return e.$refs["logoScroll"].style.top=Math.round(a/11)+"px",e.$nextTick((function(){a<n.height?(o["a"].to(e.$refs["logo"].$el,.3,{autoAlpha:1}),o["a"].to("#scrollbar",.3,{autoAlpha:0})):(o["a"].to(e.$refs["logo"].$el,.3,{autoAlpha:0}),o["a"].to("#scrollbar",.3,{autoAlpha:1}))})),a<n.height+500?o["a"].to("nav",.6,{backgroundColor:"rgba(0,0,0,0)"}):o["a"].to("nav",.5,{backgroundColor:"rgba(0,0,0,.5)"}),e.rot=a<4?0:45,a<210?(t&&(e.$refs["inner"].scrollTo(0,0),t=!1),o["a"].to(".brg",.4,{autoAlpha:1})):(t=!0,o["a"].to(".brg",.4,{autoAlpha:0})),!1}))},data:function(){return{rot:0,clicked:!1,experiences:[{name:"Starcraft",img:"starcraft.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."},{name:"Guild Wars",img:"guildwars.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."},{name:"Gigantic",img:"gigantic.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue ut leo quis vulputate. Sed convallis orci id pharetra luctus. Curabitur consectetur tincidunt sapien non egestas. In ullamcorper lectus non nisl commodo, in ullamcorper arcu rutrum. Etiam mattis ullamcorper dui. Aliquam erat volutpat. Cras condimentum velit eget dui pellentesque, eu efficitur est pretium. Vivamus rutrum eros nec neque tincidunt, in volutpat mi fringilla. Donec vestibulum sodales justo, eu tempor libero gravida blandit. Maecenas sodales est quis nulla gravida convallis. Duis eu sem quis augue pharetra sodales."}],profiles:[{name:"James Phinney",title:"Game Design",img:"james.jpg",description:"Cliff figured out that creating something is basically magic, and has been excavating the mysterious spaces of imagination since. Doing this in any form is thrilling, but doing it together is among the best things humans do. Cliff launched a lifelong adventure in what he considers to be the pinnacle of creative effort and expression - the gaming industry. To craft whole other worlds, settings, and experiences is really, truly, something tremendous. Most recently Cliff worked to bring the new God of War to life, and now, having found Bonfire - a place that seems custom made around his interests - he is more excited than ever before."},{name:"Joe Pikop",title:"Creative Direction",img:"joe.jpg",description:"When Anna's parents told her no one would ever pay her to play video games, she embarked on a lifelong quest to prove them wrong. She studied Game Design and Development at Rochester Institute of Technology, and started her career as a programmer for Microsoft Games Studio. She moved to Valve to grow the Steam platform, and she helped launch the HTC Vive. When she moved to the bay area to run Content Strategy at Oculus, she knew it was time to live her Stardew Valley dream of opening a nonprofit farm for rescue animals. You can learn more about Sweet Farm and her journey to Bonfire in her origin story"},{name:"Mark Podorf",title:"Technology",img:"mark.jpeg",description:"Dave got his start by doing QA, set building, and movie editing for the claymation games The Neverhood and Skullmonkeys. He built levels for Metal Arms: Glitch in the System before he started at Blizzard on WoW - working on zones like Howling Fjord and Grizzly Hills. He moved to Diablo III, where he designed exterior zones, dungeons, boss fights, and events. On Overwatch, he created Hollywood, based on inspiration from a visit to the Warner Bros. backlot, Watchpoint: Gibraltar, Horizon Lunar Colony, and Illios among others. At Bonfire, Dave is excited to create levels for our new IP, and to make us listen to his playlist - Davesneylandworld."}]}}},W=G,z=(n("034f"),Object(d["a"])(W,a,i,!1,null,null,null)),H=z.exports;n("79da");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(H)}}).$mount("#app")},"6cd8":function(e,t,n){e.exports=n.p+"img/starcraft.5cc58fec.jpg"},"73c2":function(e,t,n){"use strict";var r=n("0a29"),a=n.n(r);a.a},"78e4":function(e,t,n){},"79da":function(e,t,n){},"81c1":function(e,t,n){},8476:function(e,t,n){},"85ec":function(e,t,n){},"9bde":function(e,t,n){e.exports=n.p+"img/guildwars.bbdc212e.jpg"},"9c14":function(e,t,n){"use strict";var r=n("78e4"),a=n.n(r);a.a},bbb8:function(e,t,n){e.exports=n.p+"img/logo_center.81f9c03a.png"},d638:function(e,t,n){e.exports=n.p+"img/mark.001dbc8d.jpeg"},da35:function(e,t,n){},da351:function(e,t,n){e.exports=n.p+"img/james.8d8740ef.jpg"},dfc8:function(e,t,n){"use strict";var r=n("da35"),a=n.n(r);a.a},faf8:function(e,t,n){var r={"./gigantic.jpg":"0340","./guildwars.jpg":"9bde","./starcraft.jpg":"6cd8"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id="faf8"}});
//# sourceMappingURL=app.148b4318.js.map