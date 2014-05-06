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
			{id: 'q1', src: 'Question_2.png'}
			{id: 'q2', src: 'Question_2.png'}
			{id: 'q3', src: 'Question_3.png'}
			{id: 'q4', src: 'Question_4.png'}
			{id: 'q5', src: 'Question_5.png'}
			{id: 'q6', src: 'Question_6.png'}
			{id: 'q7', src: 'Question_7.png'}
			{id: 'q8', src: 'Question_8.png'}
			{id: 's/silence' , src: 'silence.mp3' }
		]
		@btnClick = (dispatcher) =>
			d = lib[dispatcher]
			lib.grp_pcpt.update {type:'fadeIn', target:"pcpt#{d.index + 1}"}
			lib.grp1.update {type:'fadeIn', target:"q#{d.index + 1}"}
		@onDrop = (dispatcher, target) =>
			d = lib[dispatcher]
			t = target.parent
			a = d.index
			b = t.droptargets
			c = t.currentTarget
			
			if a is b[c].success
				b[c].complete = true
				b[c].update()
				d.afterSuccess()
				t.currentTarget++
			if t.currentTarget is b.length
				lib.scene.success()
			else
				d.afterFail()
				lib.scene.fail()
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Read and drag the correct options.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 8, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name: 'pcpt1', opts:{pattern:['It wasn\'t me. I', '#tcpt','a','#rtn','movie. I was with my sister.'], targets: [{text:'was watching'}]}}
								{name: 'pcpt2', opts:{pattern:['No, you weren\'t. I saw your sister.','#rtn', 'She ', '#tcpt', 'mambo at the', '#rtn','dance school!'], targets: [{text:'was dancing'}]}}
								{name: 'pcpt3', opts:{pattern:['He has two sisters. I saw him.','#rtn', 'He', '#tcpt', 'popcorn before', '#rtn', 'the movie.'], targets: [{text:'was buying'}]}}
								{name: 'pcpt4', opts:{pattern:['Me? I', '#tcpt', 'in the park ','#rtn', 'with my dog.'], targets: [{text:'was walking'}]}}
								{name: 'pcpt5', opts:{pattern:['What', '#rtn', '#tcpt', '?'], targets: [{text:'were you doing'}]}}
								{name: 'pcpt6', opts:{pattern:['I think the thief was a woman.','#rtn', 'I heard her.','#rtn', 'She ', '#tcpt', 'at the policeman.'], targets: [{text:'was shouting'}]}}
								{name: 'pcpt7', opts:{pattern:['I\'m not the thief!','#rtn', 'I', '#tcpt', 'my grandmother ','#rtn', 'in prison.'], targets: [{text:'was visiting'}]}}
								{name: 'pcpt8', opts:{pattern:['Oh… me? I was trying to get some exercise.','#rtn', 'I', '#tcpt', '!'], targets: [{text:'was running'}]}}
							]
							
						] 
						type: 'steps'
					}
					containers:[
						{
							type: 'btn', id: 'btn_1', x: 70, y: 470, index: 0, target: 'grp_pcpt', noHover: true, eval: @btnClick
							states: [{img: {name:'1', x:0, y:0, align:'bl'}}]
						}
						{
							type: 'btn', id: 'btn_2', x: 193, y: 470, index: 1, target: 'grp_pcpt', noHover: true, eval: @btnClick
							states: [{img: {name:'2', x:0, y:0, align:'bl'}}]
						}
						{
							type: 'btn', id: 'btn_3', x: 276, y: 470, index: 2, target: 'grp_pcpt', noHover: true, eval: @btnClick
							states: [{img: {name:'3', x:0, y:0, align:'bl'}}]
						}
						{
							type: 'btn', id: 'btn_4', x: 339, y: 470, index: 3, target: 'grp_pcpt', noHover: true, eval: @btnClick
							states: [{img: {name:'4', x:0, y:0, align:'bl'}}]
						}
						{
							type: 'btn', id: 'btn_5', x: 403, y: 470, index: 4, target: 'grp_pcpt', noHover: true, eval: @btnClick
							states: [{img: {name:'5', x:0, y:0, align:'bl'}}]
						}
						{
							type: 'btn', id: 'btn_6', x: 473, y: 470, index: 5, target: 'grp_pcpt', noHover: true, eval: @btnClick
							states: [{img: {name:'6', x:0, y:0, align:'bl'}}]
						}
						{
							type: 'btn', id: 'btn_7', x: 583, y: 470, index: 6, target: 'grp_pcpt', noHover: true, eval: @btnClick
							states: [{img: {name:'7', x:0, y:0, align:'bl'}}]
						}
						{
							type: 'btn', id: 'btn_8', x: 663, y: 470, index: 7, target: 'grp_pcpt', noHover: true, eval: @btnClick
							states: [{img: {name:'8', x:0, y:0, align:'bl'}}]
						}
						{type: 'img', id: 'caja', x: 140, y: 490, align: 'tl'}
						{type: 'img', id: 'q1', x: 95, y: 170, align: 'tl'}
						{type: 'img', id: 'q2', x: 193, y: 160, align: 'tl'}
						{type: 'img', id: 'q3', x: 149, y: 160, align: 'tl'}
						{type: 'img', id: 'q4', x: 299, y: 170, align: 'tl'}
						{type: 'img', id: 'q5', x: 393, y: 150, align: 'tl'}
						{type: 'img', id: 'q6', x: 453, y: 140, align: 'tl'}
						{type: 'img', id: 'q7', x: 550, y: 150, align: 'tl'}
						{type: 'img', id: 'q8', x: 464, y: 160, align: 'tl'}
						{type: 'pcpt', id: 'pcpt1', x: 130, y: 195,  font: 'Bold 11px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#F9101A', lineHeight: 17, bcolor: 'rgba(255,255,255,0.01)', stroke: 1}
						{type: 'pcpt', id: 'pcpt2', x: 230, y: 175,  font: 'Bold 11px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#F9101A', lineHeight: 17, bcolor: 'rgba(255,255,255,0.01)', stroke: 1}
						{type: 'pcpt', id: 'pcpt3', x: 183, y: 177,  font: 'Bold 11px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#F9101A', lineHeight: 17, bcolor: 'rgba(255,255,255,0.01)', stroke: 1}
						{type: 'pcpt', id: 'pcpt4', x: 315, y: 180,  font: 'Bold 11px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#F9101A', lineHeight: 17,  bcolor: 'rgba(255,255,255,0.01)', stroke: 1}
						{type: 'pcpt', id: 'pcpt5', x: 410, y: 160,  font: 'Bold 11px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#F9101A', lineHeight: 17,  bcolor: 'rgba(255,255,255,0.01)', stroke: 1}
						{type: 'pcpt', id: 'pcpt6', x: 468, y: 153,  font: 'Bold 11px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#F9101A', lineHeight: 17, bcolor: 'rgba(255,255,255,0.01)', stroke: 1}
						{type: 'pcpt', id: 'pcpt7', x: 580, y: 165,  font: 'Bold 11px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#F9101A', lineHeight: 17, bcolor: 'rgba(255,255,255,0.01)', stroke: 1}
						{type: 'pcpt', id: 'pcpt8', x: 472, y: 186,  font: 'Bold 11px Quicksand', margin: 5, underline:{y:0}, align: 'tl', scolor: '#F9101A', lineHeight: 17, bcolor: 'rgba(255,255,255,0.01)', stroke: 1}
						{type: 'ldrg', id: 'ldrg1', x: 200, y: 510, index: 'was buying', text: 'was buying', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'hide', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg2', x: 200, y: 530, index: 'was dancing', text: 'was dancing', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'hide', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg3', x: 325, y: 510, index: 'was running', text: 'was running', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'hide', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg4', x: 325, y: 530, index: 'was shouting', text: 'was shouting', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'hide', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg5', x: 450, y: 510, index: 'were you doing', text: 'were you doing', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'hide', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg6', x: 470, y: 530, index: 'was visiting', text: 'was visiting', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'hide', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg7', x: 610, y: 510, index: 'was walking', text: 'was walking', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'hide', afterFail:'return', eval: @onDrop}
						{type: 'ldrg', id: 'ldrg8', x: 610, y: 530, index: 'was watching', text: 'was watching', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], font: 'Bold 18px Quicksand', afterSuccess:'hide', afterFail:'return', eval: @onDrop}
					]
					groups:[
						{
							type: 'grp', id:'grp_pcpt', invisible:true
							group: [
								'pcpt1'
								'pcpt2'
								'pcpt3'
								'pcpt4'
								'pcpt5'
								'pcpt6'
								'pcpt7'
								'pcpt8'
							]
						}
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