var U8A2,__hasProp={}.hasOwnProperty,__extends=function(a,b){function c(){this.constructor=a}for(var d in b)__hasProp.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},__indexOf=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};U8A2=function(a){function b(){this.manifest=[{id:"baby",src:"baby.png"},{id:"bus",src:"bus.png"},{id:"car1",src:"car1.png"},{id:"car2",src:"car2.png"},{id:"c2",src:"circilo_2.png"},{id:"c1",src:"circulo_1.png"},{id:"explode",src:"explode.png"},{id:"header",src:"header.png"},{id:"ladder",src:"ladder.png"},{id:"lineas",src:"lineas.png"},{id:"pantalla",src:"pantalla-01.png"},{id:"swimmer",src:"swimmer.png"},{id:"swing",src:"swing.png"},{id:"theater",src:"theater.png"},{id:"wolfman",src:"wolfman.png"},{id:"s/silence",src:"silence.mp3"}],this.onkeydown=function(a){var b;return b=a.keyCode||a.which,modal.open||8!==b?void 0:a.preventDefault()},this.onkeyup=function(a){var b,c,d,e,f,g,h,i,j;if(a.stopPropagation(),h="",c=a.keyCode||a.which,g=lib[window.target].getEnabledTarget(),modal.open){if(e=modal.inp.val(),g.success){if(f=g.success.split("||"),13!==c)return g.writeText(e.toLowerCase());if(b=!1,i=g.write(),__indexOf.call(f,i)>=0?(modal.clear(),g.complete=!0):(b=!0,lib.scene.fail()),modal.hide(),b||createjs.Sound.play("s/good"),g.parent.isComplete())return lib.scene.success()}}else if(d=/[a-z]/i,e=String.fromCharCode(c),g.success){if(f=g.success.split("||"),8===c)return a.preventDefault(),g.write("<-");if(13===c){if(b=!1,j=g.write(),__indexOf.call(f,j)>=0?(modal.clear(),g.complete=!0):(b=!0,lib.scene.fail()),modal.hide(),b||createjs.Sound.play("s/good"),g.parent.isComplete())return lib.scene.success()}else{if(32===c)return g.write("-");if(222===c)return g.write("'");if(d.test(e))return g.write(e.toLowerCase())}}},this.game={header:"header",instructions:{x:110,y:130,states:[{text:"Choose the verb and write it in the correct form.",sound:"s/silence",played:!1}]},score:{type:"points",x:20,y:500,init:0,total:10,aimg:"c1",acolor:"#333",bimg:"c2",bcolor:"#333"},scenes:[{answers:{collection:[[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"car1"}},{name:"pcpt1",opts:{pattern:["Oh no! The car","#tcpt","the children!"],targets:[{text:"is going to hit",success:"is going to hit||'s going to hit"}]}}],[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"explode"}},{name:"pcpt1",opts:{pattern:["Oh no, the gas truck","#tcpt","!"],targets:[{text:"is going to explode",success:"is going to explode||'s going to explode"}]}}],[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"wolfman"}},{name:"pcpt1",opts:{pattern:["Help! The wolf man","#tcpt","#rtn"," with the baby!"],targets:[{text:"is going to escape",success:"is going to escape||'s going to escape"}]}}],[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"baby"}},{name:"pcpt1",opts:{pattern:["Help! The baby","#tcpt","!"],targets:[{text:"is going to fall",success:"is going to fall||'s going to fall"}]}}],[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"bus"}},{name:"pcpt1",opts:{pattern:["Do something! The bus","#tcpt","into the tree!"],targets:[{text:"is going to crash",success:"is going to crash||'s going to crash"}]}}],[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"swing"}},{name:"pcpt1",opts:{pattern:["Oh no! The swing","#tcpt","and then","#rtn"," the child is going to fall."],targets:[{text:"is going to break",success:"is going to break||'s going to break"}]}}],[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"car2"}},{name:"pcpt1",opts:{pattern:["Hurry! The car","#tcpt","the girl!"],targets:[{text:"is going to hit",success:"is going to hit||'s going to hit"}]}}],[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"theater"}},{name:"pcpt1",opts:{pattern:["Look! There are many clouds. It","#tcpt","."],targets:[{text:"is going to rain",success:"is going to rain||'s going to rain"}]}}],[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"ladder"}},{name:"pcpt1",opts:{pattern:["Quickly! The man on the ladder","#tcpt","!"],targets:[{text:"is going to fall",success:"is going to fall||'s going to fall"}]}}],[{name:"window",opts:{keydown:this.onkeydown,target:"pcpt1"}},{name:"window",opts:{keyup:this.onkeyup,target:"pcpt1"}},{name:"grp1",opts:{type:"fadeIn",target:"swimmer"}},{name:"pcpt1",opts:{pattern:["Look! The man","#tcpt","the swimmer. Good!"],targets:[{text:"is going to help",success:"is going to help||'s going to help"}]}}]],mixed:!1,type:"steps"},containers:[{type:"img",id:"car1",x:380,y:338,align:"mc"},{type:"img",id:"explode",x:380,y:338,align:"mc"},{type:"img",id:"wolfman",x:380,y:338,align:"mc"},{type:"img",id:"baby",x:380,y:338,align:"mc"},{type:"img",id:"bus",x:380,y:338,align:"mc"},{type:"img",id:"swing",x:380,y:338,align:"mc"},{type:"img",id:"car2",x:380,y:338,align:"mc"},{type:"img",id:"theater",x:380,y:338,align:"mc"},{type:"img",id:"ladder",x:380,y:338,align:"mc"},{type:"img",id:"swimmer",x:380,y:338,align:"mc"},{type:"pcpt",id:"pcpt1",x:450,y:510,font:"Bold 22px Quicksand",underline:{y:0},margin:5,align:"tc",scolor:"#009046"},{type:"btn",id:"btn_1",x:690,y:220,index:"break",target:"pcpt1",noHover:!0,eval:this.btnClick,states:[{txt:{text:"break",name:"break",x:0,y:0,align:"center",font:"Bold 20px Quicksand"}}]},{type:"btn",id:"btn_2",x:690,y:250,index:"crash",target:"pcpt1",noHover:!0,eval:this.btnClick,states:[{txt:{text:"crash",name:"crash",x:0,y:0,align:"center",font:"Bold 20px Quicksand"}}]},{type:"btn",id:"btn_3",x:690,y:280,index:"escape",target:"pcpt1",noHover:!0,eval:this.btnClick,states:[{txt:{text:"escape",name:"escape",x:0,y:0,align:"center",font:"Bold 20px Quicksand"}}]},{type:"btn",id:"btn_4",x:690,y:310,index:"explode",target:"pcpt1",noHover:!0,eval:this.btnClick,states:[{txt:{text:"explode",name:"explode",x:0,y:0,align:"center",font:"Bold 20px Quicksand"}}]},{type:"btn",id:"btn_5",x:690,y:340,index:"fall",target:"pcpt1",noHover:!0,eval:this.btnClick,states:[{txt:{text:"fall",name:"fall",x:0,y:0,align:"center",font:"Bold 20px Quicksand"}}]},{type:"btn",id:"btn_6",x:690,y:370,index:"help",target:"pcpt1",noHover:!0,eval:this.btnClick,states:[{txt:{text:"help",name:"help",x:0,y:0,align:"center",font:"Bold 20px Quicksand"}}]},{type:"btn",id:"btn_7",x:690,y:400,index:"hit",target:"pcpt1",noHover:!0,eval:this.btnClick,states:[{txt:{text:"hit",name:"hit",x:0,y:0,align:"center",font:"Bold 20px Quicksand"}}]},{type:"btn",id:"btn_8",x:690,y:430,index:"rain",target:"pcpt1",noHover:!0,eval:this.btnClick,states:[{txt:{text:"rain",name:"rain",x:0,y:0,align:"center",font:"Bold 20px Quicksand"}}]}],groups:[{type:"grp",id:"grp1",invisible:!0,group:["car1","explode","wolfman","baby","bus","swing","car2","theater","ladder","swimmer"]}]}]},b.__super__.constructor.call(this)}return __extends(b,a),window.U8A2=b,b}(Oda);