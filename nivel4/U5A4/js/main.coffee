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
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text1'}}
								{name: 'pcpt1', opts: {pattern:['Lizzy is ', '#tcpt', '#tcpt',' her sister'], targets: [{text: 'older', success:'clic'},{text: 'than', success:'than'}]}}

							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'thinner'}}
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text1'}}
								{name: 'pcpt1', opts: {pattern:['Patrick is', '#tcpt','#tcpt', 'Louis.'], targets: [{text: 'thinner', success:'clic'},{text: 'than', success:'than'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'hotter'}}	
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text1'}}			
								{name: 'pcpt1', opts: {pattern:['Today is', '#tcpt','#tcpt', 'yesterday.'], targets: [{text: 'hotter', success:'clic'},{text: 'than', success:'than'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'funnier'}}
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text2'}}			
								{name: 'pcpt1', opts: {pattern:['This movie is', '#tcpt','#tcpt', '#rtn', 'the other one.'], targets: [{text: 'funnier', success:'clic'},{text: 'than', success:'than'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'longer'}}	
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text3'}}			
								{name: 'pcpt1', opts: {pattern:['Roger\'s book is', '#tcpt','#tcpt', 'Paul\'s.'], targets: [{text: 'longer', success:'clic'},{text: 'than', success:'than'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'stronger'}}
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text4'}}			
								{name: 'pcpt1', opts: {pattern:['Your brother is ', '#tcpt','#tcpt', 'you.'], targets: [{text: 'stronger', success:'clic'},{text: 'than', success:'than'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'higher'}}		
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text5'}}		
								{name: 'pcpt1', opts: {pattern:['She jumps', '#tcpt','#tcpt', 'you.'], targets: [{text: 'higher', success:'clic'},{text: 'than', success:'than'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'happier'}}	
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text6'}}		
								{name: 'pcpt1', opts: {pattern:['Laura is', '#tcpt','#tcpt', 'Samuel.'], targets: [{text: 'happier', success:'clic'},{text: 'than', success:'than'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'harder'}}		
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text7'}}		
								{name: 'pcpt1', opts: {pattern:['He kicked the ball', '#tcpt','#tcpt','#rtn', 'the other players.'], targets: [{text: 'harder', success:'clic'},{text: 'than', success:'than'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'farther'}}
								{name: 'grp2', opts:{type: 'fadeIn', target: 'text8'}}
								{name: 'pcpt1', opts: {pattern:['Andrew lives', '#tcpt', '#rtn','from the school', '#tcpt', 'Liz.'], targets: [{text: 'farther', success:'clic'},{text: 'than', success:'than'}]}}
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
						
						{type: 'txt', id: 'text1', text: 'Patrick is thin. Louis is not thin.', x:256, y:505, font:'14px Quicksand', align: 'center', lineWidth: 250}
						{type: 'txt', id: 'text2', text: 'It\'s hot today, 32 degrees!','#rtn','Yesterday it was 25 degrees.', x:256, y:505, font:'14px Quicksand', align: 'center', lineWidth: 250}
						{type: 'txt', id: 'text3', text: 'This movie is very funny.', '#rtn' ,'The one we saw yesterday wasn\'t.', x:256, y:505, font:'14px Quicksand', align: 'center', lineWidth: 250}
						{type: 'txt', id: 'text4', text: 'Roger\'s book is long, 300 pages! ','#rtn','Paul\'s book is only 200 pages.', x:256, y:505, font:'14px Quicksand', align: 'center', lineWidth: 250}
						{type: 'txt', id: 'text5', text: 'I am strong, but my big brother is very strong.', x:256, y:505, font:'14px Quicksand', align: 'center', lineWidth: 250}
						{type: 'txt', id: 'text6', text: 'My mom is a dancer. She jumps really high.', x:256, y:505, font:'14px Quicksand', align: 'center', lineWidth: 250}
						{type: 'txt', id: 'text7', text: 'Laura got a 9 on her exam. Samuel got a 7.', x:256, y:505, font:'14px Quicksand', align: 'center', lineWidth: 250}
						{type: 'txt', id: 'text8', text: 'Dennis scored a goal. He kicked the ball hard.', x:256, y:505, font:'14px Quicksand', align: 'center', lineWidth: 250}
						
						{type: 'pcpt', id: 'pcpt1', x: 590, y: 510, font: '14px Quicksand', margin: 5, align: 'tc', scolor: '#F9101A'}
						
						
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

							]
						}
					]
				}
				
			]
		super()
	window.U5A4 = U5A4