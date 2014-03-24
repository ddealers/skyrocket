/*

NEW ODA
*/


(function() {
  var U4A2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U4A2 = (function(_super) {
    __extends(U4A2, _super);

    function U4A2() {
      this.manifest = [
        {
          id: 'accounts',
          src: 'accounts.png'
        }, {
          id: 'carriage',
          src: 'carriage.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'c1',
          src: 'cirulo1.png'
        }, {
          id: 'composer',
          src: 'composer.png'
        }, {
          id: 'concert',
          src: 'concert.png'
        }, {
          id: 'finished',
          src: 'finished.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'instruments',
          src: 'instruments.png'
        }, {
          id: 'piano',
          src: 'mozart.png'
        }, {
          id: 'languages',
          src: 'mozart.png'
        }, {
          id: 'pantalla01',
          src: 'pantalla-01.png'
        }, {
          id: 'sick',
          src: 'sick.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }, {
          id: 'sleep',
          src: 'sleep.png'
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
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'carriage'
                    }
                  }, {
                    name: 'wcpt1',
                    opts: {
                      word: ['Mozart', 'couldn\'t', 'get on a', 'carriage'],
                      target: 'carriage',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'sleep'
                    }
                  }, {
                    name: 'wcpt1',
                    opts: {
                      word: ['He couldn\'t', 'sleep', ' when he', 'traveled'],
                      target: 'sleep',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'sick'
                    }
                  }, {
                    name: 'wcpt1',
                    opts: {
                      word: ['His sister', 'couldn\'t play', 'for the king because', 'she was sick'],
                      target: 'sick',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'piano'
                    }
                  }, {
                    name: 'wcpt1',
                    opts: {
                      word: ['Mozart could', 'play', 'all the music', 'from memory'],
                      target: 'piano',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'instruments'
                    }
                  }, {
                    name: 'wcpt1',
                    opts: {
                      word: ['He', 'could play', 'four different', 'instruments'],
                      target: 'instruments',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'concert'
                    }
                  }, {
                    name: 'wcpt1',
                    opts: {
                      word: ['His father', 'couldn\'t', 'play', 'the violin'],
                      target: 'concert',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'accounts'
                    }
                  }, {
                    name: 'wcpt1',
                    opts: {
                      word: ['His brother', 'could', 'do', 'math'],
                      target: 'accounts',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'composer'
                    }
                  }, {
                    name: 'wcpt1',
                    opts: {
                      word: ['His sister', 'couldn\’t', 'compose', 'music'],
                      target: 'composer',
                      sentence: true
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'languages'
                    }
                  }, {
                    name: 'wcpt1',
                    opts: {
                      word: ['Mozart', 'could', 'speak several', 'different languages'],
                      target: 'languages',
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
                id: 'carriage',
                x: 400,
                y: 300,
                align: 'mc'
              }, {
                type: 'img',
                id: 'sleep',
                x: 400,
                y: 300,
                align: 'mc'
              }, {
                type: 'img',
                id: 'sick',
                x: 400,
                y: 300,
                align: 'mc'
              }, {
                type: 'img',
                id: 'piano',
                x: 400,
                y: 300,
                align: 'mc'
              }, {
                type: 'img',
                id: 'instruments',
                x: 400,
                y: 300,
                align: 'mc'
              }, {
                type: 'img',
                id: 'concert',
                x: 400,
                y: 300,
                align: 'mc'
              }, {
                type: 'img',
                id: 'accounts',
                x: 400,
                y: 300,
                align: 'mc'
              }, {
                type: 'img',
                id: 'composer',
                x: 400,
                y: 300,
                align: 'mc'
              }, {
                type: 'img',
                id: 'languages',
                x: 400,
                y: 300,
                align: 'mc'
              }, {
                type: 'swct',
                id: 'wcpt1',
                x: 460,
                y: 520,
                margin: 20,
                uwidth: 150,
                distance: 50,
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
                group: ['carriage', 'sleep', 'sick', 'piano', 'instruments', 'concert', 'accounts', 'composer', 'languages']
              }
            ]
          }
        ]
      };
      U4A2.__super__.constructor.call(this);
    }

    window.U4A2 = U4A2;

    return U4A2;

  })(Oda);

}).call(this);
