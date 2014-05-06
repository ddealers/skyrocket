###

NEW ODA

###
class U9A3 extends Oda
	constructor: ->
		@manifest = [

			{id:'c2', src:'circilo_2.png'}
			{id:'c1', src:'circulo_1.png'}

			{id:'diassemana', src:'dias_semana.png'}
			{id:'robot', src:'robot.png'}
			{id:'toboganes', src:'toboganes.png'}
			{id:'caballo', src:'caballo.png'}
			{id:'hamburguesa', src:'hamburguesa.png'}
			{id:'niñosclase', src:'ninos-clase.png'}
			{id:'rosa', src:'rosa.png'}
			{id:'fiesta', src:'fiesta.png'}
		
			{id:'header', src:'header.png'}
		
			{id:'pantalla', src:'pantalla-01.png'}
			{id:'s/silence', src:'silence.mp3'}
		]
		@drop = (dispatcher, target) ->

			if lib[dispatcher].index is target.success
				target.complete = true
				target.update()
				lib[dispatcher].afterSuccess()
				target.parent.currentTarget++
				if target.parent.currentTarget is target.parent.droptargets.length
					lib[target.parent.target].fadeIn()
					lib.scene.success()
			else
				lib[dispatcher].afterFail()
				lib.scene.fail()

		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Put the words in order to make sentences.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 7, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[ 
				{
					answers: {
						collection: [
							[
								{name: 'wcpt1', opts:{word:'We||are||going||to visit||a real laboratory', target: 'niñosclase', sentence: true}}
							]
							[
								{name: 'wcpt1', opts:{word:'On||Tuesday||we\'re||going to||horseback riding', target: 'caballo', sentence: true}}
							]
							[
								{name: 'wcpt1', opts:{word:'On Wednesday,||we\'re||going||to go||swimming', target: 'toboganes', sentence: true}}
							]
							[
								{name: 'wcpt1', opts:{word:'I\'m||going||to||build||a robot', target: 'robot', sentence: true}}
							]
							[
								{name: 'wcpt1', opts:{word:'I\'m||going to||learn how to||cook||hamburgers', target: 'hamburguesa', sentence: true}}
							]
							[
								{name: 'wcpt1', opts:{word:'We\'re going||to||take||photographs||of nature', target: 'rosa', sentence: true}}
							]
							[
								{name: 'wcpt1', opts:{word:'On sunday||we\'re||going||to have||a party with cake', target: 'fiesta', sentence: true}}
							]


						]
						mixed: true
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'diassemana', x: 80, y: 220, align: 'tl'}
						{type: 'img', id: 'niñosclase', x: 80, y: 243, align: 'tl'}
						{type: 'img', id: 'caballo', x: 190, y: 243, align: 'tl'}
						{type: 'img', id: 'toboganes', x: 303, y: 243, align: 'tl'}
						{type: 'img', id: 'robot', x: 413, y: 243, align: 'tl'}
						{type: 'img', id: 'hamburguesa', x: 520, y: 243, align: 'tl'}
						{type: 'img', id: 'rosa', x: 633, y: 243, align: 'tl'}
						{type: 'img', id: 'fiesta', x: 742, y: 243, align: 'tl'}
						{type: 'swct', id: 'wcpt1', x: 460, y: 460, margin: 10, uwidth: 150, distance: 10, font: 'Bold 20px Quicksand', scolor: '#F00', align: 'tc', eval:@drop}
					]
					groups: [
						{

							type: 'grp', id: 'grp1', invisible: true
							group: [
								"robot"
								"toboganes"
								"caballo"
								"hamburguesa"
								"niñosclase"
								"rosa"
								"fiesta"
					
							]
						}
					]
				}
			]
		super()
	window.U9A3 = U9A3