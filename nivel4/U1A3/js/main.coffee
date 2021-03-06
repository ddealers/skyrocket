###

NEW ODA

###
class U1A3 extends Oda
	constructor: ->
		@manifest = [
			{ id: 'c1', src: 'circulo1.png' }
			{ id: 'c2', src: 'circulo2.png' }
			{ id: 'artposters', src: '6.png' }
			{ id: 'camera', src: '3.png' }
			{ id: 'compass', src: 'd.png' }
			{ id: 'flipflops', src: '5.png' }
			{ id: 'globes', src: 'b.png' }
			{ id: 'guidebook', src: '2.png' }
			{ id: 'header', src: 'header.png' }
			{ id: 'hikingboots', src: 'c.png' }
			{ id: 'map', src: 'a.png' }
			{ id: 'parasol', src: '4.png' }
			{ id: 'repeat', src: 'repeat.png' }
			{ id: 'skigoggles', src: 'f.png' }
			{ id: 'skihat', src: 'e.png' }
			{ id: 'summer', src: 'summer.png' }
			{ id: 'sunscreen', src: '1.png' }
			{ id: 'beach', src: 'the_beach.png' }
			{ id: 'city', src: 'the_city.png' }
			{ id: 'winter', src: 'winter.png' }
			
			{ id: 's/1', src: '1.mp3' }
			{ id: 's/1.1', src: '1_1.ogg' }
			{ id: 's/2', src: '2.mp3' }
			{ id: 's/2.1', src: '2_1.ogg' }
			{ id: 's/3', src: '3.mp3' }
			{ id: 's/3.1', src: '3_1.ogg' }
			{ id: 's/4', src: '4.mp3' }
			{ id: 's/4.1', src: '4_1.ogg' }
			{ id: 's/5', src: '5.mp3' }
			{ id: 's/5.1', src: '5_1.ogg' }
			{ id: 's/6', src: '6.mp3' }
			{ id: 's/6.1', src: '6_1.ogg' }
			{ id: 's/a', src: 'A.mp3' }
			{ id: 's/a.1', src: 'A_1.ogg' }
			{ id: 's/b', src: 'B.mp3' }
			{ id: 's/b.1', src: 'B_1.ogg' }
			{ id: 's/c', src: 'C.mp3' }
			{ id: 's/c.1', src: 'C_1.ogg' }
			{ id: 's/d', src: 'D.mp3' }
			{ id: 's/d.1', src: 'D_1.ogg' }
			{ id: 's/e', src: 'E.mp3' }
			{ id: 's/e.1', src: 'E_1.ogg' }
			{ id: 's/f', src: 'F.mp3' }
			{ id: 's/f.1', src: 'F_1.ogg' }
			{ id: 's/silence', src: 'silence.mp3' }
		]
		@onDrop = (dispatcher, target) =>
			failed = false
			d = lib[dispatcher]
			t = target.parent
			a = d.index
			b = t.success
			console.log 'target es', target

			if lib[dispatcher].index in target.parent.success
				target.parent.success.remove lib[dispatcher].index
				lib[dispatcher].afterSuccess()
				lib.scene.success()
				TweenLite.to lib[dispatcher], 0.3, {scaleX:0.7, scaleY:0.7}
			else
				lib[dispatcher].afterFail()
				lib.scene.fail()
		@onClick = (dispatcher) =>
			d = lib[dispatcher]
			if d.dragged
				d.dragged = false
				return
			if dealersjs.mobile.isAndroid()
				lib.scene.snd = "s/#{d.index}.1"
			else 
				lib.scene.snd = "s/#{d.index}"
			createjs.Sound.stop()
			createjs.Sound.play lib.scene.snd
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Push the buttons then listen, look and drag to the correct box.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name:'beach', opts:{
										success:['1','4','5']
									}
								}
								{name:'city', opts:{
										success:['2','3','6']
									}
								}
							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'idc', id: 'beach', x: 310, y: 360, align: 'mc'}
						{type: 'idc', id: 'city', x: 525, y: 360, align: 'mc'}
						{type: 'drg', id: 'sunscreen', x: 100, y: 250, align:'mc', index: '1', target: ['beach','city'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'guidebook', x: 100, y: 350, align:'mc', index: '2', target: ['beach','city'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'camera', x: 100, y: 450, align:'mc', index: '3', target: ['beach','city'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'parasol', x: 720, y: 250, align:'mc', index: '4', target: ['beach','city'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'flipflops', x: 720, y: 350, align:'mc', index: '5', target: ['beach','city'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: 'artposters', x: 720, y: 450, align:'mc', index: '6', target: ['beach','city'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{
							type: 'btn', id: 'repeat', x: 400, y: 530, isRepeat: true
							states:[img: {name:'repeat', x: 0, y: 0, align:'mc'}]
						}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[
								{name:'winter', opts:{
										success:['b','e','f']
									}
								}
								{name:'summer', opts:{
										success:['a','c','d']
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