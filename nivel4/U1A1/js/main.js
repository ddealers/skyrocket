/*

NEW ODA
*/


(function() {
  var U1A1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U1A1 = (function(_super) {
    __extends(U1A1, _super);

    function U1A1() {
      var _this = this;
      this.manifest = [
        {
          id: 'aspirin',
          src: 'aspirin.png'
        }, {
          id: 'bites',
          src: 'bites.png'
        }, {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'clean',
          src: 'clean.png'
        }, {
          id: 'cutknee',
          src: 'cut_knee.png'
        }, {
          id: 'fever',
          src: 'fever.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'hungry',
          src: 'hungry.png'
        }, {
          id: 'mom',
          src: 'mom.png'
        }, {
          id: 'rash',
          src: 'rash.png'
        }, {
          id: 'sorethroat',
          src: 'sore_throat.png'
        }, {
          id: 'stomachache',
          src: 'stomachache.png'
        }, {
          id: 'thirsty',
          src: 'thirsty.png'
        }, {
          id: 'toothache',
          src: 'toothache.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.btnClick = function(dispatcher, target) {
        var a, b, c, d, t;
        d = lib[dispatcher];
        t = lib[target];
        a = d.index;
        b = t.droptargets;
        c = t.currentTarget;
        console.log(a, b[c].success);
        if (a === b[c].success) {
          b[c].complete = true;
          b[c].update();
          t.currentTarget++;
        }
        if (t.currentTarget === b.length) {
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
              text: 'Read and write the correct words.',
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
          total: 12,
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
                      target: 'cutknee'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['If you have a cut on your knee,', '#rtn', 'you should clean it with', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'disinfectant'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'sorethroat'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Do you have a sore ', '#tcpt', '? You ', '#rtn', 'should take a cough drop with honey.'],
                      targets: [
                        {
                          text: 'throat'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'hungry'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['If you are ', '#tcpt', ', ', '#rtn', 'you should eat something.'],
                      targets: [
                        {
                          text: 'hungry'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'toothache'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Paco has a ', '#tcpt', '.', '#rtn', 'He should go to the dentist.'],
                      targets: [
                        {
                          text: 'toothache'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'fever'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Do you think you have a ', '#tcpt', '?', '#rtn', 'You should take your temperature!'],
                      targets: [
                        {
                          text: 'fever'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'aspirin'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['June has a headache.', '#rtn', 'She should take an ', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'aspirin'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'bites'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Mom has ant ', '#tcpt', '. She should', '#rtn', ' put some ointment on them.'],
                      targets: [
                        {
                          text: 'bites'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'stomachache'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Pablo has a ', '#tcpt', '.', '#rtn', ' He shouldn\'t eat spicy food.'],
                      targets: [
                        {
                          text: 'stomachache'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'rash'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Jeremy\'s arm is red; he has a ', '#tcpt', '.', '#rtn', 'He should go to the school nurse.'],
                      targets: [
                        {
                          text: 'rash'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'mom'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Mom says you should put on ', '#tcpt', '#rtn', 'when you go outside in the sun.'],
                      targets: [
                        {
                          text: 'sunscreen'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'clean'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Aunt Patty needs to clean the cut on her finger. ', '#rtn', 'She needs ', '#tcpt', ' balls and alcohol.'],
                      targets: [
                        {
                          text: 'cotton'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'thirsty'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Even if you\'re thirsty, you shouldn\'t', '#rtn', ' drink water that is not ', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'clean'
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
                id: 'aspirin',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'bites',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'clean',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'cutknee',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'fever',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'hungry',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'mom',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'rash',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'sorethroat',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'stomachache',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'thirsty',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'img',
                id: 'toothache',
                x: 433,
                y: 328,
                align: 'mc'
              }, {
                type: 'pcpt',
                id: 'pcpt1',
                x: 433,
                y: 510,
                font: '20px Quicksand',
                margin: 5,
                align: 'tc',
                scolor: '#F9101A'
              }, {
                type: 'btn',
                id: 'btn_1',
                x: 140,
                y: 155,
                index: 'aspirin',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'aspirin',
                      name: 'aspirin',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_2',
                x: 140,
                y: 185,
                index: 'bites',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'bites',
                      name: 'bites',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_3',
                x: 140,
                y: 215,
                index: 'clean',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'clean',
                      name: 'clean',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_4',
                x: 140,
                y: 245,
                index: 'cotton',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'cotton',
                      name: 'cotton',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_5',
                x: 140,
                y: 275,
                index: 'disinfectant',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'disinfectant',
                      name: 'disinfectant',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_6',
                x: 140,
                y: 305,
                index: 'fever',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'fever',
                      name: 'fever',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_7',
                x: 140,
                y: 335,
                index: 'hungry',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'hungry',
                      name: 'hungry',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_8',
                x: 140,
                y: 365,
                index: 'rash',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'rash',
                      name: 'rash',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_9',
                x: 140,
                y: 395,
                index: 'stomachache',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'stomachache',
                      name: 'stomachache',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_10',
                x: 140,
                y: 425,
                index: 'sunscreen',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'sunscreen',
                      name: 'sunscreen',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_11',
                x: 140,
                y: 460,
                index: 'throat',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'throat',
                      name: 'throat',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn_12',
                x: 140,
                y: 490,
                index: 'toothache',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'toothache',
                      name: 'toothache',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: '20px Quicksand'
                    }
                  }
                ]
              }
            ],
            groups: [
              {
                type: 'grp',
                id: 'grp1',
                invisible: true,
                group: ['aspirin', 'bites', 'clean', 'cutknee', 'fever', 'hungry', 'mom', 'rash', 'sorethroat', 'stomachache', 'thirsty', 'toothache']
              }
            ]
          }
        ]
      };
      U1A1.__super__.constructor.call(this);
    }

    window.U1A1 = U1A1;

    return U1A1;

  })(Oda);

}).call(this);
