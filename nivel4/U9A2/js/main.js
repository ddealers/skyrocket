/*

NEW ODA
*/


(function() {
  var U9A2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U9A2 = (function(_super) {
    __extends(U9A2, _super);

    function U9A2() {
      var _this = this;
      this.manifest = [
        {
          id: 'boy',
          src: 'boy.png'
        }, {
          id: 'boy2',
          src: 'boy2.png'
        }, {
          id: 'caja',
          src: 'caja.png'
        }, {
          id: 'c2',
          src: 'circilo_2.png'
        }, {
          id: 'c1',
          src: 'circulo_1.png'
        }, {
          id: 'control',
          src: 'control.png'
        }, {
          id: 'girl',
          src: 'girl.png'
        }, {
          id: 'horseriding',
          src: 'man.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'man',
          src: 'man.png'
        }, {
          id: 'pantalla',
          src: 'pantalla-01.png'
        }, {
          id: 's/sleepingbag',
          src: 'sleepingbag.mp3'
        }, {
          id: 's/hikingboots',
          src: 'hikingboots.mp3'
        }, {
          id: 's/backpack',
          src: 'backpack.mp3'
        }, {
          id: 's/horseriding',
          src: 'horseriding.mp3'
        }, {
          id: 's/flashlight',
          src: 'flashlight.mp3'
        }, {
          id: 's/lifejacket',
          src: 'lifejacket.mp3'
        }, {
          id: 's/fishing',
          src: 'fishing.mp3'
        }, {
          id: 's/horse',
          src: 'horse.mp3'
        }, {
          id: 's/swimming',
          src: 'swimming.mp3'
        }, {
          id: 's/rope',
          src: 'rope.mp3'
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
              text: 'Change the channels, listen and drag the correct options.',
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
                      target: 'boy2'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Oh, I can\'t eat meat or ', '#tcpt', '. ', '#rtn', 'I\'m a vegetarian.'],
                      targets: [
                        {
                          text: 'fish'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/fishing'
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'boy2'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['I\'m ', '#tcpt', ' to horses. ', '#rtn', 'They make me sneeze.'],
                      targets: [
                        {
                          text: 'allergic'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/horse'
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'man'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['My ', '#tcpt', ' is too heavy. ', '#rtn', 'Can you take some of my things?'],
                      targets: [
                        {
                          text: 'backpack'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/backpack'
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'man'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['I\'ll wait for you here. ', '#rtn', 'My ', '#tcpt', ' hurt my feet.'],
                      targets: [
                        {
                          text: 'hiking boots'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/hikingboots'
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'man'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Counselor, help! There\'s a ', '#rtn', 'spider in my ', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'sleeping bag'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/sleepingbag'
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'girl'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Oh, oh, I forgot the ', '#tcpt', ', sorry!'],
                      targets: [
                        {
                          text: 'rope'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/rope'
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'girl'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['No, that\'s okay, I\'ll read my ', '#rtn', 'book. I forgot my ', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'swimsuit'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/swimming'
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'boy2'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Sorry, my ', '#tcpt', ' is too ', '#rtn', 'small. I can\'t go on the water.'],
                      targets: [
                        {
                          text: 'lifejacket'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/lifejacket'
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'man'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Sorry, counselor, the battery ', '#rtn', 'in my ', '#tcpt', ' died.'],
                      targets: [
                        {
                          text: 'flashlight'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/flashlight'
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'horseriding'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['I can\'t go horsebackriding. ', '#rtn', 'I can\'t find my ', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'helmet'
                        }
                      ]
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/horseriding'
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
                id: 'boy2',
                x: 295,
                y: 310,
                align: 'mc'
              }, {
                type: 'img',
                id: 'man',
                x: 295,
                y: 310,
                align: 'mc'
              }, {
                type: 'img',
                id: 'girl',
                x: 295,
                y: 310,
                align: 'mc'
              }, {
                type: 'img',
                id: 'horseriding',
                x: 295,
                y: 310,
                align: 'mc'
              }, {
                type: 'img',
                id: 'boy',
                x: 650,
                y: 418,
                align: 'mc'
              }, {
                type: 'img',
                id: 'control',
                x: 170,
                y: 438,
                align: 'mc'
              }, {
                type: 'img',
                id: 'caja',
                x: 630,
                y: 240,
                align: 'mc'
              }, {
                type: 'pcpt',
                id: 'pcpt1',
                x: 505,
                y: 200,
                font: '16px Quicksand',
                margin: 1,
                align: 'tl',
                scolor: '#F9101A'
              }, {
                type: 'btn',
                id: 'btn_1',
                x: 100 + 160,
                y: 535,
                index: 'backpack',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'backpack',
                      name: 'backpack',
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
                x: 190 + 160,
                y: 535,
                index: 'rope',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'rope',
                      name: 'rope',
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
                x: 280 + 160,
                y: 535,
                index: 'flashlight',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'flashlight',
                      name: 'flashlight',
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
                x: 380 + 160,
                y: 535,
                index: 'helmet',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'helmet',
                      name: 'helmet',
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
                x: 180 + 160,
                y: 570,
                index: 'sleeping bag',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'sleeping bag',
                      name: 'sleeping bag',
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
                x: 280 + 160,
                y: 570,
                index: 'fish',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'fish',
                      name: 'fish',
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
                x: 360 + 160,
                y: 570,
                index: 'allergic',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'allergic',
                      name: 'allergic',
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
                x: 360 + 160,
                y: 500,
                index: 'swimsuit',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'swimsuit',
                      name: 'swimsuit',
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
                x: 260 + 160,
                y: 500,
                index: 'lifejacket',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'lifejacket',
                      name: 'lifejacket',
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
                x: 140 + 160,
                y: 500,
                index: 'hiking boots',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'hiking boots',
                      name: 'hiking boots',
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
                group: ['boy2', 'man', 'girl', 'horseriding']
              }
            ]
          }
        ]
      };
      U9A2.__super__.constructor.call(this);
    }

    window.U9A2 = U9A2;

    return U9A2;

  })(Oda);

}).call(this);
