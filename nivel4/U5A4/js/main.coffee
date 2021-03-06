###

NEW ODA

###
class U5A4 extends Oda
	constructor: ->
		@manifest = [
			{id:'10', src:'10.png'}
			{id:'10b', src:'10_2.png'}
			{id:'5', src:'5.png'}
			{id:'5b', src:'5_2.png'}
			{id:'6', src:'6.png'}
			{id:'6b', src:'6_2.png'}
			{id:'7', src:'7.png'}
			{id:'7b', src:'7_2.png'}
			{id:'8', src:'8.png'}
			{id:'8b', src:'8_2.png'}
			{id:'9', src:'9.png'}
			{id:'9b', src:'9_2.png'}
			{id:'c2', src:'circulo2.png'}
			{id:'c1', src:'cirulo1.png'}
			{id:'farther', src:'farther.png'}
			{id:'funnier', src:'funnier.png'}
			{id:'happier', src:'happier.png'}
			{id:'harder', src:'harder.png'}
			{id:'header', src:'header.png'}
			{id:'higher', src:'higher.png'}
			{id:'hotter', src:'hotter.png'}
			{id:'longer', src:'longer.png'}
			{id:'older', src:'older.png'}
			{id:'pantalla01', src:'pantalla-01.png'}
			{id:'stronger', src:'stronger.png'}
			{id:'thinner', src:'thinner.png'}

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
						if not target.parent.complete and target.parent.isComplete()
							target.parent.complete = true
							lib.scene.success true, false
						if not fail and not target.parent.complete
							createjs.Sound.play 's/good'
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
						if not target.parent.complete and target.parent.isComplete()
							target.parent.complete = true
							lib.scene.success true, false
						if not fail and not target.parent.complete
							createjs.Sound.play 's/good'
					else if keycode is 32
						target.write '-'
					else if keycode is 222
						target.write '\''
					else if pattern.test str
						target.write str.toLowerCase()
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Read and write the words.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 8, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'older'}}
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text1'}}
								{name: 'pcpt1', opts: {pattern:['Lizzy is ', '#tcpt', '#tcpt',' (old) her sister.'], targets: [{text: 'older'},{text: 'than'}]}}

							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'thinner'}}
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text2'}}
								{name: 'pcpt1', opts: {pattern:['Patrick is', '#tcpt','#tcpt', '(thin) Louis.'], targets: [{text: 'thinner'},{text: 'than'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'hotter'}}	
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text3'}}			
								{name: 'pcpt1', opts: {pattern:['Today is', '#tcpt','#tcpt', '(hot) yesterday.'], targets: [{text: 'hotter'},{text: 'than'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'funnier'}}
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text4'}}			
								{name: 'pcpt1', opts: {pattern:['This movie is', '#tcpt','#tcpt', '#rtn', '(funny) the other one.'], targets: [{text: 'funnier'},{text: 'than'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'longer'}}	
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text5'}}			
								{name: 'pcpt1', opts: {pattern:['Roger\'s book is', '#tcpt','#rtn','#tcpt', '(long) Paul\'s.'], targets: [{text: 'longer'},{text: 'than'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'stronger'}}
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text6'}}			
								{name: 'pcpt1', opts: {pattern:['Your brother is ', '#tcpt','#rtn','#tcpt', '(strong) you.'], targets: [{text: 'stronger'},{text: 'than'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'higher'}}		
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text7'}}		
								{name: 'pcpt1', opts: {pattern:['She jumps', '#tcpt','#tcpt', '(high) you.'], targets: [{text: 'higher'},{text: 'than'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'happier'}}	
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text8'}}		
								{name: 'pcpt1', opts: {pattern:['Laura is', '#tcpt','#tcpt', '(happy) Samuel.'], targets: [{text: 'happier'},{text: 'than'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'harder'}}		
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text9'}}		
								{name: 'pcpt1', opts: {pattern:['He kicked the ball', '#tcpt','#tcpt','#rtn', '(hard) the other players.'], targets: [{text: 'harder'},{text: 'than'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'farther'}}
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text10'}}
								{name: 'pcpt1', opts: {pattern:['Andrew lives', '#tcpt', 'from', '#rtn', '(far) the school', '#tcpt', 'Liz.'], targets: [{text: 'farther'},{text: 'than'}]}}
							]
						]
						mixed: true
						type: 'limit'
						limit: 8
					}
					containers:[
						{type: 'img', id: 'older', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: 'thinner', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: 'hotter', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: 'funnier', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: 'longer', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: 'stronger', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: 'higher', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: 'happier', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: 'harder', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: 'farther', x: 425, y: 338, align: 'mc'}
						{type: 'img', id: '9', x: 265, y: 523, align: 'mc'}
						{type: 'img', id: '9', x: 590, y: 523, align: 'mc'}
						{type: 'txt', id: 'text1', text: 'Lizzy is 10 years old and her sister is 3.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
						{type: 'txt', id: 'text2', text: 'Patrick is thin. Louis is not thin. Yesterday it was 25 degrees.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
						{type: 'txt', id: 'text3', text: 'It\'s hot today, 32 degrees! Yesterday it was 25 degrees.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
						{type: 'txt', id: 'text4', text: 'This movie is very funny. The one we saw yesterday wasn\'t.','#rtn','Paul\'s book is only 200 pages.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
						{type: 'txt', id: 'text5', text: 'Roger\'s book is long, 300 pages! Paul\'s book is only 200 pages.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
						{type: 'txt', id: 'text6', text: 'I am strong, but my big brother is very strong.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
						{type: 'txt', id: 'text7', text: 'My mom is a dancer. She jumps really high.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
						{type: 'txt', id: 'text8', text: 'Laura got 9 on her exam. Samuel got a 7.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
                        {type: 'txt', id: 'text9', text: 'Dennis scored a goal. He Kicked the ball hard.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
                        {type: 'txt', id: 'text10', text: 'Liz lives next door to the school. Andrew lives five kilometers away.', x:260, y:505, font:'Bold 14px Quicksand', align: 'center', lineWidth: 180}
						{type: 'pcpt', id: 'pcpt1', x: 590, y: 510, font: 'Bold 14px Quicksand', margin: 5, align: 'tc', lineHeight: 20, underline:{y:0}, bcolor: '#d7ecf9', scolor: '#00629f'}
					]
					groups:[
						{

							type: 'grp', id: 'grp1', invisible:true
							group: [
								'older'
								'thinner'
								'hotter'
								'funnier'
								'longer'
								'stronger'
								'higher'
								'happier'
								'harder'
								'farther'
							]
						}
						{

							type: 'grp', id: 'grp2', invisible:true
							group: [
								'text1'
								'text2'
								'text3'
								'text4'
								'text5'
								'text6'
								'text7'
								'text8'
                                'text9'
                                'text10'

							]
						}
					]
				}
				
			]
		super()
	window.U5A4 = U5A4