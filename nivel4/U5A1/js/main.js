/*

NEW ODA
*/


(function() {
  var U5A1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U5A1 = (function(_super) {
    __extends(U5A1, _super);

    function U5A1() {
      this.manifest = [
        {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'c1',
          src: 'cirulo1.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'pantalla01',
          src: 'pantalla-01.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }, {
          id: 'ball',
          src: 'ball.png'
        }, {
          id: 'coach',
          src: 'coach.png'
        }, {
          id: 'diving',
          src: 'diving.jpg'
        }, {
          id: 'goggles',
          src: 'goggles.png'
        }, {
          id: 'match',
          src: 'match.png'
        }, {
          id: 'medal',
          src: 'medal.png'
        }, {
          id: 'paddle',
          src: 'paddle.png'
        }, {
          id: 'pool',
          src: 'pool.png'
        }, {
          id: 'race',
          src: 'race.png'
        }, {
          id: 'racket',
          src: 'racket.png'
        }, {
          id: 'shoes',
          src: 'shoes.png'
        }, {
          id: 'team',
          src: 'volleyball.png'
        }, {
          id: 'train',
          src: 'train.png'
        }
      ];
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 130,
          states: [
            {
              text: 'Read and choose the letters to complete the words.',
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
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'racket'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['When you play tennis, you need a ', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'r',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 'c',
                          width: 30
                        }, {
                          text: 'k',
                          width: 30
                        }, {
                          text: 'e',
                          width: 30
                        }, {
                          text: 't',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'goggles'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Swimmers use a swimsuit, a swimming cap and', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'g',
                          width: 30
                        }, {
                          text: 'o',
                          width: 30
                        }, {
                          text: 'g',
                          width: 30
                        }, {
                          text: 'g',
                          width: 30
                        }, {
                          text: 'l',
                          width: 30
                        }, {
                          text: 'e',
                          width: 30
                        }, {
                          text: 's',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'paddle'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['You hit a table tennis ball with a', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'p',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 'd',
                          width: 30
                        }, {
                          text: 'd',
                          width: 30
                        }, {
                          text: 'l',
                          width: 30
                        }, {
                          text: 'e',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'pool'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Swimmers train in a', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'p',
                          width: 30
                        }, {
                          text: 'o',
                          width: 30
                        }, {
                          text: 'o',
                          width: 30
                        }, {
                          text: 'l',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'team'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Volleyball and soccer are', '#tcpt', '#tcpt', '#tcpt', '#tcpt', 'sports.'],
                      targets: [
                        {
                          text: 't',
                          width: 30
                        }, {
                          text: 'e',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 'm',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'coach'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['The', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', 'works with the team so they play well.'],
                      targets: [
                        {
                          text: 'c',
                          width: 30
                        }, {
                          text: 'o',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 'c',
                          width: 30
                        }, {
                          text: 'h',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'ball'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Many sports are played with a', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'b',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 'l',
                          width: 30
                        }, {
                          text: 'l',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'shoes'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Athletes wear running', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', 'on their feet.'],
                      targets: [
                        {
                          text: 's',
                          width: 30
                        }, {
                          text: 'h',
                          width: 30
                        }, {
                          text: 'o',
                          width: 30
                        }, {
                          text: 'e',
                          width: 30
                        }, {
                          text: 's',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'medal'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['The Chinese team won first place. They won the gold', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'm',
                          width: 30
                        }, {
                          text: 'e',
                          width: 30
                        }, {
                          text: 'd',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 'l',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'diving'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['This sport,', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', ', is  a combination of gymnastics and swimming.'],
                      targets: [
                        {
                          text: 'd',
                          width: 30
                        }, {
                          text: 'i',
                          width: 30
                        }, {
                          text: 'v',
                          width: 30
                        }, {
                          text: 'i',
                          width: 30
                        }, {
                          text: 'n',
                          width: 30
                        }, {
                          text: 'g',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'train'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Athletes have to', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', 'every day to be faster and better.'],
                      targets: [
                        {
                          text: 't',
                          width: 30
                        }, {
                          text: 'r',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 'i',
                          width: 30
                        }, {
                          text: 'n',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'race'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Dimitri ran faster than Pedro and he won the', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'r',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 'c',
                          width: 30
                        }, {
                          text: 'e',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'match'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['In karate, the American athletes kicked harder and won the', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'm',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 't',
                          width: 30
                        }, {
                          text: 'c',
                          width: 30
                        }, {
                          text: 'h',
                          width: 30
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'paddle'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['You use a paddle in', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', ' ', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '#tcpt', '.'],
                      targets: [
                        {
                          text: 't',
                          width: 30
                        }, {
                          text: 'a',
                          width: 30
                        }, {
                          text: 'b',
                          width: 30
                        }, {
                          text: 'l',
                          width: 30
                        }, {
                          text: 'e',
                          width: 30
                        }, {
                          text: 't',
                          width: 30
                        }, {
                          text: 'e',
                          width: 30
                        }, {
                          text: 'n',
                          width: 30
                        }, {
                          text: 'i',
                          width: 30
                        }, {
                          text: 's',
                          width: 30
                        }
                      ]
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
                id: 'ball',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'coach',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'diving',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'goggles',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'match',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'medal',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'paddle',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'pool',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'race',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'racket',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'shoes',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'team',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'train',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'pcpt',
                id: 'pcpt1',
                x: 433,
                y: 470,
                font: '20px Quicksand',
                margin: 5,
                align: 'tc',
                scolor: '#F9101A'
              }, {
                type: 'abc',
                id: 'abc1',
                x: 400,
                y: 540,
                font: '20px Quicksand',
                fcolor: '#333',
                uwidth: 22,
                uheight: 34,
                margin: 10,
                target: 'pcpt1',
                "eval": 'click_O1',
                clickable: true
              }
            ],
            groups: [
              {
                type: 'grp',
                id: 'grp1',
                invisible: true,
                group: ['ball', 'coach', 'diving', 'goggles', 'match', 'medal', 'paddle', 'pool', 'race', 'racket', 'shoes', 'team', 'train']
              }
            ]
          }
        ]
      };
      U5A1.__super__.constructor.call(this);
    }

    window.U5A1 = U5A1;

    return U5A1;

  })(Oda);

}).call(this);
