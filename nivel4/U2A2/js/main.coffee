###

NEW ODA

###
class U2A2 extends Oda
	constructor: ->
		@manifest = [
			{ id: 'c1', src: 'circulo1.png' }
			{ id: 'c2', src: 'circulo2.png' }
			{ id: 'mazul', src: 'azul.png' }
			{ id: 'binoculars', src: 'binoculars.png' }
			{ id: 'compass', src: 'compass.png' }
			{ id: 'header', src: 'header.png' }
			{ id: 'knife', src: 'knife.png' }
			{ id: 'pazul', src: 'pieza_azul.png' }
			{ id: 'pverde', src: 'pieza_verde.png' }
			{ id: 'string', src: 'string.png' }
			{ id: 'threeinarow', src: 'Three_in_a_Row.png' }
			{ id: 'mverde', src: 'verde.png' }
			{ id: 'whistle', src: 'whistle.png' }
			{ id: 's/silence', src: 'silence.mp3' }
		]
		@onDrop = (dispatcher, target) =>
			failed = false
			d = lib[dispatcher]
			t = target.parent
			a = d.index
			b = t.success
			if a in t.success
				t.success.remove a
				d.afterSuccess()
				lib.scene.success()
				TweenLite.to d, 0.3, {scaleX:0.7, scaleY:0.7}
			else
				d.afterFail()
				lib.scene.fail()
		@onClick = (dispatcher) =>
			d = lib[dispatcher]
			if d.dragged
				d.dragged = false
				return
			lib.scene.snd = "s/#{d.index}"
			createjs.Sound.stop()
			createjs.Sound.play lib.scene.snd
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Choose the correct option. Then drag a token to beat the computer.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 0, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: []
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'threeinarow', x: 420, y: 350, align: 'mc'}
						{type: 'img', id: 'mazul', x: 80, y: 250}
						{type: 'img', id: 'mverde', x: 80, y: 350}
						{type: 'drg', id: 'binoculars', x: 670, y: 200, align:'mc', index: 'binoculars', target: [], eval: @onDrop, afterSuccess: 'inplace', afterFail: 'return'}
						{type: 'drg', id: 'compass', x: 670, y: 270, align:'mc', index: 'compass', target: [], eval: @onDrop, afterSuccess: 'inplace', afterFail: 'return'}
						{type: 'drg', id: 'knife', x: 670, y: 340, align:'mc', index: 'knife', target: [], eval: @onDrop, afterSuccess: 'inplace', afterFail: 'return'}
						{type: 'drg', id: 'string', x: 670, y: 410, align:'mc', index: 'string', target: [], eval: @onDrop, afterSuccess: 'inplace', afterFail: 'return'}
						{type: 'drg', id: 'whistle', x: 670, y: 480, align:'mc', index: 'whistle', target: [], eval: @onDrop, afterSuccess: 'inplace', afterFail: 'return'}
					]
					groups:[]
				}
			]
		super()
	window.U2A2 = U2A2