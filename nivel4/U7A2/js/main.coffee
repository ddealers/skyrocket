###

NEW ODA

###
class U7A2 extends Oda
	constructor: ->
		@manifest = [
			{id:'caja', src:'caja.png'}
			{id:'c2', src:'circilo_2.png'}
			{id:'c1', src:'circulo_1.png'}
			{id:'clothes', src:'clothes.png'}
			{id:'dress', src:'dress.png'}
			{id:'grandma', src:'grandma.png'}
			{id:'header', src:'header.png'}
			{id:'hippydad', src:'hippy_dad.png'}
			{id:'mini', src:'mini.png'}
			{id:'pantalla', src:'pantalla-01.png'}
			{id:'phone', src:'phone.png'}
			{id:'radio', src:'radio.png'}

			{id: 's/silence', src: 'silence.mp3' }
		]
		@evaluateGlobal01 = (dispatcher) ->
			if lib[dispatcher].index is d2oda.evaluator.success
				lib.scene.success true, false
			else
				lib.scene.fail()
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
			instructions: {x: 110, y: 130, states: [{text:'Drag the correct words to complete the text.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 16, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				
				{
					answers: {
						collection: [ 
							[
								{name: 'pcpt1', opts:{pattern:['In the 1970s, men\'s hair was','#rtn','#tcpt','#tcpt','it is now.'], targets: [{text:'longer', maxlength:'longer'},{text:'than', maxlength:'longer'}]}}
								{name: 'grpnum', opts:{type: 'fadeIn', target: 'text1'}}
								{name: 'grpizq', opts:{type: 'fadeIn', target: 'longer1'}}
								{name: 'grpmid', opts:{type: 'fadeIn', target: 'than'}}
								{name: 'grpder', opts:{type: 'fadeIn', target: 'shorter2'}}
							]
							[
								{name: 'pcpt2', opts:{pattern:['In the 1970s, women\'s skirts were often','#rtn','#tcpt','#tcpt','they are now.'], targets: [{text:'longer', maxlength:'longer'},{text:'than', maxlength:'longer'}]}}
								{name: 'grpnum', opts:{type: 'fadeIn', target: 'text2'}}
								{name: 'grpizq', opts:{type: 'fadeIn', target: 'shorter1'}}
								{name: 'grpmid', opts:{type: 'fadeIn', target: 'than'}}
								{name: 'grpder', opts:{type: 'fadeIn', target: 'longer2'}}
							]
							[
								{name: 'pcpt3', opts:{pattern:['When my parents were young, radios were','#rtn','#tcpt','#tcpt','they are now.'], targets: [{text:'bigger', maxlength:'bigger'},{text:'than', maxlength:'bigger'}]}}
								{name: 'grpnum', opts:{type: 'fadeIn', target: 'text3'}}
								{name: 'grpizq', opts:{type: 'fadeIn', target: 'large'}}
								{name: 'grpmid', opts:{type: 'fadeIn', target: 'than'}}
								{name: 'grpder', opts:{type: 'fadeIn', target: 'bigger'}}
							]
							[
								{name: 'pcpt4', opts:{pattern:['My grandma loved the 1970s.','#rtn','She was','#tcpt','#tcpt','she is now.'], targets: [{text:'happier', maxlength:'happier'},{text:'than', maxlength:'happier'}]}}
								{name: 'grpnum', opts:{type: 'fadeIn', target: 'text4'}}
								{name: 'grpizq', opts:{type: 'fadeIn', target: 'happier'}}
								{name: 'grpmid', opts:{type: 'fadeIn', target: 'than'}}
								{name: 'grpder', opts:{type: 'fadeIn', target: 'happy'}}
							]
							[
								{name: 'pcpt5', opts:{pattern:['Cars were a lot','#tcpt',' in the 1970s','#rtn','#tcpt','they are now.'], targets: [{text:'slower', maxlength:'slower'},{text:'than', maxlength:'slower'}]}}
								{name: 'grpnum', opts:{type: 'fadeIn', target: 'text5'}}
								{name: 'grpizq', opts:{type: 'fadeIn', target: 'slower'}}
								{name: 'grpmid', opts:{type: 'fadeIn', target: 'than'}}
								{name: 'grpder', opts:{type: 'fadeIn', target: 'faster'}}
							]
							[
								{name: 'pcpt6', opts:{pattern:['I don\'t like the clothes from the 1970s.','#rtn','I think they were','#tcpt','#tcpt','our clothes now.'], targets: [{text:'uglier', maxlength:'more beautiful'},{text:'than', maxlength:'more beautiful'}]}}
								{name: 'grpnum', opts:{type: 'fadeIn', target: 'text6'}}
								{name: 'grpizq', opts:{type: 'fadeIn', target: 'more beautiful'}}
								{name: 'grpmid', opts:{type: 'fadeIn', target: 'than'}}
								{name: 'grpder', opts:{type: 'fadeIn', target: 'uglier'}}
							]
							[
								{name: 'pcpt7', opts:{pattern:['In the 1970s, phones were much','#rtn','#tcpt','#tcpt','our phones today.'], targets: [{text:'heavier', maxlength:'heavier'},{text:'than', maxlength:'heavier'}]}}
								{name: 'grpnum', opts:{type: 'fadeIn', target: 'text7'}}
								{name: 'grpizq', opts:{type: 'fadeIn', target: 'big'}}
								{name: 'grpmid', opts:{type: 'fadeIn', target: 'than'}}
								{name: 'grpder', opts:{type: 'fadeIn', target: 'heavier'}}
							]
							[
								{name: 'pcpt8', opts:{pattern:['In the 1970s people traveled by ship.','#rtn','They were a lot','#tcpt','#tcpt','cars and planes.'], targets: [{text:'slower', maxlength:'slower'},{text:'than', maxlength:'slower'}]}}
								{name: 'grpnum', opts:{type: 'fadeIn', target: 'text8'}}
								{name: 'grpizq', opts:{type: 'fadeIn', target: 'slower'}}
								{name: 'grpmid', opts:{type: 'fadeIn', target: 'than'}}
								{name: 'grpder', opts:{type: 'fadeIn', target: 'slow'}}
							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'caja', x: 144, y: 480}
						{type: 'img', id: 'clothes', x: 626, y: 178}
						{type: 'img', id: 'dress', x: 707, y: 228}
						{type: 'img', id: 'grandma', x: 623, y: 339}
						{type: 'img', id: 'hippydad', x: 92, y: 170}
						{type: 'img', id: 'mini', x: 11, y: 360}
						{type: 'img', id: 'phone', x: 25, y: 265}
						{type: 'img', id: 'radio', x: 700, y: 412}
						{type: 'pcpt', id: 'pcpt1', x: 170, y: 190, font: 'Bold 12px Quicksand', lineHeight: 14, underline: {y:0}, margin: 10, scolor: '#009046', stroke: 2}
						{type: 'pcpt', id: 'pcpt2', x: 170, y: 225, font: 'Bold 12px Quicksand', lineHeight: 14, underline: {y:0}, margin: 10, scolor: '#009046', stroke: 2}
						{type: 'pcpt', id: 'pcpt3', x: 170, y: 260, font: 'Bold 12px Quicksand', lineHeight: 14, underline: {y:0}, margin: 10, scolor: '#009046', stroke: 2}
						{type: 'pcpt', id: 'pcpt4', x: 170, y: 295, font: 'Bold 12px Quicksand', lineHeight: 14, underline: {y:0}, margin: 10, scolor: '#009046', stroke: 2}
						{type: 'pcpt', id: 'pcpt5', x: 170, y: 330, font: 'Bold 12px Quicksand', lineHeight: 14, underline: {y:0}, margin: 10, scolor: '#009046', stroke: 2}
						{type: 'pcpt', id: 'pcpt6', x: 170, y: 365, font: 'Bold 12px Quicksand', lineHeight: 14, underline: {y:0}, margin: 10, scolor: '#009046', stroke: 2}
						{type: 'pcpt', id: 'pcpt7', x: 170, y: 400, font: 'Bold 12px Quicksand', lineHeight: 14, underline: {y:0}, margin: 10, scolor: '#009046', stroke: 2}
						{type: 'pcpt', id: 'pcpt8', x: 170, y: 435, font: 'Bold 12px Quicksand', lineHeight: 14, underline: {y:0}, margin: 10, scolor: '#009046', stroke: 2}

						{type: 'txt', id: 'text1', text: '1', x:165, y:500, font:'Bold 20px Quicksand', align: 'center', fcolor:'#fff'}
						{type: 'txt', id: 'text2', text: '2', x:165, y:500, font:'Bold 20px Quicksand', align: 'center', fcolor:'#fff'}
						{type: 'txt', id: 'text3', text: '3', x:165, y:500, font:'Bold 20px Quicksand', align: 'center', fcolor:'#fff'}
						{type: 'txt', id: 'text4', text: '4', x:165, y:500, font:'Bold 20px Quicksand', align: 'center', fcolor:'#fff'}
						{type: 'txt', id: 'text5', text: '5', x:165, y:500, font:'Bold 20px Quicksand', align: 'center', fcolor:'#fff'}
						{type: 'txt', id: 'text6', text: '6', x:165, y:500, font:'Bold 20px Quicksand', align: 'center', fcolor:'#fff'}
						{type: 'txt', id: 'text7', text: '7', x:165, y:500, font:'Bold 20px Quicksand', align: 'center', fcolor:'#fff'}
						{type: 'txt', id: 'text8', text: '8', x:165, y:500, font:'Bold 20px Quicksand', align: 'center', fcolor:'#fff'}

						{type: 'ldrg', id: 'than', x: 350, y: 505, index: 'than', text:'than', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}

						{type: 'ldrg', id: 'longer1', x: 240,  y: 505, index: 'longer', text:'longer', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'shorter2', x: 460, y: 505, index: 'shorter', text:'shorter', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}

						{type: 'ldrg', id: 'shorter1', x: 240,  y: 505, index: 'shorter', text:'shorter', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'longer2', x: 460, y: 505, index: 'longer', text:'longer', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}

						{type: 'ldrg', id: 'large', x: 240,  y: 505, index: 'large', text:'large', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'bigger', x: 460, y: 505, index: 'bigger', text:'bigger', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}

						{type: 'ldrg', id: 'happier', x: 240,  y: 505, index: 'happier', text:'happier', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'happy', x: 460, y: 505, index: 'happy', text:'happy', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}

						{type: 'ldrg', id: 'slower', x: 240,  y: 505, index: 'slower', text:'slower', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'faster', x: 460, y: 505, index: 'faster', text:'faster', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}

						{type: 'ldrg', id: 'more beautiful', x: 210,  y: 505, index: 'more beautiful', text:'more beautiful', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'uglier', x: 460, y: 505, index: 'uglier', text:'uglier', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}

						{type: 'ldrg', id: 'heavier', x: 460, y: 505,  index: 'heavier', text:'heavier', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
						{type: 'ldrg', id: 'big', x: 240,  y: 505, index: 'big', text:'big', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}	

						{type: 'ldrg', id: 'slow', x: 460, y: 505, index: 'slow', text:'slow', font:'15px Quicksand', color:'#333', target: ['pcpt1','pcpt2','pcpt3','pcpt4','pcpt5','pcpt6','pcpt7','pcpt8'], eval: @evaluateDrop02_01, afterSuccess: 'origin', afterFail: 'return'}
					]
					groups: [
						{
							type: 'grp',id:'grpnum', invisible:true
							group:[
								'text1'
								'text2'
								'text3'
								'text4'
								'text5'
								'text6'
								'text7'
								'text8'
							]
						}
						{
							type: 'grp', id: 'grpizq', invisible:true
							group: [
								'longer1'
								'shorter1'
								'large'
								'happier'
								'slower'
								'more beautiful'
								'big'
							]
						}
						{
							type: 'grp', id: 'grpmid', invisible:true
							group: [
								'than'
							]
						}
						{
							type: 'grp', id: 'grpder', invisible:true
							group: [
								'shorter2'
								'longer2'
								'bigger'
								'happy'
								'faster'
								'uglier'
								'heavier'
								'slow'
							]
						}
					]
				}
				
				 
			]
		super()
	window.U7A2 = U7A2