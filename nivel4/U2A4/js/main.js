/*

NEW ODA
*/


(function() {
  var U2A4,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U2A4 = (function(_super) {
    __extends(U2A4, _super);

    function U2A4() {
      var _this = this;
      this.manifest = [
        {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'step1',
          src: 'step-01.png'
        }, {
          id: 'step2',
          src: 'step-02.png'
        }, {
          id: 'step3',
          src: 'step-03.png'
        }, {
          id: 'step4',
          src: 'step-04.png'
        }, {
          id: 'step5',
          src: 'step-05.png'
        }, {
          id: 'step6',
          src: 'step-06.png'
        }, {
          id: 'step7',
          src: 'step-07.png'
        }, {
          id: 'step8',
          src: 'step-08.png'
        }, {
          id: 'step9',
          src: 'step-09.png'
        }, {
          id: 'step10',
          src: 'step-10.png'
        }, {
          id: 'step11',
          src: 'step-11.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'playagain',
          src: 'play_again.png'
        }, {
          id: 'startgame',
          src: 'start_game.png'
        }, {
          id: 'boing',
          src: 'boing.mp3'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }, {
          id: 'good',
          src: 'good.mp3'
        }, {
          id: 'wrong',
          src: 'wrong.mp3'
        }
      ];
      this.onChoose = function(dispatcher) {
        var d;
        d = lib[dispatcher];
        if (d.index === d2oda.evaluator.success) {
          lib.animotion.nextAnimation();
          return lib.scene.success();
        } else {
          return lib.scene.fail();
        }
      };
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 130,
          states: [
            {
              text: 'Choose the answers and run!',
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
          total: 10,
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
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Put on all your clothes to stay',
                      opt1: 'warm',
                      opt2: 'wet',
                      after: '.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You can use',
                      opt1: 'grass',
                      opt2: 'a trash bag',
                      after: 'to protect yourself from the rain.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You',
                      opt1: 'shouldn\'t',
                      opt2: 'should',
                      after: 'move around when you are lost.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Use',
                      opt1: 'a bright sweater',
                      opt2: 'aluminium foil',
                      after: 'to create a reflector.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Use',
                      opt1: 'binoculars',
                      opt2: 'rocks',
                      after: 'to spell the word help.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You should use a',
                      opt1: 'whistle',
                      opt2: 'knife',
                      after: 'to make noise and attract attention.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You should use a',
                      opt1: 'resealable plastic bag',
                      opt2: 'trash bag',
                      after: 'to carry water.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You should use a',
                      opt1: 'pencil',
                      opt2: 'compass',
                      after: 'to find your way.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You can use a',
                      opt1: 'knife',
                      opt2: 'shell',
                      after: 'to cut leaves and make a shelter.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'If you have',
                      opt1: 'sunglasses',
                      opt2: 'binoculars',
                      after: 'use them to look for help.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You should always take',
                      opt1: 'sodas',
                      opt2: 'snacks',
                      after: 'in case you get hungry.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Wear a brightly colored',
                      opt1: 'swimsuit',
                      opt2: 'jacket',
                      after: 'so people can see you better.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You',
                      opt1: 'should',
                      opt2: 'shouldn\'t',
                      after: 'stay in one place.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You can survive without food for a few days, but you need',
                      opt1: 'fire',
                      opt2: 'water',
                      after: '.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Use your whistle so people can',
                      opt1: 'see',
                      opt2: 'hear',
                      after: 'you.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Try to stay',
                      opt1: 'warm and dry',
                      opt2: 'cool and relaxed',
                      after: 'at all times.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'It\'s always good to know the',
                      opt1: 'survive',
                      opt2: 'emergency',
                      after: 'procedures.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Stay with your group; don\'t walk',
                      opt1: 'alone',
                      opt2: 'fast',
                      after: '.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Tell your mom and dad where you are',
                      opt1: 'going',
                      opt2: 'left',
                      after: '.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'If possible, you',
                      opt1: 'should',
                      opt2: 'shouldn\'t',
                      after: 'take a cell phone.'
                    }
                  }
                ]
              ],
              mixed: true,
              type: 'limit',
              limit: 10
            },
            containers: [
              {
                type: 'sac',
                id: 'animotion',
                x: 420,
                y: 340,
                framerate: 15,
                images: ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8', 'step9', 'step10', 'step11'],
                frames: [[0, 0, 638, 336, 0, 319, 168], [0, 0, 638, 336, 1, 319, 168], [0, 0, 638, 336, 2, 319, 168], [0, 0, 638, 336, 3, 319, 168], [0, 0, 638, 336, 4, 319, 168], [0, 0, 638, 336, 5, 319, 168], [0, 0, 638, 336, 6, 319, 168], [0, 0, 638, 336, 7, 319, 168], [0, 0, 638, 336, 8, 319, 168], [0, 0, 638, 336, 9, 319, 168], [0, 0, 638, 336, 10, 319, 168]],
                animations: {
                  init: [0, 1, false],
                  uno: [1, 2, false],
                  dos: [2, 3, false],
                  tres: [3, 4, false],
                  cuatro: [4, 5, false],
                  cinco: [5, 6, false],
                  seis: [6, 7, false],
                  siete: [7, 8, false],
                  ocho: [8, 9, false],
                  nueve: [9, 10, false]
                }
              }, {
                type: 'caw',
                id: 'caw1',
                x: 450,
                y: 510,
                align: 'tc',
                target: 'global',
                "eval": this.onChoose,
                label: {
                  font: 'Bold 18px Quicksand',
                  color: '#444'
                },
                bullets: {
                  font: '18px Quicksand',
                  color: '#000'
                }
              }
            ],
            groups: []
          }
        ]
      };
      U2A4.__super__.constructor.call(this);
    }

    window.U2A4 = U2A4;

    return U2A4;

  })(Oda);

}).call(this);
