###

NEW ODA

###
class U3A2 extends Oda
	constructor: ->
		@manifest = [
       		{id: 'c1', src: 'cirulo1.png'}
       		{id: 'c2', src: 'circulo2.png'}
       		{id: 'papel', src: 'hoja.png'}
       		{id: 'foto', src: 'foto.png'}
       		{id: 'header', src: 'header.png'}
       		{id: 's/silence', src: 'silence.mp3'}
      	]
		@evaluateDrop02_01 = (dispatcher, target) ->
			complete = true
			if lib[dispatcher].index is target.success
				target.update lib[dispatcher].label.text, true
			else 
				target.update lib[dispatcher].label.text, false
			lib[dispatcher].afterSuccess()
			for drop in lib[dispatcher].droptargets
				if drop.text.text is '' then complete = false
			if not complete then return
			for drop in lib[dispatcher].droptargets
				#drop.showEvaluation()
				if drop.complete
					lib.score.plusOne()
			lib.scene.success false
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Read and drag the words to complete the story.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 10, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				
				{
					answers: {
						collection: [ 
							[
								{
									name: 'pcpt1'
									opts:{
										pattern:['"My family is the most interesting family I know. ','My grandfather','#rtn', 'Patrick is 82 years old, so he is the','#tcpt','person in the family.','#rtn','My grandfather knows lots of jokes. He is the','#tcpt','member','#rtn', 'of my family.','#rtn','#rtn','My little brother Tommy is very cute; my mom says he is the','#rtn','#tcpt','boy in our town. Tommy is five years old, so he’s the','#tcpt','#rtn','child in our family.My father is 1.95 meters tall. He plays basketball','#rtn', 'and he is the','#tcpt','player on his team. My dad has a pet snake','#rtn','called Barney! Barney is not as long as the','#tcpt','snake in the','#rtn','world; that\'s 7.67 meters long! ','My mom cooks delicious food.','#rtn','I love her lasagna. She’s the','#tcpt','cook I know! ','#rtn','#rtn','My dog Sanchez is a large poodle. My mother has a cocker spaniel','#rtn', 'and my grandma has a chihuahua ','#rtn','called Pepe. Sanchez is the','#tcpt','dog we have, and Pepe is the','#rtn','#tcpt','. We have a car, but it is 20 years old. Our family has','#rtn','the','#tcpt','car in the neighborhood!"']
										targets: [{text: 'oldest'},{  text: 'funniest'},{  text: 'cutest'},{  text: 'youngest'},{text: 'tallest'},{  text: 'longest'},{text: 'best'},{text: 'biggest'},{text: 'smallest'},{text: 'oldest'}]
										ypos: 0
									}
								}

							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'foto', x: 50, y: 160}
						{type: 'img', id: 'papel', x: 360, y: 150 }
						{type: 'pcpt', id: 'pcpt1', x: 390, y: 195, font:'13px Dosis',lineHeight: 16, margin: 5, scolor: '#F9101A', stroke: 1, bcolor: 'rgba(255,255,255,0.01)'}
						{type: 'ldrg', id: 'ldrg1', x: 140, y: 520, index: 'tallest', text: 'tallest', font: '22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg2', x: 250, y: 520, index: 'oldest', text: 'oldest', font: '22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg3', x: 360, y: 520, index: 'cutest', text: 'cutest', font: '22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg4', x: 470, y: 520, index: 'longest', text: 'longest', font: '22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg5', x: 600, y: 520, index: 'funniest', text: 'funniest', font: '22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg6', x: 190, y: 560, index: 'youngest', text: 'youngest', font:'22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg7', x: 330, y: 560, index: 'best', text: 'best', font:'22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg8', x: 420, y: 560, index: 'biggest', text: 'biggest', font:'22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg9', x: 540, y: 560, index: 'smallest', text: 'smallest', font:'22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						
					]
					groups: [
					]
				}

			]
		super()
	window.U3A2 = U3A2