###

NEW ODA

###
class U6A4 extends Oda
	constructor: ->
		@manifest = [
			{ id: 'c1', src: 'cirulo1.png' }
			{ id: 'c2', src: 'circulo2.png' }
			{ id: 'foto', src: 'foto.png' }
			{ id: 'continue', src: 'continue_story.png' }
			{ id: 'false', src: 'false.png' }
			{ id: 'header', src: 'header.png' }
			{ id: 'true', src: 'true.png' }
			{ id: 'pantalla', src: 'pantalla-01.png' }
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
			instructions: {x: 110, y: 140, states: [{text:['Read the text. Then answer the questions, click on','#ital','or','#ital'], italics:['True', 'False.'], sound:'s/silence', played: false, custom:true}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 8, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{ 
					answers: {
						collection: [
							[{name:'lbl1', opts:{text:'Fred Astaire\'s mother wanted to make her children famous.', success:true}}]
							[{name:'lbl1', opts:{text:'Fred took dance classes.', success:false}}]
							[{name:'btnContinue', opts:{visible:true}}]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'foto', x: 420, y: 230}
						{type: 'txt', id: 't1', text:['Fred Astaire was a legendary tap dancer. He was born on May 10, 1899, in Omaha, Nebraska. He had an older sister, Adele. His mother wanted the children to be famous. She planned an act with singing and dancing. Fred took piano and clarinet lessons. He didn\'t take dance lessons but he imitated Adele\'s dancing.'], x: 70, y: 260, lineWidth: 330, font:'14px Dosis',lineHeight: 25, align: 'left'}
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
						{type: 'lbl', id: 'lbl1', x: 400, y: 490, font: '20px Roboto', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[{name:'lbl2', opts:{text:'Fred and Adele started performing when they were 12 years old.', success:false}}]
							[{name:'lbl2', opts:{text:'Adele got married and she stopped performing.', success:true}}]
							[{name:'btnContinue2', opts:{visible:true}}]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'foto', name: 'act4_2', x: 420, y: 230}
						{type: 'txt', id: 't2', text:['When Fred was 6, the family moved to New York. The famous theaters were in New York. By the time he was 7, Fred and his sister had their first performance. They became famous in 1918. Adele got married in 1932, and she stopped performing. Fred began his solo career.'], x: 70, y: 260, lineWidth: 330, font:'14px Dosis',lineHeight: 25, align: 'left'}
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
						{type: 'lbl', id: 'lbl2', x: 400, y: 490, font: '20px Roboto', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[{name:'lbl3', opts:{text:'Fred made his first movie when he was 16 years old.', success:false}}]
							[{name:'lbl3', opts:{text:'He made many movies with his wife.', success:false}}]
							[{name:'btnContinue3', opts:{visible:true}}]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'foto', name: 'act4_3', x: 420, y: 230}
						{type: 'txt', id: 't3', text:['When Fred Astaire auditioned for a movie, they said, “He can\’t sing. Can’t act. Can dance a little. He made his first movie in 1933, at the age of 34. He made 9 more movies with his dancing co-star Ginger Rogers. Astaire married at the age of 34. He was very happy with his wife, Phyllis.'], x: 70, y: 260, lineWidth: 330, font:'14px Dosis',lineHeight: 25, align: 'left'}
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
						{type: 'lbl', id: 'lbl3', x: 400, y: 490, font: '20px Roboto', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[{name:'lbl4', opts:{text:'Fred made many musical movies.', success:true}}]
							[{name:'lbl4', opts:{text:'Fred Astaire was famous for his dancing.', success:true}}]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id:'foto', name: 'act4_4', x: 420, y: 230}
						{type: 'txt', id: 't4', text:['In 1945 he opened Fred Astaire Dance Studios and he retired from show business. He returned to the movies two years later. He starred in 30 musical films in 25 years. He stopped dancing in 1957, when he was 58. He died in 1987, when he was 88 years old.'], x: 70, y: 260, lineWidth: 330, font:'14px Dosis',lineHeight: 25, align: 'left'}
						{
							type: 'btn', id: 'btnTrue4', x: 340, y: 555, index: true, target: 'lbl4', eval: @onClick
							states:[img: {name:'true', x: 0, y: 0, align:'mc'}]
						}
						{
							type: 'btn', id: 'btnFalse4', x: 460, y: 555, index: false, target: 'lbl4', eval: @onClick
							states:[img: {name:'false', x: 0, y: 0, align:'mc'}]
						}
						{type: 'lbl', id: 'lbl4', x: 400, y: 490, font: '20px Roboto', lineWidth:600, color: '#333', align: 'center'}
					]
					groups:[]
				}
			]
		super()
	window.U6A4 = U6A4