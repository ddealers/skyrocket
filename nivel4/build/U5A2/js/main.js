var U5A2,__hasProp={}.hasOwnProperty,__extends=function(a,b){function c(){this.constructor=a}for(var d in b)__hasProp.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},__indexOf=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};U5A2=function(a){function b(){this.manifest=[{id:"b1",src:"1.png"},{id:"g1",src:"1_.png"},{id:"b2",src:"2.png"},{id:"g2",src:"2_.png"},{id:"b3",src:"3.png"},{id:"g3",src:"3_.png"},{id:"b4",src:"4.png"},{id:"g4",src:"4_.png"},{id:"b5",src:"5.png"},{id:"g5",src:"5_.png"},{id:"c2",src:"circulo2.png"},{id:"c1",src:"cirulo1.png"},{id:"header",src:"header.png"},{id:"repeat",src:"btn_repeat.png"},{id:"pantalla01",src:"pantalla-01.png"},{id:"pantalla201",src:"pantalla2-01.png"},{id:"s/Dirk",src:"Dirk.mp3"},{id:"s/Dirk.1",src:"Dirk_1.ogg"},{id:"s/Frank",src:"Frank.mp3"},{id:"s/Frank.1",src:"Frank_1.ogg"},{id:"s/Jim",src:"Jim.mp3"},{id:"s/Jim.1",src:"Jim_1.ogg"},{id:"s/Kris",src:"Kris.mp3"},{id:"s/Kris.1",src:"Kris_1.ogg"},{id:"s/Simon",src:"Simon.mp3"},{id:"s/Simon.1",src:"Simon_1.ogg"},{id:"s/Lili",src:"Lili.mp3"},{id:"s/Lili.1",src:"Lili_1.ogg"},{id:"s/LiMin",src:"LiMin.mp3"},{id:"s/LiMin.1",src:"LiMin_1.ogg"},{id:"s/LiuYuan",src:"LiuYuan.mp3"},{id:"s/LiuYuan.1",src:"LiuYuan_1.ogg"},{id:"s/WenLi",src:"WenLi.mp3"},{id:"s/WenLi.1",src:"WenLi_1.ogg"},{id:"s/ZhuMei",src:"ZhuMei.mp3"},{id:"s/ZhuMei.1",src:"ZhuMei_1.ogg"},{id:"s/silence",src:"silence.mp3"}],this.evaluateDrop=function(a,b){var c,d,e,f;return e=lib[a],f=b.parent,c=e.index,d=f.success,console.log(c,d),f.success&&__indexOf.call(f.success,c)>=0?(f.success.remove(c),e.afterSuccess(),lib.scene.success()):(e.afterFail(),lib.scene.fail())},this.game={header:"header",instructions:{x:110,y:130,states:[{text:"Listen and match the names with the athletes.",sound:"s/silence",played:!1}]},score:{type:"points",x:20,y:500,init:0,total:10,aimg:"c1",acolor:"#333",bimg:"c2",bcolor:"#333"},scenes:[{answers:{collection:[[{name:"snd",opts:{id:"s/WenLi",android:"s/WenLi.1"}},{name:"g1",opts:{success:["Wen Li"]}}],[{name:"snd",opts:{id:"s/LiMin",android:"s/LiMin.1"}},{name:"g3",opts:{success:["Li Mei"]}}],[{name:"snd",opts:{id:"s/LiuYuan",android:"s/LiuYuan.1"}},{name:"g2",opts:{success:["Liu Yuan"]}}],[{name:"snd",opts:{id:"s/Lili",android:"s/Lili.1"}},{name:"g4",opts:{success:["Li Li"]}}],[{name:"snd",opts:{id:"s/ZhuMei",android:"s/ZhuMei.1"}},{name:"g5",opts:{success:["Zhu Mei"]}}]],mixed:!0,type:"steps"},containers:[{type:"idc",id:"g1",x:130,y:460,align:"bl"},{type:"idc",id:"g2",x:218,y:460,align:"bl"},{type:"idc",id:"g3",x:319,y:460,align:"bl"},{type:"idc",id:"g4",x:398,y:460,align:"bl"},{type:"idc",id:"g5",x:562,y:460,align:"bl"},{type:"ldrg",id:"ldrg5",x:130,y:480,index:"Liu Yuan",text:"Liu Yuan",font:"Bold 26px Quicksand",color:"#333",target:["g1","g2","g3","g4","g5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"ldrg",id:"ldrg3",x:265,y:480,index:"Li Li",text:"Li Li",font:"Bold 26px Quicksand",color:"#333",target:["g1","g2","g3","g4","g5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"ldrg",id:"ldrg4",x:350,y:480,index:"Wen Li",text:"Wen Li",font:"Bold 26px Quicksand",color:"#333",target:["g1","g2","g3","g4","g5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"ldrg",id:"ldrg1",x:485,y:480,index:"Zhu Mei",text:"Zhu Mei",font:"Bold 26px Quicksand",color:"#333",target:["g1","g2","g3","g4","g5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"ldrg",id:"ldrg2",x:650,y:480,index:"Li Mei",text:"Li Mei",font:"Bold 26px Quicksand",color:"#333",target:["g1","g2","g3","g4","g5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"btn",id:"repeat",x:740,y:540,isRepeat:!0,states:[{img:{name:"repeat",x:0,y:0,align:"mc"}}]}],groups:[]},{answers:{collection:[[{name:"snd",opts:{id:"s/Dirk",android:"s/Dirk.1"}},{name:"b1",opts:{success:["Dirk"]}}],[{name:"snd",opts:{id:"s/Kris",android:"s/Kris.1"}},{name:"b2",opts:{success:["Kris"]}}],[{name:"snd",opts:{id:"s/Jim",android:"s/Jim.1"}},{name:"b3",opts:{success:["Jim"]}}],[{name:"snd",opts:{id:"s/Simon",android:"s/Simon.1"}},{name:"b4",opts:{success:["Simon"]}}],[{name:"snd",opts:{id:"s/Frank",android:"s/Frank.1"}},{name:"b5",opts:{success:["Frank"]}}]],mixed:!0,type:"steps"},containers:[{type:"idc",id:"b1",x:150,y:460,align:"bl"},{type:"idc",id:"b2",x:247,y:460,align:"bl"},{type:"idc",id:"b3",x:327,y:460,align:"bl"},{type:"idc",id:"b4",x:434,y:460,align:"bl"},{type:"idc",id:"b5",x:540,y:460,align:"bl"},{type:"ldrg",id:"ldrb5",x:140,y:480,index:"Jim",text:"Jim",font:"Bold 26px Quicksand",color:"#333",target:["b1","b2","b3","b4","b5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"ldrg",id:"ldrb3",x:245,y:480,index:"Simon",text:"Simon",font:"Bold 26px Quicksand",color:"#333",target:["b1","b2","b3","b4","b5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"ldrg",id:"ldrb4",x:375,y:480,index:"Kris",text:"Kris",font:"Bold 26px Quicksand",color:"#333",target:["b1","b2","b3","b4","b5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"ldrg",id:"ldrb1",x:485,y:480,index:"Frank",text:"Frank",font:"Bold 26px Quicksand",color:"#333",target:["b1","b2","b3","b4","b5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"ldrg",id:"ldrb2",x:620,y:480,index:"Dirk",text:"Dirk",font:"Bold 26px Quicksand",color:"#333",target:["b1","b2","b3","b4","b5"],eval:this.evaluateDrop,afterSuccess:"hide",afterFail:"return"},{type:"btn",id:"repeat",x:740,y:540,isRepeat:!0,states:[{img:{name:"repeat",x:0,y:0,align:"mc"}}]}],groups:[]}]},b.__super__.constructor.call(this)}return __extends(b,a),window.U5A2=b,b}(Oda);