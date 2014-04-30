/*

NEW ODA
*/


(function() {
  var U8A2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  U8A2 = (function(_super) {
    __extends(U8A2, _super);

    function U8A2() {
      var _this = this;
      this.manifest = [
        {
          id: 'baby',
          src: 'baby.png'
        }, {
          id: 'bus',
          src: 'bus.png'
        }, {
          id: 'car1',
          src: 'car1.png'
        }, {
          id: 'car2',
          src: 'car2.png'
        }, {
          id: 'c2',
          src: 'circilo_2.png'
        }, {
          id: 'c1',
          src: 'circulo_1.png'
        }, {
          id: 'explode',
          src: 'explode.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'ladder',
          src: 'ladder.png'
        }, {
          id: 'lineas',
          src: 'lineas.png'
        }, {
          id: 'pantalla',
          src: 'pantalla-01.png'
        }, {
          id: 'swimmer',
          src: 'swimmer.png'
        }, {
          id: 'swing',
          src: 'swing.png'
        }, {
          id: 'theater',
          src: 'theater.png'
        }, {
          id: 'wolfman',
          src: 'wolfman.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.onkeydown = function(e) {
        var fail, keycode, pattern, str, targ, target, word, _i, _len, _ref, _ref1;
        e.preventDefault();
        e.stopPropagation();
        word = '';
        keycode = e.keyCode || e.which;
        console.log(keycode);
        pattern = /[a-z+']/i;
        str = String.fromCharCode(keycode);
        target = lib[window.target].getEnabledTarget();
        targ = target.success.split('||');
        console.log(targ);
        if (keycode === 8) {
          return target.write('<-');
        } else if (keycode === 13) {
          fail = false;
          console.log(target.write());
          _ref = lib[window.target].droptargets;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            target = _ref[_i];
            if (_ref1 = target.write(), __indexOf.call(targ, _ref1) >= 0) {
              target.complete = true;
            } else {
              fail = true;
              lib.scene.fail();
            }
          }
          if (!fail) {
            return lib.scene.success(true, false);
          }
        } else if (keycode === 32) {
          return target.write('-');
        } else if (pattern.test(str)) {
          return target.write(str.toLowerCase());
        }
      };
      this.btnClick = function(dispatcher, target) {
        /*
        			d = lib[dispatcher]
        			t = lib[target]
        			a = d.index
        			b = t.droptargets
        			c = t.currentTarget
        			console.log d,t,a,b,c
        			console.log a, b[c].success
        			if a is b[c].success
        				verb = prompt "Enter the correct form of #{d.index}"
        				if verb is b[c].text.text
        					b[c].complete = true
        					b[c].update()
        					t.currentTarget++
        				if t.currentTarget is b.length
        					lib.scene.success()
        				else
        					lib.scene.fail()
        			else
        				lib.scene.fail false
        */

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
                    name: 'window',
                    opts: {
                      keydown: this.onkeydown,
                      target: 'pcpt1'
                    }
                  }, {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'car1'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Oh no! The car', '#tcpt', 'the children!'],
                      targets: [
                        {
                          text: 'is going to hit',
                          success: 'is going to hit||\'s going to hit'
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
                      target: 'explode'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Oh no, the gas truck', '#tcpt', '!'],
                      targets: [
                        {
                          text: 'is going to explode',
                          success: 'is going to explode||\'s going to explode'
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
                      target: 'wolfman'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Help! The wolf man', '#tcpt', '#rtn', ' with the baby!'],
                      targets: [
                        {
                          text: 'is going to escape',
                          success: 'is going to escape||\'s going to escape'
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
                      target: 'baby'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Help! The baby', '#tcpt', '!'],
                      targets: [
                        {
                          text: 'is going to fall',
                          success: 'is going to fall||\'s going to fall'
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
                      target: 'bus'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Do something! The bus', '#tcpt', 'into the tree!'],
                      targets: [
                        {
                          text: 'is going to crash',
                          success: 'is going to crash||\'s going to crash'
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
                      target: 'swing'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Oh no! The swing', '#tcpt', 'and then', '#rtn', ' the child is going to fall.'],
                      targets: [
                        {
                          text: 'is going to break',
                          success: 'is going to break||\'s going to break'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'car2'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Hurry! The car', '#tcpt', 'the girl!'],
                      targets: [
                        {
                          text: 'is going to hit',
                          success: 'is going to hit||\'s going to hit'
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
                      target: 'theater'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Look! There are many clouds. It', '#tcpt', '.'],
                      targets: [
                        {
                          text: 'is going to rain',
                          success: 'is going to rain||\'s going to rain'
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
                      target: 'ladder'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Quickly! The man on the ladder', '#tcpt', '!'],
                      targets: [
                        {
                          text: 'is going to rain',
                          success: 'is going to rain||\'s going to rain'
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
                      target: 'swimmer'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Look! The man', '#tcpt', 'the swimmer. Good!'],
                      targets: [
                        {
                          text: 'is going to help',
                          success: 'is going to help||\'s going to help'
                        }
                      ]
                    }
                  }
                ]
              ],
              mixed: false,
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                id: 'car1',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'explode',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'wolfman',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'baby',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'bus',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'swing',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'car2',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'theater',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'ladder',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'img',
                id: 'swimmer',
                x: 380,
                y: 338,
                align: 'mc'
              }, {
                type: 'pcpt',
                id: 'pcpt1',
                x: 450,
                y: 510,
                font: '24px Quicksand',
                underline: {
                  y: 0
                },
                margin: 5,
                align: 'tc',
                scolor: '#009046'
              }, {
                type: 'btn',
                id: 'btn_1',
                x: 690,
                y: 220,
                index: 'break',
                target: 'pcpt1',
                noHover: true,
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'break',
                      name: 'break',
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
                y: 250,
                index: 'crash',
                target: 'pcpt1',
                noHover: true,
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'crash',
                      name: 'crash',
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
                y: 280,
                index: 'escape',
                target: 'pcpt1',
                noHover: true,
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'escape',
                      name: 'escape',
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
                y: 310,
                index: 'explode',
                target: 'pcpt1',
                noHover: true,
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'explode',
                      name: 'explode',
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
                y: 340,
                index: 'fall',
                target: 'pcpt1',
                noHover: true,
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'fall',
                      name: 'fall',
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
                y: 370,
                index: 'help',
                target: 'pcpt1',
                noHover: true,
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'help',
                      name: 'help',
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
                y: 400,
                index: 'hit',
                target: 'pcpt1',
                noHover: true,
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'hit',
                      name: 'hit',
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
                y: 430,
                index: 'rain',
                target: 'pcpt1',
                noHover: true,
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'rain',
                      name: 'rain',
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
                group: ['car1', 'explode', 'wolfman', 'baby', 'bus', 'swing', 'car2', 'theater', 'ladder', 'swimmer']
              }
            ]
          }
        ]
      };
      U8A2.__super__.constructor.call(this);
    }

    window.U8A2 = U8A2;

    return U8A2;

  })(Oda);

}).call(this);
