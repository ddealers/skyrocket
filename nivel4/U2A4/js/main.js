/*

NEW ODA
*/


(function() {
  var U1A3,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  U1A3 = (function(_super) {
    __extends(U1A3, _super);

    function U1A3() {
      var _this = this;
      this.manifest = [
        {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'artposters',
          src: 'art_posters.png'
        }, {
          id: 'camera',
          src: 'camera.png'
        }, {
          id: 'compass',
          src: 'compass.png'
        }, {
          id: 'flipflops',
          src: 'flip_flops.png'
        }, {
          id: 'globes',
          src: 'globes.png'
        }, {
          id: 'guidebook',
          src: 'guide_book.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'hikingboots',
          src: 'hiking_boots.png'
        }, {
          id: 'map',
          src: 'map.png'
        }, {
          id: 'parasol',
          src: 'parasol.png'
        }, {
          id: 'repeat',
          src: 'repeat.png'
        }, {
          id: 'skigoggles',
          src: 'ski_goggles.png'
        }, {
          id: 'skihat',
          src: 'ski_hat.png'
        }, {
          id: 'summer',
          src: 'summer.png'
        }, {
          id: 'sunscreen',
          src: 'sunscreen.png'
        }, {
          id: 'beach',
          src: 'the_beach.png'
        }, {
          id: 'city',
          src: 'the_city.png'
        }, {
          id: 'winter',
          src: 'winter.png'
        }, {
          id: 's/1',
          src: '1.mp3'
        }, {
          id: 's/2',
          src: '2.mp3'
        }, {
          id: 's/3',
          src: '3.mp3'
        }, {
          id: 's/4',
          src: '4.mp3'
        }, {
          id: 's/5',
          src: '5.mp3'
        }, {
          id: 's/6',
          src: '6.mp3'
        }, {
          id: 's/a',
          src: 'a.mp3'
        }, {
          id: 's/b',
          src: 'b.mp3'
        }, {
          id: 's/c',
          src: 'c.mp3'
        }, {
          id: 's/d',
          src: 'd.mp3'
        }, {
          id: 's/e',
          src: 'e.mp3'
        }, {
          id: 's/f',
          src: 'f.mp3'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.onDrop = function(dispatcher, target) {
        var a, b, d, failed, t;
        failed = false;
        d = lib[dispatcher];
        t = target.parent;
        a = d.index;
        b = t.success;
        if (__indexOf.call(t.success, a) >= 0) {
          t.success.remove(a);
          d.afterSuccess();
          lib.scene.success();
          return TweenLite.to(d, 0.3, {
            scaleX: 0.7,
            scaleY: 0.7
          });
        } else {
          d.afterFail();
          return lib.scene.fail();
        }
      };
      this.onClick = function(dispatcher) {
        var d;
        d = lib[dispatcher];
        if (d.dragged) {
          d.dragged = false;
          return;
        }
        lib.scene.snd = "s/" + d.index;
        createjs.Sound.stop();
        return createjs.Sound.play(lib.scene.snd);
      };
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 130,
          states: [
            {
              text: 'Listen, look and drag to the correct box.',
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
                    name: 'beach',
                    opts: {
                      success: ['1', '4', '5']
                    }
                  }, {
                    name: 'city',
                    opts: {
                      success: ['2', '3', '6']
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'idc',
                id: 'beach',
                x: 310,
                y: 360,
                align: 'mc'
              }, {
                type: 'idc',
                id: 'city',
                x: 525,
                y: 360,
                align: 'mc'
              }, {
                type: 'drg',
                id: 'sunscreen',
                x: 100,
                y: 250,
                align: 'mc',
                index: '1',
                target: ['beach', 'city'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'guidebook',
                x: 100,
                y: 350,
                align: 'mc',
                index: '2',
                target: ['beach', 'city'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'camera',
                x: 100,
                y: 450,
                align: 'mc',
                index: '3',
                target: ['beach', 'city'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'parasol',
                x: 720,
                y: 250,
                align: 'mc',
                index: '4',
                target: ['beach', 'city'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'flipflops',
                x: 720,
                y: 350,
                align: 'mc',
                index: '5',
                target: ['beach', 'city'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'artposters',
                x: 720,
                y: 450,
                align: 'mc',
                index: '6',
                target: ['beach', 'city'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'btn',
                id: 'repeat',
                x: 400,
                y: 530,
                isRepeat: true,
                states: [
                  {
                    img: {
                      name: 'repeat',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }
            ],
            groups: []
          }, {
            answers: {
              collection: [
                [
                  {
                    name: 'winter',
                    opts: {
                      success: ['b', 'e', 'f']
                    }
                  }, {
                    name: 'summer',
                    opts: {
                      success: ['a', 'c', 'd']
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'idc',
                id: 'winter',
                x: 300,
                y: 330,
                align: 'mc'
              }, {
                type: 'idc',
                id: 'summer',
                x: 545,
                y: 330,
                align: 'mc'
              }, {
                type: 'drg',
                id: 'map',
                x: 100,
                y: 250,
                align: 'mc',
                index: 'a',
                target: ['winter', 'summer'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'globes',
                x: 100,
                y: 350,
                align: 'mc',
                index: 'b',
                target: ['winter', 'summer'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'hikingboots',
                x: 100,
                y: 450,
                align: 'mc',
                index: 'c',
                target: ['winter', 'summer'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'compass',
                x: 720,
                y: 250,
                align: 'mc',
                index: 'd',
                target: ['winter', 'summer'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'skihat',
                x: 720,
                y: 350,
                align: 'mc',
                index: 'e',
                target: ['winter', 'summer'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'skigoggles',
                x: 720,
                y: 450,
                align: 'mc',
                index: 'f',
                target: ['winter', 'summer'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'btn',
                id: 'repeat',
                x: 400,
                y: 530,
                isRepeat: true,
                states: [
                  {
                    img: {
                      name: 'repeat',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }
            ],
            groups: []
          }
        ]
      };
      U1A3.__super__.constructor.call(this);
    }

    window.U1A3 = U1A3;

    return U1A3;

  })(Oda);

}).call(this);
