###

NEW ODA

###
class U1A1 extends Oda
	constructor: ->
		@manifest = [
			{id:'cha1', src:'btn_1.png'}
			{id:'cha2', src:'btn_2.png'}
			{id:'cha3', src:'btn_3.png'}
			{id:'cha4', src:'btn_4.png'}
			{id:'cha5', src:'btn_5.png'}
			{id:'cha6', src:'btn_6.png'}
			{id:'cha7', src:'btn_7.png'}
			{id:'cha8', src:'btn_8.png'}
			{id:'caja', src:'caja.png'}
			{id:'c2', src:'circilo_2.png'}
			{id:'c1', src:'circulo_1.png'}
			{id:'header', src:'header.png'}
			{id:'hippydad', src:'hippy_dad.png'}
			{id:'hippymom', src:'hippy_mom.png'}
			{id:'mini', src:'mini.png'}
			{id:'pantalla', src:'pantalla-01.png'}
			{id:'phone', src:'phone.png'}
			{id:'radio', src:'radio.png'}
			{id:'reporter', src:'reporter.png'}
			{id:'ship', src:'ship.png'}

			
			{id:'waltz', src:'ship.png'}
			{id:'recordplayer', src:'ship.png'}
			{id:'cassetteplayer', src:'ship.png'}
			{id:'television', src:'ship.png'}					
			


			{ id: 's/silence' , src: 'silence.mp3' }
		]
		@btnClick = (dispatcher, target) =>
			d = lib[dispatcher]
			t = lib[target]
			a = d.index
			b = t.droptargets
			c = t.currentTarget
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
			instructions: {x: 110, y: 130, states: [{text:'Change the channels, listen and drag the correct options.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'radio'}}
								{name: 'pcpt1', opts:{pattern:['He used to sit by the ','#tcpt','#rtn','and listen to music.'],targets:[{text:'radio'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'waltz'}}
								{name: 'pcpt1', opts:{pattern:['When my grandmother was young, ','#rtn','she used to','#tcpt','the waltz.'],targets:[{text:'dance'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'recordplayer'}}
								{name: 'pcpt1', opts:{pattern:['His dad used to say, "Don\'t touch ','#rtn','the','#tcpt','! It can break."'],targets:[{text:'record'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'cassetteplayer'}}
								{name: 'pcpt1', opts:{pattern:['She made a cassette tape with ','#rtn','love','#tcpt','for her boyfriend.'],targets:[{text:'songs'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'television'}}
								{name: 'pcpt1', opts:{pattern:['She used to watch shows on ','#rtn','a','#tcpt','TV.'],targets:[{text:'black and white'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'mini'}}
								{name: 'pcpt1', opts:{pattern:['He used to have a slow ','#tcpt',',','#rtn','but he loved it.'],targets:[{text:'car'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'ship'}}
								{name: 'pcpt1', opts:{pattern:['In the past, people used ','#rtn','to travel by','#tcpt','.'],targets:[{text:'boat'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'hippydad'}}
								{name: 'pcpt1', opts:{pattern:['Her dad used to','#tcpt','#rtn','funny, with his long hair!'],targets:[{text:'look'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'hippymom'}}
								{name: 'pcpt1', opts:{pattern:['Her mom used to play in a band','#rtn','She played','#tcpt','.'],targets:[{text:'guitar'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'phone'}}
								{name: 'pcpt1', opts:{pattern:['The phones used to make a special','#rtn','noise. She','#tcpt','that noise!'],targets:[{text:'loved'}]}}
							]
						
						]
						mixed: true
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'radio', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'waltz', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'recordplayer', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'cassetteplayer', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'television', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'mini', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'ship', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'hippydad', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'hippymom', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'phone', x: 278, y: 438, align: 'mc'}
						{type: 'img', id: 'reporter', x: 627, y: 440, align: 'mc'}
						{type: 'img', id: 'caja', x: 610, y: 290, align: 'mc'}

						{type: 'pcpt', id: 'pcpt1', x: 470, y: 240, font: '16px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}

						{
							type: 'btn', id: 'btn_1', x: 130, y: 235, index: 'radio', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'radio', name:'radio', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_2', x: 200, y: 235, index: 'dance', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'dance', name:'dance', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_3', x: 280, y: 235, index: 'record', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'record', name:'record', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_4', x: 360, y: 235, index: 'songs', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'songs', name:'songs', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_5', x: 180, y: 270, index: 'black and white', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'black and white', name:'black and white', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_6', x: 300, y: 270, index: 'car', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'car', name:'car', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_7', x: 360, y: 270, index: 'boat', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'boat', name:'boat', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_8', x: 330, y: 200, index: 'look', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'look', name:'look', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_9', x: 260, y: 200, index: 'guitar', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'guitar', name:'guitar', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_10', x: 180, y: 200, index: 'loved', target: 'pcpt1', eval: @btnClick
							states: [{txt: {text:'loved', name:'loved', x:0, y:0, align: 'center', font:'20px Quicksand'}}]
						}

						{
							type: 'btn', id: 'ch1', x: 392, y: 366, eval: @btnClick
							states: [{img: {name:'cha1', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch2', x: 417, y: 366, eval: @btnClick
							states: [{img: {name:'cha2', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch3', x: 392, y: 390, eval: @btnClick
							states: [{img: {name:'cha3', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch4', x: 417, y: 390, eval: @btnClick
							states: [{img: {name:'cha4', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch5', x: 392, y: 414, eval: @btnClick
							states: [{img: {name:'cha5', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch6', x: 417, y: 414, eval: @btnClick
							states: [{img: {name:'cha6', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch7', x: 392, y: 438, eval: @btnClick
							states: [{img: {name:'cha7', x:0, y:0, align:'mc'}}]
						}
						{
							type: 'btn', id: 'ch8', x: 417, y: 438, eval: @btnClick
							states: [{img: {name:'cha8', x:0, y:0, align:'mc'}}]
						}

					]
					groups:[
						{

							type: 'grp', id: 'grp1', invisible:true
							group: [
								'radio'
								'waltz'
								'recordplayer'
								'cassetteplayer'
								'television'
								'mini'
								'ship'
								'hippydad'
								'hippymom'
								'phone'
							]
						}
					]
				}
				
			]
		super()
	window.U1A1 = U1A1