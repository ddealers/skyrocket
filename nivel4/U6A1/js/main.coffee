###

NEW ODA

###
class U6A1 extends Oda
	constructor: ->
		@manifest = [
			{id:'banjo', src:'banjo.png'}
			{id:'caja', src:'caja_1.png'}
			{id:'c2', src:'circulo2.png'}
			{id:'c1', src:'cirulo1.png'}
			{id:'clarinet', src:'clarinet.png'}
			{id:'comedian', src:'comedian.png'}
			{id:'dancers', src:'dancers.png'}
			{id:'header', src:'header.png'}
			{id:'jazzband', src:'jazz_band.png'}
			{id:'musician', src:'musician.png'}
			{id:'pantalla', src:'n4_U6_A1-01.png'}
			{id:'painter', src:'painter.png'}
			{id:'piano', src:'piano.png'}
			{id:'repeat', src:'repeat.png'}
			{id:'saxophone', src:'saxophone.png'}
			{id:'sculptor', src:'sculptor.png'}
			{id:'singers', src:'singers.png'}
			{id:'trombone', src:'trombone.png'}
			{id:'trumpet', src:'trumpet.png'}
			{id:'tuba', src:'tuba.png'}
			{id:'s/banjo' src:'banjo.mp3'}
			{id:'s/bass' src:'bass.mp3'}
			{id:'s/clarinet' src:'clarinet.mp3'}
			{id:'s/comedian' src:'comedian.mp3'}
			{id:'s/dancers' src:'dancers.mp3'}
			{id:'s/jazzband' src:'jazzband.mp3'}
			{id:'s/lista' src:'lista.txt'}
			{id:'s/musician' src:'musician.mp3'}
			{id:'s/painter' src:'painter.mp3'}
			{id:'s/piano' src:'piano.mp3'}
			{id:'s/saxophone' src:'saxophone.mp3'}
			{id:'s/sculptor' src:'sculptor.mp3'}
			{id:'s/singers' src:'singers.mp3'}
			{id:'s/trombone' src:'trombone.mp3'}
			{id:'s/trumpet' src:'trumpet.mp3'}
			{id:'s/tuba' src:'tuba.mp3'}
			{ id: 's/silence' , src: 'silence.mp3' }

		]
		
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Memorize the cards. Then listen and choose the correct one.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								'banjo'
								'clarinet'
								'comedian'
								'dancers'
								'header'
								'jazzband'
								'musician'
								'painter'
								'piano'
								'saxophone'
								'sculptor'
								'singers'
								'trombone'
								'trumpet'
								'tuba'
							]		
						]
						mixed: true
						type: 'limit'
						limit: 8
					}
					containers:[
					]
					groups:[
					]
				}
				
			]
		super()
	window.U6A1 = U6A1