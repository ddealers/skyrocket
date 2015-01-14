###

NEW ODA

###
class U8A2 extends Oda
	constructor: ->
		@manifest = [
			{id:'baby', src:'baby.png'}
			{id:'bus', src:'bus.png'}
			{id:'car1', src:'car1.png'}
			{id:'car2', src:'car2.png'}
			{id:'c2', src:'circilo_2.png'}
			{id:'c1', src:'circulo_1.png'}
			{id:'explode', src:'explode.png'}
			{id:'header', src:'header.png'}
			{id:'ladder', src:'ladder.png'}
			{id:'lineas', src:'lineas.png'}
			{id:'pantalla', src:'pantalla-01.png'}
			{id:'swimmer', src:'swimmer.png'}
			{id:'swing', src:'swing.png'}
			{id:'theater', src:'theater.png'}
			{id:'wolfman', src:'wolfman.png'}
			{ id: 's/silence' , src: 'silence.mp3' }

		]
		@onkeydown = (e) ->
			keycode = e.keyCode || e.which
			if !modal.open
				if keycode is 8
					e.preventDefault()
		@onkeyup = (e) ->
			#e.preventDefault()
			e.stopPropagation()
			word = ''
			keycode = e.keyCode || e.which
			target = lib[window.target].getEnabledTarget()
			if modal.open
				str = modal.inp.val()
				if target.success
					targ = target.success.split '||'
					if keycode is 13
						fail = false
						if target.write() in targ
							modal.clear()
							target.complete = true
						else
							fail = true
							lib.scene.fail()
						modal.hide()
						if not fail then createjs.Sound.play 's/good'
						if target.parent.isComplete() then lib.scene.success()
					else
						target.writeText str.toLowerCase()
			else
				pattern = /[a-z]/i
				str = String.fromCharCode keycode
				if target.success
					targ = target.success.split '||'
					if keycode is 8
						e.preventDefault()
						target.write '<-'
					else if keycode is 13
						fail = false
						if target.write() in targ
							modal.clear()
							target.complete = true
						else
							fail = true
							lib.scene.fail()
						modal.hide()
						if not fail then createjs.Sound.play 's/good'
						if target.parent.isComplete() then lib.scene.success()
					else if keycode is 32
						target.write '-'
					else if keycode is 222
						target.write '\''
					else if pattern.test str
						target.write str.toLowerCase()
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Choose the verb and write it in the correct form.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 10, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'car1'}}
								{name:'pcpt1', opts:{pattern:['Oh no! The car','#tcpt','the children!'], targets:[{text:'is going to hit', success:'is going to hit||\'s going to hit'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'explode'}}
								{name:'pcpt1', opts:{pattern:['Oh no, the gas truck','#tcpt','!'], targets:[{text:'is going to explode', success:'is going to explode||\'s going to explode'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'wolfman'}}
								{name:'pcpt1', opts:{pattern:['Help! The wolf man','#tcpt','#rtn',' with the baby!'], targets:[{text:'is going to escape', success:'is going to escape||\'s going to escape'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'baby'}}
								{name:'pcpt1', opts:{pattern:['Help! The baby','#tcpt','!'], targets:[{text:'is going to fall', success:'is going to fall||\'s going to fall'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'bus'}}
								{name:'pcpt1', opts:{pattern:['Do something! The bus','#tcpt','into the tree!'], targets:[{text:'is going to crash', success:'is going to crash||\'s going to crash'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'swing'}}
								{name:'pcpt1', opts:{pattern:['Oh no! The swing','#tcpt','and then','#rtn',' the child is going to fall.'], targets:[{text:'is going to break', success:'is going to break||\'s going to break'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'car2'}}
								{name:'pcpt1', opts:{pattern:['Hurry! The car','#tcpt','the girl!'], targets:[{text:'is going to hit', success:'is going to hit||\'s going to hit'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'theater'}}
								{name:'pcpt1', opts:{pattern:['Look! There are many clouds. It','#tcpt','.'], targets:[{text:'is going to rain', success:'is going to rain||\'s going to rain'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'ladder'}}
								{name:'pcpt1', opts:{pattern:['Quickly! The man on the ladder','#tcpt','!'], targets:[{text:'is going to fall', success:'is going to fall||\'s going to fall'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'swimmer'}}
								{name:'pcpt1', opts:{pattern:['Look! The man','#tcpt','the swimmer. Good!'], targets:[{text:'is going to help', success:'is going to help||\'s going to help'}]}}
							]

							
						]
						mixed: false
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'car1', x: 380, y: 338, align: 'mc'}
						{type: 'img', id: 'explode', x: 380, y: 338, align: 'mc'}
						{type: 'img', id: 'wolfman', x: 380, y: 338, align: 'mc'}
						{type: 'img', id: 'baby', x: 380, y: 338, align: 'mc'}
						{type: 'img', id: 'bus', x: 380, y: 338, align: 'mc'}
						{type: 'img', id: 'swing', x: 380, y: 338, align: 'mc'}
						{type: 'img', id: 'car2', x: 380, y: 338, align: 'mc'}
						{type: 'img', id: 'theater', x: 380, y: 338, align: 'mc'}
						{type: 'img', id: 'ladder', x: 380, y: 338, align: 'mc'}
						{type: 'img', id: 'swimmer', x: 380, y: 338, align: 'mc'}
						{type: 'pcpt', id: 'pcpt1', x: 450, y: 510, font: 'Bold 22px Quicksand', underline:{y:0}, margin: 5, align: 'tc', scolor: '#009046'}
						{
							type: 'btn', id: 'btn_1', x: 690, y: 220, index: 'break', target: 'pcpt1', noHover: true,eval: @btnClick
							states: [{txt: {text:'break', name:'break', x:0, y:0, align:'center', font:'Bold 20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_2', x: 690, y: 250, index: 'crash', target: 'pcpt1', noHover: true, eval: @btnClick
							states: [{txt: {text:'crash', name:'crash', x:0, y:0, align:'center', font:'Bold 20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_3', x: 690, y: 280, index: 'escape', target: 'pcpt1', noHover: true, eval: @btnClick
							states: [{txt: {text:'escape', name:'escape', x:0, y:0, align:'center', font:'Bold 20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_4', x: 690, y: 310, index: 'explode', target: 'pcpt1', noHover: true, eval: @btnClick
							states: [{txt: {text:'explode', name:'explode', x:0, y:0, align:'center', font:'Bold 20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_5', x: 690, y: 340, index: 'fall', target: 'pcpt1', noHover: true, eval: @btnClick
							states: [{txt: {text:'fall', name:'fall', x:0, y:0, align:'center', font:'Bold 20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_6', x: 690, y: 370, index: 'help', target: 'pcpt1', noHover: true, eval: @btnClick
							states: [{txt: {text:'help', name:'help', x:0, y:0, align:'center', font:'Bold 20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_7', x: 690, y: 400, index: 'hit', target: 'pcpt1', noHover: true, eval: @btnClick
							states: [{txt: {text:'hit', name:'hit', x:0, y:0, align:'center', font:'Bold 20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_8', x: 690, y: 430, index: 'rain', target: 'pcpt1', noHover: true, eval: @btnClick
							states: [{txt: {text:'rain', name:'rain', x:0, y:0, align:'center', font:'Bold 20px Quicksand'}}]
						}
					]
					groups:[
						{
							type: 'grp', id: 'grp1', invisible:true
							group: [
								'car1'
								'explode'
								'wolfman'
								'baby'
								'bus'
								'swing'
								'car2'
								'theater'
								'ladder'
								'swimmer'
							]
						}
					]
				}
				
			]
		super()
	window.U8A2 = U8A2