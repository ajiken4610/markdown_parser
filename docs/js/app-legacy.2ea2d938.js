(function(){var n={1496:function(n,e,r){"use strict";r(6992),r(8674),r(9601),r(7727);var o=r(5772),t=r(3396),u=(0,t._)("span",null,"横幅の広い画面で表示することを推奨。",-1);function i(n,e){var r=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)("div",null,[u,(0,t.Wm)(r,{class:"container mx-4 my-6"})])}var a=r(89);const l={},c=(0,a.Z)(l,[["render",i]]);var s=c,f=r(5431);(0,f.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});var d=r(678),v=r(7139),p={class:"flex-textarea"},m={class:"flex-textarea__dummy","aria-hidden":"true"},h=["value"],g=(0,t.aZ)({__name:"FlexTextarea",props:{modelValue:null},emits:["update:modelValue"],setup:function(n,e){var r=e.emit;function o(n){r("update:modelValue",n.currentTarget.value)}return function(e,r){return(0,t.wg)(),(0,t.iD)("div",p,[(0,t._)("div",m,(0,v.zw)(n.modelValue+"​"),1),(0,t._)("textarea",{id:"flex-textarea",class:"flex-textarea__textarea",onInput:o,value:n.modelValue},null,40,h)])}}});const w=g;var b=w,_=r(4870),k=r(5068),x=r(5514),y=r.n(x),T=function(n){return(0,t.dD)("data-v-7194d848"),n=n(),(0,t.Cn)(),n},O={class:"columns reverse-row-order"},M={class:"block column is-half result"},V=T((function(){return(0,t._)("div",{class:"subtitle"},"表示",-1)})),j=["innerHTML"],H={class:"block column is-half"},C=T((function(){return(0,t._)("div",{class:"subtitle"},"ソース",-1)})),D=(0,t.aZ)({__name:"HomeView",setup:function(n){var e=(0,_.iH)(""),r=(0,_.iH)(""),o=null,u=500;return k.TU.setOptions({breaks:!0}),(0,t.YP)(e,(function(n){o&&clearTimeout(o),o=setTimeout((function(){r.value=y()(k.TU.parse(n))}),u)})),e.value="# Markdown記法\nサレ祭のサイトで使えるようにする予定の記法。MDとか略されることがある。\n## 何故導入するか\nサレ祭IT班がHTML打ち込んでも面白くないので、誰でもテキスト装飾できたらいいなと。\n(特に理由はないの意。使いたい人だけが使ってくださいな。)\n\nCSS(文字の大きさとかフォントとか、色を決めるやつ)をまだ調整していないので、すこし文字がでかかったりすると思いますが、本番では調整されるものとして見ておいてもらえるとありがたい。\n## 文法\nMarkdownでは、Markdownの文法と、HTMLの文法の両方を使用することができる。\n### タイトル、サブタイトル\n`#`記号で記述する。多く連ねると、小さい見出しになる。\n### 文字装飾\n`*`,`**`,`***`でくくると、それぞれ *italic* **bold** ***both*** になる。\n(イタリックは日本語フォントだと適用されない可能性あり。)\n### 箇条書き\n`-`記号(等)を文頭に置く。箇条書きの前後に空行が必要\n\n- ほげ\n- ふが\n- ぴよ\n\n`n.`と記述することで、数字付きリストが記述できる。同様に前後に空行が必要。\n数字は自動で割り振られるので、すべて1.にしておくといいかも。\n\n1. ふー\n1. ばー\n1. ばず\n\n### 引用\n`>`を行初めに書くと引用になる。前後に空行が必要\n\n> 引用\n> 引用\n\n## 最後に\n他にも使用可能な文法があるが、ここに書くほど頻繁に使うものではないため、Google先生に聞いてください。\n(Markdownで検索すれば情報がたくさん出てくるはずです。ただし、すべての構文に対応していない可能性があります。)\n\nこのテキストボックスは編集することができるので、自由に編集して遊んでみて下さい。\n",function(n,o){return(0,t.wg)(),(0,t.iD)("div",O,[(0,t._)("div",M,[V,(0,t._)("div",{innerHTML:r.value},null,8,j)]),(0,t._)("div",H,[C,(0,t.Wm)(b,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=function(n){return e.value=n})},null,8,["modelValue"])])])}}});const F=(0,a.Z)(D,[["__scopeId","data-v-7194d848"]]);var L=F,Z=[{path:"/",name:"home",component:L}],A=(0,d.p7)({history:(0,d.r5)(),routes:Z}),I=A,N=r(6646);(0,o.ri)(s).use((0,N.WB)()).use(I).mount("#app")},2868:function(){},4777:function(){},9830:function(){},209:function(){},7414:function(){}},e={};function r(o){var t=e[o];if(void 0!==t)return t.exports;var u=e[o]={exports:{}};return n[o].call(u.exports,u,u.exports,r),u.exports}r.m=n,function(){var n=[];r.O=function(e,o,t,u){if(!o){var i=1/0;for(s=0;s<n.length;s++){o=n[s][0],t=n[s][1],u=n[s][2];for(var a=!0,l=0;l<o.length;l++)(!1&u||i>=u)&&Object.keys(r.O).every((function(n){return r.O[n](o[l])}))?o.splice(l--,1):(a=!1,u<i&&(i=u));if(a){n.splice(s--,1);var c=t();void 0!==c&&(e=c)}}return e}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[o,t,u]}}(),function(){r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,{a:e}),e}}(),function(){r.d=function(n,e){for(var o in e)r.o(e,o)&&!r.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};r.O.j=function(e){return 0===n[e]};var e=function(e,o){var t,u,i=o[0],a=o[1],l=o[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(t in a)r.o(a,t)&&(r.m[t]=a[t]);if(l)var s=l(r)}for(e&&e(o);c<i.length;c++)u=i[c],r.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return r.O(s)},o=self["webpackChunkmarkdown_parser"]=self["webpackChunkmarkdown_parser"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(1496)}));o=r.O(o)})();
//# sourceMappingURL=app-legacy.2ea2d938.js.map