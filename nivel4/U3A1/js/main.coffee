###

NEW ODA

###
class U3A1 extends Oda
  constructor: ->
    @manifest = [
      {id: "c1", src: "circulo1.png"}
      {id: "c2", src: "circulo2.png"}
      {id: "g1", src: "1.png"}
      {id: "b1", src: "1_1.png"}
      {id: "g2", src: "2.png"}
      {id: "b2", src: "2_2.png"}
      {id: "g3", src: "3.png"}
      {id: "b3", src: "3_3.png"}
      {id: "g4", src: "4.png"}
      {id: "b4", src: "4_4.png"}
      {id: "g5", src: "5.png"}
      {id: "b5", src: "5_5.png"}
      {id: "repeat", src: "btn_repeat.png"}
      {id: "header", src: "header.png"}
      {id: "s/Panchito", src: "Panchito.mp3"}
      {id: "s/Hiro", src: "Hiro.mp3"}
      {id: "s/Roger", src: "Roger.mp3"}
      {id: "s/Margaret", src: "Margaret.mp3"}
      {id: "s/Pia", src: "Pia.mp3"}
      {id: "s/Maria", src: "Maria.mp3"}
      {id: "s/Paul", src: "Paul.mp3"}
      {id: "s/Emily", src: "Emily.mp3"}
      {id: "s/Barney", src: "Barney.mp3"}
      {id: "s/Sandra", src: "Sandra.mp3"}
      {id: "s/silence", src: "silence.mp3"}
    ]
    @evaluateDrop = (dispatcher, target) ->
      d = lib[dispatcher]
      t = target.parent
      a = d.index
      b = t.success
      if t.success and a in t.success
        t.success.remove a
        d.afterSuccess()
        lib.scene.success()
      else
        d.afterFail()
        lib.scene.fail()
    @game = 
      header: 'header'
      instructions: {x: 110, y: 130, states: [{text:'Listen and match the names with the children.', sound:'s/silence', played: false}]}
      score:{type: 'points', x:20, y:500, init: 0, total: 14, aimg: 'c1', acolor: '#333', bimg: 'c2', bcolor: '#333'}
      scenes:[
        
        {
          answers: {
            collection: [ 
              [
                {name: 'snd', opts:{id:'s/Margaret'}}
                {
                  name: "g1"
                  opts:
                    success: ["Margaret"]
                }
              ]
              [
                {name: 'snd', opts:{id:'s/Emily'}}
                {
                  name: "g2"
                  opts:
                    success: ["Emily"]
                }
              ]
              [
                {name: 'snd', opts:{id:'s/Pia'}}
                {
                  name: "g3"
                  opts:
                    success: ["Pia"]
                }
              ]
              [
                {name: 'snd', opts:{id:'s/Maria'}}
                {
                  name: "g4"
                  opts:
                    success: ["Maria"]
                }
              ]
              [
                {name: 'snd', opts:{id:'s/Sandra'}}
                {
                  name: "g5"
                  opts:
                    success: ["Sandra"]
                }
              ]
            ]
            mixed: true
            type: 'steps'
          }
          containers:[
            {type: "idc", id: "g1", x: 130, y: 460, align: "bl",}
            {type: "idc", id: "g2", x: 235, y: 460, align: "bl",}
            {type: "idc", id: "g3", x: 362, y: 460, align: "bl",}
            {type: "idc", id: "g4", x: 438, y: 460, align: "bl",}
            {type: "idc", id: "g5", x: 566, y: 460, align: "bl",}
            {type: "ldrg", id: "ldrg5", x: 170, y: 500, index: "Sandra", text: "Sandra", font: "26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {type: "ldrg", id: "ldrg3", x: 295, y: 500, index: "Pia", text: "Pia", font: "26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {type: "ldrg", id: "ldrg4", x: 360, y: 500, index: "Maria", text: "Maria", font: "26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {type: "ldrg", id: "ldrg1", x: 455, y: 500, index: "Margaret", text: "Margaret", font: "26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {type: "ldrg", id: "ldrg2", x: 600, y: 500, index: "Emily", text: "Emily", font: "26px Quicksand", color: "#333", target: ["g1", "g2", "g3", "g4", "g5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {
              type: "btn", id: "repeat", x: 740, y: 540, isRepeat: true
              states: [img: {name: "repeat", x: 0, y: 0, align: "mc"}]
            }
          ]
          groups: [

          ]
        }
        {
          answers: {
            collection: [ 
              [
                {name: 'snd', opts:{id:'s/Hiro'}}
                {
                  name: "b1"
                  opts:
                    success: ["Hiro"]
                }
              ]
              [
                {name: 'snd', opts:{id:'s/Barney'}}                
                {
                  name: "b2"
                  opts:
                    success: ["Barney"]
                }
              ]
              [
                {name: 'snd', opts:{id:'s/Roger'}}
                {
                  name: "b3"
                  opts:
                    success: ["Roger"]
                }
              ]
              [
                {name: 'snd', opts:{id:'s/Paul'}}
                {
                  name: "b4"
                  opts:
                    success: ["Paul"]
                }
              ]
              [
                {name: 'snd', opts:{id:'s/Panchito'}}
                {
                  name: "b5"
                  opts:
                    success: ["Panchito"]
                }
              ]
              
            ]
            mixed: true
            type: 'steps'
          }
          containers:[
            {type: "idc", id: "b1", x: 130, y: 460, align: "bl",}
            {type: "idc", id: "b2", x: 264, y: 460, align: "bl",}
            {type: "idc", id: "b3", x: 367, y: 460, align: "bl",}
            {type: "idc", id: "b4", x: 457, y: 460, align: "bl",}
            {type: "idc", id: "b5", x: 577, y: 460, align: "bl",}
            {type: "ldrg", id: "ldrb5", x: 170, y: 500, index: "Paul", text: "Paul", font: "26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {type: "ldrg", id: "ldrb3", x: 255, y: 500, index: "Hiro", text: "Hiro", font: "26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {type: "ldrg", id: "ldrb4", x: 335, y: 500, index: "Barney", text: "Barney", font: "26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {type: "ldrg", id: "ldrb1", x: 455, y: 500, index: "Panchito", text: "Panchito", font: "26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {type: "ldrg", id: "ldrb2", x: 600, y: 500, index: "Roger", text: "Roger", font: "26px Quicksand", color: "#333", target: ["b1", "b2", "b3", "b4", "b5"], eval: @evaluateDrop, afterSuccess: "hide", afterFail: "return"}
            {
              type: "btn", id: "repeat", x: 740, y: 540, isRepeat: true
              states: [img: {name: "repeat", x: 0, y: 0, align: "mc"}]
            }
          ]
          groups: [
                     
          ]
        }
         
      ]
    super()
  window.U3A1 = U3A1