/*

NEW ODA
*/


(function() {
  var U3A3,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U3A3 = (function(_super) {
    __extends(U3A3, _super);

    function U3A3() {
      var _this = this;
      this.manifest = [
        {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'actor',
          src: 'actor.png'
        }, {
          id: 'binoculars',
          src: 'binoculars.png'
        }, {
          id: 'book',
          src: 'book.png'
        }, {
          id: 'caja',
          src: 'caja.png'
        }, {
          id: 'cake',
          src: 'cake.png'
        }, {
          id: 'cap',
          src: 'cap.png'
        }, {
          id: 'cat',
          src: 'cat.png'
        }, {
          id: 'chapulines',
          src: 'chapulines.png'
        }, {
          id: 'cycling',
          src: 'cycling.png'
        }, {
          id: 'dad',
          src: 'dad.png'
        }, {
          id: 'shark',
          src: 'shark.png'
        }, {
          id: 'sleeping',
          src: 'sleeping.png'
        }, {
          id: 'soda',
          src: 'soda.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.btnClick = function(dispatcher, target) {
        var a, b, c, d, t, verb;
        d = lib[dispatcher];
        t = lib[target];
        a = d.index;
        b = t.droptargets;
        c = t.currentTarget;
        console.log(d, t, a, b, c);
        console.log(a, b[c].success);
        if (a === b[c].success) {
          verb = prompt("Enter the correct form of " + d.index);
          if (verb === b[c].text.text) {
            b[c].complete = true;
            b[c].update();
            t.currentTarget++;
          }
          if (t.currentTarget === b.length) {
            return lib.scene.success();
          } else {
            return lib.scene.fail();
          }
        } else {
          return lib.scene.fail(false);
        }
      };
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 130,
          states: [
            {
              text: 'Choose the verb and write it in the correct form.',
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
                      target: 'chapulines'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['What was Tracy', '#tcpt', 'last night? ', '#rtn', 'Grasshoppers! It\'s a Mexican delicacy.'],
                      targets: [
                        {
                          text: 'eating',
                          success: 'eat'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'sleeping'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['At 3 p.m., the dog was', '#tcpt', '#rtn', 'under the table in the yard.'],
                      targets: [
                        {
                          text: 'sleeping',
                          success: 'sleep'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'soda'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Was he', '#tcpt', 'soda at 7 o\'clock? '],
                      targets: [
                        {
                          text: 'drinking',
                          success: 'drink'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'cat'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['At 10 a.m., the cat was', '#tcpt', 'with a ball of wool.'],
                      targets: [
                        {
                          text: 'playing',
                          success: 'play'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'cap'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['At 2 o\'clock, Jack was', '#tcpt', 'a blue cap.'],
                      targets: [
                        {
                          text: 'wearing',
                          success: 'wear'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'cycling'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['She wasn\'t', '#tcpt', 'TV at 6 p.m. ', '#rtn', 'She was riding her bike!'],
                      targets: [
                        {
                          text: 'watching',
                          success: 'watch'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'cake'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Mom wasn\'t making dinner at 4 p.m.', '#rtn', 'She was', '#tcpt', 'cookies!'],
                      targets: [
                        {
                          text: 'making',
                          success: 'make'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'shark'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['What were you', '#tcpt', 'at 5 p.m.? I was in the ', '#rtn', 'aquarium, looking at the shark.'],
                      targets: [
                        {
                          text: 'doing',
                          success: 'do'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'binoculars'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['What was Carla', '#tcpt', 'at 2 o\'clock? She ', '#rtn', 'was Observing birds with her binoculars.'],
                      targets: [
                        {
                          text: 'doing',
                          success: 'do'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'dad'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Dad was', '#tcpt', 'with Mom today. They  ', '#rtn', 'took tango classes and they are good!'],
                      targets: [
                        {
                          text: 'dancing',
                          success: 'dance'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'book'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['I was', '#tcpt', 'a great book at 7 p.m. Today. ', '#rtn', 'Let me tell you about it!'],
                      targets: [
                        {
                          text: 'reading',
                          success: 'read'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'actor'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Marty was', '#tcpt', 'in the school theater ', '#rtn', 'play at four o\'clock today. He was very funny!'],
                      targets: [
                        {
                          text: 'acting',
                          success: 'act'
                        }
                      ]
                    }
                  }
                ]
              ],
              mixed: true,
              type: 'limit',
              limit: 10
            },
            containers: [
              {
                type: 'img',
                id: 'actor',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'binoculars',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'book',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'cake',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'cap',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'cat',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'chapulines',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'cycling',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'dad',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'shark',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'sleeping',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'soda',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'caja',
                x: 640,
                y: 175
              }, {
                type: 'pcpt',
                id: 'pcpt1',
                x: 385,
                y: 510,
                font: '24px Quicksand',
                margin: 5,
                align: 'tc',
                scolor: '#F9101A'
              }, {
                type: 'btn',
                id: 'btn_1',
                x: 690,
                y: 210 - 10,
                index: 'act',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'act',
                      name: 'act',
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
                x: 690,
                y: 233 - 10,
                index: 'dance',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'dance',
                      name: 'dance',
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
                x: 690,
                y: 256 - 10,
                index: 'do',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'do',
                      name: 'do',
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
                x: 690,
                y: 279 - 10,
                index: 'drink',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'drink',
                      name: 'drink',
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
                x: 690,
                y: 302 - 10,
                index: 'eat',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'eat',
                      name: 'eat',
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
                x: 690,
                y: 325 - 10,
                index: 'make',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'make',
                      name: 'make',
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
                x: 690,
                y: 348 - 10,
                index: 'play',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'play',
                      name: 'play',
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
                x: 690,
                y: 371 - 10,
                index: 'read',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'read',
                      name: 'read',
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
                x: 690,
                y: 394 - 10,
                index: 'sleep',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'sleep',
                      name: 'sleep',
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
                x: 690,
                y: 417 - 10,
                index: 'watch',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'watch',
                      name: 'watch',
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
                x: 690,
                y: 440 - 10,
                index: 'wear',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'wear',
                      name: 'wear',
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
                group: ['actor', 'binoculars', 'book', 'cake', 'cap', 'cat', 'chapulines', 'cycling', 'dad', 'shark', 'sleeping', 'soda']
              }
            ]
          }
        ]
      };
      U3A3.__super__.constructor.call(this);
    }

    window.U3A3 = U3A3;

    return U3A3;

  })(Oda);

}).call(this);
