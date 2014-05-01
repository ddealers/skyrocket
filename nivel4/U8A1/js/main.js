/*

NEW ODA
*/


(function() {
  var U8A1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U8A1 = (function(_super) {
    __extends(U8A1, _super);

    function U8A1() {
      this.manifest = [
        {
          id: 'c2',
          src: 'circilo_2.png'
        }, {
          id: 'c1',
          src: 'circulo_1.png'
        }, {
          id: 'caja',
          src: 'caja.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'pantalla',
          src: 'pantalla.png'
        }, {
          id: 'superhero',
          src: 'superhero.png'
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
        var a, b, complete;
        a = lib[dispatcher];
        b = target;
        complete = true;
        if (a.index === b.success) {
          b.update();
          a.afterSuccess();
          target.complete = true;
          return lib.scene.success(true, false);
        } else {
          a.afterFail();
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
              text: 'Drag the words to complete the text.',
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
                    name: 'pcct1',
                    opts: {
                      pattern: ['Superheroes have amazing powers. Some can see through walls with their', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'x-ray vision',
                          maxlenght: 'xrayvision'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'electricity'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'xray'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'telepathy'
                    }
                  }
                ], [
                  {
                    name: 'pcct2',
                    opts: {
                      pattern: ['Some can fly through the air and they don\'t even have', '#tcpt', '!'],
                      targets: [
                        {
                          text: 'wings'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'eyes'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'legs'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'wings'
                    }
                  }
                ], [
                  {
                    name: 'pcct3',
                    opts: {
                      pattern: ['Some live in the sea. They can speak under water and', '#rtn', '#tcpt', 'with all the ocean\'s creatures.'],
                      targets: [
                        {
                          text: 'communicate'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'walk'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'communicate'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'dance'
                    }
                  }
                ], [
                  {
                    name: 'pcct4',
                    opts: {
                      pattern: ['Others have special', '#tcpt', 'that protects them from all weapons.'],
                      targets: [
                        {
                          text: 'armor',
                          maxlenght: 'glasses'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'hats'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'glasses'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'armor'
                    }
                  }
                ], [
                  {
                    name: 'pcct5',
                    opts: {
                      pattern: ['A lot of superheroes wear', '#tcpt', 'to hide their true identity.'],
                      targets: [
                        {
                          text: 'masks',
                          maxlenght: 'dresses'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'dresses'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'masks'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'armor'
                    }
                  }
                ], [
                  {
                    name: 'pcct6',
                    opts: {
                      pattern: ['Superman wears a cape; it can', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'make him fly',
                          maxlenght: 'helphimreadminds'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'makehiminvisible'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'makehimfly'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'helphimreadminds'
                    }
                  }
                ], [
                  {
                    name: 'pcct7',
                    opts: {
                      pattern: ['Mr. Ice can', '#tcpt', 'objects. He turns them into ice using his mind!'],
                      targets: [
                        {
                          text: 'freeze',
                          maxlenght: 'freeze'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'melt'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'freeze'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'heat'
                    }
                  }
                ], [
                  {
                    name: 'pcct8',
                    opts: {
                      pattern: ['Mr. Superhands wears special', '#tcpt', '. Everything he touches can fly!'],
                      targets: [
                        {
                          text: 'gloves',
                          maxlenght: 'glasses'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'gloves'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'glasses'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'shoes'
                    }
                  }
                ], [
                  {
                    name: 'pcct9',
                    opts: {
                      pattern: ['If I could have a superpower, I would read people\'s', '#tcpt', 'to know what they think!'],
                      targets: [
                        {
                          text: 'minds',
                          maxlenght: 'glasses'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'books'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'glasses'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'minds'
                    }
                  }
                ], [
                  {
                    name: 'pcct10',
                    opts: {
                      pattern: ['Superheroes help people. They don\'t use weapons; they use their', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'powers'
                        }
                      ]
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'eyes'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'powers'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'strong'
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
                x: 154,
                y: 510
              }, {
                type: 'img',
                id: 'superhero',
                x: 230,
                y: 190
              }, {
                type: 'pcpt',
                id: 'pcct1',
                x: 80,
                y: 190,
                uwidth: 70,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'pcpt',
                id: 'pcct2',
                x: 80,
                y: 213,
                uwidth: 70,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'pcpt',
                id: 'pcct3',
                x: 80,
                y: 236,
                uwidth: 80,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'pcpt',
                id: 'pcct4',
                x: 80,
                y: 279,
                uwidth: 70,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'pcpt',
                id: 'pcct5',
                x: 80,
                y: 302,
                uwidth: 70,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'pcpt',
                id: 'pcct6',
                x: 80,
                y: 325,
                uwidth: 70,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'pcpt',
                id: 'pcct7',
                x: 80,
                y: 348,
                uwidth: 70,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'pcpt',
                id: 'pcct8',
                x: 80,
                y: 371,
                uwidth: 70,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'pcpt',
                id: 'pcct9',
                x: 80,
                y: 394,
                uwidth: 70,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'pcpt',
                id: 'pcct10',
                x: 80,
                y: 417,
                uwidth: 70,
                font: '12px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                scolor: '#009046',
                stroke: 2
              }, {
                type: 'ldrg',
                id: 'electricity',
                x: 220,
                y: 530,
                index: 'electricity',
                text: 'electricity',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'eyes',
                x: 220,
                y: 530,
                index: 'eyes',
                text: 'eyes',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'walk',
                x: 220,
                y: 530,
                index: 'walk',
                text: 'walk',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'hats',
                x: 220,
                y: 530,
                index: 'hats',
                text: 'hats',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'dresses',
                x: 220,
                y: 530,
                index: 'dresses',
                text: 'dresses',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'makehiminvisible',
                x: 200,
                y: 530,
                index: 'make him invisible',
                text: 'make him invisible',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'melt',
                x: 220,
                y: 530,
                index: 'melt',
                text: 'melt',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'gloves',
                x: 220,
                y: 530,
                index: 'gloves',
                text: 'gloves',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'books',
                x: 220,
                y: 530,
                index: 'books',
                text: 'books',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'xray',
                x: 380,
                y: 530,
                index: 'x-ray vision',
                text: 'x-ray vision',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'legs',
                x: 380,
                y: 530,
                index: 'legs',
                text: 'legs',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'communicate',
                x: 380,
                y: 530,
                index: 'communicate',
                text: 'communicate',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'glasses',
                x: 380,
                y: 530,
                index: 'glasses',
                text: 'glasses',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'masks',
                x: 380,
                y: 530,
                index: 'masks',
                text: 'masks',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'makehimfly',
                x: 380,
                y: 530,
                index: 'make him fly',
                text: 'make him fly',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'freeze',
                x: 380,
                y: 530,
                index: 'freeze',
                text: 'freeze',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'powers',
                x: 380,
                y: 530,
                index: 'powers',
                text: 'powers',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'telepathy',
                x: 560,
                y: 530,
                index: 'telepathy',
                text: 'telepathy',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'wings',
                x: 560,
                y: 530,
                index: 'wings',
                text: 'wings',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'dance',
                x: 560,
                y: 530,
                index: 'dance',
                text: 'dance',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'armor',
                x: 560,
                y: 530,
                index: 'armor',
                text: 'armor',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'helphimreadminds',
                x: 520,
                y: 530,
                index: 'help him read minds',
                text: 'help him read minds',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'heat',
                x: 560,
                y: 530,
                index: 'heat',
                text: 'heat',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'shoes',
                x: 560,
                y: 530,
                index: 'shoes',
                text: 'shoes',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'minds',
                x: 560,
                y: 530,
                index: 'minds',
                text: 'minds',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'strong',
                x: 560,
                y: 530,
                index: 'strong',
                text: 'strong',
                font: '15px Quicksand',
                color: '#333',
                target: ['pcct1', 'pcct2', 'pcct3', 'pcct4', 'pcct5', 'pcct6', 'pcct7', 'pcct8', 'pcct9', 'pcct10'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }
            ],
            groups: [
              {
                type: 'grp',
                id: 'grpizq',
                invisible: true,
                group: ['electricity', 'eyes', 'walk', 'hats', 'dresses', 'makehiminvisible', 'melt', 'gloves', 'books']
              }, {
                type: 'grp',
                id: 'grpmid',
                invisible: true,
                group: ['xray', 'legs', 'communicate', 'glasses', 'masks', 'makehimfly', 'freeze', 'powers']
              }, {
                type: 'grp',
                id: 'grpder',
                invisible: true,
                group: ['telepathy', 'wings', 'dance', 'armor', 'helphimreadminds', 'heat', 'shoes', 'minds', 'strong']
              }
            ]
          }
        ]
      };
      U8A1.__super__.constructor.call(this);
    }

    window.U8A1 = U8A1;

    return U8A1;

  })(Oda);

}).call(this);
