###

NEW ODA

###
class U4A1 extends Oda
	constructor: ->
		@manifest = [
			{ id: 'c1', src: 'circulo1.png' }
			{ id: 'c2', src: 'circulo2.png' }
			{ id: 'header', src: 'header.png' }
			{id:'1b', src:'1-1.png'}
			{id:'1', src:'1.png'}
			{id:'2b', src:'2-1.png'}
			{id:'2', src:'2.png'}
			{id:'3b', src:'3-1.png'}
			{id:'3', src:'3.png'}
			{id:'4b', src:'4-1.png'}
			{id:'4', src:'4.png'}
			{id:'5b', src:'5-1.png'}
			{id:'5', src:'5.png'}
			{id:'6b', src:'6-1.png'}
			{id:'6', src:'6.png'}
			{id:'7b', src:'7-1.png'}
			{id:'7', src:'7.png'}
			{id:'couldnt', src:'coludnt.png'}
			{id:'couldnt2', src:'coludnt.png'}
			{id:'could2', src:'could.png'}
			{id:'could', src:'could.png'}
			{id:'Joe', src:'Joe.png'}
			{id:'Noam', src:'Noam.png'}
			{id:'repeat', src:'repeat.png'}
			{id:'s/Joe', src:'Joe.mp3'}
			{id:'s/Joe.1', src:'Joe_1.ogg'}
			{id:'s/Noam', src:'Noam.mp3'}
			{id:'s/Noam.1', src:'Noam_1.ogg'}
			{ id: 's/silence', src: 'silence.mp3' }
		]
		@onDrop = (dispatcher, target) =>
			failed = false
			d = lib[dispatcher]
			t = target.parent
			a = d.index
			b = t.success
			if a in t.success
				t.success.remove a
				d.afterSuccess()
				lib.scene.success true, false
				TweenLite.to d, 0.3, {scaleX:0.7, scaleY:0.7}
			else
				d.afterFail()
				lib.scene.fail()
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Listen, look and drag the pictures to the correct column.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 14, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name:'could', opts:{
										success:['1','2','3','5']
									}
								}
								{name:'couldnt', opts:{
										success:['4','7','6']
									}
								}
								{name:'snd', opts:{id:'s/Noam',android:'s/Noam.1'}}
							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'Noam', x: 56, y: 230}
						{type: 'idc', id: 'could', x: 411, y: 317, align: 'mc'}
						{type: 'idc', id: 'couldnt', x: 647, y: 317, align: 'mc'}
						{type: 'drg', id: '1', x: 187+30, y: 510, align:'mc', index: '1', target: ['could','couldnt'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '2', x: 187+30, y: 565, align:'mc', index: '2', target: ['could','couldnt'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '3', x: 287+30, y: 510, align:'mc', index: '3', target: ['could','couldnt'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '4', x: 287+30, y: 565, align:'mc', index: '4', target: ['could','couldnt'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '5', x: 387+30, y: 510, align:'mc', index: '5', target: ['could','couldnt'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '6', x: 387+30, y: 565, align:'mc', index: '6', target: ['could','couldnt'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '7', x: 487+30, y: 510, align:'mc', index: '7', target: ['could','couldnt'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{
							type: 'btn', id: 'repeat', x: 710, y: 540, isRepeat: true
							states:[img: {name:'repeat', x: 0, y: 0, align:'mc'}]
						}
					]
					groups:[]
				}
				{
					answers: {
						collection: [
							[
								{name:'could2', opts:{
										success:['1b','2b','4b','7b']
									}
								}

								{name:'couldnt2', opts:{
										success:['3b','5b','6b']
									}
								}
								{name:'snd', opts:{id:'s/Joe',android:"s/Joe.1"}}
							]
						]
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'Joe', x: 56, y: 230}
						{type: 'idc', id: 'could2', x: 411, y: 317, align: 'mc'}
						{type: 'idc', id: 'couldnt2', x: 647, y: 317, align: 'mc'}
						{type: 'drg', id: '1b', x: 187+30, y: 510, align:'mc', index: '1b', target: ['could2','couldnt2'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '2b', x: 187+30, y: 565, align:'mc', index: '2b', target: ['could2','couldnt2'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '3b', x: 287+30, y: 510, align:'mc', index: '3b', target: ['could2','couldnt2'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '4b', x: 287+30, y: 565, align:'mc', index: '4b', target: ['could2','couldnt2'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '5b', x: 387+30, y: 510, align:'mc', index: '5b', target: ['could2','couldnt2'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '6b', x: 387+30, y: 565, align:'mc', index: '6b', target: ['could2','couldnt2'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{type: 'drg', id: '7b', x: 487+30, y: 510, align:'mc', index: '7b', target: ['could2','couldnt2'], eval: @onDrop, click: @onClick, afterSuccess: 'drop', afterFail: 'return'}
						{
							type: 'btn', id: 'repeat', x: 710, y: 540, isRepeat: true
							states:[img: {name:'repeat', x: 0, y: 0, align:'mc'}]
						}
					]
					groups:[]
				}
				
			]
		super()
	window.U4A1 = U4A1