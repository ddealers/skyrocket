###

NEW ODA

###
class U7A3 extends Oda
	constructor: ->
		@manifest = [
			{id:'c2', src:'circulo_2.png'}
			{id:'c1', src:'circulo_1.png'}
			{id:'header', src:'header.png'}
			{id:'cha1', src:'btn_1.png'}
			{id:'cha2', src:'btn_2.png'}
			{id:'cha3', src:'btn_3.png'}
			{id:'cha4', src:'btn_4.png'}
			{id:'cha5', src:'btn_5.png'}
			{id:'cha6', src:'btn_6.png'}
			{id:'cha7', src:'btn_7.png'}
			{id:'cha8', src:'btn_8.png'}
			{id:'caja', src:'caja.png'}
			{id:'hippydad', src:'hippy_dad.png'}
			{id:'hippymom', src:'hippy_mom.png'}
			{id:'mini', src:'mini.png'}
			{id:'pantalla', src:'pantalla-01.png'}
			{id:'phone', src:'phone.png'}
			{id:'radio', src:'radio.png'}
			{id:'reporter', src:'reporter.png'}
			{id:'ship', src:'ship.png'}
			{id:'recordplayer', src:'recordplayer.png'}
			{id:'cassetteplayer', src:'cassetteplayer.png'}
			#{id:'waltz', src:'ship.png'}
			#{id:'television', src:'ship.png'}
			{ id: 's/5' , src: 'boat.mp3' }
			{ id: 's/3' , src: 'cassettes.mp3' }
			{ id: 's/6' , src: 'hippydad.mp3' }
			{ id: 's/7' , src: 'hippymom.mp3' }
			{ id: 's/4' , src: 'mini.mp3' }
			{ id: 's/8' , src: 'phone.mp3' }
			{ id: 's/1' , src: 'radio.mp3' }
			{ id: 's/2' , src: 'records.mp3' }
			#{ id: 's/television' , src: 'television.mp3' }
			#{ id: 's/waltz' , src: 'waltz.mp3' }
			{ id: 's/silence' , src: 'silence.mp3' }
		]
		@inic = () =>
			if @channels then return
			chnls = [0,1,2,3,4,5,6,7]
			@channels = d2oda.utilities.shuffleNoRepeat chnls,8
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
				lib.scene.success()
			else
				d.afterFail()
				lib.scene.fail()
		@btnChannel = (dispatcher) =>
			@inic()
			d = lib[dispatcher]
			sel = @channels[d.index]
			lib.grp_pcpt.update {type:'fadeIn', target:"pcpt#{sel + 1}"}
			lib.grp_img.update {type:'fadeIn', target:"q#{sel + 1}"}
			createjs.Sound.stop()
			createjs.Sound.play "s/#{sel + 1}"
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Change the channels, listen and drag the correct options.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 8, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'grp_img', opts:{type:'fadeIn', target:'q1'}}
								#{name: 'pcpt1', opts:{pattern:['When my grandmother was young, ','#rtn','she used to','#tcpt','the waltz.'],targets:[{text:'dance'}]}}				
								#{name: 'pcpt1', opts:{pattern:['She used to watch shows on ','#rtn','a','#tcpt','TV.'],targets:[{text:'black and white'}]}}				
								{name: 'pcpt1', opts:{pattern:['He used to sit by the','#tcpt','#rtn','and listen to music.'],targets:[{text:'radio'}]}}
								{name: 'pcpt2', opts:{pattern:['His dad used to say, "Don\'t touch ','#rtn','the','#tcpt','! It can break."'],targets:[{text:'record'}]}}
								{name: 'pcpt3', opts:{pattern:['She made a cassette tape with','#rtn','love','#tcpt','for her boyfriend.'],targets:[{text:'songs'}]}}
								{name: 'pcpt4', opts:{pattern:['He used to have a slow','#tcpt',',','#rtn','but he loved it.'],targets:[{text:'car'}]}}
								{name: 'pcpt5', opts:{pattern:['In the past, people used','#rtn','to travel by','#tcpt','.'],targets:[{text:'boat'}]}}
								{name: 'pcpt6', opts:{pattern:['Her dad used to','#tcpt','#rtn','funny, with his long hair!'],targets:[{text:'look'}]}}
								{name: 'pcpt7', opts:{pattern:['Her mom used to play in a band','#rtn','She played','#tcpt','.'],targets:[{text:'guitar'}]}}
								{name: 'pcpt8', opts:{pattern:['The phones used to make a special','#rtn','noise. She','#tcpt','that noise!'],targets:[{text:'loved'}]}}
							]
						]
						#mixed: true
						type: 'steps'
					}
					containers:[
						#{type: 'img', name:'q1', id: 'waltz', x: 278, y: 438, align: 'mc'}		
						#{type: 'img', name:'q1', id: 'television', x: 278, y: 438, align: 'mc'}		
						{type: 'img', name:'q1', id: 'radio', x: 278, y: 438, align: 'mc'}
						{type: 'img', name:'q2', id: 'recordplayer', x: 278, y: 438, align: 'mc'}
						{type: 'img', name:'q3', id: 'cassetteplayer', x: 278, y: 438, align: 'mc'}
						{type: 'img', name:'q4', id: 'mini', x: 278, y: 438, align: 'mc'}
						{type: 'img', name:'q5', id: 'ship', x: 278, y: 438, align: 'mc'}
						{type: 'img', name:'q6', id: 'hippydad', x: 278, y: 438, align: 'mc'}
						{type: 'img', name:'q7', id: 'hippymom', x: 278, y: 438, align: 'mc'}
						{type: 'img', name:'q8', id: 'phone', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'reporter', x: 627, y: 440, align: 'mc'}
						{type: 'img', id: 'caja', x: 610, y: 290, align: 'mc'}
						{type: 'pcpt', id: 'pcpt1', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#009046', bcolor: '#defff0'}
						{type: 'pcpt', id: 'pcpt2', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#009046', bcolor: '#defff0'}
						{type: 'pcpt', id: 'pcpt3', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#009046', bcolor: '#defff0'}
						{type: 'pcpt', id: 'pcpt4', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#009046', bcolor: '#defff0'}
						{type: 'pcpt', id: 'pcpt5', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#009046', bcolor: '#defff0'}
						{type: 'pcpt', id: 'pcpt6', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#009046', bcolor: '#defff0'}
						{type: 'pcpt', id: 'pcpt7', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#009046', bcolor: '#defff0'}
						{type: 'pcpt', id: 'pcpt8', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#009046', bcolor: '#defff0'}
						#{type: 'pcpt', id: 'pcpt1', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, align: 'tl', scolor: '#009046', bcolor: '#defff0'}		
						#{type: 'pcpt', id: 'pcpt1', x: 470, y: 240, font: 'Bold 16px Quicksand', margin: 5, align: 'tl', scolor: '#009046', bcolor: '#defff0'}		
						{type: 'ldrg', id: 'ldrg1', x: 130, y: 235, index: 'radio', text: 'radio', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg2', x: 200, y: 235, index: 'dance', text: 'dance', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg3', x: 280, y: 235, index: 'record', text: 'record', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg4', x: 360, y: 235, index: 'songs', text: 'songs', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg5', x: 120, y: 270, index: 'black and white', text: 'black and white', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: '18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg6', x: 300, y: 270, index: 'car', text: 'car', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}		
						{type: 'ldrg', id: 'ldrg7', x: 360, y: 270, index: 'boat', text: 'boat', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg8', x: 330, y: 200, index: 'look', text: 'look', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg9', x: 260, y: 200, index: 'guitar', text: 'guitar', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg10', x: 180, y: 200, index: 'loved', text: 'loved', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'origin', afterFail:'return', eval: @onDrop}
						{
							type: 'btn', id: 'ch1', x: 392, y: 366, index:0, eval: @btnChannel
							states: [{img: {name:'cha1', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch2', x: 417, y: 366, index:1, eval: @btnChannel
							states: [{img: {name:'cha2', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch3', x: 392, y: 390, index:2, eval: @btnChannel
							states: [{img: {name:'cha3', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch4', x: 417, y: 390, index:3, eval: @btnChannel
							states: [{img: {name:'cha4', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch5', x: 392, y: 414, index:4, eval: @btnChannel
							states: [{img: {name:'cha5', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch6', x: 417, y: 414, index:5, eval: @btnChannel
							states: [{img: {name:'cha6', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch7', x: 392, y: 438, index:6, eval: @btnChannel
							states: [{img: {name:'cha7', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch8', x: 417, y: 438, index:7, eval: @btnChannel
							states: [{img: {name:'cha8', x:0, y:0, align:'mc'}}]
						}
					]
					groups:[
						{
							type: 'grp', id: 'grp_img', invisible:true
							group: [
								'q1'
								'q2'
								'q3'
								'q4'
								'q5'
								'q6'
								'q7'
								'q8'
							]
						}
						{
							type: 'grp', id: 'grp_pcpt', invisible:true
							group: [
								'pcpt1'
								'pcpt2'
								'pcpt3'
								'pcpt4'
								'pcpt5'
								'pcpt6'
								'pcpt7'
								'pcpt8'
							]
						}
					]
				}
			]
		super()
	window.U7A3 = U7A3