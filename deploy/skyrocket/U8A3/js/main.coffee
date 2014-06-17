###

NEW ODA

###
class U8A3 extends Oda
	constructor: ->
		@manifest = [
			{ id: 'c1', src: 'circilo_2.png' }
			{ id: 'c2', src: 'circulo_1.png' }
			{id:'1', src:'castle.png'}
			{id:'2', src:'swin.png'}
			{id:'3', src:'glasses.png'}
			{id:'4', src:'shoes.png'}
			{id:'5', src:'fly.png'}
			{id:'6', src:'strong.png'}
			{id:'7', src:'freeze.png'}
			{id:'8', src:'gloves.png'}
			{id:'zone1', src:'fishboy.png'}
			{id:'zone2', src:'zapman.png'}
			{id:'header', src:'header.png'}
			{id:'pantalla', src:'pantalla-01.png'}
			{id:'repeat', src:'repeat.png'}
			{id:'s/superheroes', src:'superheroes.mp3'}
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
				lib.scene.success true, false
				TweenLite.to d, 0.3, {scaleX:0.7, scaleY:0.7}
			else
				d.afterFail()
				lib.scene.fail()
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Listen, look and drag the pictures to the correct column.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 8, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name:'zone1', opts:{
										success:['1','2','3','4']
									}
								}
								{name:'zone2', opts:{
										success:['5','7','6','8']

									}
								}
								{name:'snd', opts:{id:'s/superheroes'}}
							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'idc', id: 'zone2', x: 411, y: 340, align: 'mc'}
						{type: 'idc', id: 'zone1', x: 170, y: 340, align: 'mc'}
						{type: 'drg', id: '1', x: 620, y: 190, align:'mc', index: '1', target: ['zone2','zone1'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '2', x: 700, y: 270, align:'mc', index: '2', target: ['zone2','zone1'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '3', x: 700, y: 190, align:'mc', index: '3', target: ['zone2','zone1'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '4', x: 620, y: 430, align:'mc', index: '4', target: ['zone2','zone1'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '5', x: 700, y: 350, align:'mc', index: '5', target: ['zone2','zone1'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '6', x: 700, y: 430, align:'mc', index: '6', target: ['zone2','zone1'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '7', x: 620, y: 270, align:'mc', index: '7', target: ['zone2','zone1'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '8', x: 620, y: 350, align:'mc', index: '8', target: ['zone2','zone1'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{
							type: 'btn', id: 'repeat', x: 710, y: 540, isRepeat: true
							states:[img: {name:'repeat', x: 0, y: 0, align:'mc'}]
						}
					]
					groups:[]
				}
				
				
			]
		super()
	window.U8A3 = U8A3