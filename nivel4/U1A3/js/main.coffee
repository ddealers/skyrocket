###

NEW ODA

###
class U1A3 extends Oda
	constructor: ->
		@manifest = [
			{ id: 'c1', src: 'circulo1.png' }
			{ id: 'c2', src: 'circulo2.png' }
			{ id: 'compass', src: 'compass.png' }
			{ id: 'globes', src: 'globes.png' }
			{ id: 'header', src: 'header.png' }
			{ id: 'hikingboots', src: 'hiking_boots.png' }
			{ id: 'map', src: 'map.png' }
			{ id: 'repeat', src: 'repeat.png' }
			{ id: 'skigoggles', src: 'ski_goggles.png' }
			{ id: 'skihat', src: 'ski_hat.png' }
			{ id: 'summer', src: 'summer.png' }
			{ id: 'winter', src: 'winter.png' }
			{ id: 's/silence', src: 'silence.mp3' }
		]
		@onDrop = (dispatcher, target) =>
			d = lib[dispatcher]
			t = target.parent
			a = d.index
			b = t.success
			console.log d, t
			if a in t.success
				t.success.remove a
				d.afterSuccess()
				lib.scene.success()
				TweenLite.to d, 0.3, {scaleX:0.7, scaleY:0.7}
			else
				lib.scene.fail()
				d.afterFail()
		@onClick = (dispatcher) =>
			d = lib[dispatcher]
			createjs.Sound.play d.index
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Listen, look and drag to the correct box.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name:'winter', opts:{
										success:['b','c','e','f']
									}
								}
								{name:'summer', opts:{
										success:['a','d']
									}
								}
							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'idc', id: 'winter', x: 300, y: 330, align: 'mc'}
						{type: 'idc', id: 'summer', x: 545, y: 330, align: 'mc'}
						{type: 'drg', id: 'map', x: 100, y: 250, align:'mc', index: 'a', target: ['winter','summer'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'globes', x: 100, y: 350, align:'mc', index: 'b', target: ['winter','summer'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'hikingboots', x: 100, y: 450, align:'mc', index: 'c', target: ['winter','summer'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'compass', x: 720, y: 250, align:'mc', index: 'd', target: ['winter','summer'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'skihat', x: 720, y: 350, align:'mc', index: 'e', target: ['winter','summer'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'skigoggles', x: 720, y: 450, align:'mc', index: 'f', target: ['winter','summer'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{
							type: 'btn', id: 'repeat', x: 400, y: 530, isRepeat: true
							states:[img: {name:'repeat', x: 0, y: 0, align:'mc'}]
						}
					]
					groups:[]
				}
				
			]
		super()
	window.U1A3 = U1A3