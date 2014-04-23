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
          id: 'q1',
          src: '1.png'
        }, {
          id: 'q2',
          src: '2.png'
        }, {
          id: 'q3',
          src: '3.png'
        }, {
          id: 'q4',
          src: '4.png'
        }, {
          id: 'q5',
          src: '5.png'
        }, {
          id: 'q6',
          src: '6.png'
        }, {
          id: 'q7',
          src: '7.png'
        }, {
          id: 'q8',
          src: '8.png'
        }, {
          id: 'trueno',
          src: 'trueno.png'
        }, {
          id: 'paraguas',
          src: 'paraguas.png'
        }, {
          id: 'cielo',
          src: 'cielo.png'
        }, {
          id: 'pantalla',
          src: 'pantalla.png'
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
                          "eval": 'show_click_01',
                          index: 'q1',
                          target: 'grp1_0',
                          complete: false,
                          coords: ['10', '20', '30', '40', '50']
                        }, {
                          x: 55,
                          y: -25,
                          target: 'lightning',
                          "eval": 'show_click_01',
                          index: 'q2',
                          target: 'grp1_0',
                          complete: false,
                          coords: ['20', '21', '22', '23', '24', '25', '26', '27', '28']
                        }, {
                          x: 30,
                          y: 50,
                          target: 'thunder',
                          "eval": 'show_click_01',
                          index: 'q3',
                          target: 'grp1_0',
                          complete: false,
                          coords: ['13', '23', '33', '43', '53', '63', '73']
                        }, {
                          x: 180,
                          y: 50,
                          target: 'rain',
                          "eval": 'show_click_01',
                          index: 'q4',
                          target: 'grp1_0',
                          complete: false,
                          coords: ['73', '74', '75', '76']
                        }, {
                          x: 10,
                          y: 75,
                          target: 'snow',
                          "eval": 'show_click_01',
                          index: 'q5',
                          target: 'grp1_0',
                          complete: false,
                          coords: ['04', '05', '06', '07']
                        }, {
                          x: 255,
                          y: 100,
                          target: 'fog',
                          "eval": 'show_click_01',
                          index: 'q6',
                          target: 'grp1_0',
                          complete: false,
                          coords: ['105', '106', '107']
                        }, {
                          x: 105,
                          y: 125,
                          target: 'tornado',
                          "eval": 'show_click_01',
                          index: 'q7',
                          target: 'grp1_0',
                          complete: false,
                          coords: ['46', '56', '66', '76', '86', '96', '106']
                        }, {
                          x: -20,
                          y: 175,
                          target: 'wind',
                          "eval": 'show_click_01',
                          index: 'q8',
                          target: 'grp1_0',
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
                id: 'paraguas',
                x: 0,
                y: 160
              }, {
                type: 'img',
                id: 'cielo',
                x: 250,
                y: 160
              }, {
                type: 'img',
                id: 'trueno',
                x: 500,
                y: 160
              }, {
                type: 'img',
                id: 'q1',
                x: 30,
                y: 200
              }, {
                type: 'img',
                id: 'q2',
                x: 30,
                y: 300
              }, {
                type: 'img',
                id: 'q3',
                x: 15,
                y: 390
              }, {
                type: 'img',
                id: 'q4',
                x: 600,
                y: 435
              }, {
                type: 'img',
                id: 'q5',
                x: 580,
                y: 330
              }, {
                type: 'img',
                id: 'q6',
                x: 485,
                y: 250
              }, {
                type: 'img',
                id: 'q7',
                x: 525,
                y: 160
              }, {
                type: 'img',
                id: 'q8',
                x: 290,
                y: 170
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
                id: 'grp1_0',
                invisible: true,
                group: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8']
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
