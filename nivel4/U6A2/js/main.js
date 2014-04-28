/*

NEW ODA
*/


(function() {
  var U6A2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U6A2 = (function(_super) {
    __extends(U6A2, _super);

    function U6A2() {
      this.manifest = [
        {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'c1',
          src: 'cirulo1.png'
        }, {
          id: 'baby',
          src: 'baby.png'
        }, {
          id: 'biggest',
          src: 'biggest.png'
        }, {
          id: 'clown',
          src: 'clown.png'
        }, {
          id: 'finished',
          src: 'finished.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'laugh',
          src: 'laugh.png'
        }, {
          id: 'oldest',
          src: 'oldest.png'
        }, {
          id: 'painting',
          src: 'painting.png'
        }, {
          id: 'pantalla',
          src: 'pantalla.png'
        }, {
          id: 'popcorn',
          src: 'popcorn.png'
        }, {
          id: 'tap',
          src: 'tap.png'
        }, {
          id: 'thinnest',
          src: 'thinnest.png'
        }, {
          id: 'youngest',
          src: 'youngest.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.onkeydown = function(e) {
        var fail, keycode, pattern, str, target, word, _i, _len, _ref;
        e.preventDefault();
        e.stopPropagation();
        word = '';
        keycode = e.keyCode || e.which;
        pattern = /[a-z]/i;
        str = String.fromCharCode(keycode);
        target = lib[window.target].getEnabledTarget();
        if (keycode === 8) {
          return target.write('<-');
        } else if (keycode === 13) {
          fail = false;
          _ref = lib[window.target].droptargets;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            target = _ref[_i];
            if (target.success === target.write()) {
              target.complete = true;
            } else {
              fail = true;
              lib.scene.fail();
            }
          }
          if (!fail) {
            return lib.scene.success(true, false);
          }
        } else if (pattern.test(str)) {
          return target.write(str.toLowerCase());
        }
      };
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 175,
          states: [
            {
              text: 'Complete the sentences with the superlative.',
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
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'baby'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['My cousin Camilla won a competition.', '#rtn', 'She won the prize for the', '#tcpt', '(pretty) baby.'],
                      targets: [
                        {
                          text: 'prettiest',
                          success: 'prettiest'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'biggest'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Marcia is 1.80 m tall and she weighs 130 kilos.', '#rtn', 'She\'s the', '#tcpt', '(big) singer in her band.'],
                      targets: [
                        {
                          text: 'biggest',
                          success: 'biggest'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'clown'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['There were three clowns at the party.', '#rtn', 'Pete was the', '#tcpt', '(short): he\'s only 1.50 m tall!'],
                      targets: [
                        {
                          text: 'shortest',
                          success: 'shortest'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'laugh'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['People laughed for five minutes at the world\'s', '#tcpt', '(funny) joke.'],
                      targets: [
                        {
                          text: 'funniest',
                          success: 'funniest'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'oldest'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Gaston is the ', '#tcpt', '(old) trumpet player in France.', '#rtn', 'He\'s 89 years old.'],
                      targets: [
                        {
                          text: 'oldest',
                          success: 'oldest'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'painting'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['This is the', '#tcpt', '(long) painting in the world.', '#rtn', 'It\'s 8 meters long.'],
                      targets: [
                        {
                          text: 'longest',
                          success: 'longest'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'popcorn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['The', '#tcpt', '(small) popcorn sculpture is only 4 cm high.'],
                      targets: [
                        {
                          text: 'smallest',
                          success: 'smallest'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'tap'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['The ', '#tcpt', '(fast) tapdancers can tap 300 beats', '#rtn', 'in one minute.'],
                      targets: [
                        {
                          text: 'fastest',
                          success: 'fastest'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'thinnest'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Sasha is very tall and she only weighs 45 kilos.', '#rtn', 'She\'s the', '#tcpt', '(thin) singer in her jazz band.'],
                      targets: [
                        {
                          text: 'thinnest',
                          success: 'thinnest'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'youngest'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Jimmy is the', '#tcpt', '(young) jazz musician in Great Britain.', '#rtn', 'He\'s only 9 years old.'],
                      targets: [
                        {
                          text: 'youngest',
                          success: 'youngest'
                        }
                      ]
                    }
                  }
                ]
              ],
              mixed: true,
              type: 'limit',
              limit: 8
            },
            containers: [
              {
                type: 'img',
                id: 'baby',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'biggest',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'clown',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'finished',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'header',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'laugh',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'oldest',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'painting',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'popcorn',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'tap',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'thinnest',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'img',
                id: 'youngest',
                x: 425,
                y: 360,
                align: 'mc'
              }, {
                type: 'pcpt',
                id: 'pcpt1',
                x: 425,
                y: 535,
                font: '18px Quicksand',
                margin: 5,
                align: 'tc',
                lineHeight: 25,
                underline: {
                  y: 0
                },
                bcolor: '#d7ecf9',
                scolor: '#00629f'
              }
            ],
            groups: [
              {
                type: 'grp',
                id: 'grp1',
                invisible: true,
                group: ['baby', 'biggest', 'clown', 'finished', 'header', 'laugh', 'oldest', 'painting', 'popcorn', 'tap', 'thinnest', 'youngest']
              }
            ]
          }
        ]
      };
      U6A2.__super__.constructor.call(this);
    }

    window.U6A2 = U6A2;

    return U6A2;

  })(Oda);

}).call(this);
