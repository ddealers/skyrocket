/*

NEW ODA
*/


(function() {
  var U8A3,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  U8A3 = (function(_super) {
    __extends(U8A3, _super);

    function U8A3() {
      var _this = this;
      this.manifest = [
        {
          id: 'c1',
          src: 'circilo_2.png'
        }, {
          id: 'c2',
          src: 'circulo_1.png'
        }, {
          id: '1',
          src: 'castle.png'
        }, {
          id: '2',
          src: 'swin.png'
        }, {
          id: '3',
          src: 'glasses.png'
        }, {
          id: '4',
          src: 'shoes.png'
        }, {
          id: '5',
          src: 'fly.png'
        }, {
          id: '6',
          src: 'strong.png'
        }, {
          id: '7',
          src: 'freeze.png'
        }, {
          id: '8',
          src: 'gloves.png'
        }, {
          id: 'zone1',
          src: 'fishboy.png'
        }, {
          id: 'zone2',
          src: 'zapman.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'pantalla',
          src: 'pantalla-01.png'
        }, {
          id: 'repeat',
          src: 'repeat.png'
        }, {
          id: 's/superheroes',
          src: 'superheroes.mp3'
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
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 130,
          states: [
            {
              text: 'Listen, look and drag the pictures to the correct column.',
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
                    name: 'zone2',
                    opts: {
                      success: ['1', '2', '3', '4']
                    }
                  }, {
                    name: 'zone1',
                    opts: {
                      success: ['5', '7', '6', '8']
                    }
                  }, {
                    name: 'snd',
                    opts: {
                      id: 's/superheroes'
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'idc',
                id: 'zone2',
                x: 411,
                y: 340,
                align: 'mc'
              }, {
                type: 'idc',
                id: 'zone1',
                x: 170,
                y: 340,
                align: 'mc'
              }, {
                type: 'drg',
                id: '1',
                x: 620,
                y: 220,
                align: 'mc',
                index: '1',
                target: ['zone2', 'zone1'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: '2',
                x: 700,
                y: 300,
                align: 'mc',
                index: '2',
                target: ['zone2', 'zone1'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: '3',
                x: 700,
                y: 220,
                align: 'mc',
                index: '3',
                target: ['zone2', 'zone1'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: '4',
                x: 620,
                y: 460,
                align: 'mc',
                index: '4',
                target: ['zone2', 'zone1'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: '5',
                x: 700,
                y: 380,
                align: 'mc',
                index: '5',
                target: ['zone2', 'zone1'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: '6',
                x: 700,
                y: 460,
                align: 'mc',
                index: '6',
                target: ['zone2', 'zone1'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: '7',
                x: 620,
                y: 300,
                align: 'mc',
                index: '7',
                target: ['zone2', 'zone1'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: '8',
                x: 620,
                y: 380,
                align: 'mc',
                index: '8',
                target: ['zone2', 'zone1'],
                "eval": this.onDrop,
                click: this.onClick,
                afterSuccess: 'drop',
                afterFail: 'return'
              }, {
                type: 'btn',
                id: 'repeat',
                x: 710,
                y: 540,
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
      U8A3.__super__.constructor.call(this);
    }

    window.U8A3 = U8A3;

    return U8A3;

  })(Oda);

}).call(this);
