###

NEW ODA

###
class U5A2 extends Oda
	constructor: ->
		@manifest = [
			{id:'b1', src: '1.png'}
			{id:'g1', src: '1_.png'}
			{id:'b2', src: '2.png'}
			{id:'g2', src: '2_.png'}
			{id:'b3', src: '3.png'}
			{id:'g3', src: '3_.png'}
			{id:'b4', src: '4.png'}
			{id:'g4', src: '4_.png'}
			{id:'b5', src: '5.png'}
			{id:'g5', src: '5_.png'}
			{id:'c2', src: 'circulo2.png'}
			{id:'c1', src: 'cirulo1.png'}
			{id:'header', src: 'header.png'}
			{id:'repeat', src: 'btn_repeat.png'}
			{id:'pantalla01', src: 'pantalla-01.png'}
			{id:'pantalla201', src: 'pantalla2-01.png'}
			{id:'s/Dirk', src: 'Dirk.mp3'}
			{id:'s/Frank', src: 'Frank.mp3'}
			{id:'s/Jim', src: 'Jim.mp3'}
			{id:'s/Kris', src: 'Kris.mp3'}
			{id:'s/Simon', src: 'Simon.mp3'}
			{id:'s/Lili', src: 'Lili.mp3'}
			{id:'s/LiMin', src: 'LiMin.mp3'}
			{id:'s/LiuYuan', src: 'LiuYuan.mp3'}
			{id:'s/WenLi', src: 'WenLi.mp3'}
			{id:'s/ZhuMei', src: 'ZhuMei.mp3'}
			{id: "s/silence", src: "silence.mp3"}
		]
		@evaluateDrop = (dispatcher, target) ->
			d = lib[dispatcher]
			t = target.parent
			a = d.index
			b = t.success
			console.log a, b
			if t.success and a in t.success
				t.success.remove a
				d.afterSuccess()
				lib.scene.success()
			else
				d.afterFail()
				lib.scene.fail()
		@game =
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Listen and match the names with the athletes.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 10, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [ 
							[
								{name: 'snd', opts:{id:'s/WenLi'}}
								{
									name: "g1"
									opts:
										success: ["Wen Li"]
								}
							]
							[
								{name: 'snd', opts:{id:'s/LiMin'}}
								{
									name: "g3"
									opts:
										success: ["Li Mei"]
								}
							]
							[
		                		{name: 'snd', opts:{id:'s/LiuYuan'}}
								{
									name: "g2"
									opts:
										success: ["Liu Yuan"]
								}
							]
							[
								{name: 'snd', opts:{id:'s/Lili'}}
								{
									name: "g4"
									opts:
										success: ["Li Li"]
								}
							]
							[
								{name: 'snd', opts:{id:'s/ZhuMei'}}
								{
									name: "g5"
									opts:
										success: ["Zhu Mei"]
								}
							]
						]
						mixed: true
						type: 'steps'
					}
					containers:[
						{type: "idc", id: "g1", x: 168-3+5-40, y: 460, align: "bl"}
						{type: "idc", id: "g2", x: 256-3+5-40, y: 460, align: "bl"}
						{type: "idc", id: "g3", x: 362-3-40, y: 460, align: "bl"}
						{type: "idc", id: "g4", x: 438-40, y: 460, align: "bl"}
						{type: "idc", id: "g5", x: 602-40, y: 460, align: "bl"}
						{type: "ldrg", id: "ldrg5", x: 130, y: 480, index: "Liu Yuan", text: "Liu Yuan", font: "Bold 26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{type: "ldrg", id: "ldrg3", x: 265, y: 480, index: "Li Li", text: "Li Li", font: "Bold 26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{type: "ldrg", id: "ldrg4", x: 350, y: 480, index: "Wen Li", text: "Wen Li", font: "Bold 26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{type: "ldrg", id: "ldrg1", x: 485, y: 480, index: "Zhu Mei", text: "Zhu Mei", font: "Bold 26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{type: "ldrg", id: "ldrg2", x: 650, y: 480, index: "Li Mei", text: "Li Mei", font: "Bold 26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{
							type: "btn", id: "repeat", x: 740, y: 540, isRepeat: true
							states: [img: {name: "repeat", x: 0, y: 0, align: "mc"}]
						}
					]
					groups: []
				}
				{
					answers: {
						collection: [
							[
								{name: 'snd', opts:{id:'s/Dirk'}}
								{
									name: "b1"
									opts:
										success: ["Dirk"]
								}
							]
							[
								{name: 'snd', opts:{id:'s/Kris'}}
								{
									name: "b2"
									opts:
										success: ["Kris"]
								}
							]
							[
								{name: 'snd', opts:{id:'s/Jim'}}
								{
									name: "b3"
									opts:
										success: ["Jim"]
								}
							]
							[
								{name: 'snd', opts:{id:'s/Simon'}}
								{
									name: "b4"
									opts:
										success: ["Simon"]
								}
							]
							[
								{name: 'snd', opts:{id:'s/Frank'}}
								{
									name: "b5"
									opts:
										success: ["Frank"]
								}
							]
						]
						mixed: true
						type: 'steps'
					}
					containers: [
						{type: "idc", id: "b1", x: 130+20, y: 460, align: "bl",}
						{type: "idc", id: "b2", x: 227+20, y: 460, align: "bl",}
						{type: "idc", id: "b3", x: 307+20, y: 460, align: "bl",}
						{type: "idc", id: "b4", x: 414+20, y: 460, align: "bl",}
						{type: "idc", id: "b5", x: 520+20, y: 460, align: "bl",}
						{type: "ldrg", id: "ldrb5", x: 140, y: 480, index: "Jim", text: "Jim", font: "Bold 26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{type: "ldrg", id: "ldrb3", x: 245, y: 480, index: "Simon", text: "Simon", font: "Bold 26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{type: "ldrg", id: "ldrb4", x: 375, y: 480, index: "Kris", text: "Kris", font: "Bold 26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{type: "ldrg", id: "ldrb1", x: 485, y: 480, index: "Frank", text: "Frank", font: "Bold 26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{type: "ldrg", id: "ldrb2", x: 620, y: 480, index: "Dirk", text: "Dirk", font: "Bold 26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
						{
							type: "btn", id: "repeat", x: 740, y: 540, isRepeat: true
							states: [img: {name: "repeat", x: 0, y: 0, align: "mc"}]
						}
					]
					groups: []
				}
			]
		super()
	window.U5A2 = U5A2