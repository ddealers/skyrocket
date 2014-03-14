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
          id: 'compass',
          src: 'compass.png'
        }, {
          id: 'globes',
          src: 'globes.png'
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
          id: 'winter',
          src: 'winter.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.onDrop = function(dispatcher, target) {
        var a, b, d, t;
        d = lib[dispatcher];
        t = target.parent;
        a = d.index;
        b = t.success;
        console.log(d, t);
        if (__indexOf.call(t.success, a) >= 0) {
          t.success.remove(a);
          d.afterSuccess();
          lib.scene.success();
          return TweenLite.to(d, 0.3, {
            scaleX: 0.7,
            scaleY: 0.7
          });
        } else {
          lib.scene.fail();
          return d.afterFail();
        }
      };
      this.onClick = function(dispatcher) {
        var d;
        d = lib[dispatcher];
        return createjs.Sound.play(d.index);
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
                    name: 'winter',
                    opts: {
                      success: ['b', 'c', 'e', 'f']
                    }
                  }, {
                    name: 'summer',
                    opts: {
                      success: ['a', 'd']
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
