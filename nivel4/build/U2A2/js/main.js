var U2A2,__hasProp={}.hasOwnProperty,__extends=function(a,b){function c(){this.constructor=a}for(var d in b)__hasProp.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};U2A2=function(a){function b(){this.manifest=[{id:"c1",src:"circulo1.png"},{id:"c2",src:"circulo2.png"},{id:"mazul",src:"azul.png"},{id:"binoculars",src:"binoculars.png"},{id:"compass",src:"compass.png"},{id:"header",src:"header.png"},{id:"knife",src:"knife.png"},{id:"pazul",src:"pieza_azul.png"},{id:"pbase",src:"pieza_base.png"},{id:"pverde",src:"pieza_verde.png"},{id:"string",src:"string.png"},{id:"threeinarow",src:"Three_in_a_Row.png"},{id:"mverde",src:"verde.png"},{id:"whistle",src:"whistle.png"},{id:"s/silence",src:"silence.mp3"}],this.onDrop=function(a){return function(b,c){var d,e,f,g,h;return d=lib[b],e=c.parent.parent,d.index===e.success?("p1"===(f=e.name)||"p4"===f||"p7"===f?0===lib.p7.sprite.currentFrame?lib.p7.goto(1):0===lib.p4.sprite.currentFrame?lib.p4.goto(1):lib.p1.goto(1):"p2"===(g=e.name)||"p5"===g||"p8"===g?0===lib.p8.sprite.currentFrame?lib.p8.goto(1):0===lib.p5.sprite.currentFrame?lib.p5.goto(1):lib.p2.goto(1):("p3"===(h=e.name)||"p6"===h||"p9"===h)&&(0===lib.p9.sprite.currentFrame?lib.p9.goto(1):0===lib.p6.sprite.currentFrame?lib.p6.goto(1):lib.p3.goto(1)),d.afterSuccess(),d.disableDrag=!0,d2oda.methods.delay(300,function(){return lib.scene.success(),a.evaluateWin()})):d.afterFail()}}(this),this.onChoose=function(a){return function(b){var c;return c=lib[b],c.index===d2oda.evaluator.success?(createjs.Sound.play("s/good"),lib.pazul.disableDrag=!1):(a.evaluate79(2)||a.evaluate46(2)||a.evaluate13(2),lib.scene.fail(!1),lib.scene.nextStep(),a.evaluateWin())}}(this),this.evaluate13=function(a){return function(b){return a.evaluateBlanks(1,3,b)}}(this),this.evaluate46=function(a){return function(b){return a.evaluateBlanks(4,6,b)}}(this),this.evaluate79=function(a){return function(b){return a.evaluateBlanks(7,9,b)}}(this),this.evaluateBlanks=function(){return function(a,b,c){var d,e,f,g,h;for(d=new Array,e=h=a;b>=a?b>=h:h>=b;e=b>=a?++h:--h)lib["p"+e]&&(f=lib["p"+e],0===f.sprite.currentFrame&&d.push(f));return g=Math.round(Math.random()*(d.length-1)),d.length>0?(d[g].goto(c),!0):!1}}(this),this.evaluateWin=function(a){return function(){return 2===a.getFrame("p1")&&2===a.getFrame("p2")&&2===a.getFrame("p3")?a.scoreUp("pc"):2===a.getFrame("p4")&&2===a.getFrame("p5")&&2===a.getFrame("p6")?a.scoreUp("pc"):2===a.getFrame("p7")&&2===a.getFrame("p8")&&2===a.getFrame("p9")?a.scoreUp("pc"):2===a.getFrame("p1")&&2===a.getFrame("p4")&&2===a.getFrame("p7")?a.scoreUp("pc"):2===a.getFrame("p2")&&2===a.getFrame("p5")&&2===a.getFrame("p8")?a.scoreUp("pc"):2===a.getFrame("p3")&&2===a.getFrame("p6")&&2===a.getFrame("p9")?a.scoreUp("pc"):2===a.getFrame("p1")&&2===a.getFrame("p5")&&2===a.getFrame("p9")?a.scoreUp("pc"):2===a.getFrame("p3")&&2===a.getFrame("p5")&&2===a.getFrame("p7")?a.scoreUp("pc"):1===a.getFrame("p1")&&1===a.getFrame("p2")&&1===a.getFrame("p3")?a.scoreUp("you"):1===a.getFrame("p4")&&1===a.getFrame("p5")&&1===a.getFrame("p6")?a.scoreUp("you"):1===a.getFrame("p7")&&1===a.getFrame("p8")&&1===a.getFrame("p9")?a.scoreUp("you"):1===a.getFrame("p1")&&1===a.getFrame("p4")&&1===a.getFrame("p7")?a.scoreUp("you"):1===a.getFrame("p2")&&1===a.getFrame("p5")&&1===a.getFrame("p8")?a.scoreUp("you"):1===a.getFrame("p3")&&1===a.getFrame("p6")&&1===a.getFrame("p9")?a.scoreUp("you"):1===a.getFrame("p1")&&1===a.getFrame("p5")&&1===a.getFrame("p9")?a.scoreUp("you"):1===a.getFrame("p3")&&1===a.getFrame("p5")&&1===a.getFrame("p7")?a.scoreUp("you"):0!==a.getFrame("p1")&&0!==a.getFrame("p2")&&0!==a.getFrame("p3")&&0!==a.getFrame("p4")&&0!==a.getFrame("p5")&&0!==a.getFrame("p6")&&0!==a.getFrame("p7")&&0!==a.getFrame("p8")&&0!==a.getFrame("p9")?a.reset():void 0}}(this),this.scoreUp=function(a){return function(b){switch(b){case"pc":a.pc++,createjs.Sound.play("s/wrong"),lib.tverde.update({text:a.pc});break;case"you":a.you++,createjs.Sound.play("s/good"),lib.tazul.update({text:a.you})}return a.pc>=5||a.you>=5?d2oda.methods.delay(500,function(){return a.pc=0,a.you=0,a.reset(),lib.game.nextScene()}):a.reset()}}(this),this.reset=function(){return function(){return d2oda.methods.delay(500,function(){var a,b,c;for(c=[],a=b=1;9>=b;a=++b)c.push(lib["p"+a].goto(0));return c})}}(this),this.getFrame=function(){return function(a){return lib[a].sprite.currentFrame}}(this),this.game={header:"header",instructions:{x:110,y:130,states:[{text:"Choose the correct option. Then drag a token to beat the computer.",sound:"s/silence",played:!1}]},score:{type:"points",x:20,y:500,init:0,total:15,aimg:"c1",acolor:"#333",bimg:"c2",bcolor:"#333"},scenes:[{answers:{collection:[[{name:"global",opts:{success:1}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"I used a knife",opt1:"to",opt2:"for",after:"cut the palm leaves."}}],[{name:"global",opts:{success:2}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"He needed a whistle",opt1:"to",opt2:"for",after:"making noise."}}],[{name:"global",opts:{success:1}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"She used binoculars",opt1:"to",opt2:"for",after:"look for ships."}}],[{name:"global",opts:{success:2}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"They used the net",opt1:"to",opt2:"for",after:"catching fish."}}],[{name:"global",opts:{success:1}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"Use a compass",opt1:"to",opt2:"for",after:"find your way."}}],[{name:"global",opts:{success:1}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"Sam needs rope",opt1:"to",opt2:"for",after:"tie the raft to the tree."}}],[{name:"global",opts:{success:1}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"You can collect wood",opt1:"to",opt2:"for",after:"make a fire."}}],[{name:"global",opts:{success:2}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"Dad used the mirror",opt1:"to",opt2:"for",after:"making fire."}}],[{name:"global",opts:{success:1}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"Mom used leaves",opt1:"to",opt2:"for",after:"make a pillow."}}],[{name:"global",opts:{success:1}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"We collected the rain",opt1:"to",opt2:"for",after:"drink it."}}],[{name:"global",opts:{success:2}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"She used a tennis ball",opt1:"to",opt2:"for",after:"collecting water."}}],[{name:"global",opts:{success:2}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"They used trash bags",opt1:"to",opt2:"for",after:"protecting themselves from the rain."}}],[{name:"global",opts:{success:1}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"They used rope",opt1:"to",opt2:"for",after:"tie the planks together."}}],[{name:"global",opts:{success:1}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"The father used the sail",opt1:"to",opt2:"for",after:"make a tent."}}],[{name:"global",opts:{success:2}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"You can use the sail",opt1:"to",opt2:"for",after:"making clothes."}}],[{name:"global",opts:{success:2}},{name:"p1",opts:{success:"1",complete:!0}},{name:"p2",opts:{success:"1",complete:!0}},{name:"p3",opts:{success:"1",complete:!0}},{name:"p4",opts:{success:"1",complete:!0}},{name:"p5",opts:{success:"1",complete:!0}},{name:"p6",opts:{success:"1",complete:!0}},{name:"p7",opts:{success:"1",complete:!0}},{name:"p8",opts:{success:"1",complete:!0}},{name:"p9",opts:{success:"1",complete:!0}},{name:"caw1",opts:{before:"They used large water bottles",opt1:"to",opt2:"for",after:"making the raft."}}]],mixed:!0,type:"limit",limit:15},containers:[{type:"img",id:"mazul",x:80,y:250},{type:"img",id:"mverde",x:80,y:350},{type:"txt",id:"tazul",text:"0",x:178,y:275,font:"Bold 24px Quicksand",align:"center"},{type:"txt",id:"tverde",text:"0",x:182,y:375,font:"Bold 24px Quicksand",align:"center"},{type:"caw",id:"caw1",x:420,y:530,align:"tc",target:"global",eval:this.onChoose,label:{font:"Bold 18px Quicksand",color:"#444"},bullets:{font:"18px Quicksand",color:"#000"}},{type:"img",id:"threeinarow",x:420,y:350,align:"mc"},{type:"spr",id:"p1",imgs:["pbase","pazul","pverde"],frames:null,x:278,y:233},{type:"spr",id:"p2",imgs:["pbase","pazul","pverde"],frames:null,x:380,y:233},{type:"spr",id:"p3",imgs:["pbase","pazul","pverde"],frames:null,x:482,y:233},{type:"spr",id:"p4",imgs:["pbase","pazul","pverde"],frames:null,x:278,y:321},{type:"spr",id:"p5",imgs:["pbase","pazul","pverde"],frames:null,x:380,y:321},{type:"spr",id:"p6",imgs:["pbase","pazul","pverde"],frames:null,x:482,y:321},{type:"spr",id:"p7",imgs:["pbase","pazul","pverde"],frames:null,x:278,y:409},{type:"spr",id:"p8",imgs:["pbase","pazul","pverde"],frames:null,x:380,y:409},{type:"spr",id:"p9",imgs:["pbase","pazul","pverde"],frames:null,x:482,y:409},{type:"drg",id:"pazul",x:81,y:263,align:"mc",disableDrag:!0,index:"1",target:["p1","p2","p3","p4","p5","p6","p7","p8","p9"],eval:this.onDrop,afterSuccess:"origin",afterFail:"return"},{type:"img",id:"binoculars",x:670,y:200,align:"mc"},{type:"img",id:"compass",x:670,y:270,align:"mc"},{type:"img",id:"knife",x:670,y:340,align:"mc"},{type:"img",id:"string",x:670,y:410,align:"mc"},{type:"img",id:"whistle",x:670,y:480,align:"mc"}],groups:[]}]},b.__super__.constructor.call(this)}return __extends(b,a),b.prototype.initGame=function(){return this.pc=0,this.you=0,b.__super__.initGame.call(this)},window.U2A2=b,b}(Oda);