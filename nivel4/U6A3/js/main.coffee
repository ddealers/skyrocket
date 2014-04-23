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
									name: 'pcct1'
									opts:{
										pattern:['"My family is the most interesting family I know. ','#rtn','My grandfather Patrick is 82 years old, so he is the','#rtn','#tcpt','person in the family. My grandfather knows ','#rtn','lots of jokes. He is the','#tcpt','member of my family.','#rtn','#rtn','My little brother Tommy is very cute; my mom says ','#rtn','he is the','#tcpt','boy in our town. Tommy is five ','#rtn','years old, so he’s the','#tcpt','child in our family.','#rtn','My father is 1.95 meters tall. He plays basketball and ','#rtn','he is the','#tcpt','player on his team. My dad has a ','#rtn','pet snake called Barney! Barney is not as long as the','#rtn','#tcpt','snake in the world; that\'s 7.67 meters long! ','#rtn','My mom cooks delicious food. I love her lasagna. ','#rtn','She’s the','#tcpt','cook I know! ','#rtn','#rtn','My dog Sanchez is a large poodle. My mother has a ','#rtn','cocker spaniel and my grandma has a chihuahua ','#rtn','called Pepe. Sanchez is the','#tcpt','dog we have, ','#rtn','and Pepe is the','#tcpt','. ','#rtn','We have a car, but it is 20 years old. Our family has','#rtn','the','#tcpt','car in the neighborhood!"']
										targets: [{text: '________' , success: 'oldest'},{  text: '________',  success: 'funniest'},{  text: '________',  success: 'cutest'},{  text: '________',  success: 'youngest'},{text: '________',  success: 'tallest'},{  text: '________',  success: 'longest'},{text: '________',  success: 'best'},{text: '________',  success: 'biggest'},{text: '________',  success: 'smallest'},{text: '________',  success: 'oldest'}]
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
						{type: 'pcct', id: 'pcct1', x: 390, y: 195, font: '12px Quicksand', margin: 5, scolor: '#F9101A', stroke: 1, bcolor: 'rgba(255,255,255,0.01)'}
						{type: 'ldrg', id: 'ldrg1', x: 140, y: 520, index: 'tallest', text: 'tallest', font: '22px Quicksand', color: '#333', target: ['pcct1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg2', x: 250, y: 520, index: 'oldest', text: 'oldest', font: '22px Quicksand', color: '#333', target: ['pcct1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg3', x: 360, y: 520, index: 'cutest', text: 'cutest', font: '22px Quicksand', color: '#333', target: ['pcct1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg4', x: 470, y: 520, index: 'longest', text: 'longest', font: '22px Quicksand', color: '#333', target: ['pcct1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg5', x: 600, y: 520, index: 'funniest', text: 'funniest', font: '22px Quicksand', color: '#333', target: ['pcct1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg6', x: 190, y: 560, index: 'youngest', text: 'youngest', font:'22px Quicksand', color: '#333', target: ['pcct1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg7', x: 330, y: 560, index: 'best', text: 'best', font:'22px Quicksand', color: '#333', target: ['pcct1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg8', x: 420, y: 560, index: 'biggest', text: 'biggest', font:'22px Quicksand', color: '#333', target: ['pcct1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg9', x: 540, y: 560, index: 'smallest', text: 'smallest', font:'22px Quicksand', color: '#333', target: ['pcct1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						
					]
					groups: [
					]
				}

			]
		super()
	window.U3A2 = U3A2