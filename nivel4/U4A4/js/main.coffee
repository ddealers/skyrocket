###

NEW ODA

###
class U4A4 extends Oda
	constructor: ->
		@manifest = [
			{id:'c2', src:'circulo2.png'}
			{id:'c1', src:'cirulo1.png'}
			{id:'course', src:'course.png'}
			{id:'continue', src:'continue_story.png'}
			{id:'dance', src:'dance.png'}
			{id:'false', src:'false.png'}
			{id:'true', src:'true.png'}
			{id:'header', src:'header.png'}
			{id:'musical', src:'musical.png'}
			{id:'nature', src:'nature.png'}
			{id:'image', src:'image.png'}
			{id:'pantalla01', src:'pantalla-01.png'}
			{id:'s/silence', src:'silence.mp3'}

		]
		@onClick = (dispatcher, target) =>
			d = lib[dispatcher]
			t = lib[target]
			t.complete = true
			if d.index is t.success
				lib.scene.success()
			else
				lib.scene.fail()
		@continue = (dispatcher) =>
			d = lib[dispatcher]
			lib.scene.nextStep()
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Read the text. Then answer the questions, click on True or False.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 15, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[{name:'lbl1', opts:{text:'You can take these courses all year.', success:false}}]
							[{name:'lbl1', opts:{text:'Children like to learn in different ways.', success:true}}]
							[{name:'lbl1', opts:{text:'Experts say there are 3 different ways to learn.', success:false}}]
							[{name:'btnContinue', opts:{visible:true}}]
						]
						type: 'steps'
					}

					containers:[
						{type: 'img', id:'image', x: 420, y: 195}
						{type: 'txt', id: 't1', text:'Come to our special summer sourses in July and August! We know that children like to learn in different ways. We help you develop the talents you already have. Do you like to draw, sing, dance or hike? We have the perfect course for you! Experts say that there are eight different ways of learning, and we have classes for all of them. Here we present four of our most popular summer workshops.', x: 70, y: 260, lineWidth: 330, font:'14px Roboto', align: 'left'}
						{
							type: 'btn', id: 'btnTrue', x: 340, y: 555, index: true, target: 'lbl1', eval: @onClick
							states:[img: {name:'true', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnFalse', x: 460, y: 555, index: false, target: 'lbl1', eval: @onClick
							states:[img: {name:'false', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnContinue', x: 700, y: 555, index: 'next', target: 'global', visible: false, eval: @continue
							states:[img: {name:'continue', x: 0, y: 0, align:'mc'}]
						}
						{type: 'lbl', id: 'lbl1', x: 400, y: 490, font: '20px Quicksand', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[{name:'lbl2', opts:{text:'If you learn by moving your body, you should take a music class.', success:false}}]
							[{name:'lbl2', opts:{text:'If you take dance class, you should wear comfortable clothes.', success:true}}]
							[{name:'lbl2', opts:{text:'Dance class is on Tuesday and Wednesday afternoons.', success:false}}]
							[{name:'btnContinue2', opts:{visible:true}}]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'dance', name: 'dance', x: 420, y: 210}
						{type: 'txt', id: 't2', text:'Do you learn by moving your body? Come to our dance class on Monday, Wednesday and Friday mornings from 3 to 6 p.m. Please wear comfortable clothes and wash your feet before class!', x: 70, y: 260, lineWidth: 330, font:'14px Roboto', align: 'left'}
						{
							type: 'btn', id: 'btnTrue2', x: 340, y: 555, index: true, target: 'lbl2', eval: @onClick
							states:[img: {name:'true', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnFalse2', x: 460, y: 555, index: false, target: 'lbl2', eval: @onClick
							states:[img: {name:'false', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnContinue2', x: 700, y: 555, index: 'next', target: 'global', visible: false, eval: @continue
							states:[img: {name:'continue', x: 0, y: 0, align:'mc'}]
						}
						{type: 'lbl', id: 'lbl2', x: 400, y: 490, font: '20px Quicksand', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[{name:'lbl3', opts:{text:'If you like nature and being outside, you should go to the Wilderness Club.', success:true}}]
							[{name:'lbl3', opts:{text:'On the Wilderness Club you go running, swimming and cooking.', success:false}}]
							[{name:'lbl3', opts:{text:'You need to bring a notebook and a pencil.', success:false}}]
							[{name:'btnContinue3', opts:{visible:true}}]

						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'nature', name: 'nature', x: 420, y: 210}
						{type: 'txt', id: 't3', text:'If you learn by being in nature, come to our Wilderness Club every Saturday and Sunday from 9 a.m to 2 p.m. We hike in the woods and swim in the lake. Learn about plants, trees and animals. Bring your swimsuit, a towel, sunscreen and a big bottle of water.', x: 70, y: 260, lineWidth: 330, font:'14px Roboto', align: 'left'}
						{
							type: 'btn', id: 'btnTrue3', x: 340, y: 555, index: true, target: 'lbl3', eval: @onClick
							states:[img: {name:'true', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnFalse3', x: 460, y: 555, index: false, target: 'lbl3', eval: @onClick
							states:[img: {name:'false', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnContinue3', x: 700, y: 555, index: 'next', target: 'global', visible: false, eval: @continue
							states:[img: {name:'continue', x: 0, y: 0, align:'mc'}]
						}
						{type: 'lbl', id: 'lbl3', x: 400, y: 490, font: '20px Quicksand', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[{name:'lbl4', opts:{text:'You can sing about math.', success:true}}]
							[{name:'lbl4', opts:{text:'The summer musical, Math Rocks, is boring. It feels like class.', success:false}}]
							[{name:'lbl4', opts:{text:'You don\'t have to be a good singer to go. Everybody is welcome.', success:true}}]
							[{name:'btnContinue4', opts:{visible:true}}]

						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'musical', name: 'musical', x: 420, y: 210}
						{type: 'txt', id: 't4', text:'Do you love to learn through music? Come and take part in our Math Rocks musical. Learn songs about arithmetic and fractions! You’ll have so much fun that it won’t feel like class. Come and visit the music department on Wednesdays at 4 p.m. and audition for a part. Everybody is welcome!', x: 70, y: 260, lineWidth: 330, font:'14px Roboto', align: 'left'}
						{
							type: 'btn', id: 'btnTrue4', x: 340, y: 555, index: true, target: 'lbl4', eval: @onClick
							states:[img: {name:'true', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnFalse4', x: 460, y: 555, index: false, target: 'lbl4', eval: @onClick
							states:[img: {name:'false', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnContinue4', x: 700, y: 555, index: 'next', target: 'global', visible: false, eval: @continue
							states:[img: {name:'continue', x: 0, y: 0, align:'mc'}]
						}
						{type: 'lbl', id: 'lbl4', x: 400, y: 490, font: '20px Quicksand', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[{name:'lbl5', opts:{text:'Reading techniques class is for people who can\'t read.', success:false}}]
							[{name:'lbl5', opts:{text:'Speed reading is reading fast. It\'s a reading technique.', success:true}}]
							[{name:'lbl5', opts:{text:'Many stories you read are boring.', success:false}}]

						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'course', name: 'course', x: 420, y: 210}
						{type: 'txt', id: 't5', text:'If reading makes you happy, come to our reading techniques class. Learn how to speed-read and make word maps. When you speed-read, you read faster and understand the text well. We have great stories for you to read!', x: 70, y: 260, lineWidth: 330, font:'14px Roboto', align: 'left'}
						{
							type: 'btn', id: 'btnTrue5', x: 340, y: 555, index: true, target: 'lbl5', eval: @onClick
							states:[img: {name:'true', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnFalse5', x: 460, y: 555, index: false, target: 'lbl5', eval: @onClick
							states:[img: {name:'false', x: 0, y: 0, align:'mc'}]
						}
						
						{type: 'lbl', id: 'lbl5', x: 400, y: 490, font: '20px Quicksand', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
			]
		super()
	window.U4A4 = U4A4