var U9A3,__hasProp={}.hasOwnProperty,__extends=function(a,b){function c(){this.constructor=a}for(var d in b)__hasProp.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};U9A3=function(a){function b(){this.manifest=[{id:"c2",src:"circilo_2.png"},{id:"c1",src:"circulo_1.png"},{id:"diassemana",src:"dias_semana.png"},{id:"robot",src:"robot.png"},{id:"toboganes",src:"toboganes.png"},{id:"caballo",src:"caballo.png"},{id:"hamburguesa",src:"hamburguesa.png"},{id:"niñosclase",src:"ninos-clase.png"},{id:"rosa",src:"rosa.png"},{id:"fiesta",src:"fiesta.png"},{id:"header",src:"header.png"},{id:"pantalla",src:"pantalla-01.png"},{id:"s/silence",src:"silence.mp3"}],this.drop=function(a,b){return lib[a].index!==b.success?(lib[a].afterFail(),lib.scene.fail()):(b.complete=!0,b.update(),lib[a].afterSuccess(),b.parent.currentTarget++,b.parent.currentTarget===b.parent.droptargets.length?(lib[b.parent.target].fadeIn(),lib.scene.success()):void 0)},this.game={header:"header",instructions:{x:110,y:130,states:[{text:"Put the words in order to make sentences.",sound:"s/silence",played:!1}]},score:{type:"points",x:20,y:500,init:0,total:7,aimg:"c1",acolor:"#333",bimg:"c2",bcolor:"#333"},scenes:[{answers:{collection:[[{name:"wcpt1",opts:{word:"We||are||going||to visit||a real laboratory",target:"niñosclase",sentence:!0}}],[{name:"wcpt1",opts:{word:"On||Tuesday||we're||going to||horseback riding",target:"caballo",sentence:!0}}],[{name:"wcpt1",opts:{word:"On Wednesday,||we're||going||to go||swimming",target:"toboganes",sentence:!0}}],[{name:"wcpt1",opts:{word:"I'm||going||to||build||a robot",target:"robot",sentence:!0}}],[{name:"wcpt1",opts:{word:"I'm||going to||learn how to||cook||hamburgers",target:"hamburguesa",sentence:!0}}],[{name:"wcpt1",opts:{word:"We're going||to||take||photographs||of nature",target:"rosa",sentence:!0}}],[{name:"wcpt1",opts:{word:"On sunday||we're||going||to have||a party with cake",target:"fiesta",sentence:!0}}]],mixed:!0,type:"steps"},containers:[{type:"img",id:"diassemana",x:80,y:220,align:"tl"},{type:"img",id:"niñosclase",x:80,y:243,align:"tl"},{type:"img",id:"caballo",x:190,y:243,align:"tl"},{type:"img",id:"toboganes",x:303,y:243,align:"tl"},{type:"img",id:"robot",x:413,y:243,align:"tl"},{type:"img",id:"hamburguesa",x:520,y:243,align:"tl"},{type:"img",id:"rosa",x:633,y:243,align:"tl"},{type:"img",id:"fiesta",x:742,y:243,align:"tl"},{type:"swct",id:"wcpt1",x:460,y:460,margin:10,uwidth:150,distance:10,font:"Bold 20px Quicksand",scolor:"#008F4C",align:"tc",eval:this.drop}],groups:[{type:"grp",id:"grp1",invisible:!0,group:["robot","toboganes","caballo","hamburguesa","niñosclase","rosa","fiesta"]}]}]},b.__super__.constructor.call(this)}return __extends(b,a),window.U9A3=b,b}(Oda);