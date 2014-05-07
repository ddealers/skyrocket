###

NEW ODA

###
class U7A1 extends Oda
	constructor: ->
		@manifest = [

			{id:'blender', src: 'blender.png'}
			{id:'cassetteplayer', src: 'cassette_player.png'}
			{id:'c1', src: 'circulo_1.png'}
			{id:'c2', src: 'circulo_2.png'}
			{id:'comicbook', src: 'comic_book.png'}
			{id:'header', src: 'header.png'}
			{id:'juicer', src: 'juicer.png'}
			{id:'letters', src: 'letters.png'}
			{id:'pantalla', src: 'pantalla-01.png'}
			{id:'phone', src: 'phone.png'}
			{id:'radio', src: 'radio.png'}
			{id:'recordplayer', src: 'record_player.png'}
			{id:'toaster', src: 'Toaster.png'}
			{id:'typewriter', src: 'typewriter.png'}
			{ id: 's/silence' , src: 'silence.mp3' }
		]
		@game = 
			header: 'header'
			instructions: {x: 110, y: 130, states: [{text:'Read and click on the letters to complete the words.', sound:'s/silence', played: false}]}
			score:{type: 'points', x:20, y:500, init: 0, total: 10, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
			scenes:[
				{
					answers: {
						collection: [							
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'cassetteplayer'}}
								{name: 'pcpt1', opts:{pattern:['My dad used to play music on a','#rtn', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', ' ', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt','.'], targets: [{text:'c', width: 30},{text:'a', width: 30},{text:'s', width: 30},{text:'s', width: 30},{text:'e', width: 30},{text:'t', width: 30},{text:'t', width: 30},{text:'e', width: 30},{text:'p', width: 30},{text:'l', width: 30},{text:'a', width: 30},{text:'y', width: 30},{text:'e', width: 30},{text:'r', width: 30}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'phone'}}
								{name: 'pcpt1', opts:{pattern:['Look at this', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt','. It\'s so big!'], targets: [{text:'p', width: 30},{text:'h', width: 30},{text:'o', width: 30},{text:'n', width: 30},{text:'e', width: 30}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'blender'}}
								{name: 'pcpt1', opts:{pattern:['To make a creamy soup, put the vegetables in a', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt','.'], targets: [{text:'b', width: 30},{text:'l', width: 30},{text:'e', width: 30},{text:'n', width: 30},{text:'d', width: 30},{text:'e', width: 30},{text:'r', width: 30}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'toaster'}}
								{name: 'pcpt1', opts:{pattern:['I found my grandma\'s old', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt','.','#rtn','She used to make me toast every morning. '], targets: [{text:'t', width: 30},{text:'o', width: 30},{text:'a', width: 30},{text:'s', width: 30},{text:'t', width: 30},{text:'e', width: 30},{text:'r', width: 30}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'juicer'}}
								{name: 'pcpt1', opts:{pattern:['My mom used to make fruit juice every morning.','#rtn','She used a', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt','.'], targets: [{text:'j', width: 30},{text:'u', width: 30},{text:'i', width: 30},{text:'c', width: 30},{text:'e', width: 30},{text:'r', width: 30}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'letters'}}
								{name: 'pcpt1', opts:{pattern:['Before there was e\-mail, people used to send','#rtn', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt','.'], targets: [{text:'l', width: 30},{text:'e', width: 30},{text:'t', width: 30},{text:'t', width: 30},{text:'e', width: 30},{text:'r', width: 30},{text:'s', width: 30}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'comicbook'}}
								{name: 'pcpt1', opts:{pattern:['When I was a kid, I used to read ','#rtn', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt',' ', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt','. Superman was my favorite.'], targets: [{text:'c', width: 30},{text:'o', width: 30},{text:'m', width: 30},{text:'i', width: 30},{text:'c', width: 30},{text:'b', width: 30},{text:'o', width: 30},{text:'o', width: 30},{text:'k', width: 30},{text:'s', width: 30}]}}
							]

							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'radio'}}
								{name: 'pcpt1', opts:{pattern:['Families used to sit together and listen to the', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt','.'], targets: [{text:'r', width: 30},{text:'a', width: 30},{text:'d', width: 30},{text:'i', width: 30},{text:'o', width: 30}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'recordplayer'}}
								{name: 'pcpt1', opts:{pattern:['Instead of a CD player, people used to use a','#rtn', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', ' ',  '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt','.'], targets: [{text:'r', width: 30},{text:'e', width: 30},{text:'c', width: 30},{text:'o', width: 30},{text:'r', width: 30},{text:'d', width: 30},{text:'p', width: 30},{text:'l', width: 30},{text:'a', width: 30},{text:'y', width: 30},{text:'e', width: 30},{text:'r', width: 30}]}}
							]
							[
								{name: 'grp1', opts:{type: 'fadeIn', target: 'typewriter'}}
								{name: 'pcpt1', opts:{pattern:['People used to write with','#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt',',','#rtn','not with computers.'], targets: [{text:'t', width: 30},{text:'y', width: 30},{text:'p', width: 30},{text:'e', width: 30},{text:'w', width: 30},{text:'r', width: 30},{text:'i', width: 30},{text:'t', width: 30},{text:'e', width: 30},{text:'r', width: 30},{text:'s', width: 30}]}}
							]
						]
						
						mixed: true
						type: 'steps'
					}
					containers:[
						{type: 'img', id: 'blender', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'cassetteplayer', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'comicbook', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'header', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'juicer', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'letters', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'phone', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'radio', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'recordplayer', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'toaster', x: 433, y: 300, align: 'mc'}
						{type: 'img', id: 'typewriter', x: 433, y: 300, align: 'mc'}
						{type: 'pcpt', id: 'pcpt1', x: 413, y: 445, font: 'Bold 20px Quicksand', lineHeight: 25, margin: 5, align: 'tc', scolor: '#009046'}
						{type: 'abc', id: 'abc1', x: 430, y: 545, font:'Bold 20px Quicksand', fcolor:'#333', uwidth: 22, uheight: 34, margin: 10, target:'pcpt1', eval: 'click_O1', clickable:true }
					]
					groups:[
						{

							type: 'grp', id: 'grp1', invisible:true
							group: [
								'blender'
								'cassetteplayer'
								'comicbook'
								'header'
								'juicer'
								'letters'
								'phone'
								'radio'
								'recordplayer'
								'toaster'
								'typewriter'

							]
						}
					]
				}
				
			]
		super()
	window.U7A1 = U7A1