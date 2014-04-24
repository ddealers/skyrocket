###

NEW ODA

###
class U2A4 extends Oda
	constructor: ->
		@manifest = [
			{id:'c1', src: 'circulo1.png'}
			{id:'c2', src: 'circulo2.png'}
			{id:'anim', src: 'anim.png'}
			{id:'header', src: 'header.png'}
			{id:'playagain', src: 'play_again.png'}
			{id:'startgame', src: 'start_game.png'}
			{id:'boing', src: 'boing.mp3'}
			{id:'s/silence', src: 'silence.mp3'}
			{id:'good', src: 'good.mp3'}
			{id:'wrong', src: 'wrong.mp3'}
		]
		@onChoose = (dispatcher) =>
			d = lib[dispatcher]
			if d.index is d2oda.evaluator.success
				lib.animotion.nextAnimation()
				lib.scene.success()
			else
				lib.scene.fail()
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Choose the answers and run!', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 10, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'Put on all your clothes to stay', opt1:'warm', opt2:'wet.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'You can use', opt1:'grass', opt2:'a trash bag', after:'to protect yourself from the rain.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'You', opt1:'shouldn\'t', opt2:'should', after:'move around when you are lost.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'Use', opt1:'a bright sweater', opt2:'aluminium foil', after:'to create a reflector.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'Use', opt1:'binoculars', opt2:'rocks', after:'to spell the word help.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'You should use a', opt1:'whistle', opt2:'knife', after:'to make noise and attract attention.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'You should use a', opt1:'resealable plastic bag', opt2:'trash bag', after:'to carry water.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'You should use a', opt1:'pencil', opt2:'compass', after:'to find your way.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'You can use a', opt1:'knife', opt2:'shell', after:'to cut leaves and make a shelter.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'If you have', opt1:'sunglasses', opt2:'binoculars', after:'use them to look for help.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'You should always take', opt1:'sodas', opt2:'snacks', after:'in case you get hungry.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'Wear a brightly colored', opt1:'swimsuit', opt2:'jacket', after:'so people can see you better.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'You', opt1:'should', opt2:'shouldn\'t', after:'stay in one place.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'You can survive without food for a few days, but you need', opt1:'fire', opt2:'water', }}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'Use your whistle so people can', opt1:'see', opt2:'hear', after:'you.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'Try to stay', opt1:'warm and dry', opt2:'cool and relaxed', after:'at all times.'}}
							]
							[
								{name:'global', opts:{success:2}}
								{name: 'caw1', opts: {before:'It\'s always good to know the', opt1:'survive', opt2:'emergency', after:'procedures.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'Stay with your group; don\'t walk', opt1:'alone', opt2:'fast.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'Tell your mom and dad where you are', opt1:'going', opt2:'left.'}}
							]
							[
								{name:'global', opts:{success:1}}
								{name: 'caw1', opts: {before:'If possible, you', opt1:'should', opt2:'shouldn\'t', after:'take a cell phone.'}}
							]
							 
						]
						mixed: true
						type: 'limit'
						limit: 10
					}
					containers:[
						{
							type: 'sac', id: 'animotion', x: 420, y: 340, framerate: 15
							images: ['anim']
							frames: [[0,0,639,336,0,315.5,167.55],[639,0,639,336,0,315.5,167.55],[1278,0,639,336,0,315.5,167.55],[1917,0,639,336,0,315.5,167.55],[2556,0,639,336,0,315.5,167.55],[3195,0,639,336,0,315.5,167.55],[3834,0,639,336,0,315.5,167.55],[4473,0,639,336,0,315.5,167.55],[5112,0,639,336,0,315.5,167.55],[5751,0,639,336,0,315.5,167.55],[6390,0,639,336,0,315.5,167.55],[7029,0,639,336,0,315.5,167.55],[0,336,639,336,0,315.5,167.55],[639,336,639,336,0,315.5,167.55],[1278,336,639,336,0,315.5,167.55],[1917,336,639,336,0,315.5,167.55],[2556,336,639,336,0,315.5,167.55],[3195,336,639,336,0,315.5,167.55],[3834,336,639,336,0,315.5,167.55],[4473,336,639,336,0,315.5,167.55],[5112,336,639,336,0,315.5,167.55],[5751,336,639,336,0,315.5,167.55],[6390,336,639,336,0,315.5,167.55],[7029,336,639,336,0,315.5,167.55],[0,672,639,336,0,315.5,167.55],[639,672,639,336,0,315.5,167.55],[1278,672,639,336,0,315.5,167.55],[1917,672,639,336,0,315.5,167.55],[2556,672,639,336,0,315.5,167.55],[3195,672,639,336,0,315.5,167.55],[3834,672,639,336,0,315.5,167.55],[4473,672,639,336,0,315.5,167.55],[5112,672,639,336,0,315.5,167.55],[5751,672,639,336,0,315.5,167.55],[6390,672,639,336,0,315.5,167.55],[7029,672,639,336,0,315.5,167.55],[0,1008,639,336,0,315.5,167.55],[639,1008,639,336,0,315.5,167.55],[1278,1008,639,336,0,315.5,167.55],[1917,1008,639,336,0,315.5,167.55],[2556,1008,639,336,0,315.5,167.55],[3195,1008,639,336,0,315.5,167.55],[3834,1008,639,336,0,315.5,167.55],[4473,1008,639,336,0,315.5,167.55],[5112,1008,639,336,0,315.5,167.55],[5751,1008,639,336,0,315.5,167.55],[6390,1008,639,336,0,315.5,167.55],[7029,1008,639,336,0,315.5,167.55],[0,1344,639,336,0,315.5,167.55],[639,1344,639,336,0,315.5,167.55],[1278,1344,639,336,0,315.5,167.55],[1917,1344,639,336,0,315.5,167.55],[2556,1344,639,336,0,315.5,167.55],[3195,1344,639,336,0,315.5,167.55],[3834,1344,639,336,0,315.5,167.55],[4473,1344,639,336,0,315.5,167.55],[5112,1344,639,336,0,315.5,167.55],[5751,1344,639,336,0,315.5,167.55],[6390,1344,639,336,0,315.5,167.55],[7029,1344,639,336,0,315.5,167.55],[0,1680,639,336,0,315.5,167.55],[639,1680,639,336,0,315.5,167.55],[1278,1680,639,336,0,315.5,167.55],[1917,1680,639,336,0,315.5,167.55],[2556,1680,639,336,0,315.5,167.55],[3195,1680,639,336,0,315.5,167.55],[3834,1680,639,336,0,315.5,167.55],[4473,1680,639,336,0,315.5,167.55],[5112,1680,639,336,0,315.5,167.55],[5751,1680,639,336,0,315.5,167.55],[6390,1680,639,336,0,315.5,167.55],[7029,1680,639,336,0,315.5,167.55],[0,2016,639,336,0,315.5,167.55],[639,2016,639,336,0,315.5,167.55],[1278,2016,639,336,0,315.5,167.55],[1917,2016,639,336,0,315.5,167.55],[2556,2016,639,336,0,315.5,167.55],[3195,2016,639,336,0,315.5,167.55],[3834,2016,639,336,0,315.5,167.55],[4473,2016,639,336,0,315.5,167.55],[5112,2016,639,336,0,315.5,167.55],[5751,2016,639,336,0,315.5,167.55],[6390,2016,639,336,0,315.5,167.55],[7029,2016,639,336,0,315.5,167.55],[0,2352,639,336,0,315.5,167.55],[639,2352,639,336,0,315.5,167.55],[1278,2352,639,336,0,315.5,167.55],[1917,2352,639,336,0,315.5,167.55],[2556,2352,639,336,0,315.5,167.55],[3195,2352,639,336,0,315.5,167.55],[3834,2352,639,336,0,315.5,167.55],[4473,2352,639,336,0,315.5,167.55],[5112,2352,639,336,0,315.5,167.55],[5751,2352,639,336,0,315.5,167.55],[6390,2352,639,336,0,315.5,167.55],[7029,2352,639,336,0,315.5,167.55],[0,2688,639,336,0,315.5,167.55],[639,2688,639,336,0,315.5,167.55],[1278,2688,639,336,0,315.5,167.55],[1917,2688,639,336,0,315.5,167.55],[2556,2688,639,336,0,315.5,167.55],[3195,2688,639,336,0,315.5,167.55],[3834,2688,639,336,0,315.5,167.55],[4473,2688,639,336,0,315.5,167.55],[5112,2688,639,336,0,315.5,167.55],[5751,2688,639,336,0,315.5,167.55],[6390,2688,639,336,0,315.5,167.55],[7029,2688,639,336,0,315.5,167.55],[0,3024,639,336,0,315.5,167.55],[639,3024,639,336,0,315.5,167.55],[1278,3024,639,336,0,315.5,167.55],[1917,3024,639,336,0,315.5,167.55],[2556,3024,639,336,0,315.5,167.55],[3195,3024,639,336,0,315.5,167.55],[3834,3024,639,336,0,315.5,167.55],[4473,3024,639,336,0,315.5,167.55],[5112,3024,639,336,0,315.5,167.55],[5751,3024,639,336,0,315.5,167.55],[6390,3024,639,336,0,315.5,167.55],[7029,3024,639,336,0,315.5,167.55],[0,3360,639,336,0,315.5,167.55],[639,3360,639,336,0,315.5,167.55],[1278,3360,639,336,0,315.5,167.55],[1917,3360,639,336,0,315.5,167.55],[2556,3360,639,336,0,315.5,167.55],[3195,3360,639,336,0,315.5,167.55],[3834,3360,639,336,0,315.5,167.55],[4473,3360,639,336,0,315.5,167.55],[5112,3360,639,336,0,315.5,167.55],[5751,3360,639,336,0,315.5,167.55],[6390,3360,639,336,0,315.5,167.55],[7029,3360,639,336,0,315.5,167.55],[0,3696,639,336,0,315.5,167.55],[639,3696,639,336,0,315.5,167.55],[1278,3696,639,336,0,315.5,167.55],[1917,3696,639,336,0,315.5,167.55],[2556,3696,639,336,0,315.5,167.55],[3195,3696,639,336,0,315.5,167.55],[3834,3696,639,336,0,315.5,167.55],[4473,3696,639,336,0,315.5,167.55],[5112,3696,639,336,0,315.5,167.55],[5751,3696,639,336,0,315.5,167.55],[6390,3696,639,336,0,315.5,167.55],[7029,3696,639,336,0,315.5,167.55],[0,4032,639,336,0,315.5,167.55],[639,4032,639,336,0,315.5,167.55],[1278,4032,639,336,0,315.5,167.55],[1917,4032,639,336,0,315.5,167.55],[2556,4032,639,336,0,315.5,167.55],[3195,4032,639,336,0,315.5,167.55],[3834,4032,639,336,0,315.5,167.55],[4473,4032,639,336,0,315.5,167.55],[5112,4032,639,336,0,315.5,167.55],[5751,4032,639,336,0,315.5,167.55],[6390,4032,639,336,0,315.5,167.55],[7029,4032,639,336,0,315.5,167.55],[0,4368,639,336,0,315.5,167.55],[639,4368,639,336,0,315.5,167.55],[1278,4368,639,336,0,315.5,167.55],[1917,4368,639,336,0,315.5,167.55],[2556,4368,639,336,0,315.5,167.55],[3195,4368,639,336,0,315.5,167.55],[3834,4368,639,336,0,315.5,167.55],[4473,4368,639,336,0,315.5,167.55],[5112,4368,639,336,0,315.5,167.55],[5751,4368,639,336,0,315.5,167.55],[6390,4368,639,336,0,315.5,167.55],[7029,4368,639,336,0,315.5,167.55],[0,4704,639,336,0,315.5,167.55],[639,4704,639,336,0,315.5,167.55],[1278,4704,639,336,0,315.5,167.55],[1917,4704,639,336,0,315.5,167.55],[2556,4704,639,336,0,315.5,167.55],[3195,4704,639,336,0,315.5,167.55],[3834,4704,639,336,0,315.5,167.55],[4473,4704,639,336,0,315.5,167.55],[5112,4704,639,336,0,315.5,167.55],[5751,4704,639,336,0,315.5,167.55],[6390,4704,639,336,0,315.5,167.55],[7029,4704,639,336,0,315.5,167.55],[0,5040,639,336,0,315.5,167.55],[639,5040,639,336,0,315.5,167.55],[1278,5040,639,336,0,315.5,167.55],[1917,5040,639,336,0,315.5,167.55],[2556,5040,639,336,0,315.5,167.55],[3195,5040,639,336,0,315.5,167.55],[3834,5040,639,336,0,315.5,167.55],[4473,5040,639,336,0,315.5,167.55],[5112,5040,639,336,0,315.5,167.55],[5751,5040,639,336,0,315.5,167.55],[6390,5040,639,336,0,315.5,167.55],[7029,5040,639,336,0,315.5,167.55],[0,5376,639,336,0,315.5,167.55],[639,5376,639,336,0,315.5,167.55],[1278,5376,639,336,0,315.5,167.55],[1917,5376,639,336,0,315.5,167.55],[2556,5376,639,336,0,315.5,167.55],[3195,5376,639,336,0,315.5,167.55],[3834,5376,639,336,0,315.5,167.55],[4473,5376,639,336,0,315.5,167.55],[5112,5376,639,336,0,315.5,167.55],[5751,5376,639,336,0,315.5,167.55],[6390,5376,639,336,0,315.5,167.55],[7029,5376,639,336,0,315.5,167.55],[0,5712,639,336,0,315.5,167.55],[639,5712,639,336,0,315.5,167.55],[1278,5712,639,336,0,315.5,167.55],[1917,5712,639,336,0,315.5,167.55],[2556,5712,639,336,0,315.5,167.55],[3195,5712,639,336,0,315.5,167.55],[3834,5712,639,336,0,315.5,167.55],[4473,5712,639,336,0,315.5,167.55],[5112,5712,639,336,0,315.5,167.55],[5751,5712,639,336,0,315.5,167.55],[6390,5712,639,336,0,315.5,167.55],[7029,5712,639,336,0,315.5,167.55],[0,6048,639,336,0,315.5,167.55],[639,6048,639,336,0,315.5,167.55],[1278,6048,639,336,0,315.5,167.55],[1917,6048,639,336,0,315.5,167.55],[2556,6048,639,336,0,315.5,167.55],[3195,6048,639,336,0,315.5,167.55],[3834,6048,639,336,0,315.5,167.55],[4473,6048,639,336,0,315.5,167.55],[5112,6048,639,336,0,315.5,167.55],[5751,6048,639,336,0,315.5,167.55],[6390,6048,639,336,0,315.5,167.55],[7029,6048,639,336,0,315.5,167.55],[0,6384,639,336,0,315.5,167.55],[639,6384,639,336,0,315.5,167.55],[1278,6384,639,336,0,315.5,167.55],[1917,6384,639,336,0,315.5,167.55],[2556,6384,639,336,0,315.5,167.55],[3195,6384,639,336,0,315.5,167.55],[3834,6384,639,336,0,315.5,167.55],[4473,6384,639,336,0,315.5,167.55],[5112,6384,639,336,0,315.5,167.55],[5751,6384,639,336,0,315.5,167.55],[6390,6384,639,336,0,315.5,167.55],[7029,6384,639,336,0,315.5,167.55],[0,6720,639,336,0,315.5,167.55],[639,6720,639,336,0,315.5,167.55],[1278,6720,639,336,0,315.5,167.55],[1917,6720,639,336,0,315.5,167.55],[2556,6720,639,336,0,315.5,167.55]]
							animations: {init:[0,22, false], uno:[23,47, false], dos:[48,71, false], tres:[72,95, false], cuatro:[96,118, false], cinco:[119,144, false], seis:[145,168, false], siete:[169,193, false], ocho:[194,206, false], nueve:[207,244, false]}
						}	
						{
							type: 'caw', id: 'caw1', x: 430, y: 510, align: 'tc', target: 'global', eval: @onChoose
							label:{font:'18px Quicksand', color:'#444'}
							bullets:{font:'18px Quicksand', color: '#000'}
						}
					]
					groups: []
				}
				
				 
			]
		super()
	window.U2A4 = U2A4