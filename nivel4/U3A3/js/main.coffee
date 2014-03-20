###

NEW ODA

###
class U1A3 extends Oda
	constructor: ->
		@manifest = [

			{ id: 'c1', src: 'circulo1.png' }
			{ id: 'c2', src: 'circulo2.png' }
			{ id: 'g1', src: '1.png'}
			{ id: 'b1', src: '1_1.png'}
			{ id: 'g2', src: '2.png'}
			{ id: 'b2', src: '2_2.png'}
			{ id: 'g3', src: '3.png'}
			{ id: 'b3', src: '3_3.png'}
			{ id: 'g4', src: '4.png'}
			{ id: 'b4', src: '4_4.png'}
			{ id: 'g5', src: '5.png'}
			{ id: 'b5', src: '5_5.png'}
			{ id: 'repeat', src:'btn_repeat.png'}
			{ id: 'header', src:'header.png'}
			{ id: 's/silence', src:'silence.mp3'}
		]
		 
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Listen and match the names with the children.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name:'g1', opts:{
										success:['Margaret']
									}
								}
								{name:'g2', opts:{
										success:['Emily']
									}
								}
								{name:'g3', opts:{
										success:['Pia']
									}
								}
								{name:'g4', opts:{
										success:['Maria']
									}
								}
								{name:'g5', opts:{
										success:['Sandra']
									}
								}
							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'idc', id: 'g1', x: 310, y: 360, align: 'mc'}
						{type: 'idc', id: 'g2', x: 525, y: 360, align: 'mc'}
						{type: 'idc', id: 'g3', x: 525, y: 360, align: 'mc'}
						{type: 'idc', id: 'g4', x: 525, y: 360, align: 'mc'}
						{type: 'idc', id: 'g5', x: 525, y: 360, align: 'mc'}

						{type: 'ldrg', id: 'ldrg1', x: 240,  y: 510, index: 'Margaret', text:'Margaret', font:'15px Quicksand', color:'#333', target: ['g1','g2','g3','g4','g5'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg2', x: 240,  y: 510, index: 'Emily', text:'Emily', font:'15px Quicksand', color:'#333', target: ['g1','g2','g3','g4','g5'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg3', x: 240,  y: 510, index: 'Pia', text:'Pia', font:'15px Quicksand', color:'#333', target: ['g1','g2','g3','g4','g5'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg4', x: 240,  y: 510, index: 'Maria', text:'Maria', font:'15px Quicksand', color:'#333', target: ['g1','g2','g3','g4','g5'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg5', x: 240,  y: 510, index: 'Sandra', text:'Sandra', font:'15px Quicksand', color:'#333', target: ['g1','g2','g3','g4','g5'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{
							type: 'btn', id: 'repeat', x: 400, y: 530, isRepeat: true
							states:[img: {name:'repeat', x: 0, y: 0, align:'mc'}]
						}
					]
					groups:[]
				}
			]
		super()
	window.U1A3 = U1A3