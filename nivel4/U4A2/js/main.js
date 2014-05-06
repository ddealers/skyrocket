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
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'c1',
          src: 'cirulo1.png'
        }, {
          id: 'carriage',
          src: 'carriage.png'
        }, {
          id: 'sleep',
          src: 'sleep.png'
        }, {
          id: 'sick',
          src: 'sick.png'
        }, {
          id: 'piano',
          src: 'piano.png'
        }, {
          id: 'instruments',
          src: 'instruments.png'
        }, {
          id: 'concert',
          src: 'concert.png'
        }, {
          id: 'accounts',
          src: 'accounts.png'
        }, {
          id: 'composer',
          src: 'composer.png'
        }, {
          id: 'languages',
          src: 'languages.png'
        }, {
          id: 'finished',
          src: 'finished.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'pantalla01',
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
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'carriage'
                    }
                  }, {
                    name: 'swct1',
                    opts: {
                      word: 'Mozart||couldn\'t||get on a||carriage',
                      target: 'carriage',
                      maxlength: 'get on a',
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
                    name: 'swct1',
                    opts: {
                      word: 'He couldn\'t||sleep|| when he||traveled',
                      target: 'sleep',
                      maxlength: 'He couldn\'t',
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
                    name: 'swct1',
                    opts: {
                      word: 'His sister||couldn\'t play||for the king because||she was sick',
                      target: 'sick',
                      maxlength: 'for the king because',
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
                    name: 'swct1',
                    opts: {
                      word: 'Mozart could||play||all the music||from memory',
                      target: 'piano',
                      maxlength: 'all the music',
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
                    name: 'swct1',
                    opts: {
                      word: 'He||could play||four different||instruments',
                      target: 'instruments',
                      maxlength: 'four different',
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
                    name: 'swct1',
                    opts: {
                      word: 'His father||couldn\'t||play||the violin',
                      target: 'concert',
                      maxlength: 'the violin.',
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
                    name: 'swct1',
                    opts: {
                      word: 'His brother||could||do||math',
                      target: 'accounts',
                      maxlength: 'His brother',
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
                    name: 'swct1',
                    opts: {
                      word: 'His sister||couldn\’t||compose||music',
                      target: 'composer',
                      maxlength: 'His sister',
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
                    name: 'swct1',
                    opts: {
                      word: 'Mozart||could||speak several||different languages',
                      target: 'languages',
                      maxlength: 'different languages.',
                      sentence: true
                    }
                  }
                ]
              ],
              mixed: true,
              type: 'limit',
              limit: 6
            },
            containers: [
              {
                type: 'img',
                id: 'carriage',
                x: 400,
                y: 290,
                align: 'mc'
              }, {
                type: 'img',
                id: 'sleep',
                x: 400,
                y: 290,
                align: 'mc'
              }, {
                type: 'img',
                id: 'sick',
                x: 400,
                y: 290,
                align: 'mc'
              }, {
                type: 'img',
                id: 'piano',
                x: 400,
                y: 290,
                align: 'mc'
              }, {
                type: 'img',
                id: 'instruments',
                x: 400,
                y: 290,
                align: 'mc'
              }, {
                type: 'img',
                id: 'concert',
                x: 400,
                y: 290,
                align: 'mc'
              }, {
                type: 'img',
                id: 'accounts',
                x: 400,
                y: 290,
                align: 'mc'
              }, {
                type: 'img',
                id: 'composer',
                x: 400,
                y: 290,
                align: 'mc'
              }, {
                type: 'img',
                id: 'languages',
                x: 400,
                y: 290,
                align: 'mc'
              }, {
                type: 'swct',
                id: 'swct1',
                x: 430,
                y: 460,
                margin: 10,
                uwidth: 150,
                distance: 50,
                font: 'Bold 20px Quicksand',
                scolor: '#005da2',
                align: 'tc',
                "eval": 'drop_03'
              }
            ],
            groups: [
              {
                type: 'grp',
                id: 'grp1',
                invisible: true,
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
