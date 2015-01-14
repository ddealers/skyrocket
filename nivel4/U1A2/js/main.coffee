###

NEW ODA

###
class U1A2 extends Oda
	constructor: ->
		@manifest = [
			{ id: 'burger', src: 'burger.png' }
			{ id: 'cat', src: 'cat.png' }
			{ id: 'c1', src: 'circulo1.png' }
			{ id: 'c2', src: 'circulo2.png' }
			{ id: 'dog', src: 'dog.png' }
			{ id: 'fever', src: 'fever.png' }
			{ id: 'globo1', src: 'globo1.png' }
			{ id: 'globo2', src: 'globo2.png' }
			{ id: 'head', src: 'head.png' }
			{ id: 'header', src: 'header.png' }
			{ id: 'homework', src: 'homework.png' }
			{ id: 'kiss', src: 'kiss.png' }
			{ id: 'outside', src: 'outside.png' }
			{ id: 'oven', src: 'oven.png' }
			{ id: 'soda', src: 'soda.png' }
			{ id: 'sun', src: 'sun.png' }
			{ id: 'swim', src: 'swim.png' }
			{ id: 's/silence', src: 'silence.mp3' }
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
				console.log str
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
						if not fail then lib.scene.success true,false
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
						if not fail then lib.scene.success true,false
					else if keycode is 32
						target.write '-'
					else if keycode is 222
						target.write '\''
					else if pattern.test str
						target.write str.toLowerCase()
		@game = 
			header: 'header' 
			instructions: {x: 110, y: 130, states: [{text:['Read and write','#ital',' or ','#ital'],italics:['should','shouldn\'t.'], sound:'s/silence', played: false, custom:true}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'dog'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't1'}}
								{name: 'pcpt1', opts:{pattern:['Mommy! You,','#tcpt', 'feed the dog', '#rtn', 'food for humans. He has dog food.'], targets: [{text:'shouldn\'t', success:'shouldn\'t'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'outside'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't2'}}
								{name: 'pcpt1', opts:{pattern:['Turn off your electronics, please.', '#rtn', 'You', '#tcpt', 'play together!'], targets: [{text:'should'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'head'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't3'}}
								{name: 'pcpt1', opts:{pattern:['I\'m sorry, Davey. You', '#tcpt','#rtn', 'wear your helmet when you cycle.'], targets: [{text:'should'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'oven'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't4'}}
								{name: 'pcpt1', opts:{pattern:['Wait! You', '#tcpt','use the hot', '#rtn', 'oven. I\'ll do it.'], targets: [{text:'shouldn\'t', success:'shouldn\'t'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'cat'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't5'}}
								{name: 'pcpt1', opts:{pattern:['I\'ll clean it. But you', '#tcpt', '#rtn', 'brush the cat more often, Bobby.'], targets: [{text:'should'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'soda'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't6'}}
								{name: 'pcpt1', opts:{pattern:['You', '#tcpt', 'drink soda,', '#rtn', 'you should drink water.'], targets: [{text:'shouldn\'t', success:'shouldn\'t'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'kiss'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't7'}}
								{name: 'pcpt1', opts:{pattern:['Sally, you', '#tcpt','kiss the dog;','#rtn', 'it isn\'t clean!'], targets: [{text:'shouldn\'t', success:'shouldn\'t'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'sun'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't8'}}
								{name: 'pcpt1', opts:{pattern:['Yes, but you', '#tcpt','wear sunscreen','#rtn', 'to protect your skin.'], targets: [{text:'should'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'fever'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't9'}}
								{name: 'pcpt1', opts:{pattern:['You have a fever, you', '#tcpt', '#rtn', 'go to school today.'], targets: [{text:'shouldn\'t', success:'shouldn\'t'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'burger'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't10'}}
								{name: 'pcpt1', opts:{pattern:['Honey, the doctor said you', '#rtn', '#tcpt', 'eat fat food!'], targets: [{text:'shouldn\'t', success:'shouldn\'t'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'homework'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't11'}}
								{name: 'pcpt1', opts:{pattern:['Great! You', '#tcpt', 'finish it quickly', '#rtn','and you can play outside.'], targets: [{text:'should'}]}}
							]
							[
								{name: 'window', opts: {keydown: @onkeydown, target:'pcpt1'}}
								{name: 'window', opts: {keyup: @onkeyup, target:'pcpt1'}}
								{name: 'grp1', opts:{type: 'fadeIn', target: 'swim'}}
								{name: 'txt_grp', opts:{type: 'fadeIn', target: 't12'}}
								{name: 'pcpt1', opts:{pattern:['You have an earache;', '#rtn', 'you', '#tcpt', 'swim today!'], targets: [{text:'shouldn\'t', success:'shouldn\'t'}]}}
							]
						]
						mixed: true
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'dog', x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'outside', x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'head' , x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'oven' , x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'cat' , x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'soda' , x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'kiss' , x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'sun' , x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'fever' , x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'burger', x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'homework', x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'swim', x: 400, y: 328, align: 'mc'}
						{type: 'img', id: 'globo1', x: 260, y: 520, align: 'mc'}
						{type: 'img', id: 'globo2', x: 530, y: 520, align: 'mc'}
						{type: 'txt', id: 't1', text:'Good dog! Have some of my cookie.', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't2', text:'It\'s nice to be outside.', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't3', text:'Dad, it hurts!', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't4', text:'Mom, the cookies are ready!', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't5', text:'Mom, there\'s a lot of cat hair on the sofa.', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't6', text:'I was thirsty, so I got a big soda!', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't7', text:'Come, doggie!', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't8', text:'It\'s so nice in the sun.', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't9', text:'I feel terrible, Mom.', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't10', text:'I love this food!', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't11', text:'I don\'t have a lot of homework, Dad.', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'txt', id: 't12', text:'Mom, can I swim now?', x: 165, y: 505, lineWidth: 200, font:'Bold 16px Quicksand', align: 'left'}
						{type: 'pcpt',lineHeight: 25, id: 'pcpt1', x: 390, y: 510, font: 'Bold 16px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}
					]
					groups:[
						{

							type: 'grp', id: 'grp1', invisible:true
							group: [
								'dog'
								'outside'
								'head' 
								'oven' 
								'cat' 
								'soda' 
								'kiss' 
								'sun' 
								'fever' 
								'burger'
								'homework'
								'swim'
							]
						}
						{
							type: 'grp', id:'txt_grp', invisible:true
							group: [
								't1'
								't2'
								't3'
								't4'
								't5'
								't6'
								't7'
								't8'
								't9'
								't10'
								't11'
								't12'
							]
						}
					]
				}
				
			]
		super()
	window.U1A2 = U1A2