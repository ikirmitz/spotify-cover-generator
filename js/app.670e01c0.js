(function(t){function e(e){for(var o,n,s=e[0],i=e[1],c=e[2],d=0,p=[];d<s.length;d++)n=s[d],r[n]&&p.push(r[n][0]),r[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],o=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(o=!1)}o&&(l.splice(e--,1),t=n(n.s=a[0]))}return t}var o={},r={app:0},l=[];function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=o,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=i;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"497d":function(t,e,a){},5400:function(t,e,a){"use strict";var o=a("a25e"),r=a.n(o);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),r=a("63d6"),l=a.n(r),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("PlaylistCover")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center mt-3"},[a("div",{staticClass:"col-12 col-md-4"},[a("h5",[t._v("Configuração")]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-muted",attrs:{for:"background"}},[t._v("Imagem da capa")]),a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"backgroundFile"},on:{change:t.changeBackground}}),a("label",{staticClass:"custom-file-label",attrs:{for:"backgroundFile"}},[t._v(t._s(t.backgroundName))])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-muted",attrs:{for:"background-horizontal-axis"}},[t._v("Posição X da imagem")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.backgroundHorizontalAxis,expression:"backgroundHorizontalAxis"}],staticClass:"custom-range",attrs:{type:"range",min:"0",max:"100",step:"1",id:"background-horizontal-axis"},domProps:{value:t.backgroundHorizontalAxis},on:{__r:function(e){t.backgroundHorizontalAxis=e.target.value}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-muted",attrs:{for:"titleText"}},[t._v("Texto da capa")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],staticClass:"form-control",attrs:{placeholder:"Texto",id:"titleText"},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-muted",attrs:{for:"font"}},[t._v("Fonte do Texto")]),a("select",{staticClass:"custom-select",attrs:{name:"font",id:"font"},domProps:{value:t.selectedFont},on:{change:t.selectFont}},t._l(t.fonts,function(t,e){return a("option",{key:e,attrs:{label:t.label},domProps:{value:t.path}})}),0)]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-muted",attrs:{for:"font-size"}},[t._v("Tamanho da Fonte")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFontSize,expression:"selectedFontSize"}],staticClass:"custom-select",attrs:{name:"font-size",id:"font-size"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedFontSize=e.target.multiple?a:a[0]}}},t._l(t.fontSizes,function(t,e){return a("option",{key:e,attrs:{label:t.label},domProps:{value:t.value}})}),0)]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-muted",attrs:{for:"font-size"}},[t._v("Cor da Fonte")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedFontColor,expression:"selectedFontColor"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.selectedFontColor},on:{input:function(e){e.target.composing||(t.selectedFontColor=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-muted",attrs:{for:"frame"}},[t._v("Borda")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFrame,expression:"selectedFrame"}],staticClass:"custom-select",attrs:{name:"frame",id:"frame"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedFrame=e.target.multiple?a:a[0]}}},t._l(t.frames,function(t,e){return a("option",{key:e,attrs:{label:t.label},domProps:{value:t.path}})}),0)]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.printPlaylistCover}},[t._v("Gerar")])])]),a("div",{staticClass:"col-12 col-md-6 mt-3 mt-md-0"},[a("div",{staticClass:"playlist-data",attrs:{id:"playlist-data"}},[a("h5",[t._v("Preview")]),a("div",{ref:"playlistCover",staticClass:"playlist-cover",style:t.customStyles,attrs:{id:"playlist-cover"},domProps:{innerHTML:t._s(t.titleText)}}),t._v("\n      "+t._s(t.assetsPath)+"\n    ")])])])},c=[],u=(a("a481"),a("96cf"),a("3b8d")),d=(a("7f7f"),a("27d6")),p=a.n(d),m={name:"PlaylistCover",data:function(){return{background:"",backgroundHorizontalAxis:50,backgroundVerticalAxis:50,backgroundName:"Selecionar",publicPath:"/",titleText:"",output:null,fonts:[{label:"Acme",path:"Acme"},{label:"Aladin",path:"Aladin"},{label:"Amethysta",path:"Amethysta"},{label:"Amita",path:"Amita"},{label:"Aref Ruqaa",path:"Aref Ruqaa"},{label:"Bad Script",path:"Bad Script"},{label:"Calligraffitti",path:"Calligraffitti"},{label:"Cardo",path:"Cardo"},{label:"Cinzel Decorative",path:"Cinzel Decorative"},{label:"Cinzel",path:"Cinzel"},{label:"Cormorant Infant",path:"Cormorant Infant"},{label:"EB Garamond",path:"EB Garamond"},{label:"El Messiri",path:"El Messiri"},{label:"Fondamento",path:"Fondamento"},{label:"Forum",path:"Forum"},{label:"Gabriela",path:"Gabriela"},{label:"Gilda Display",path:"Gilda Display"},{label:"Gloria Hallelujah",path:"Gloria Hallelujah"},{label:"Kalam",path:"Kalam"},{label:"Kaushan Script",path:"Kaushan Script"},{label:"Kurale",path:"Kurale"},{label:"Lobster Two",path:"Lobster Two"},{label:"Lobster",path:"Lobster"},{label:"Love Ya Like A Sister",path:"Love Ya Like A Sister"},{label:"Merienda One",path:"Merienda One"},{label:"Merienda",path:"Merienda"},{label:"Nothing You Could Do",path:"Nothing You Could Do"},{label:"Signika",path:"Signika"},{label:"Tangerine",path:"Tangerine"}],fontSizes:[{label:"Pequeno",value:"3em"},{label:"Normal",value:"4.5em"},{label:"Grande",value:"6em"}],frames:[{label:"Borda 1",path:"border-1.png"},{label:"Borda 2",path:"border-2.png"},{label:"Borda 3",path:"border-3.png"},{label:"Borda 4",path:"border-4.png"},{label:"Borda 5",path:"border-5.png"},{label:"Borda 6",path:"border-6.png"}],selectedFont:"Fondamento",selectedFontSize:"4.5em",selectedFontColor:"#ffffff",selectedFrame:"border-1.png"}},computed:{assetsPath:function(){return"".concat(this.publicPath,"assets")},customStyles:function(){var t='url("'.concat(this.assetsPath,"/").concat(this.selectedFrame,'")'),e="linear-gradient(transparent, rgba(0,0,0,.30), rgba(0,0,0,.30), transparent)",a="url(".concat(this.background,")");return{"background-image":"".concat(t,", ").concat(e,", ").concat(a),"background-position":"".concat(this.backgroundHorizontalAxis,"%"),color:"".concat(this.selectedFontColor),"font-family":"".concat(this.selectedFont),"font-size":"".concat(this.selectedFontSize)}}},mounted:function(){},methods:{downloadURI:function(t,e){var a=document.createElement("a");a.download=e,a.href=t,a.click()},changeBackground:function(t){var e=t.target,a=e.files[0];this.background=URL.createObjectURL(a),this.backgroundName=a.name},printPlaylistCover:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$refs.playlistCover,t.next=3,this.$html2canvas(e);case 3:a=t.sent,o=document.createElement("a"),o.href=a.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream"),o.download="playlist-cover.jpg",o.click();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selectFont:function(t){var e=t.target.value;p.a.load({google:{families:[e]}}),this.selectedFont=e}}},f=m,b=(a("8422"),a("2877")),v=Object(b["a"])(f,i,c,!1,null,"5c578867",null),h=v.exports,g={name:"app",components:{PlaylistCover:h}},C=g,y=(a("5400"),Object(b["a"])(C,n,s,!1,null,"542cce3b",null)),x=y.exports;o["a"].use(l.a),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(x)}}).$mount("#app")},8422:function(t,e,a){"use strict";var o=a("497d"),r=a.n(o);r.a},a25e:function(t,e,a){}});
//# sourceMappingURL=app.670e01c0.js.map