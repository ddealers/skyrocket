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
			{ id: 'pbase', src: 'pieza_base.png' }
			{ id: 'pverde', src: 'pieza_verde.png' }
			{ id: 'string', src: 'string.png' }
			{ id: 'threeinarow', src: 'Three_in_a_Row.png' }
			{ id: 'mverde', src: 'verde.png' }
			{ id: 'whistle', src: 'whistle.png' }
			{ id: 's/silence', src: 'silence.mp3' }
		]
		@pc = 0
		@you = 0
		@onDrop = (dispatcher, target) =>
			d = lib[dispatcher]
			t =  target.parent
			if d.index is t.success
				if t.name is 'p1'
					if lib['p7'].sprite.currentFrame is 0
						lib['p7'].goto 1
					else if lib['p4'].sprite.currentFrame is 0
						lib['p4'].goto 1
					else
						lib['p1'].goto 1
				else if t.name is 'p2'
					if lib['p8'].sprite.currentFrame is 0
						lib['p8'].goto 1
					else if lib['p5'].sprite.currentFrame is 0
						lib['p5'].goto 1
					else
						lib['p2'].goto 1
				else if t.name is 'p3'
					if lib['p9'].sprite.currentFrame is 0
						lib['p9'].goto 1
					else if lib['p6'].sprite.currentFrame is 0
						lib['p6'].goto 1
					else
						lib['p3'].goto 1
				d.afterSuccess()
				d.disableDrag = true
				d2oda.methods.delay 300, =>
					lib.scene.success()
					@evaluateWin()
			else
				d.afterFail()
		@onChoose = (dispatcher) =>
			d = lib[dispatcher]
			if d.index is d2oda.evaluator.success
				createjs.Sound.play 's/good'
				lib.pazul.disableDrag = false
			else
				if not @evaluate79(2)
					if not @evaluate46(2)
						@evaluate13(2)
				lib.scene.fail()
				lib.scene.nextStep()
				@evaluateWin()
		@evaluate13 = (token) =>
			@evaluateBlanks(1, 3, token)
		@evaluate46 = (token) =>
			@evaluateBlanks(4, 6, token)
		@evaluate79 = (token) =>
			@evaluateBlanks(7, 9, token)
		@evaluateBlanks = (min, max, token) =>
			blank = new Array()
			for i in [min..max]
					if lib["p#{i}"]
						p = lib["p#{i}"]
						if p.sprite.currentFrame is 0
							blank.push p
			rand = Math.round Math.random() * (blank.length - 1)
			if blank.length > 0
				blank[rand].goto token
				true
			else
				false
		@evaluateWin = () =>
			if (@getFrame 'p1') is 2 and (@getFrame 'p2') is 2 and (@getFrame 'p3') is 2 then @scoreUp 'pc'
			if (@getFrame 'p4') is 2 and (@getFrame 'p5') is 2 and (@getFrame 'p6') is 2 then @scoreUp 'pc'
			if (@getFrame 'p7') is 2 and (@getFrame 'p8') is 2 and (@getFrame 'p9') is 2 then @scoreUp 'pc'
			if (@getFrame 'p1') is 2 and (@getFrame 'p4') is 2 and (@getFrame 'p7') is 2 then @scoreUp 'pc'
			if (@getFrame 'p2') is 2 and (@getFrame 'p5') is 2 and (@getFrame 'p8') is 2 then @scoreUp 'pc'
			if (@getFrame 'p3') is 2 and (@getFrame 'p6') is 2 and (@getFrame 'p9') is 2 then @scoreUp 'pc'
			if (@getFrame 'p1') is 2 and (@getFrame 'p5') is 2 and (@getFrame 'p9') is 2 then @scoreUp 'pc'
			if (@getFrame 'p3') is 2 and (@getFrame 'p5') is 2 and (@getFrame 'p7') is 2 then @scoreUp 'pc'

			if (@getFrame 'p1') is 1 and (@getFrame 'p2') is 1 and (@getFrame 'p3') is 1 then @scoreUp 'you'
			if (@getFrame 'p4') is 1 and (@getFrame 'p5') is 1 and (@getFrame 'p6') is 1 then @scoreUp 'you'
			if (@getFrame 'p7') is 1 and (@getFrame 'p8') is 1 and (@getFrame 'p9') is 1 then @scoreUp 'you'
			if (@getFrame 'p1') is 1 and (@getFrame 'p4') is 1 and (@getFrame 'p7') is 1 then @scoreUp 'you'
			if (@getFrame 'p2') is 1 and (@getFrame 'p5') is 1 and (@getFrame 'p8') is 1 then @scoreUp 'you'
			if (@getFrame 'p3') is 1 and (@getFrame 'p6') is 1 and (@getFrame 'p9') is 1 then @scoreUp 'you'
			if (@getFrame 'p1') is 1 and (@getFrame 'p5') is 1 and (@getFrame 'p9') is 1 then @scoreUp 'you'
			if (@getFrame 'p3') is 1 and (@getFrame 'p5') is 1 and (@getFrame 'p7') is 1 then @scoreUp 'you'

			if (@getFrame 'p1') isnt 0 and (@getFrame 'p2') isnt 0 and (@getFrame 'p3') isnt 0 and (@getFrame 'p4') isnt 0 and (@getFrame 'p5') isnt 0 and (@getFrame 'p6') isnt 0 and (@getFrame 'p7') isnt 0 and (@getFrame 'p8') isnt 0 and (@getFrame 'p9') isnt 0 then @reset()
		@scoreUp = (type) =>
			switch type
				when 'pc'
					@pc++
					createjs.Sound.play 's/wrong'
					lib.tverde.update {text: @pc}
				when 'you'
					@you++
					createjs.Sound.play 's/good'
					lib.tazul.update {text: @you}
			if @pc >= 3 or @you >= 3
				d2oda.methods.delay 2000, ->
					lib.game.nextScene()
			else

				@reset()
		@reset = () =>
			d2oda.methods.delay 500, ->

				for i in [1..9]
					lib["p#{i}"].goto 0
		@getFrame = (obj) =>
			lib[obj].sprite.currentFrame
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Choose the correct option. Then drag a token to beat the computer.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 16, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name:'global', opts:{success:1}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'I used a knife', opt1:'to', opt2:'for', after:'cut the palm leaves.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'He needed a whistle', opt1:'to', opt2:'for', after:'making noise.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'She used binoculars', opt1:'to', opt2:'for', after:'look for ships.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'They used the net', opt1:'to', opt2:'for', after:'catching fish.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'Use a compass', opt1:'to', opt2:'for', after:'find your way.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'Sam needs rope', opt1:'to', opt2:'for', after:'tie the raft to the tree.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'You can collect wood', opt1:'to', opt2:'for', after:'make a fire.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'Dad used the mirror', opt1:'to', opt2:'for', after:'making fire.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'Mom used leaves', opt1:'to', opt2:'for', after:'make a pillow.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'We collected the rain', opt1:'to', opt2:'for', after:'drink it.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'She used a tennis ball', opt1:'to', opt2:'for', after:'collecting water.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'They used trash bags', opt1:'to', opt2:'for', after:'protecting themselves from the rain.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'They used rope', opt1:'to', opt2:'for', after:'tie the planks together.'}}
							]
							[
								{name:'global', opts:{success:1}}
							{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'The father used the sail', opt1:'to', opt2:'for', after:'make a tent.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'You can use the sail', opt1:'to', opt2:'for', after:'making clothes.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'p1', opts:{success: '1', complete: true}}
								{name: 'p2', opts:{success: '1', complete: true}}
								{name: 'p3', opts:{success: '1', complete: true}}
								{name: 'p4', opts:{success: '1', complete: true}}
								{name: 'p5', opts:{success: '1', complete: true}}
								{name: 'p6', opts:{success: '1', complete: true}}
								{name: 'p7', opts:{success: '1', complete: true}}
								{name: 'p8', opts:{success: '1', complete: true}}
								{name: 'p9', opts:{success: '1', complete: true}}
								{name: 'caw1', opts: {before:'They used large water bottles', opt1:'to', opt2:'for', after:'making the raft.'}}
							]
						]
						#mixed: true
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'mazul', x: 80, y: 250}
						{type: 'img', id: 'mverde', x: 80, y: 350}
						{type: 'txt', id: 'tazul', text:'0', x: 178, y: 275, font:'Bold 24px Quicksand', align: 'center'}
						{type: 'txt', id: 'tverde', text:'0', x: 182, y: 375, font:'Bold 24px Quicksand', align: 'center'}
						{
							type: 'caw', id: 'caw1', x: 400, y: 530, align: 'tc', target: 'global', eval: @onChoose
							label:{font:'Bold 18px Quicksand', color:'#444'}
							bullets:{font:'18px Quicksand', color: '#000'}
						}
						{type: 'img', id: 'threeinarow', x: 420, y: 350, align: 'mc'}
						{type: 'spr', id: 'p1', imgs: ['pbase','pazul','pverde'], frames: null, x: 278, y: 233}
						{type: 'spr', id: 'p2', imgs: ['pbase','pazul','pverde'], frames: null, x: 380, y: 233}
						{type: 'spr', id: 'p3', imgs: ['pbase','pazul','pverde'], frames: null, x: 482, y: 233}
						{type: 'spr', id: 'p4', imgs: ['pbase','pazul','pverde'], frames: null, x: 278, y: 321}
						{type: 'spr', id: 'p5', imgs: ['pbase','pazul','pverde'], frames: null, x: 380, y: 321}
						{type: 'spr', id: 'p6', imgs: ['pbase','pazul','pverde'], frames: null, x: 482, y: 321}
						{type: 'spr', id: 'p7', imgs: ['pbase','pazul','pverde'], frames: null, x: 278, y: 409}
						{type: 'spr', id: 'p8', imgs: ['pbase','pazul','pverde'], frames: null, x: 380, y: 409}
						{type: 'spr', id: 'p9', imgs: ['pbase','pazul','pverde'], frames: null, x: 482, y: 409}
						{type: 'drg', id: 'pazul', x: 107, y: 287, align:'mc', disableDrag: true, index: '1', target: ['p1','p2','p3','p4','p5','p6','p7','p8','p9'], eval: @onDrop, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'img', id: 'binoculars', x: 670, y: 200, align: 'mc'}
						{type: 'img', id: 'compass', x: 670, y: 270, align: 'mc'}
						{type: 'img', id: 'knife', x: 670, y: 340, align: 'mc'}
						{type: 'img', id: 'string', x: 670, y: 410, align: 'mc'}
						{type: 'img', id: 'whistle', x: 670, y: 480, align: 'mc'}
					]
					groups:[]
				}
			]
		super()
	window.U2A2 = U2A2