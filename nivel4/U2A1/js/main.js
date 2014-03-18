/*

NEW ODA
*/


(function() {
  var U2A1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U2A1 = (function(_super) {
    __extends(U2A1, _super);

    function U2A1() {
      this.manifest = [
        {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'cloud',
          src: '1_caja.png'
        }, {
          id: 'lightning',
          src: '2_caja.png'
        }, {
          id: 'thunder',
          src: '3_caja.png'
        }, {
          id: 'rain',
          src: '4_caja.png'
        }, {
          id: 'snow',
          src: '5_caja.png'
        }, {
          id: 'fog',
          src: '6_caja.png'
        }, {
          id: 'tornado',
          src: '7_caja.png'
        }, {
          id: 'wind',
          src: '8_caja.png'
        }, {
          id: 'header',
          src: 'header.png'
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
              text: 'Look and drag the letters to complete the crossword.',
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
          total: 8,
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
                    name: 'cwd1',
                    opts: {
                      matrix: [['#', 'c', 'l', 'o', 'u', 'd', '#', '#', '#', '#', '#'], ['#', '#', 'i', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', '#', 'g', '#', '#', '#', '#', '#', '#', '#', '#'], ['#', 't', 'h', 'u', 'n', 'd', 'e', 'r', '#', '#', '#'], ['s', '#', 't', '#', '#', '#', '#', 'a', '#', '#', '#'], ['n', '#', 'n', '#', '#', '#', '#', 'i', '#', '#', 'f'], ['o', '#', 'i', '#', 't', 'o', 'r', 'n', 'a', 'd', 'o'], ['w', 'i', 'n', 'd', '#', '#', '#', '#', '#', '#', 'g'], ['#', '#', 'g', '#', '#', '#', '#', '#', '#', '#', '#']],
                      words: [
                        {
                          x: 10,
                          y: 0,
                          target: 'cloud',
                          complete: false,
                          coords: ['10', '20', '30', '40', '50']
                        }, {
                          x: 55,
                          y: -25,
                          target: 'lightning',
                          complete: false,
                          coords: ['20', '21', '22', '23', '24', '25', '26', '27', '28']
                        }, {
                          x: 30,
                          y: 50,
                          target: 'thunder',
                          complete: false,
                          coords: ['13', '23', '33', '43', '53', '63', '73']
                        }, {
                          x: 180,
                          y: 50,
                          target: 'rain',
                          complete: false,
                          coords: ['73', '74', '75', '76']
                        }, {
                          x: 10,
                          y: 75,
                          target: 'snow',
                          complete: false,
                          coords: ['04', '05', '06', '07']
                        }, {
                          x: 255,
                          y: 100,
                          target: 'fog',
                          complete: false,
                          coords: ['105', '106', '107']
                        }, {
                          x: 105,
                          y: 125,
                          target: 'tornado',
                          complete: false,
                          coords: ['46', '56', '66', '76', '86', '96', '106']
                        }, {
                          x: -20,
                          y: 175,
                          target: 'wind',
                          complete: false,
                          coords: ['07', '17', '27', '37']
                        }
                      ]
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                id: 'cloud',
                x: 30,
                y: 180
              }, {
                type: 'img',
                id: 'lightning',
                x: 30,
                y: 280
              }, {
                type: 'img',
                id: 'thunder',
                x: 15,
                y: 370
              }, {
                type: 'img',
                id: 'rain',
                x: 600,
                y: 435
              }, {
                type: 'img',
                id: 'snow',
                x: 580,
                y: 310
              }, {
                type: 'img',
                id: 'fog',
                x: 485,
                y: 230
              }, {
                type: 'img',
                id: 'tornado',
                x: 525,
                y: 140
              }, {
                type: 'img',
                id: 'wind',
                x: 290,
                y: 150
              }, {
                type: 'cwd',
                id: 'cwd1',
                x: 280,
                y: 275,
                font: '24px Quicksand',
                fcolor: '#333',
                uwidth: 25,
                uheight: 25,
                stroke: 1,
                scolor: '#000'
              }, {
                type: 'abc',
                id: 'abc1',
                x: 400,
                y: 560,
                font: '24px Quicksand',
                fcolor: '#333',
                uwidth: 22,
                uheight: 34,
                margin: 10,
                target: 'cwd1',
                "eval": 'drop_04'
              }
            ],
            groups: [
              {
                type: 'grp',
                name: 'grp1_0',
                grp: ['cloud', 'lightning', 'thunder', 'rain', 'snow', 'fog', 'tornado', 'wind']
              }
            ]
          }
        ]
      };
      U2A1.__super__.constructor.call(this);
    }

    window.U2A1 = U2A1;

    return U2A1;

  })(Oda);

}).call(this);
