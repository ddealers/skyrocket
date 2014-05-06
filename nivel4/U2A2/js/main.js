/*

NEW ODA
*/


(function() {
  var U2A2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

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
          id: 'pbase',
          src: 'pieza_base.png'
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
      this.pc = 0;
      this.you = 0;
      this.onDrop = function(dispatcher, target) {
        var d, t;
        d = lib[dispatcher];
        t = target.parent;
        if (d.index === t.success) {
          if (t.name === 'p1') {
            if (lib['p7'].sprite.currentFrame === 0) {
              lib['p7'].goto(1);
            } else if (lib['p4'].sprite.currentFrame === 0) {
              lib['p4'].goto(1);
            } else {
              lib['p1'].goto(1);
            }
          } else if (t.name === 'p2') {
            if (lib['p8'].sprite.currentFrame === 0) {
              lib['p8'].goto(1);
            } else if (lib['p5'].sprite.currentFrame === 0) {
              lib['p5'].goto(1);
            } else {
              lib['p2'].goto(1);
            }
          } else if (t.name === 'p3') {
            if (lib['p9'].sprite.currentFrame === 0) {
              lib['p9'].goto(1);
            } else if (lib['p6'].sprite.currentFrame === 0) {
              lib['p6'].goto(1);
            } else {
              lib['p3'].goto(1);
            }
          }
          d.afterSuccess();
          d.disableDrag = true;
          return d2oda.methods.delay(300, function() {
            lib.scene.success();
            return _this.evaluateWin();
          });
        } else {
          return d.afterFail();
        }
      };
      this.onChoose = function(dispatcher) {
        var d;
        d = lib[dispatcher];
        if (d.index === d2oda.evaluator.success) {
          createjs.Sound.play('s/good');
          return lib.pazul.disableDrag = false;
        } else {
          if (!_this.evaluate79(2)) {
            if (!_this.evaluate46(2)) {
              _this.evaluate13(2);
            }
          }
          lib.scene.fail();
          lib.scene.nextStep();
          return _this.evaluateWin();
        }
      };
      this.evaluate13 = function(token) {
        return _this.evaluateBlanks(1, 3, token);
      };
      this.evaluate46 = function(token) {
        return _this.evaluateBlanks(4, 6, token);
      };
      this.evaluate79 = function(token) {
        return _this.evaluateBlanks(7, 9, token);
      };
      this.evaluateBlanks = function(min, max, token) {
        var blank, i, p, rand, _i;
        blank = new Array();
        for (i = _i = min; min <= max ? _i <= max : _i >= max; i = min <= max ? ++_i : --_i) {
          if (lib["p" + i]) {
            p = lib["p" + i];
            if (p.sprite.currentFrame === 0) {
              blank.push(p);
            }
          }
        }
        rand = Math.round(Math.random() * (blank.length - 1));
        if (blank.length > 0) {
          blank[rand].goto(token);
          return true;
        } else {
          return false;
        }
      };
      this.evaluateWin = function() {
        if ((_this.getFrame('p1')) === 2 && (_this.getFrame('p2')) === 2 && (_this.getFrame('p3')) === 2) {
          _this.scoreUp('pc');
        }
        if ((_this.getFrame('p4')) === 2 && (_this.getFrame('p5')) === 2 && (_this.getFrame('p6')) === 2) {
          _this.scoreUp('pc');
        }
        if ((_this.getFrame('p7')) === 2 && (_this.getFrame('p8')) === 2 && (_this.getFrame('p9')) === 2) {
          _this.scoreUp('pc');
        }
        if ((_this.getFrame('p1')) === 2 && (_this.getFrame('p4')) === 2 && (_this.getFrame('p7')) === 2) {
          _this.scoreUp('pc');
        }
        if ((_this.getFrame('p2')) === 2 && (_this.getFrame('p5')) === 2 && (_this.getFrame('p8')) === 2) {
          _this.scoreUp('pc');
        }
        if ((_this.getFrame('p3')) === 2 && (_this.getFrame('p6')) === 2 && (_this.getFrame('p9')) === 2) {
          _this.scoreUp('pc');
        }
        if ((_this.getFrame('p1')) === 2 && (_this.getFrame('p5')) === 2 && (_this.getFrame('p9')) === 2) {
          _this.scoreUp('pc');
        }
        if ((_this.getFrame('p3')) === 2 && (_this.getFrame('p5')) === 2 && (_this.getFrame('p7')) === 2) {
          _this.scoreUp('pc');
        }
        if ((_this.getFrame('p1')) === 1 && (_this.getFrame('p2')) === 1 && (_this.getFrame('p3')) === 1) {
          _this.scoreUp('you');
        }
        if ((_this.getFrame('p4')) === 1 && (_this.getFrame('p5')) === 1 && (_this.getFrame('p6')) === 1) {
          _this.scoreUp('you');
        }
        if ((_this.getFrame('p7')) === 1 && (_this.getFrame('p8')) === 1 && (_this.getFrame('p9')) === 1) {
          _this.scoreUp('you');
        }
        if ((_this.getFrame('p1')) === 1 && (_this.getFrame('p4')) === 1 && (_this.getFrame('p7')) === 1) {
          _this.scoreUp('you');
        }
        if ((_this.getFrame('p2')) === 1 && (_this.getFrame('p5')) === 1 && (_this.getFrame('p8')) === 1) {
          _this.scoreUp('you');
        }
        if ((_this.getFrame('p3')) === 1 && (_this.getFrame('p6')) === 1 && (_this.getFrame('p9')) === 1) {
          _this.scoreUp('you');
        }
        if ((_this.getFrame('p1')) === 1 && (_this.getFrame('p5')) === 1 && (_this.getFrame('p9')) === 1) {
          _this.scoreUp('you');
        }
        if ((_this.getFrame('p3')) === 1 && (_this.getFrame('p5')) === 1 && (_this.getFrame('p7')) === 1) {
          _this.scoreUp('you');
        }
        if ((_this.getFrame('p1')) !== 0 && (_this.getFrame('p2')) !== 0 && (_this.getFrame('p3')) !== 0 && (_this.getFrame('p4')) !== 0 && (_this.getFrame('p5')) !== 0 && (_this.getFrame('p6')) !== 0 && (_this.getFrame('p7')) !== 0 && (_this.getFrame('p8')) !== 0 && (_this.getFrame('p9')) !== 0) {
          return _this.reset();
        }
      };
      this.scoreUp = function(type) {
        switch (type) {
          case 'pc':
            _this.pc++;
            createjs.Sound.play('s/wrong');
            lib.tverde.update({
              text: _this.pc
            });
            break;
          case 'you':
            _this.you++;
            createjs.Sound.play('s/good');
            lib.tazul.update({
              text: _this.you
            });
        }
        if (_this.pc >= 3 || _this.you >= 3) {
          return d2oda.methods.delay(2000, function() {
            return lib.game.nextScene();
          });
        } else {
          return _this.reset();
        }
      };
      this.reset = function() {
        return d2oda.methods.delay(500, function() {
          var i, _i, _results;
          _results = [];
          for (i = _i = 1; _i <= 9; i = ++_i) {
            _results.push(lib["p" + i].goto(0));
          }
          return _results;
        });
      };
      this.getFrame = function(obj) {
        return lib[obj].sprite.currentFrame;
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
          total: 16,
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
                      success: 1
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'I used a knife',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'cut the palm leaves.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'He needed a whistle',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'making noise.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'She used binoculars',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'look for ships.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'They used the net',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'catching fish.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Use a compass',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'find your way.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Sam needs rope',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'tie the raft to the tree.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You can collect wood',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'make a fire.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Dad used the mirror',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'making fire.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'Mom used leaves',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'make a pillow.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'We collected the rain',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'drink it.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'She used a tennis ball',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'collecting water.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'They used trash bags',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'protecting themselves from the rain.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'They used rope',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'tie the planks together.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 1
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'The father used the sail',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'make a tent.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'You can use the sail',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'making clothes.'
                    }
                  }
                ], [
                  {
                    name: 'global',
                    opts: {
                      success: 2
                    }
                  }, {
                    name: 'p1',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p2',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p3',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p4',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p5',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p6',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p7',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p8',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'p9',
                    opts: {
                      success: '1',
                      complete: true
                    }
                  }, {
                    name: 'caw1',
                    opts: {
                      before: 'They used large water bottles',
                      opt1: 'to',
                      opt2: 'for',
                      after: 'making the raft.'
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
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
                type: 'txt',
                id: 'tazul',
                text: '0',
                x: 178,
                y: 275,
                font: 'Bold 24px Quicksand',
                align: 'center'
              }, {
                type: 'txt',
                id: 'tverde',
                text: '0',
                x: 182,
                y: 375,
                font: 'Bold 24px Quicksand',
                align: 'center'
              }, {
                type: 'caw',
                id: 'caw1',
                x: 400,
                y: 530,
                align: 'tc',
                target: 'global',
                "eval": this.onChoose,
                label: {
                  font: 'Bold 18px Quicksand',
                  color: '#444'
                },
                bullets: {
                  font: '18px Quicksand',
                  color: '#000'
                }
              }, {
                type: 'img',
                id: 'threeinarow',
                x: 420,
                y: 350,
                align: 'mc'
              }, {
                type: 'spr',
                id: 'p1',
                imgs: ['pbase', 'pazul', 'pverde'],
                frames: null,
                x: 278,
                y: 233
              }, {
                type: 'spr',
                id: 'p2',
                imgs: ['pbase', 'pazul', 'pverde'],
                frames: null,
                x: 380,
                y: 233
              }, {
                type: 'spr',
                id: 'p3',
                imgs: ['pbase', 'pazul', 'pverde'],
                frames: null,
                x: 482,
                y: 233
              }, {
                type: 'spr',
                id: 'p4',
                imgs: ['pbase', 'pazul', 'pverde'],
                frames: null,
                x: 278,
                y: 321
              }, {
                type: 'spr',
                id: 'p5',
                imgs: ['pbase', 'pazul', 'pverde'],
                frames: null,
                x: 380,
                y: 321
              }, {
                type: 'spr',
                id: 'p6',
                imgs: ['pbase', 'pazul', 'pverde'],
                frames: null,
                x: 482,
                y: 321
              }, {
                type: 'spr',
                id: 'p7',
                imgs: ['pbase', 'pazul', 'pverde'],
                frames: null,
                x: 278,
                y: 409
              }, {
                type: 'spr',
                id: 'p8',
                imgs: ['pbase', 'pazul', 'pverde'],
                frames: null,
                x: 380,
                y: 409
              }, {
                type: 'spr',
                id: 'p9',
                imgs: ['pbase', 'pazul', 'pverde'],
                frames: null,
                x: 482,
                y: 409
              }, {
                type: 'drg',
                id: 'pazul',
                x: 107,
                y: 287,
                align: 'mc',
                disableDrag: true,
                index: '1',
                target: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
                "eval": this.onDrop,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'img',
                id: 'binoculars',
                x: 670,
                y: 200,
                align: 'mc'
              }, {
                type: 'img',
                id: 'compass',
                x: 670,
                y: 270,
                align: 'mc'
              }, {
                type: 'img',
                id: 'knife',
                x: 670,
                y: 340,
                align: 'mc'
              }, {
                type: 'img',
                id: 'string',
                x: 670,
                y: 410,
                align: 'mc'
              }, {
                type: 'img',
                id: 'whistle',
                x: 670,
                y: 480,
                align: 'mc'
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
