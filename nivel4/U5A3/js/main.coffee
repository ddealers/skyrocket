###

NEW ODA

###
class U5A3 extends Oda
	constructor: ->
		@manifest = [
			{id:'collage', src:'collage.png'}
			{id:'c2', src:'circulo2.png'}
			{id:'c1', src:'cirulo1.png'}
			{id:'header', src:'header.png'}
			{id:'pantalla01', src:'pantalla-01.png'}
			{id:'s/silence', src:'silence.mp3'}
		]
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Read and unscramble the sentences.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 8, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[ 
				{
					answers: {
						collection: [
							[
								{name: 'grp1', opts:{type: 'blink', target: 't1'}}
								{name: 'wcpt1', opts:{word:['The World\'s Sports Competition','is better','than','the other competitions'],target: 't1', sentence: true}}
							]
							[
								{name: 'grp1', opts:{type: 'blink', target: 't2'}}
								{name: 'wcpt1', opts:{word:['The basketball game','was more','exciting','than the','football game'],target: 't2', sentence: true}}
							]
							[
								{name: 'grp1', opts:{type: 'blink', target: 't3'}}
								{name: 'wcpt1', opts:{word:['Poland was','faster','than','Argentina'],target: 't3', sentence: true}}
							]
							[
								{name: 'grp1', opts:{type: 'blink', target: 't4'}}
								{name: 'wcpt1', opts:{word:['The Argentinian team','jumped','higher','than the Polish team'],target: 't4', sentence: true}}
							]
							[
								{name: 'grp1', opts:{type: 'blink', target: 't5'}}
								{name: 'wcpt1', opts:{word:['The Argentinian','team got','more baskets','than the Poles'],target: 't5', sentence: true}}
							]
							[
								{name: 'grp1', opts:{type: 'blink', target: 't6'}}
								{name: 'wcpt1', opts:{word:['The Polish players','are taller','than the','Argentinian players'],target: 't6', sentence: true}}
							]
							[
								{name: 'grp1', opts:{type: 'blink', target: 't7'}}
								{name: 'wcpt1', opts:{word:['Mendez','trains longer','than the','other players'],target: 't7', sentence: true}}
							]
							[
								{name: 'grp1', opts:{type: 'blink', target: 't8'}}
								{name: 'wcpt1', opts:{word:['Nagy','is','stronger','than Mendez'],target: 't8', sentence: true}}
							]
							
						]
						mixed: true
						type: 'steps'
					}
					containers:[
						{type: 'txt', id: 'ta1', text:['Today was a great day at the','#rtn', 'World Sports Competition.' ,'#rtn', ], x: 40, y: 215, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 't1', text:['It\'s the number 1 competition ','#rtn', 'because it\'s so fantastic!'], x: 40, y: 255, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 't3', text:['It was a close game, but Poland ','#rtn', 'was very fast.'], x: 40, y: 295, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 't5', text:['The Argentinian team got 20','#rtn', 'baskets and the Polish team got 18.'], x: 40, y: 335, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 't7', text:['Mendez trains a lot. He trains ','#rtn', 'more hours than the other players.'], x: 40, y: 375, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 'tb1', text:['What a great day!'], x: 40, y: 415, font:'13px Quicksand', align: 'left', parrafo: true}

						{type: 'txt', id: 'ta2', text:['Yes, it was amazing!'], x: 565, y: 230, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 't2', text:['The basketball match was very ','#rtn','exciting. The football wasn\'t as good.'], x: 565, y: 255, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 't4', text:['The Argentinian team was excellent, ','#rtn','they jumped very high.'], x: 565, y: 295, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 't6', text:['The Polish team is very tall!','#rtn','The Argentinians aren\'t.'], x: 565, y: 335, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 't8', text:['Nagy, from the Polish team, can lift ','#rtn','150 kilos. Mendez can only lift 100 kilos.'], x: 565, y: 375, font:'13px Quicksand', align: 'left', parrafo: true}
						{type: 'txt', id: 'tb2', text:['Yes! An amazing day! '], x: 565, y: 415, font:'13px Quicksand', align: 'left', parrafo: true}

						{type: 'img', id: 'collage', x: 425, y: 320, align: 'mc'}
						{type: 'swct', id: 'wcpt1', x: 460, y: 520, margin: 20, uwidth: 150, distance: 20, font: '16px Quicksand', scolor: '#00F', bcolor: 'rgba(255,255,255,0.1)', align: 'tc', eval:'drop_03'}
					]
					groups: [
						{

							type: 'grp', id: 'grp1'
							group: [
								't1'
								't2'
								't3'
								't4'
								't5'
								't6'
								't7'
								't8'
							]
						}
					]
				}
			]
		super()
	window.U5A3 = U5A3