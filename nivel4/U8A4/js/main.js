/*

NEW ODA
*/


(function() {
  var U8A4,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U8A4 = (function(_super) {
    __extends(U8A4, _super);

    function U8A4() {
      var _this = this;
      this.manifest = [
        {
          id: 'bridge',
          src: 'bridge.png'
        }, {
          id: 'c2',
          src: 'circilo_2.png'
        }, {
          id: 'c1',
          src: 'circulo_1.png'
        }, {
          id: 'drown',
          src: 'drown.png'
        }, {
          id: 'invisible',
          src: 'invisible.png'
        }, {
          id: 'kidnapped',
          src: 'kidnapped.png'
        }, {
          id: 'kitten',
          src: 'kitten.png'
        }, {
          id: 'pantalla',
          src: 'pantalla-01.png'
        }, {
          id: 'telepathy',
          src: 'telepathy.png'
        }, {
          id: 'thieves',
          src: 'thieves.png'
        }, {
          id: 'wind',
          src: 'wind.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'pantalla',
          src: 'pantalla-01.png'
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
              text: 'Read and choose the word.',
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
                      target: 'thieves'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'arentgoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'isntgoingto3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['The thieves', '#tcpt', 'to escape!', '#rtn', 'Ms. Strongarms is running after them.'],
                      targets: [
                        {
                          text: 'aren\'t going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'thieves'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'arentgoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoingto3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Ms. Strongarms', '#tcpt', 'catch the criminals', '#rtn', 'with her superpowers.'],
                      targets: [
                        {
                          text: 'is going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'invisible'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'arentgoingto3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Dr. Invisible', '#tcpt', 'surprise the bad men.'],
                      targets: [
                        {
                          text: 'is going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'telepathy'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'isntgoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['This man', '#tcpt', 'know what the girl is thinking.'],
                      targets: [
                        {
                          text: 'is going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'kidnapped'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'isntgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoing3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Dr. X-ray', '#tcpt', 'find the woman.'],
                      targets: [
                        {
                          text: 'is going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'drown'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'isntgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoing3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Ms. Ice', '#tcpt', 'help the boy in the river.'],
                      targets: [
                        {
                          text: 'is going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'bridge'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'arentgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['The cars', '#tcpt', 'fall from the bridge, ', '#rtn', 'because Dr. Electric is helping them!'],
                      targets: [
                        {
                          text: 'aren\'t going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'bridge'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'isntgoingto3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Dr. Electric and his assistant', '#tcpt', 'fix the bridge.'],
                      targets: [
                        {
                          text: 'are going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'kitten'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'isntgoingto3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Ms. Bluewings', '#tcpt', 'save a dog.'],
                      targets: [
                        {
                          text: 'isn\'t going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'kitten'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'arentgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Ms. Bluewings', '#tcpt', 'save a kitten.'],
                      targets: [
                        {
                          text: 'is going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'wind'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'isntgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoingto2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'isgoing3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['This superhero changes the weather.', '#rtn', 'He', '#tcpt', 'make the sun shine.'],
                      targets: [
                        {
                          text: 'is going to'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'wind'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'arentgoingto'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoing2'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'aregoingto3'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['The vegetables', '#tcpt', 'grow because the sun will shine.'],
                      targets: [
                        {
                          text: 'are going to'
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
                id: 'bridge',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'drown',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'invisible',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'kidnapped',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'kitten',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'telepathy',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'thieves',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'wind',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'pcpt',
                id: 'pcpt1',
                x: 433,
                y: 520,
                font: 'Bold 20px Quicksand',
                lineHeight: 35,
                underline: {
                  y: 0
                },
                margin: 5,
                align: 'tc',
                scolor: '#009046'
              }, {
                type: 'txt',
                id: 'txt1',
                text: '/',
                x: 316,
                y: 460,
                font: 'Bold 20px Quicksand',
                align: 'center',
                lineWidth: 250
              }, {
                type: 'txt',
                id: 'txt1',
                text: '/',
                x: 520,
                y: 460,
                font: 'Bold 20px Quicksand',
                align: 'center',
                lineWidth: 250
              }, {
                type: 'btn',
                id: 'aregoingto',
                x: 200,
                y: 460,
                index: 'are going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'are going to',
                      name: 'are going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'arentgoingto',
                x: 200,
                y: 460,
                index: 'aren\'t going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'aren\'t going to',
                      name: 'aren\'t going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'isntgoingto',
                x: 200,
                y: 460,
                index: 'isn\'t going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'isn\'t going to',
                      name: 'isn\'t going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'isgoingto',
                x: 200,
                y: 460,
                index: 'is going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'is going to',
                      name: 'is going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'isgoing',
                x: 200,
                y: 460,
                index: 'is going',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'is going',
                      name: 'is going',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'aregoing',
                x: 200,
                y: 460,
                index: 'are going',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'are going',
                      name: 'are going',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'aregoingto2',
                x: 420,
                y: 460,
                index: 'are going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'are going to',
                      name: 'are going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'arentgoingto2',
                x: 420,
                y: 460,
                index: 'aren\'t going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'aren\'t going to',
                      name: 'aren\'t going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'isntgoingto2',
                x: 420,
                y: 460,
                index: 'isn\'t going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'isn\'t going to',
                      name: 'isn\'t going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'isgoingto2',
                x: 420,
                y: 460,
                index: 'is going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'is going to',
                      name: 'is going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'isgoing2',
                x: 420,
                y: 460,
                index: 'is going',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'is going',
                      name: 'is going',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'aregoing2',
                x: 420,
                y: 460,
                index: 'are going',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'are going',
                      name: 'are going',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'aregoingto3',
                x: 620,
                y: 460,
                index: 'are going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'are going to',
                      name: 'are going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'arentgoingto3',
                x: 620,
                y: 460,
                index: 'aren\'t going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'aren\'t going to',
                      name: 'aren\'t going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'isntgoingto3',
                x: 620,
                y: 460,
                index: 'isn\'t going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'isn\'t going to',
                      name: 'isn\'t going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'isgoingto3',
                x: 620,
                y: 460,
                index: 'is going to',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'is going to',
                      name: 'is going to',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'isgoing3',
                x: 620,
                y: 460,
                index: 'is going',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'is going',
                      name: 'is going',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'aregoing3',
                x: 620,
                y: 460,
                index: 'are going',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'are going',
                      name: 'are going',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
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
                group: ['bridge', 'drown', 'invisible', 'kidnapped', 'kitten', 'telepathy', 'thieves', 'wind']
              }, {
                type: 'grp',
                id: 'grpizq',
                invisible: true,
                group: ['aregoingto', 'arentgoingto', 'isntgoingto', 'isgoingto', 'isgoing', 'aregoing']
              }, {
                type: 'grp',
                id: 'grpmid',
                invisible: true,
                group: ['aregoingto2', 'arentgoingto2', 'isntgoingto2', 'isgoingto2', 'isgoing2', 'aregoing2']
              }, {
                type: 'grp',
                id: 'grpder',
                invisible: true,
                group: ['aregoingto3', 'arentgoingto3', 'isntgoingto3', 'isgoingto3', 'isgoing3', 'aregoing3']
              }
            ]
          }
        ]
      };
      U8A4.__super__.constructor.call(this);
    }

    window.U8A4 = U8A4;

    return U8A4;

  })(Oda);

}).call(this);
