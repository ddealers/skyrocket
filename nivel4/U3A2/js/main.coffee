###

NEW ODA

###
class U3A2 extends Oda
	constructor: ->
		@manifest = [
       		{id: 'c1', src: 'circulo1.png'}
       		{id: 'c2', src: 'circulo2.png'}
       		{id: 'papel', src: 'papel.png'}
       		{id: 'storedetective', src: 'store_detective.png'}
       		{id: 'header', src: 'header.png'}
       		{id: 's/silence', src: 'silence.mp3'}
      	]
		@evaluateDrop02_01 = (dispatcher, target) ->
			a = lib[dispatcher]
			b = target
			console.log a,b
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
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
  
			scenes:[
				
				{
					answers: {
						collection: [ 
							[
								{
									name: 'pcpt1'
									opts:{

										pattern:['Last week my little sister Nadia got lost at the mall. She is only six','#rtn',' years old, so we were very scared. My mom called the store','#rtn',' detective immediately. The store detective asked us a lot of','#rtn',' questions. She filled out a form, a Missing Persons', '#tcpt', '.', '#rtn', '#rtn', '\“What does she look like?\” the detective asked.', '#rtn', '#rtn', '\“She is small,','#tcpt',', and has long, blond hair. She has gray','#rtn',' eyes and a small', '#tcpt', 'on her knee. She fell down last week,\”','#rtn',' answered Mom.', '#rtn', '#rtn', '\“What is she', '#tcpt', '?\”', '#rtn', '#rtn', '\“She’s wearing a pink blouse, a green', '#tcpt', ', and blue sneakers.','#rtn',' She likes', '#tcpt','colors,\” said Mom. The detective wrote','#rtn',' the information in a notebook.']
										targets: [{text: 'Report'},{text: 'thin'},{text: 'scar'},{text: 'wearing'},{text: 'skirt'},{text: 'bright'}]

										ypos: 0
									}
								}

							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'storedetective', x: 50, y: 80}
						{type: 'img', id: 'papel', x: 360, y: 150 }
						{type: 'pcpt', id: 'pcpt1', x: 395, y: 213, font: '15px Dosis', margin: 5, scolor: '#F9101A', lineHeight: 18, underline:{y:3}, stroke: 1, bcolor: 'rgba(255,255,255,0.01)'}
						{type: 'ldrg', id: 'ldrg1', x: 140, y: 540, index: 'bright', text: 'bright', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg2', x: 240, y: 540, index: 'Report', text: 'Report', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg3', x: 360, y: 540, index: 'scar', text: 'scar', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg4', x: 450, y: 540, index: 'skirt', text: 'skirt', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }
						{type: 'ldrg', id: 'ldrg5', x: 540, y: 540, index: 'thin', text: 'thin', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'ldrg6', x: 620, y: 540, index: 'wearing', text: 'wearing', font:'Bold 22px Quicksand', color: '#333', target: ['pcpt1'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						
					]
					groups: [
					]
				}
				{
					answers: {
						collection: [ 
							[
								{name: 'pcpt2', opts:{
									pattern:['\“Where did you last see her?\” asked the detective.', '#rtn', '\“Right here. I was sitting right here and she was', '#tcpt', 'next to me.\”', '#rtn', '\“What', '#tcpt', 'you doing?\”', '#rtn', '\“I was trying on a pair of shoes. Nadia was', '#tcpt', 'with her doll. Then', '#rtn', 'I looked up and she wasn’t there!\” My mom started to cry a little.', '#rtn', '#rtn', '\“Was she talking to anybody?\” asked the detective.', '#rtn', '\“Yes, she was', '#tcpt', 'to an old lady. She was wearing a pale blue', '#rtn', 'blouse and a brown skirt.\”', '#rtn', '#rtn','The store assistants were', '#tcpt', 'everywhere and people were', '#rtn', 'calling Nadia\’s name. “Please wait here,\” ordered the detective. He', '#rtn', ' came back ten minutes later with Nadia. They found Nadia in a', '#rtn', ' clothing store. She was wearing a dress from the store. She was','#rtn', '#tcpt', 'to music in front of a mirror!']
									targets: [{text: 'sitting'}, {text: 'were'}, {text: 'playing'}, {text: 'talking'}, {text: 'looking'}, {text: 'dancing'}]
								}}
							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'storedetective', x: 50, y: 80}
						{type: 'img', id: 'papel', x: 360, y: 150 }
						{type: 'pcpt', id: 'pcpt2', x: 385, y: 213, font: '15px Dosis', margin: 5, scolor: '#F9101A', lineHeight: 20, underline:{y:3}, stroke: 1, bcolor: 'rgba(255,255,255,0.01)'}
						{type: 'ldrg', id: 'ldrg7', x: 140, y: 540, index: 'dancing', text: 'dancing', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt2'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' } 
						{type: 'ldrg', id: 'ldrg8', x: 240, y: 540, index: 'looking', text: 'looking', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt2'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' } 
						{type: 'ldrg', id: 'ldrg9', x: 340, y: 540, index: 'playing', text: 'playing', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt2'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' } 
						{type: 'ldrg', id: 'ldrg10', x: 440, y: 540, index: 'sitting', text: 'sitting', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt2'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' } 
						{type: 'ldrg', id: 'ldrg11', x: 530, y: 540, index: 'talking', text: 'talking', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt2'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' } 
						{type: 'ldrg', id: 'ldrg12', x: 620, y: 540, index: 'were', text: 'were', font: 'Bold 22px Quicksand', color: '#333', target: ['pcpt2'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return' }	
						
					]
					groups: [
					]
				}
				
				
				 
			]
		super()
	window.U3A2 = U3A2