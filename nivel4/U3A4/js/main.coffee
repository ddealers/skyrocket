###

NEW ODA

###
class U3A4 extends Oda
	constructor: ->
		@manifest = [
			{id: 'c1' , src: 'circulo1.png' }
			{id: 'c2' , src: 'circulo2.png' }
			{id: '1', src: 'p_01.png'}
			{id: '2', src: 'p_02.png'}
			{id: '3', src: 'p_03.png'}
			{id: '4', src: 'p_04.png'}
			{id: '5', src: 'p_05.png'}
			{id: '6', src: 'p_06.png'}
			{id: '7', src: 'p_07.png'}
			{id: '8', src: 'p_08.png'}
			{id: 'caja', src: 'caja.png'}
			{id: 'header', src: 'header.png'}
			{id: 'q1', src: 'Question_1.png'}
			{id: 'q2', src: 'Question_2.png'}
			{id: 'q3', src: 'Question_3.png'}
			{id: 'q4', src: 'Question_4.png'}
			{id: 'q5', src: 'Question_5.png'}
			{id: 'q6', src: 'Question_6.png'}
			{id: 'q7', src: 'Question_7.png'}
			{id: 'q8', src: 'Question_8.png'}
			{id: 's/silence' , src: 'silence.mp3' }
		]
		@btnClick = (dispatcher, target) =>
			d = lib[dispatcher]
			t = lib[target]
			a = d.index
			b = t.droptargets
			c = t.currentTarget
			if a is b[c].success
				b[c].complete = true
				b[c].update()
				t.currentTarget++
			if t.currentTarget is b.length
				lib.scene.success()
			else
				lib.scene.fail()
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Read and drag the correct options.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 12, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'q1'}}
								{name: 'pcpt1', opts:{pattern:['It wasn\'t me. I', '#tcpt','#rtn', 'a movie.','#rtn', 'I was with my sister. '], targets: [{text:'was watching'}]}}

							]
							[

								{name: 'grp1', opts:{type: 'fadeIn', target: 'q2'}}
								{name: 'pcpt2', opts:{pattern:['No, you weren\'t. I saw your sister.','#rtn', 'She ', '#tcpt', 'mambo at the dance school!'], targets: [{text:'was dancing'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'q3'}}
								{name: 'pcpt3', opts:{pattern:['He has two sisters. I saw him.','#rtn', 'He', '#tcpt', 'popcorn before the movie.'], targets: [{text:'was buying'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'q4'}}
								{name: 'pcpt4', opts:{pattern:['Me? I', '#tcpt', 'in the park with my dog.'], targets: [{text:'was walking'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'q5'}}
								{name: 'pcpt5', opts:{pattern:['What', '#tcpt', '?'], targets: [{text:'were you doing'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'q6'}}
								{name: 'pcpt6', opts:{pattern:['I think the thief was a woman. I heard her.','#rtn', 'She ', '#tcpt', 'at the policeman.'], targets: [{text:'was shouting'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'q7'}}
								{name: 'pcpt7', opts:{pattern:['I\'m not the thief!','#rtn', 'I', '#tcpt', 'my grandmother in prison.'], targets: [{text:'was visiting'}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'q8'}}
								{name: 'pcpt8', opts:{pattern:['Oh… me? I was trying to get some exercise.','#rtn', 'I', '#tcpt', '!'], targets: [{text:'was running'}]}}
							]
							
						]
						mixed: true
						type: 'steps'
					}
					containers:[
						{type: 'img', id: '1', x: 70, y: 470, align: 'bl'}
						{type: 'img', id: '2', x: 193, y:470, align: 'bl'}
						{type: 'img', id: '3', x: 276, y:470, align: 'bl'}
						{type: 'img', id: '4', x: 339, y:470, align: 'bl'}
						{type: 'img', id: '5', x: 403, y:470, align: 'bl'}
						{type: 'img', id: '6', x: 473, y:470, align: 'bl'}
						{type: 'img', id: '7', x: 583, y:470, align: 'bl'}
						{type: 'img', id: '8', x: 663, y:470, align: 'bl'}
						{type: 'img', id: 'caja', x: 140, y: 490, align: 'tl'}

						{type: 'img', id: 'q1', x: 110, y: 170, align: 'tl'}
						{type: 'img', id: 'q2', x: 193, y: 160, align: 'tl'}
						{type: 'img', id: 'q3', x: 149, y: 160, align: 'tl'}
						{type: 'img', id: 'q4', x: 299, y: 170, align: 'tl'}
						{type: 'img', id: 'q5', x: 393, y: 150, align: 'tl'}
						{type: 'img', id: 'q6', x: 453, y: 140, align: 'tl'}
						{type: 'img', id: 'q7', x: 563, y: 150, align: 'tl'}
						{type: 'img', id: 'q8', x: 464, y: 160, align: 'tl'}

						{type: 'pcpt', id: 'pcpt1', x: 125, y: 190,  font: '10px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}
						{type: 'pcpt', id: 'pcpt2', x: 200, y: 195,  font: '10px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}
						{type: 'pcpt', id: 'pcpt3', x: 162, y: 195,  font: '10px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}
						{type: 'pcpt', id: 'pcpt4', x: 306, y: 188,  font: '10px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}
						{type: 'pcpt', id: 'pcpt5', x: 400, y: 170,  font: '10px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}
						{type: 'pcpt', id: 'pcpt6', x: 468, y: 165,  font: '10px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}
						{type: 'pcpt', id: 'pcpt7', x: 570, y: 175,  font: '10px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}
						{type: 'pcpt', id: 'pcpt8', x: 479, y: 195,  font: '10px Quicksand', margin: 5, align: 'tl', scolor: '#F9101A'}

						{
							type: 'btn', id: 'btn_1', x: 230, y: 510, index: 'was buying', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @btnClick
							states: [{txt: {text:'was buying', name:'was buying', x:0, y:0, align:'center', font: '18px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_2', x: 230, y: 530, index: 'was dancing', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @btnClick
							states: [{txt: {text:'was dancing', name:'was dancing', x:0, y:0, align:'center', font: '18px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_3', x: 375, y: 510, index: 'was running', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @btnClick
							states: [{txt: {text:'was running', name:'was running', x:0, y:0, align:'center', font: '18px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_4', x: 375, y: 530, index: 'was shouting', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @btnClick
							states: [{txt: {text:'was shouting', name:'was shouting', x:0, y:0, align:'center', font: '18px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_5', x: 520, y: 510, index: 'were you doing', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @btnClick
							states: [{txt: {text:'were you doing', name:'were you doing', x:0, y:0, align:'center', font: '18px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_6', x: 520, y: 530, index: 'was visiting', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @btnClick
							states: [{txt: {text:'was visiting', name:'was visiting', x:0, y:0, align:'center', font: '18px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_7', x: 675, y: 510, index: 'was walking', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @btnClick
							states: [{txt: {text:'was walking', name:'was walking', x:0, y:0, align:'center', font: '18px Quicksand'}}]
						}
						{
							type: 'btn', id: 'btn_8', x: 675, y: 530, index: 'was watching', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @btnClick
							states: [{txt: {text:'was watching', name:'was watching', x:0, y:0, align:'center', font: '18px Quicksand'}}]
						}


					]
					groups:[
						{

							type: 'grp', id: 'grp1', invisible:true
							group: [
								 'q1'
								 'q2'
								 'q3'
								 'q4'
								 'q5'
								 'q6'
								 'q7'
								 'q8'		
							]
						}
					]
				}
				
			]
		super()
	window.U3A4 = U3A4