###

NEW ODA

###
class U9A2 extends Oda
	constructor: ->
		@manifest = [

			{id:'boy', src:'boy.png'}
			{id:'boy2', src:'boy2.png'}
			{id:'caja', src:'caja.png'}
			{id:'c2', src:'circulo_2.png'}
			{id:'c1', src:'circulo_1.png'}
			{id:'control', src:'control.png'}
			{id:'girl', src:'girl.png'}
			{id:'horseriding', src:'man.png'}
			{id:'header', src:'header.png'}
			{id:'man', src:'man.png'}
			{id:'pantalla', src:'pantalla-01.png'}
			{id:'btn1', src:'btn1.png'}
			{id:'btn2', src:'btn2.png'}
			{id:'btn3', src:'btn3.png'}
			{id:'btn4', src:'btn4.png'}
			{id:'btn5', src:'btn5.png'}
			{id:'btn6', src:'btn6.png'}
			{id:'btn7', src:'btn7.png'}
			{id:'btn8', src:'btn8.png'}
			{id:'s/1', src:'fishing.mp3'}
			{id:'s/1.1', src:'fishing_1.ogg'}
			{id:'s/2', src:'horse.mp3'}
			{id:'s/2.1', src:'horse_1.ogg'}
			{id:'s/3', src:'backpack.mp3'}
			{id:'s/3.1', src:'backpack_1.ogg'}
			{id:'s/4', src:'hikingboots.mp3'}
			{id:'s/4.1', src:'hikingboots_1.ogg'}
			{id:'s/5', src:'sleepingbag.mp3'}
			{id:'s/5.1', src:'sleepingbag_1.ogg'}
			{id:'s/6', src:'rope.mp3'}
			{id:'s/6.1', src:'rope_1.ogg'}
			{id:'s/7', src:'swimming.mp3'}
			{id:'s/7.1', src:'swimming_1.ogg'}
			{id:'s/8', src:'lifejacket.mp3'}
			{id:'s/8.1', src:'lifejacket_1.ogg'}
			{id:'s/9', src:'flashlight.mp3'}
			{id:'s/9.1', src:'flashlight_1.ogg'}
			{id:'s/10', src:'horseriding.mp3'}
			{id:'s/10.1', src:'horseriding_1.ogg'}
			{id: 's/silence' , src: 'silence.mp3' }
		]


		@onDrop = (dispatcher, target) =>
			d = lib[dispatcher]
			t = target.parent
			a = d.index
			b = t.droptargets
			c = t.currentTarget
			
			if a is b[c].success
				b[c].complete = true
				b[c].update()
				d.afterSuccess()
				t.currentTarget++
			if t.currentTarget is b.length
				lib.scene.success true, false
			else
				d.afterFail()
				lib.scene.fail()
		@btnChannel = (dispatcher) =>
			@inic()
			d = lib[dispatcher]
			sel = @channels[d.index]
			lib.grp_pcpt.update {type:'fadeIn', target:"pcpt#{sel + 1}"}
			lib.grp_img.update {type:'fadeIn', target:"q#{sel + 1}"}
			if dealersjs.mobile.isAndroid()
				snd = "s/#{sel + 1}.1"
			else
				snd = "s/#{sel + 1}"
			createjs.Sound.play snd
		@inic = () =>
			if @channels then return
			chnls = [0,1,2,3,4,5,6,7,8,9]
			@channels = d2oda.utilities.shuffleNoRepeat chnls, 10
			
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Change the channels, listen and drag the correct options.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 10, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'grp_img', opts:{type: 'fadeIn', target: 'q1'}}
								{name: 'pcpt1', opts:{pattern:['Oh, I can\'t eat meat or ','#tcpt','. ','#rtn','I\'m a vegetarian.'],targets:[{text:'fish'}]}}
								{name: 'pcpt2', opts:{pattern:['I\'m ','#tcpt',' to horses. ','#rtn','They make me sneeze.'],targets:[{text:'allergic'}]}}
								{name: 'pcpt3', opts:{pattern:['My ','#tcpt',' is too heavy. ','#rtn','Can you take some of my things?'],targets:[{text:'backpack'}]}}
								{name: 'pcpt4', opts:{pattern:['I\'ll wait for you here. ','#rtn','My ','#tcpt',' hurt my feet.'],targets:[{text:'hiking boots'}]}}
								{name: 'pcpt5', opts:{pattern:['Counselor, help! There\'s a ','#rtn','spider in my ','#tcpt','.'],targets:[{text:'sleeping bag'}]}}
								{name: 'pcpt6', opts:{pattern:['Oh, oh, I forgot the ','#tcpt',', sorry!'],targets:[{text:'rope'}]}}
								{name: 'pcpt7', opts:{pattern:['No, that\'s okay, I\'ll read my ','#rtn','book. I forgot my ','#tcpt','.'],targets:[{text:'swimsuit'}]}}
								{name: 'pcpt8', opts:{pattern:['Sorry, my ','#tcpt',' is too ','#rtn','small. I can\'t go on the water.'],targets:[{text:'lifejacket'}]}}
								{name: 'pcpt9', opts:{pattern:['Sorry, counselor, the battery ','#rtn','in my ','#tcpt',' died.'],targets:[{text:'flashlight'}]}}
								{name: 'pcpt10', opts:{pattern:['I can\'t go horsebackriding. ','#rtn','I can\'t find my ','#tcpt','.'],targets:[{text:'helmet'}]}}
							]
						
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'boy', x: 650, y: 435, align: 'mc'}
						{type: 'img', id: 'control', x: 170, y: 438, align: 'mc'}
						{type: 'img', id: 'caja', x: 630, y: 240, align: 'mc'}
						{type: 'img', name:'q1', id: 'boy2', x: 295, y: 310, align: 'mc'}
						{type: 'img', name:'q2', id: 'boy2', x: 295, y: 310, align: 'mc'}
						{type: 'img', name:'q3', id: 'man', x: 295, y: 310, align: 'mc'}
						{type: 'img', name:'q4', id: 'man', x: 295, y: 310, align: 'mc'}
						{type: 'img', name:'q5', id: 'man', x: 295, y: 310, align: 'mc'}
						{type: 'img', name:'q6', id: 'girl', x: 295, y: 310, align: 'mc'}
						{type: 'img', name:'q7', id: 'girl', x: 295, y: 310, align: 'mc'}
						{type: 'img', name:'q8', id: 'boy2', x: 295, y: 310, align: 'mc'}
						{type: 'img', name:'q9', id: 'man', x: 295, y: 310, align: 'mc'}
						{type: 'img', name:'q10', id: 'man', x: 295, y: 310, align: 'mc'}
						#{type: 'img', id: 'horseriding', x: 295, y: 310, align: 'mc'}
						{type: 'pcpt', id: 'pcpt1', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'pcpt', id: 'pcpt2', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'pcpt', id: 'pcpt3', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'pcpt', id: 'pcpt4', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'pcpt', id: 'pcpt5', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'pcpt', id: 'pcpt6', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'pcpt', id: 'pcpt7', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'pcpt', id: 'pcpt8', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'pcpt', id: 'pcpt9', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'pcpt', id: 'pcpt10', x: 505, y: 200, font: 'Bold 16px Quicksand', underline:{y:0}, margin: 1, align: 'tl', scolor: '#009046'}
						{type: 'ldrg', id: 'ldrg1', x: 80+160, y: 535, align: 'tc', index: 'backpack', text: 'backpack', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg2', x: 190+160, y: 535, align: 'tc', index: 'rope', text: 'rope', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg3', x: 250+160, y: 535, align: 'tc', index: 'flashlight', text: 'flashlight', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg4', x: 350+160, y: 535, align: 'tc', index: 'helmet', text: 'helmet', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg5', x: 100+160, y: 570, align: 'tc', index: 'sleeping bag', text: 'sleeping bag', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg6', x: 250+160, y: 570, align: 'tc', index: 'fish', text: 'fish', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg7', x: 320+160, y: 570, align: 'tc', index: 'allergic', text: 'allergic', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg8', x: 340+160, y: 500, align: 'tc', index: 'swimsuit', text: 'swimsuit', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg9', x: 230+160, y: 500, align: 'tc', index: 'lifejacket', text: 'lifejacket', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg10', x: 90+160, y: 500, align: 'tc', index: 'hiking boots', text: 'hiking boots', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8','pcpt9','pcpt10'], font: 'Bold 20px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{
							type: 'btn', id: 'ch1', x: 144, y: 417, index:0, eval: @btnChannel
							states: [{img: {name:'btn1', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch2', x: 173, y: 417, index:1, eval: @btnChannel
							states: [{img: {name:'btn2', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch3', x: 203, y: 417, index:2, eval: @btnChannel
							states: [{img: {name:'btn3', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch4', x: 144, y: 437, index:3, eval: @btnChannel
							states: [{img: {name:'btn4', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch5', x: 173, y: 437, index:4, eval: @btnChannel
							states: [{img: {name:'btn5', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch6', x: 203, y: 437, index:5, eval: @btnChannel
							states: [{img: {name:'btn6', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch7', x: 161, y: 460, index:6, eval: @btnChannel
							states: [{img: {name:'btn7', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch8', x: 190, y: 460, index:7, eval: @btnChannel
							states: [{img: {name:'btn8', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch9', x: 190, y: 483, index:8, eval: @btnChannel
							states: [{img: {name:'btn7', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch10', x: 161, y: 483, index:9, eval: @btnChannel
							states: [{img: {name:'btn8', x:0, y:0, align:'mc'}}]
						}
					]
					groups:[
						{
							type: 'grp', id: 'grp_img', invisible: true
							group: [
								'q1'
								'q2'
								'q3'
								'q4'
								'q5'
								'q6'
								'q7'
								'q8'
								'q9'
								'q10'
							]
						}
						{
							type: 'grp', id: 'grp_pcpt', invisible: true
							group: [
								'pcpt1'
								'pcpt2'
								'pcpt3'
								'pcpt4'
								'pcpt5'
								'pcpt6'
								'pcpt7'
								'pcpt8'
								'pcpt9'
								'pcpt10'
							]
						}
					]
				}
				
			]
		super()
	window.U9A2 = U9A2