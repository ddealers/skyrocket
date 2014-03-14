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
		@btnClick = (dispatcher, target) =>
			d = lib[dispatcher]
			t = lib[target]
			a = d.index
			b = t.droptargets
			c = t.currentTarget
			console.log a, b[c].success
			if a is b[c].success
				b[c].complete = true
				b[c].update()
				t.currentTarget++
			if t.currentTarget is b.length
				lib.scene.success()
			else
				lib.scene.fail()
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Listen, look and drag to the correct box.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'dog'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't1'}}
								{name: 'pcpt1', opts:{pattern:['Mommy! You,','#tcpt', 'feed the dog', '#rtn', 'food for humans. He has dog food.'], targets: [{text:'shouldn\'t', success:'shouldnt'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'outside'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't2'}}
								{name: 'pcpt1', opts:{pattern:['Turn off your electronics, please.', '#rtn', 'You', '#tcpt', 'play together!'], targets: [{text:'should'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'head'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't3'}}
								{name: 'pcpt1', opts:{pattern:['I\'m sorry, Davey. You', '#tcpt','#rtn', 'wear your helmet when you cycle.'], targets: [{text:'should'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'oven'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't4'}}
								{name: 'pcpt1', opts:{pattern:['Wait! You', '#tcpt','use the hot oven.', '#rtn', 'I\'ll do it.'], targets: [{text:'shouldn\'t', success:'shouldnt'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'cat'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't5'}}
								{name: 'pcpt1', opts:{pattern:['I\'ll clean it.But you', '#tcpt', '#rtn', 'brush the catmore often, Bobby.'], targets: [{text:'should'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'soda'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't6'}}
								{name: 'pcpt1', opts:{pattern:['You', '#tcpt', 'drink soda,', '#rtn', 'you should drink water.'], targets: [{text:'shouldn\'t', success:'shouldnt'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'kiss'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't7'}}
								{name: 'pcpt1', opts:{pattern:['Sally, you', '#tcpt','kiss the dog;','#rtn', 'it isn\'t clean!'], targets: [{text:'shouldn\'t', success:'shouldnt'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'sun'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't8'}}
								{name: 'pcpt1', opts:{pattern:['Yes, but you', '#tcpt','wear sunscreen','#rtn', 'to protect your skin.'], targets: [{text:'should'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'fever'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't9'}}
								{name: 'pcpt1', opts:{pattern:['You have a fever, you', '#tcpt', '#rtn', 'go to school today.'], targets: [{text:'shouldn\'t', success:'shouldnt'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'burger'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't10'}}
								{name: 'pcpt1', opts:{pattern:['Honey, the doctor said you', '#rtn', '#tcpt', 'eat fat food!'], targets: [{text:'shouldn\'t', success:'shouldnt'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'homework'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't11'}}
								{name: 'pcpt1', opts:{pattern:['Great! You', '#tcpt', 'finish it quickly', '#rtn','and you can play outside.'], targets: [{text:'should'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'swim'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't12'}}
								{name: 'pcpt1', opts:{pattern:['You have an earache;', '#rtn', 'you', '#tcpt', 'swim today!'], targets: [{text:'shouldn\'t', success:'shouldnt'}]}}
							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'winter', x: 300, y: 330, align: 'mc'}
						{type: 'img', id: 'summer', x: 545, y: 330, align: 'mc'}
						{type: 'img', id: 'map' , x: 100, y: 250, align: 'mc'}
						{type: 'img', id: 'globes' , x: 100, y: 350, align: 'mc'}
						{type: 'img', id: 'hikingboots' , x: 100, y: 450, align: 'mc'}
						{type: 'img', id: 'compass' , x: 720, y: 250, align: 'mc'}
						{type: 'img', id: 'skihat' , x: 720, y: 350, align: 'mc'}
						{type: 'drg', id: 'skigoggles', x: 720, y: 450, index: 'f', target: ['winter','summer'], eval: @onDrop, afterSuccess: 'drop', afterFail: 'return'}
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