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
      this.manifest = [
        {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'fondo',
          src: 'fondo.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'paso1',
          src: 'paso_1.png'
        }, {
          id: 'paso2',
          src: 'paso_2.png'
        }, {
          id: 'paso3',
          src: 'paso_3.png'
        }, {
          id: 'paso4',
          src: 'paso_4.png'
        }, {
          id: 'paso5',
          src: 'paso_5.png'
        }, {
          id: 'paso6',
          src: 'paso_6.png'
        }, {
          id: 'paso7',
          src: 'paso_7.png'
        }, {
          id: 'paso8',
          src: 'paso_8.png'
        }, {
          id: 'paso9',
          src: 'paso_9.png'
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
          total: 14,
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
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'Put on all your clothes to stay *warm',
                      opt2: 'wet*.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'You can use *grass',
                      opt2: 'a trash bag* to protect yourself // from the rain.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'You *shouldn\'t',
                      opt2: 'should* move around when you are lost.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'Use *a bright sweater ',
                      opt2: 'aluminium foil* to create a reflector.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'Use *binoculars',
                      opt2: 'rocks* to spell the word help.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'You should use a *whistle',
                      opt2: 'knife* to make noise // and attract attention.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'You should use a *resealable plastic bag',
                      opt2: 'trash bag* // to carry water.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'You should use a *pencil',
                      opt2: 'compass* to find your way.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'You can use a *knife',
                      opt2: 'shell* to cut leaves // and make a shelter.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'If you have * sunglasses',
                      opt2: 'binoculars*, // use them to look for help.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'You should always take *sodas',
                      opt2: 'snacks* // in case you get hungry.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'Wear a brightly colored *swimsuit',
                      opt2: 'jacket* // so people can see you better.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'You *should',
                      opt2: 'shouldn\'t* stay in one place. '
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'You can survive without food for a few days, // but you need *fire',
                      opt2: 'water*.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'Use your whistle so people can *see',
                      opt2: 'hear* you.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'Try to stay *warm and dry',
                      opt2: 'cool and relaxed* at all times.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'It\'s always good to know the *survive',
                      opt2: 'emergency* procedures.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'Stay with your group; don\'t walk *alone',
                      opt2: 'fast*.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'Tell your mom and dad where you *are going',
                      opt2: 'left*.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'If possible, you *should',
                      opt2: 'shouldn\'t* take a cell phone.'
                    }
                  }
                ]
              ],
              mixed: true,
              type: 'limit',
              limit: 20
            },
            containers: [
              {
                type: 'chs',
                id: 'chs1',
                x: 400,
                y: 100,
                align: 'tc',
                target: 'global',
                "eval": 'global_01',
                label: {
                  font: '18px Quicksand',
                  color: '#333'
                },
                caption: {
                  font: '20px Quicksand',
                  color: '#333'
                },
                bullets: {
                  font: '18px Quicksand',
                  color: '#000',
                  lineWidth: 300
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
