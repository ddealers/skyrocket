/*

NEW ODA
*/


(function() {
  var U9A3,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U9A3 = (function(_super) {
    __extends(U9A3, _super);

    function U9A3() {
      this.manifest = [
        {
          id: 'c2',
          src: 'circilo_2.png'
        }, {
          id: 'c1',
          src: 'circulo_1.png'
        }, {
          id: 'diassemana',
          src: 'dias_semana.png'
        }, {
          id: 'robot',
          src: 'robot.png'
        }, {
          id: 'toboganes',
          src: 'toboganes.png'
        }, {
          id: 'caballo',
          src: 'caballo.png'
        }, {
          id: 'hamburguesa',
          src: 'hamburguesa.png'
        }, {
          id: 'niñosclase',
          src: 'niños-clase.png'
        }, {
          id: 'rosa',
          src: 'rosa.png'
        }, {
          id: 'fiesta',
          src: 'fiesta.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'pantalla',
          src: 'pantalla-01.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 130,
          states: [
            {
              text: 'Put the words in order to make sentences.',
              sound: 's/silence',
              played: false
            }
          ]
        },
        score: {
          type: 'points',
          x: 20,
          y: 500,
          init: 0,
          total: 6,
          aimg: 'c1',
          acolor: '#333',
          bimg: 'c2',
          bcolor: '#333'
        },
        scenes: [
          {
            answers: {
              collection: [
                [
                  {
                    name: 'wcpt1',
                    opts: {
                      word: ['We', 'are', 'going', 'to visit', 'a real laboratory'],
                      target: 'diassemana',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'wcpt1',
                    opts: {
                      word: ['On', 'Tuesday', 'we\'re', 'going to', 'horseback riding'],
                      target: 'diassemana',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'wcpt1',
                    opts: {
                      word: ['On Wednesday,', 'we\'re', 'going', 'to go', 'swimming'],
                      target: 'diassemana',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'wcpt1',
                    opts: {
                      word: ['I\'m', 'going', 'to', 'build', 'a robot'],
                      target: 'diassemana',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'wcpt1',
                    opts: {
                      word: ['I\'m', 'going to', 'learn how to', 'cook', 'hamburgers'],
                      target: 'diassemana',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'wcpt1',
                    opts: {
                      word: ['We\'re going', 'to', 'take', 'photographs', 'of nature'],
                      target: 'diassemana',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'wcpt1',
                    opts: {
                      word: ['On sunday', 'we\'re', 'going', 'to have', 'a party with cake'],
                      target: 'diassemana',
                      sentence: true
                    }
                  }
                ]
              ],
              mixed: true,
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                id: 'diassemana',
                x: 30,
                y: 220,
                align: 'tl'
              }, {
                type: 'img',
                id: 'niñosclase',
                x: 30,
                y: 243,
                align: 'tl'
              }, {
                type: 'img',
                id: 'caballo',
                x: 140,
                y: 243,
                align: 'tl'
              }, {
                type: 'img',
                id: 'toboganes',
                x: 253,
                y: 243,
                align: 'tl'
              }, {
                type: 'img',
                id: 'robot',
                x: 363,
                y: 243,
                align: 'tl'
              }, {
                type: 'img',
                id: 'hamburguesa',
                x: 470,
                y: 243,
                align: 'tl'
              }, {
                type: 'img',
                id: 'rosa',
                x: 583,
                y: 243,
                align: 'tl'
              }, {
                type: 'img',
                id: 'fiesta',
                x: 692,
                y: 243,
                align: 'tl'
              }, {
                type: 'swct',
                id: 'wcpt1',
                x: 460,
                y: 460,
                margin: 10,
                uwidth: 150,
                distance: 10,
                font: '20px Quicksand',
                scolor: '#F00',
                align: 'tc',
                "eval": 'drop_03'
              }
            ],
            groups: [
              {
                type: 'grp',
                id: 'grp1',
                group: ["robot", "toboganes", "caballo", "hamburguesa", "niñosclase", "rosa", "fiesta"]
              }
            ]
          }
        ]
      };
      U9A3.__super__.constructor.call(this);
    }

    window.U9A3 = U9A3;

    return U9A3;

  })(Oda);

}).call(this);
