/*

NEW ODA
*/


(function() {
  var U2A3,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U2A3 = (function(_super) {
    __extends(U2A3, _super);

    function U2A3() {
      this.manifest = [
        {
          id: 'caja',
          src: 'caja.png'
        }, {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'EasterIsland',
          src: 'Easter_Island.png'
        }, {
          id: 'family',
          src: 'family.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'ready',
          src: 'ready.png'
        }, {
          id: 'repeat',
          src: 'repeat.png'
        }, {
          id: 's/travel',
          src: 'Travel.mp3'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.evaluateGlobal01 = function(dispatcher) {
        if (lib[dispatcher].index === d2oda.evaluator.success) {
          return lib.scene.success(true, false);
        } else {
          return lib.scene.fail();
        }
      };
      this.evaluateDrop02_01 = function(dispatcher, target) {
        var complete, drop, _i, _j, _len, _len1, _ref, _ref1;
        complete = true;
        if (lib[dispatcher].index === target.success) {
          target.update(lib[dispatcher].label.text, true);
        } else {
          target.update(lib[dispatcher].label.text, false);
        }
        lib[dispatcher].afterSuccess();
        _ref = lib[dispatcher].droptargets;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          drop = _ref[_i];
          if (drop.text.text === '') {
            complete = false;
          }
        }
        if (!complete) {
          return;
        }
        _ref1 = lib[dispatcher].droptargets;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          drop = _ref1[_j];
          if (drop.complete) {
            lib.score.plusOne();
          }
        }
        return lib.scene.success(false);
      };
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 130,
          states: [
            {
              text: 'Read and listen. Then complete the sentences.',
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
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'family'
                    }
                  }, {
                    name: 'pcct1',
                    opts: {
                      pattern: ['We met in Africa ', '#tcpt', ' years ago.'],
                      targets: [
                        {
                          text: 'on Christmas Day',
                          success: 'ten'
                        }
                      ]
                    }
                  }, {
                    name: 'pcct2',
                    opts: {
                      pattern: ['We got married ', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'on Christmas Day',
                          success: 'in 2005'
                        }
                      ]
                    }
                  }, {
                    name: 'pcct3',
                    opts: {
                      pattern: ['In 2007, ', '#tcpt', ' was born.'],
                      targets: [
                        {
                          text: 'on Christmas Day',
                          success: 'Patrick'
                        }
                      ]
                    }
                  }, {
                    name: 'pcct4',
                    opts: {
                      pattern: ['We started homeschooling Patrick when he was ', '#tcpt', ' years old.'],
                      targets: [
                        {
                          text: 'on Christmas Day',
                          success: 'four'
                        }
                      ]
                    }
                  }, {
                    name: 'pcct5',
                    opts: {
                      pattern: ['In 2011, a university gave us ', '#tcpt', ' to study Pacific cultures.'],
                      targets: [
                        {
                          text: 'on Christmas Day',
                          success: 'money'
                        }
                      ]
                    }
                  }, {
                    name: 'pcct6',
                    opts: {
                      pattern: ['We gave', '#tcpt', 'to say goodbye to our family and friends.'],
                      targets: [
                        {
                          text: 'on Christmas Day',
                          success: 'a party'
                        }
                      ]
                    }
                  }, {
                    name: 'pcct7',
                    opts: {
                      pattern: ['We left Hawaii ', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'on Christmas Day',
                          success: 'on Christmas Day'
                        }
                      ]
                    }
                  }, {
                    name: 'pcct8',
                    opts: {
                      pattern: ['Patrick is happy and he is making ', '#tcpt', ' everywhere.'],
                      targets: [
                        {
                          text: 'on Christmas Day',
                          success: 'new friends'
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
                id: 'caja',
                x: 144,
                y: 480
              }, {
                type: 'img',
                id: 'family',
                x: 28,
                y: 40
              }, {
                type: 'pcct',
                id: 'pcct1',
                x: 385,
                y: 190,
                font: '12px Quicksand',
                margin: 10,
                scolor: '#F9101A'
              }, {
                type: 'pcct',
                id: 'pcct2',
                x: 385,
                y: 225,
                font: '12px Quicksand',
                margin: 10,
                scolor: '#F9101A'
              }, {
                type: 'pcct',
                id: 'pcct3',
                x: 385,
                y: 260,
                font: '12px Quicksand',
                margin: 10,
                scolor: '#F9101A'
              }, {
                type: 'pcct',
                id: 'pcct4',
                x: 385,
                y: 295,
                font: '12px Quicksand',
                margin: 10,
                scolor: '#F9101A'
              }, {
                type: 'pcct',
                id: 'pcct5',
                x: 385,
                y: 330,
                font: '12px Quicksand',
                margin: 10,
                scolor: '#F9101A'
              }, {
                type: 'pcct',
                id: 'pcct6',
                x: 385,
                y: 365,
                font: '12px Quicksand',
                margin: 10,
                scolor: '#F9101A'
              }, {
                type: 'pcct',
                id: 'pcct7',
                x: 385,
                y: 400,
                font: '12px Quicksand',
                margin: 10,
                scolor: '#F9101A'
              }, {
                type: 'pcct',
                id: 'pcct8',
                x: 385,
                y: 435,
                font: '12px Quicksand',
                margin: 10,
                scolor: '#F9101A'
              }, {
                type: 'ldrg',
                id: 'ldrg1',
                x: 240,
                y: 510,
                index: 'a party',
                text: 'a party',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg2',
                x: 320,
                y: 510,
                index: 'Christmas Day',
                text: 'Christmas Day',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg3',
                x: 460,
                y: 510,
                index: 'four',
                text: 'four',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg4',
                x: 515,
                y: 510,
                index: 'in 2005',
                text: 'in 2005',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg5',
                x: 255,
                y: 530,
                index: 'money',
                text: 'money',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg6',
                x: 335,
                y: 530,
                index: 'new friends',
                text: 'new friends',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg7',
                x: 455,
                y: 530,
                index: 'Patrick',
                text: 'Patrick',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg8',
                x: 535,
                y: 530,
                index: 'ten',
                text: 'ten',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }
            ],
            groups: [
              {
                type: 'grp',
                id: 'grp1',
                invisible: true,
                group: ['family']
              }
            ]
          }, {
            answers: {
              collection: [
                [
                  {
                    name: 'snd',
                    opts: {
                      id: 's/travel'
                    }
                  }, {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'chs1',
                    opts: {
                      type: 'txt',
                      opt1: 'They met in Africa ten years ago.',
                      opt2: 'They met in Africa last year'
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
                      opt1: 'They had a son 4 years ago.',
                      opt2: 'They had a son 6 years ago.'
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
                      opt1: 'They sent Patrick to school in Hawaii.',
                      opt2: 'They homeschooled their son.'
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
                      opt1: 'They spent Christmas with her mom.',
                      opt2: 'They had a party two weeks before Christmas.'
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
                      opt1: 'They traveled to the islands last month.',
                      opt2: 'They sailed to the islands a year ago.'
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
                      opt1: 'Patrick doesn\'t like to travel.',
                      opt2: 'Patrick likes to travel.'
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                id: 'EasterIsland',
                x: 400,
                y: 80,
                align: 'tc'
              }, {
                type: 'btn',
                id: 'repeat',
                x: 400,
                y: 540,
                isRepeat: true,
                states: [
                  {
                    img: {
                      name: 'repeat',
                      x: 0,
                      y: 0,
                      align: 'tc'
                    }
                  }
                ]
              }, {
                type: 'chs',
                id: 'chs1',
                x: 400,
                y: 100,
                align: 'tc',
                target: 'global',
                "eval": this.evaluateGlobal01,
                label: {
                  font: '18px Quicksand',
                  color: '#333'
                },
                caption: {
                  font: '20px Quicksand',
                  color: '#333'
                },
                bullets: {
                  font: '12px Quicksand',
                  color: '#000',
                  lineWidth: 300
                }
              }
            ],
            groups: []
          }
        ]
      };
      U2A3.__super__.constructor.call(this);
    }

    window.U2A3 = U2A3;

    return U2A3;

  })(Oda);

}).call(this);
