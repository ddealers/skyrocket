###

NEW ODA

###
class U7A4 extends Oda
	constructor: ->
		@manifest = [
			{id:'c2', src:'circilo_2.png'}
			{id:'c1', src:'circulo_1.png'}
			{id:'false', src:'false.png'}
			{id:'grandad', src:'grandad.png'}
			{id:'header', src:'header.png'}
			{id:'marie', src:'Marie.png'}
			{id:'pantalla', src:'pantalla-01.png'}
			{id:'sixties', src:'sixties.png'}
			{id:'true', src:'true.png'}
			{id:'continue', src:'continue_story.png'}

			{ id: 's/silence', src: 'silence.mp3' }
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
			instructions: {x: 110, y: 180, states: [{text:'Read the text. Then answer the questions, click on True or False.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[{name:'lbl1', opts:{text:'She used to go to school when she was a child.', success:false}}]
							[{name:'lbl1', opts:{text:'Her dad used to say girls and boys need to go to school.', success:false}}]
							[{name:'lbl1', opts:{text:'She used to work during the day and study at nights.', success:true}}]
							[{name:'lbl1', opts:{text:'She used to go dancing a lot.', success:true}}]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'marie', x: 420, y: 230}
						{type: 'txt', id: 't1', text:['"When I was a young girl, life was very different. I didn\'t use to go to school. I wanted to, but in those days girls didn\'t study. "School is for boys!" my dad used to say, "Girls don\'t need to learn anything except how to cook and clean." I didn\'t use to like cleaning or cooking, but I had to do what my father told me. When I was 16, I got married. We were married for 50 years! I was so happy - we used to go dancing every weekend. We waltzed and did the cha-cha-cha, we had so much fun! When I was 20 I decided to go to a school for adults. I used to work in the day and study at nights. I was very tired but it was wonderful to learn. I even liked doing homework!'], x: 70, y: 240, lineWidth: 330, font:'14px Dosis',lineHeight: 20, align: 'left'}
						{
							type: 'btn', id: 'btnTrue', x: 340, y: 575, index: true, target: 'lbl1', eval: @onClick
							states:[img: {name:'true', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnFalse', x: 460, y: 575, index: false, target: 'lbl1', eval: @onClick
							states:[img: {name:'false', x: 0, y: 0, align:'mc'}]
						}
						 
						{type: 'lbl', id: 'lbl1', x: 400, y: 510, font: '20px Quicksand', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[{name:'lbl2', opts:{text:'Pete started working when he was 12.', success:true}}]
							[{name:'lbl2', opts:{text:'He used to tell his granddaughter to get a job.', success:false}}]
							[{name:'lbl2', opts:{text:'He used to wash in a cold bathroom.', success:false}}]
							[{name:'lbl2', opts:{text:'He used to work on his parents\' farm and in a factory.', success:true}}]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'grandad', x: 420, y: 230}
						{type: 'txt', id: 't2', text:['I am Laurie and this is my granddad Pete. Life was hard for my great-granddad. He had to start working when he was very young. He left school at the age of 12 and worked his whole life. He used to tell me to enjoy life and study, because work was much harder! When he was young, he used to get up at 6 in the morning. His family washed outside, and they didn\'t have a bathroom. He was the oldest son and had to help his parents on the farm. He used to feed the horses and milk the cows, and that was before going to work! He used to take his brothers and his sister to school, and then he went to work in a factory. He used to work very long days. Life was difficult for a boy in those times.'], x: 70, y: 260, lineWidth: 330, font:'14px Dosis',lineHeight: 20, align: 'left'}
						{
							type: 'btn', id: 'btnTrue2', x: 340, y: 575, index: true, target: 'lbl2', eval: @onClick
							states:[img: {name:'true', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnFalse2', x: 460, y: 575, index: false, target: 'lbl2', eval: @onClick
							states:[img: {name:'false', x: 0, y: 0, align:'mc'}]
						}
						 
						{type: 'lbl', id: 'lbl2', x: 400, y: 510, font: '20px Quicksand', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[{name:'lbl3', opts:{text:'People used to listen to the radio or records in the \'60s.', success:true}}]
							[{name:'lbl3', opts:{text:'Everybody had a color television.', success:false}}]
							[{name:'lbl3', opts:{text:'Telegrams were written on computers.', success:false}}]
							[{name:'lbl3', opts:{text:'People washed their clothes by hand.', success:true}}]
							
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'sixties', x: 420, y: 230}
						{type: 'txt', id: 't3', text:['In the \'60s, we didn\'t have all the technology we have now. We used to listen to the radio or records on a record player. Most people didn\'t have a television. And if someone had a television, it wasn\'t color; it was black and white. We used to play games like "snakes and ladders" and do puzzles after dinner. We didn\'t have computers; we used to write letters on typewriters. If it was urgent, we used to send telegrams.Telegrams were short, very fast letters. We didn\'t use to have washing machines. We washed our clothes and dishes by hand. Life was a lot slower back then!'], x: 70, y: 240, lineWidth: 330, font:'14px Dosis',lineHeight: 20, align: 'left'}
						{
							type: 'btn', id: 'btnTrue3', x: 340, y: 575, index: true, target: 'lbl3', eval: @onClick
							states:[img: {name:'true', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnFalse3', x: 460, y: 575, index: false, target: 'lbl3', eval: @onClick
							states:[img: {name:'false', x: 0, y: 0, align:'mc'}]
						}
						 
						{type: 'lbl', id: 'lbl3', x: 400, y: 510, font: '20px Quicksand', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				
			]
		super()
	window.U7A4 = U7A4