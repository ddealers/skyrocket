###

NEW ODA

###
class U6A2 extends Oda
	constructor: ->
		@manifest = [
			{id:'c2', src:'circulo2.png'}
			{id:'c1', src:'cirulo1.png'}
			{id: 'baby' , src:'baby.png'}
			{id: 'biggest' , src:'biggest.png'}
			{id: 'clown' , src:'clown.png'}
			{id: 'finished' , src:'finished.png'}
			{id: 'header' , src:'header.png'}
			{id: 'laugh' , src:'laugh.png'}
			{id: 'oldest' , src:'oldest.png'}
			{id: 'painting' , src:'painting.png'}
			{id: 'pantalla' , src:'pantalla.png'}
			{id: 'popcorn' , src:'popcorn.png'}
			{id: 'tap' , src:'tap.png'}
			{id: 'thinnest' , src:'thinnest.png'}
			{id: 'youngest' , src:'youngest.png'}
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
			instructions: {x: 110, y: 175, states: [{text:'Complete the sentences with the superlative.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 10, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'baby'}}
								{name: 'pcpt1', opts: {pattern:['My cousin Camilla won a competition.','#rtn','She won the prize for the', '#tcpt', '(pretty) baby.'], targets: [{text: 'prettiest', success:'prettiest'}]}}
							]
							[
								{name: 'grp1', opts:{type:'fadeIn', target: 'biggest'}}
								{name: 'pcpt1', opts: {pattern:['Marcia is 1.80 m tall and she weighs 130 kilos.','#rtn','She\'s the', '#tcpt', '(big) singer in her band.'], targets: [{text: 'biggest', success:'biggest'}]}}
							]
							[
								{name: 'grp1', opts:{type:'fadeIn', target: 'clown'}}
								{name: 'pcpt1', opts: {pattern:['There were three clowns at the party.','#rtn','Pete was the', '#tcpt', '(short): he\'s only 1.50 m tall!'], targets: [{text: 'shortest', success:'shortest'}]}}
							]
							[
								{name: 'grp1', opts:{type:'fadeIn', target: 'laugh'}}
								{name: 'pcpt1', opts: {pattern:['People laughed for five minutes at the world\'s', '#tcpt', '(funny) joke.'], targets: [{text: 'funniest', success:'funniest'}]}}
							]
							[
								{name: 'grp1', opts:{type:'fadeIn', target: 'oldest'}}
								{name: 'pcpt1', opts: {pattern:['Gaston is the _________', '#tcpt', '(old) trumpet player in France.','#rtn','He\'s 89 years old.'], targets: [{text: 'oldest', success:'oldest'}]}}
							]
							[
								{name: 'grp1', opts:{type:'fadeIn', target: 'painting'}}
								{name: 'pcpt1', opts: {pattern:['This is the', '#tcpt', '(long) painting in the world.','#rtn','It\'s 8 meters long.'], targets: [{text: 'longest', success:'longest'}]}}
							]
							[
								{name: 'grp1', opts:{type:'fadeIn', target: 'popcorn'}}
								{name: 'pcpt1', opts: {pattern:['The', '#tcpt', '(small) popcorn sculpture is only 4 cm high.'], targets: [{text: 'smallest', success:'smallest'}]}}
							]
							[
								{name: 'grp1', opts:{type:'fadeIn', target: 'tap'}}
								{name: 'pcpt1', opts: {pattern:['The ', '#tcpt', '(fast) tapdancers can tap 300 beats','#rtn','in one minute.'], targets: [{text: 'fastest', success:'fastest'}]}}
							]
							[
								{name: 'grp1', opts:{type:'fadeIn', target: 'thinnest'}}
								{name: 'pcpt1', opts: {pattern:['Sasha is very tall and she only weighs 45 kilos.','#rtn','She\'s the', '#tcpt', '(thin) singer in her jazz band.'], targets: [{text: 'thinnest', success:'thinnest'}]}}
							]
							[
								{name: 'grp1', opts:{type:'fadeIn', target: 'youngest'}}
								{name: 'pcpt1', opts: {pattern:['Jimmy is the', '#tcpt', '(young) jazz musician in Great Britain.','#rtn','He\'s only 9 years old.'], targets: [{text: 'youngest', success:'youngest'}]}}
							]
						]
						mixed: true
						type: 'limit'
						limit: 8
					}
					containers:[
						{type: 'img', id: 'baby', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'biggest', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'clown', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'finished', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'header', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'laugh', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'oldest', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'painting', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'popcorn', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'tap', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'thinnest', x: 425, y: 360, align: 'mc'}
						{type: 'img', id: 'youngest', x: 425, y: 360, align: 'mc'}
						{type: 'pcpt', id: 'pcpt1', x: 425, y: 535, font: '18px Quicksand', margin: 5, align: 'tc', scolor: '#F9101A'}
					]
					groups:[
						{

							type: 'grp', id: 'grp1', invisible:true
							group: [
								'baby'
								'biggest'
								'clown'
								'finished'
								'header'
								'laugh'
								'oldest'
								'painting'
								'popcorn'
								'tap'
								'thinnest'
								'youngest'
							]
						}
						
					]
				}
				
			]
		super()
	window.U6A2 = U6A2