###

NEW ODA

###
class U6A3 extends Oda
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
			a = lib[dispatcher]
			b = target
			complete = true
			if a.index  is b.success
				b.update()
				a.afterSuccess()
				target.complete = true
				lib.scene.success true,false
			else
				a.afterFail()
				lib.scene.fail()
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
										pattern:['"My family is the most interesting family I know. My grandfather', '#rtn', 'Patrick is 82 years old, so he is the','#tcpt','person in the family.','#rtn','My grandfather knows lots of jokes. He is the','#tcpt','member','#rtn', 'of my family.','#rtn','#rtn','My little brother Tommy is very cute; my mom says he is the','#rtn','#tcpt','boy in our town. Tommy is five years old, so he’s the','#tcpt','#rtn','child in our family.My father is 1.95 meters tall. He plays basketball','#rtn', 'and he is the','#tcpt','player on his team. My dad has a pet snake','#rtn','called Barney! Barney is not as long as the','#tcpt','snake in the','#rtn','world; that\'s 7.67 meters long! ','My mom cooks delicious food.','#rtn','I love her lasagna. She’s the','#tcpt','cook I know! ','#rtn','#rtn','My dog Sanchez is a large poodle. My mother has a cocker spaniel','#rtn', 'and my grandma has a chihuahua called Pepe. Sanchez is the','#rtn','#tcpt','dog we have, and Pepe is the','#tcpt','. We have a car','#rtn',' but it is 20 years old. Our family has the','#tcpt','car in','#rtn','the neighborhood!"']
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
						{type: 'pcpt', id: 'pcpt1', x: 390, y: 195, font:'13px Dosis',lineHeight: 16, underline:{y:3}, margin: 5, scolor: '#00629f', stroke: 1, bcolor: 'rgba(255,255,255,0.01)'}
						{type: 'ldrg', id: 'ldrg1', x: 140, y: 520, index: 'tallest', text: 'tallest', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg2', x: 250, y: 520, index: 'oldest', text: 'oldest', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg3', x: 360, y: 520, index: 'cutest', text: 'cutest', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg4', x: 470, y: 520, index: 'longest', text: 'longest', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg5', x: 600, y: 520, index: 'funniest', text: 'funniest', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg6', x: 190, y: 560, index: 'youngest', text: 'youngest', font:'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg7', x: 330, y: 560, index: 'best', text: 'best', font:'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg8', x: 420, y: 560, index: 'biggest', text: 'biggest', font:'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg9', x: 540, y: 560, index: 'smallest', text: 'smallest', font:'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						
					]
					groups: [
					]
				}

			]
		super()
	window.U6A3 = U6A3