/*

NEW ODA
*/


(function() {
  var U6A1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U6A1 = (function(_super) {
    __extends(U6A1, _super);

    function U6A1() {
      this.manifest = [
        {
          id: 'banjo',
          src: 'banjo.png'
        }, {
          id: 'caja',
          src: 'caja_1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'c1',
          src: 'cirulo1.png'
        }, {
          id: 'bass',
          src: 'clarinet.png'
        }, {
          id: 'clarinet',
          src: 'clarinet.png'
        }, {
          id: 'comedian',
          src: 'comedian.png'
        }, {
          id: 'dancers',
          src: 'dancers.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'jazzband',
          src: 'jazz_band.png'
        }, {
          id: 'musician',
          src: 'musician.png'
        }, {
          id: 'pantalla',
          src: 'n4_U6_A1-01.png'
        }, {
          id: 'painter',
          src: 'painter.png'
        }, {
          id: 'piano',
          src: 'piano.png'
        }, {
          id: 'repeat',
          src: 'repeat.png'
        }, {
          id: 'saxophone',
          src: 'saxophone.png'
        }, {
          id: 'sculptor',
          src: 'sculptor.png'
        }, {
          id: 'singers',
          src: 'singers.png'
        }, {
          id: 'trombone',
          src: 'trombone.png'
        }, {
          id: 'trumpet',
          src: 'trumpet.png'
        }, {
          id: 'tuba',
          src: 'tuba.png'
        }, {
          id: 's/banjo',
          src: 'banjo.mp3'
        }, {
          id: 's/bass',
          src: 'bass.mp3'
        }, {
          id: 's/clarinet',
          src: 'clarinet.mp3'
        }, {
          id: 's/comedian',
          src: 'comedian.mp3'
        }, {
          id: 's/dancers',
          src: 'dancers.mp3'
        }, {
          id: 's/jazzband',
          src: 'jazzband.mp3'
        }, {
          id: 's/lista',
          src: 'lista.txt'
        }, {
          id: 's/musician',
          src: 'musician.mp3'
        }, {
          id: 's/painter',
          src: 'painter.mp3'
        }, {
          id: 's/piano',
          src: 'piano.mp3'
        }, {
          id: 's/saxophone',
          src: 'saxophone.mp3'
        }, {
          id: 's/sculptor',
          src: 'sculptor.mp3'
        }, {
          id: 's/singers',
          src: 'singers.mp3'
        }, {
          id: 's/trombone',
          src: 'trombone.mp3'
        }, {
          id: 's/trumpet',
          src: 'trumpet.mp3'
        }, {
          id: 's/tuba',
          src: 'tuba.mp3'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.evaluateGlobal01 = function(dispatcher, target) {
        console.log(lib[dispatcher].index, target.opts);
        if (lib[dispatcher].index === this.success) {
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
              text: 'Memorize the cards. Then listen and choose the correct one.',
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
                    name: 'global',
                    opts: {
                      success: 'banjo'
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/banjo'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 'clarinet'
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/clarinet'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 'trumpet'
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/trumpet'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 'trombone'
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/trombone'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 'piano'
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/piano'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 'tuba'
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/tuba'
                    }
                  }
                ]
              ],
              mixed: true,
              type: 'steps'
            },
            containers: [
              {
                type: 'btn',
                id: 'btn1',
                x: 250,
                y: 260,
                index: 'banjo',
                target: 'global',
                "eval": 'global_03',
                states: [
                  {
                    img: {
                      name: 'caja',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }, {
                    img: {
                      name: 'banjo',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    },
                    removeListeners: true
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn2',
                x: 450,
                y: 260,
                index: 'clarinet',
                target: 'global',
                "eval": 'global_03',
                states: [
                  {
                    img: {
                      name: 'caja',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }, {
                    img: {
                      name: 'clarinet',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    },
                    removeListeners: true
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn3',
                x: 650,
                y: 260,
                index: 'trumpet',
                target: 'global',
                "eval": 'global_03',
                states: [
                  {
                    img: {
                      name: 'caja',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }, {
                    img: {
                      name: 'trumpet',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    },
                    removeListeners: true
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn4',
                x: 250,
                y: 420,
                index: 'trombone',
                target: 'global',
                "eval": 'global_03',
                states: [
                  {
                    img: {
                      name: 'caja',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }, {
                    img: {
                      name: 'trombone',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    },
                    removeListeners: true
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn5',
                x: 450,
                y: 420,
                index: 'piano',
                target: 'global',
                "eval": 'global_03',
                states: [
                  {
                    img: {
                      name: 'caja',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }, {
                    img: {
                      name: 'piano',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    },
                    removeListeners: true
                  }
                ]
              }, {
                type: 'btn',
                id: 'btn6',
                x: 650,
                y: 420,
                index: 'tuba',
                target: 'global',
                "eval": 'global_03',
                states: [
                  {
                    img: {
                      name: 'caja',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }, {
                    img: {
                      name: 'tuba',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    },
                    removeListeners: true
                  }
                ]
              }
            ],
            groups: []
          }
        ]
      };
      U6A1.__super__.constructor.call(this);
    }

    window.U6A1 = U6A1;

    return U6A1;

  })(Oda);

}).call(this);
