###

NEW ODA

###
class U9A4 extends Oda
	constructor: ->
		@manifest = [
			{ id: 'c1', src: 'circulo_1.png' }
			{ id: 'c2', src: 'circilo_2.png' }
			{ id: 'mazul', src: 'azul.png' }
			{ id: '1', src: '1.png' }
			{ id: '2', src: '2.png' }
			{ id: 'header', src: 'header.png' }
			{ id: '3', src: '3.png' }
			{ id: 'pazul', src: 'pieza_azul.png' }
			{ id: 'pbase', src: 'pieza_base.png' }
			{ id: 'pverde', src: 'pieza_verde.png' }
			{ id: '4', src: '4.png' }
			{ id: 'threeinarow', src: 'Three_in_a_Row.png' }
			{ id: 'mverde', src: 'verde.png' }
			{ id: 's/silence', src: 'silence.mp3' }
		]
		@pc = 0
		@you = 0
		@canDrop = false
		@onDrop = (dispatcher, target) =>
			d = lib[dispatcher]
			t =  target.parent
			
			if @canDrop is true
				
				if t.name in ['p1', 'p4', 'p7']
					console.log 'column uno'
					if lib["p7"].sprite.currentFrame is 0
						p = lib["p7"]
					else if lib["p4"].sprite.currentFrame is 0
						p = lib["p4"]	
					else if lib["p1"].sprite.currentFrame is 0
						p = lib["p1"]
				else if t.name in ['p2', 'p5', 'p8']
					console.log 'column dos'
					if lib["p8"].sprite.currentFrame is 0
						p = lib["p8"]
					else if lib["p5"].sprite.currentFrame is 0
						p = lib["p5"]
					else if lib["p2"].sprite.currentFrame is 0
						p = lib["p2"]
				else if t.name in ['p3', 'p6', 'p9']
					console.log 'column tres'
					if lib["p9"].sprite.currentFrame is 0
						p = lib["p9"]
					else if lib["p6"].sprite.currentFrame is 0
						p = lib["p6"]
					else if lib["p3"].sprite.currentFrame is 0
						p = lib["p3"]

				if p.name in ['p7', 'p8', 'p9']
					TweenLite.from p.sprite, 0.7, {y: -226}
				else if p.name in ['p4', 'p5', 'p6']
					TweenLite.from p.sprite, 0.4, {y: -138}
				else if p.name in ['p1', 'p2', 'p3']
					TweenLite.from p.sprite, 0.2, {y: -50}
				p.goto 1
				console.log p
				lib.scene.nextStep()
				d.afterSuccess()
				@canDrop = false
				@evaluateWin()
			else
				d.afterFail()
		@onChoose = (dispatcher) =>
			d = lib[dispatcher]
			if d.index is d2oda.evaluator.success
				createjs.Sound.play 's/good'
				@canDrop = true
			else
				@blank = new Array()
				for i in [1..9]
					if lib["p#{i}"]
						p = lib["p#{i}"]
						@blank.push p
				@random()

				lib.scene.fail()
				@canDrop = false
				lib.scene.nextStep()
				@evaluateWin()
				
		@random = () =>
			rand = Math.round Math.random() * (2)
			console.log rand

			if @blank[rand + 6].sprite.currentFrame is 0 
				p = @blank[rand + 6]
			else if @blank[rand + 3].sprite.currentFrame is 0 
				p = @blank[rand + 3]
			else if @blank[rand].sprite.currentFrame is 0 
				p = @blank[rand]
			else 
				@random()
				return
				
			p.goto 2
			if p.name in ['p7', 'p8', 'p9']
					TweenLite.from p.sprite, 0.7, {y: -226}
				else if p.name in ['p4', 'p5', 'p6']
					TweenLite.from p.sprite, 0.4, {y: -138}
				else if p.name in ['p1', 'p2', 'p3']
					TweenLite.from p.sprite, 0.2, {y: -50}

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
								{name: 'caw1', opts: {before:'Anna', opt1:'are', opt2:'is', after:'going to take swimming lessons this summer.'}}
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
								{name: 'caw1', opts: {before:'Paul\'s going to go surfing, but he', opt1:'is', opt2:'isn\'t', after:'going to go sailing.'}}
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
								{name: 'caw1', opts: {before:'Margaret and Gina', opt1:'are', opt2:'aren\'t', after:'coming to camp this year.','#rtn','They are staying home.'}}
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
								{name: 'caw1', opts: {before:'Samantha and Fred', opt1:'aren\'t', opt2:'are', after:' going horseback riding this afternoon.','#rtn','They love horses!'}}
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
								{name: 'caw1', opts: {before:'We', opt1:'is', opt2:'are', after:'going to take the dogs for a walk this afternoon.'}}
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
								{name: 'caw1', opts: {before:'You didn\'t finish your homework, Bill!','#rtn','You', opt1:'are', opt2:'aren\'t', after:'going to go to the party!'}}
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
								{name: 'caw1', opts: {before:'You', opt1:'aren\'t', opt2:'are', after:' going to go cycling this afternoon.','#rtn','Get your helmet!'}}
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
								{name: 'caw1', opts: {before:'The kids are', opt1:'go', opt2:'going', after:'to toast marshmallows tonight.'}}
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
								{name: 'caw1', opts: {before:'I\'m', opt1:'going', opt2:'not going', after:'to eat hotdogs.','#rtn','They make me sick.'}}
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
								{name: 'caw1', opts: {before:'Yippee! Mom and Dad are', opt1:'not going', opt2:'going', after:'to bring my dog to camp.','#rtn','I\'m so happy!'}}
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
								{name: 'caw1', opts: {before:'Candice is allergic to pink food coloring. // She', opt1:'is', opt2:'isn\'t', after:'going to eat pink candy. '}}
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
								{name: 'caw1', opts: {before:'Mark and Pete', opt1:'is', opt2:'are', after:'going to sing at the campfire!'}}
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
								{name: 'caw1', opts: {before:'', opt1:'I are', opt2:'I\'m', after:'going to learn how to play guitar this summer.'}}
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
								{name: 'caw1', opts: {before:'Do you like fishing?','#rtn','Yes, I', opt1:'do', opt2:'am', after:'.'}}
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
								{name: 'caw1', opts: {before:'Where are you going to go canoeing?','#rtn','On the', opt1:'mountain', opt2:'lake', after:'.'}}
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
								{name: 'caw1', opts: {before:'Where are you going to go camping?','#rtn','In a big', opt1:'nature', opt2:'tent', after:'.'}}
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
								{name: 'caw1', opts: {before:'When is your summer camp? It\'s in', opt1:'August', opt2:'the forest', after:'.'}}
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
								{name: 'caw1', opts: {before:'Where are you going to go camping? // In a big', opt1:'nature', opt2:'tent', after:'.'}}
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
								{name: 'caw1', opts: {before:'Are you going to go hiking in the mountains?','#rtn','Yes, we', opt1:'are', opt2:'do', after:'.'}}
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
								{name: 'caw1', opts: {before:'', opt1:'Do', opt2:'Are', after:' you going to take insect repellent?','#rtn','Yes, we are.'}}
							]
						]
						mixed: true
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'mazul', x: 80, y: 250}
						{type: 'img', id: 'mverde', x: 80, y: 350}
						{type: 'txt', id: 'tazul', text:'0', x: 178, y: 275, font:'24px Quicksand', align: 'center'}
						{type: 'txt', id: 'tverde', text:'0', x: 182, y: 375, font:'24px Quicksand', align: 'center'}
						{
							type: 'caw', id: 'caw1', x: 400, y: 530, align: 'tc', target: 'global', eval: @onChoose
							label:{font:'18px Quicksand', color:'#444'}
							bullets:{font:'18px Quicksand', color: '#000'}
						}

						{type: 'img', id: 'pbase', x: 278, y: 233}
						{type: 'img', id: 'pbase', x: 380, y: 233}
						{type: 'img', id: 'pbase', x: 482, y: 233}
						{type: 'img', id: 'pbase', x: 278, y: 321}
						{type: 'img', id: 'pbase', x: 380, y: 321}
						{type: 'img', id: 'pbase', x: 482, y: 321}
						{type: 'img', id: 'pbase', x: 278, y: 409}
						{type: 'img', id: 'pbase', x: 380, y: 409}
						{type: 'img', id: 'pbase', x: 482, y: 409}

						{type: 'spr', id: 'p1', imgs: ['pbase','pazul','pverde'], frames: null, x: 278, y: 233}
						{type: 'spr', id: 'p2', imgs: ['pbase','pazul','pverde'], frames: null, x: 380, y: 233}
						{type: 'spr', id: 'p3', imgs: ['pbase','pazul','pverde'], frames: null, x: 482, y: 233}
						{type: 'spr', id: 'p4', imgs: ['pbase','pazul','pverde'], frames: null, x: 278, y: 321}
						{type: 'spr', id: 'p5', imgs: ['pbase','pazul','pverde'], frames: null, x: 380, y: 321}
						{type: 'spr', id: 'p6', imgs: ['pbase','pazul','pverde'], frames: null, x: 482, y: 321}
						{type: 'spr', id: 'p7', imgs: ['pbase','pazul','pverde'], frames: null, x: 278, y: 409}
						{type: 'spr', id: 'p8', imgs: ['pbase','pazul','pverde'], frames: null, x: 380, y: 409}
						{type: 'spr', id: 'p9', imgs: ['pbase','pazul','pverde'], frames: null, x: 482, y: 409}

						
						
						{type: 'drg', id: 'pazul', x: 80, y: 260, index: '1', target: ['p1','p2','p3','p4','p5','p6','p7','p8','p9'], eval: @onDrop, afterSuccess: 'origin', afterFail: 'return'}

						{type: 'img', id: '1', x: 670, y: 200, align:'mc'}
						{type: 'img', id: '2', x: 670, y: 290, align:'mc'}
						{type: 'img', id: '3', x: 670, y: 380, align:'mc'}
						{type: 'img', id: '4', x: 670, y: 470, align:'mc'}
						
						{type: 'img', id: 'threeinarow', x: 420, y: 350, align: 'mc'}
					]
					groups:[]
				}
			]
		super()
	window.U9A4 = U9A4