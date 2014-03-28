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
		@btnClick = (dispatcher, target) =>
			d = lib[dispatcher]
			t = lib[target]
			a = d.index
			b = t.droptargets
			c = t.currentTarget
			console.log d,t,a,b,c
			console.log a, b[c].success
			if a is b[c].success
				verb = prompt "Enter the correct form of #{d.index}"
				if verb is b[c].text.text
					b[c].complete = true
					b[c].update()
					t.currentTarget++
				if t.currentTarget is b.length
					lib.scene.success()
				else
					lib.scene.fail()
			else
				lib.scene.fail false 
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Read and write the words.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 10, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'older'}}
								{name: 'pcpt1', opts: {pattern:['Lizzy is ', '#tcpt', '#tcpt',' her sister'], targets: [{text: 'older', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['Lizzy is 10 years old and her sister is 3.'], parrafo:true}}

							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'thinner'}}
								{name: 'pcpt1', opts: {pattern:['Patrick is', '#tcpt','#tcpt', 'Louis.'], targets: [{text: 'thinner', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['Patrick is thin. Louis is not thin.'], parrafo:true}}

							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'hotter'}}							
								{name: 'pcpt1', opts: {pattern:['Today is', '#tcpt','#tcpt', 'yesterday.'], targets: [{text: 'hotter', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['It\'s hot today, 32 degrees!','#rtn','Yesterday it was 25 degrees.'], parrafo:true}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'funnier'}}						
								{name: 'pcpt1', opts: {pattern:['This movie is', '#tcpt','#tcpt', '#rtn', 'the other one.'], targets: [{text: 'funnier', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['This movie is very funny.', '#rtn' ,'The one we saw yesterday wasn\'t.'], parrafo:true}}

							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'longer'}}						
								{name: 'pcpt1', opts: {pattern:['Roger\'s book is', '#tcpt','#tcpt', 'Paul\'s.'], targets: [{text: 'longer', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['Roger\'s book is long, 300 pages! ','#rtn','Paul\'s book is only 200 pages.'], parrafo:true}}

							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'stronger'}}						
								{name: 'pcpt1', opts: {pattern:['Your brother is ', '#tcpt','#tcpt', 'you.'], targets: [{text: 'stronger', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['I am strong, but my big brother is very strong.'], parrafo:true}}

							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'higher'}}							
								{name: 'pcpt1', opts: {pattern:['She jumps', '#tcpt','#tcpt', 'you.'], targets: [{text: 'higher', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['My mom is a dancer. She jumps really high.'], parrafo:true}}

							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'happier'}}							
								{name: 'pcpt1', opts: {pattern:['Laura is', '#tcpt','#tcpt', 'Samuel.'], targets: [{text: 'happier', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['Laura got a 9 on her exam. Samuel got a 7.'], parrafo:true}}

							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'harder'}}							
								{name: 'pcpt1', opts: {pattern:['He kicked the ball', '#tcpt','#tcpt','#rtn', 'the other players.'], targets: [{text: 'harder', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['Dennis scored a goal. He kicked the ball hard.'], parrafo:true}}

							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'farther'}}
								{name: 'pcpt1', opts: {pattern:['Andrew lives', '#tcpt', '#rtn','from the school', '#tcpt', 'Liz.'], targets: [{text: 'farther', success:'clic'},{text: 'than', success:'than'}]}}
								{name: 't1', opts:{text:['Liz lives next door to the school. ','#rtn','Andrew lives five kilometers away.'], parrafo:true}}

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

						{type: 'txt', id: 't1', text:[], x: 265, y: 510, font:'14px Quicksand', align: 'center'}
						{type: 'pcpt', id: 'pcpt1', x: 590, y: 510, font: '14px Quicksand', margin: 5, align: 'tc', scolor: '#F9101A'}
						{
							type: 'btn', id: 'btn_1', x: 690, y: 210-10, index: 'clic', target: 'pcpt1', eval: @btnClick
							states: [img: {name:'5', x: 0, y: 0}]
						}
						{
							type: 'btn', id: 'btn_2', x: 690, y: 400, index: 'than', target: 'pcpt1', eval: @btnClick
							states: [img: {name:'5', x: 0, y: 0}]
						}
						
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
					]
				}
				
			]
		super()
	window.U5A4 = U5A4