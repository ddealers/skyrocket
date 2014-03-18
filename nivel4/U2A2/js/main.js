/*

NEW ODA
*/


(function() {
  var U2A2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  U2A2 = (function(_super) {
    __extends(U2A2, _super);

    function U2A2() {
      var _this = this;
      this.manifest = [
        {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'mazul',
          src: 'azul.png'
        }, {
          id: 'binoculars',
          src: 'binoculars.png'
        }, {
          id: 'compass',
          src: 'compass.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'knife',
          src: 'knife.png'
        }, {
          id: 'pazul',
          src: 'pieza_azul.png'
        }, {
          id: 'pverde',
          src: 'pieza_verde.png'
        }, {
          id: 'string',
          src: 'string.png'
        }, {
          id: 'threeinarow',
          src: 'Three_in_a_Row.png'
        }, {
          id: 'mverde',
          src: 'verde.png'
        }, {
          id: 'whistle',
          src: 'whistle.png'
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
              text: 'Choose the correct option. Then drag a token to beat the computer.',
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
          total: 0,
          aimg: 'c1',
          acolor: '#333',
          bimg: 'c2',
          bcolor: '#333'
        },
        scenes: [
          {
            answers: {
              collection: [],
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                id: 'threeinarow',
                x: 420,
                y: 350,
                align: 'mc'
              }, {
                type: 'img',
                id: 'mazul',
                x: 80,
                y: 250
              }, {
                type: 'img',
                id: 'mverde',
                x: 80,
                y: 350
              }, {
                type: 'drg',
                id: 'binoculars',
                x: 670,
                y: 200,
                align: 'mc',
                index: 'binoculars',
                target: [],
                "eval": this.onDrop,
                afterSuccess: 'inplace',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'compass',
                x: 670,
                y: 270,
                align: 'mc',
                index: 'compass',
                target: [],
                "eval": this.onDrop,
                afterSuccess: 'inplace',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'knife',
                x: 670,
                y: 340,
                align: 'mc',
                index: 'knife',
                target: [],
                "eval": this.onDrop,
                afterSuccess: 'inplace',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'string',
                x: 670,
                y: 410,
                align: 'mc',
                index: 'string',
                target: [],
                "eval": this.onDrop,
                afterSuccess: 'inplace',
                afterFail: 'return'
              }, {
                type: 'drg',
                id: 'whistle',
                x: 670,
                y: 480,
                align: 'mc',
                index: 'whistle',
                target: [],
                "eval": this.onDrop,
                afterSuccess: 'inplace',
                afterFail: 'return'
              }
            ],
            groups: []
          }
        ]
      };
      U2A2.__super__.constructor.call(this);
    }

    window.U2A2 = U2A2;

    return U2A2;

  })(Oda);

}).call(this);
