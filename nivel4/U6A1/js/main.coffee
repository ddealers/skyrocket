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
			{id:'startgame', src:'start_game.png'}
			{id:'bass', src:'clarinet.png'}
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
			
			{id:'s/banjo', src:'banjo.mp3'}
			{id:'s/banjo.1', src:'banjo_1.ogg'}
			{id:'s/bass', src:'bass.mp3'}
			{id:'s/bass.1', src:'bass_1.ogg'}
			{id:'s/clarinet', src:'clarinet.mp3'}
			{id:'s/clarinet.1', src:'clarinet_1.ogg'}
			{id:'s/comedian', src:'comedian.mp3'}
			{id:'s/comedian.1', src:'comedian_1.ogg'}
			{id:'s/dancers', src:'dancers.mp3'}
			{id:'s/dancers.1', src:'dancers_1.ogg'}
			{id:'s/jazzband', src:'jazzband.mp3'}
			{id:'s/jazzband.1', src:'jazzband_1.ogg'}
			{id:'s/musician', src:'musician.mp3'}
			{id:'s/musician.1', src:'musician_1.ogg'}
			{id:'s/painter', src:'painter.mp3'}
			{id:'s/painter.1', src:'painter_1.ogg'}
			{id:'s/piano', src:'piano.mp3'}
			{id:'s/piano.1', src:'piano_1.ogg'}
			{id:'s/saxophone', src:'saxophone.mp3'}
			{id:'s/saxophone.1', src:'saxophone_1.ogg'}
			{id:'s/sculptor', src:'sculptor.mp3'}
			{id:'s/sculptor.1', src:'sculptor_1.ogg'}
			{id:'s/singers', src:'singers.mp3'}
			{id:'s/singers.1', src:'singers_1.ogg'}
			{id:'s/trombone', src:'trombone.mp3'}
			{id:'s/trombone.1', src:'trombone_1.ogg'}
			{id:'s/trumpet' , src:'trumpet.mp3'}
			{id:'s/trumpet.1' , src:'trumpet_1.ogg'}
			{id:'s/tuba', src:'tuba.mp3'}
			{id:'s/tuba.1', src:'tuba_1.ogg'}
			{ id:'s/silence' , src: 'silence.mp3' }
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
                				{name: 'global', opts:{success:'global'}}
                				{name: 'cards1', opts:{}}
              				]				
						]
						type: 'steps'
					}
					containers:[
						{
							type: 'crd', id: 'cards1', x: 200, y: 260, index: '', target: 'global', card:'caja', eval: 'global_03', distx: 200, disty: 150, cols: 3
							cartas: [
								 'musician', 'painter', 'dancers', 'comedian', 'singers', 'jazzband'
							]
						}	
						{
							type: 'btn', id: 'repeat', x: 400, y: 550, align: '', isRepeat: true, visible: true
							states:[{img: {name:'repeat', x: 0, y: 0,align: 'mc'}}]
						}		
					]
					groups:[
					]
				}
				{
					answers: {
						collection: [
							[
                				{name: 'global', opts:{success:'global'}}
                				{name: 'cards2', opts:{}}

              				]				
						]
						type: 'steps'
					}
					containers:[
						{
							type: 'crd', id: 'cards2', x: 200, y: 260, index: '', target: 'global', card:'caja', eval: 'global_03', distx: 200, disty: 150, cols: 3
							cartas: [
								 'banjo', 'clarinet', 'trumpet', 'trombone', 'piano', 'tuba', 'saxophone', 'jazzband'			
							]
						}	
						{
							type: 'btn', id: 'repeat2', x: 400, y: 550, align: '', isRepeat: true, visible: true
							states:[{img: {name:'repeat', x: 0, y: 0,align: 'mc'}}]
						}		
					]
					groups:[]
				}
			]
		super()
	window.U6A1 = U6A1