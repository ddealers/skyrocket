/*

NEW ODA
*/


(function() {
  var U9A4,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U9A4 = (function(_super) {
    __extends(U9A4, _super);

    function U9A4() {
      var _this = this;
      this.manifest = [
        {
          id: 'c1',
          src: 'circulo_1.png'
        }, {
          id: 'c2',
          src: 'circilo_2.png'
        }, {
          id: 'mazul',
          src: 'azul.png'
        }, {
          id: '1',
          src: '1.png'
        }, {
          id: '2',
          src: '2.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: '3',
          src: '3.png'
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
          id: '4',
          src: '4.png'
        }, {
          id: 'threeinarow',
          src: 'Three_in_a_Row.png'
        }, {
          id: 'mverde',
          src: 'verde.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.pc = 0;
      this.you = 0;
      this.canDrop = false;
      this.onDrop = function(dispatcher, target) {
        var d, p, t, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
        d = lib[dispatcher];
        t = target.parent;
        if (_this.canDrop === true) {
          if ((_ref = t.name) === 'p1' || _ref === 'p4' || _ref === 'p7') {
            console.log('column uno');
            if (lib["p7"].sprite.currentFrame === 0) {
              p = lib["p7"];
            } else if (lib["p4"].sprite.currentFrame === 0) {
              p = lib["p4"];
            } else if (lib["p1"].sprite.currentFrame === 0) {
              p = lib["p1"];
            }
          } else if ((_ref1 = t.name) === 'p2' || _ref1 === 'p5' || _ref1 === 'p8') {
            console.log('column dos');
            if (lib["p8"].sprite.currentFrame === 0) {
              p = lib["p8"];
            } else if (lib["p5"].sprite.currentFrame === 0) {
              p = lib["p5"];
            } else if (lib["p2"].sprite.currentFrame === 0) {
              p = lib["p2"];
            }
          } else if ((_ref2 = t.name) === 'p3' || _ref2 === 'p6' || _ref2 === 'p9') {
            console.log('column tres');
            if (lib["p9"].sprite.currentFrame === 0) {
              p = lib["p9"];
            } else if (lib["p6"].sprite.currentFrame === 0) {
              p = lib["p6"];
            } else if (lib["p3"].sprite.currentFrame === 0) {
              p = lib["p3"];
            }
          }
          if ((_ref3 = p.name) === 'p7' || _ref3 === 'p8' || _ref3 === 'p9') {
            TweenLite.from(p.sprite, 0.7, {
              y: -226
            });
          } else if ((_ref4 = p.name) === 'p4' || _ref4 === 'p5' || _ref4 === 'p6') {
            TweenLite.from(p.sprite, 0.4, {
              y: -138
            });
          } else if ((_ref5 = p.name) === 'p1' || _ref5 === 'p2' || _ref5 === 'p3') {
            TweenLite.from(p.sprite, 0.2, {
              y: -50
            });
          }
          p.goto(1);
          console.log(p);
          lib.scene.nextStep();
          d.afterSuccess();
          _this.canDrop = false;
          return _this.evaluateWin();
        } else {
          return d.afterFail();
        }
      };
      this.onChoose = function(dispatcher) {
        var d, i, p, _i;
        d = lib[dispatcher];
        if (d.index === d2oda.evaluator.success) {
          createjs.Sound.play('s/good');
          return _this.canDrop = true;
        } else {
          _this.blank = new Array();
          for (i = _i = 1; _i <= 9; i = ++_i) {
            if (lib["p" + i]) {
              p = lib["p" + i];
              _this.blank.push(p);
            }
          }
          _this.random();
          lib.scene.fail();
          _this.canDrop = false;
          lib.scene.nextStep();
          return _this.evaluateWin();
        }
      };
      this.random = function() {
        var p, rand, _ref, _ref1, _ref2;
        rand = Math.round(Math.random() * 2.);
        console.log(rand);
        if (_this.blank[rand + 6].sprite.currentFrame === 0) {
          p = _this.blank[rand + 6];
        } else if (_this.blank[rand + 3].sprite.currentFrame === 0) {
          p = _this.blank[rand + 3];
        } else if (_this.blank[rand].sprite.currentFrame === 0) {
          p = _this.blank[rand];
        } else {
          _this.random();
          return;
        }
        p.goto(2);
        if ((_ref = p.name) === 'p7' || _ref === 'p8' || _ref === 'p9') {
          return TweenLite.from(p.sprite, 0.7, {
            y: -226
          });
        } else if ((_ref1 = p.name) === 'p4' || _ref1 === 'p5' || _ref1 === 'p6') {
          return TweenLite.from(p.sprite, 0.4, {
            y: -138
          });
        } else if ((_ref2 = p.name) === 'p1' || _ref2 === 'p2' || _ref2 === 'p3') {
          return TweenLite.from(p.sprite, 0.2, {
            y: -50
          });
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
                      before: 'Anna',
                      opt1: 'are',
                      opt2: 'is',
                      after: 'going to take swimming lessons this summer.'
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
                      before: 'Paul\'s going to go surfing, but he',
                      opt1: 'is',
                      opt2: 'isn\'t',
                      after: 'going to go sailing.'
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
                      before: 'Margaret and Gina',
                      opt1: 'are',
                      opt2: 'aren\'t',
                      after: ' coming to camp this year. // They are staying home.'
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
                      before: 'Samantha and Fred',
                      opt1: 'aren\'t',
                      opt2: 'are',
                      after: ' going horseback riding this afternoon. // They love horses!'
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
                      before: 'We',
                      opt1: 'is',
                      opt2: 'are',
                      after: 'going to take the dogs for a walk this afternoon.'
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
                      before: 'You didn\'t finish your homework, Bill! // You',
                      opt1: 'are',
                      opt2: 'aren\'t',
                      after: 'going to go to the party!'
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
                      before: 'You',
                      opt1: 'aren\'t',
                      opt2: 'are',
                      after: ' going to go cycling this afternoon. // Get your helmet!'
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
                      before: 'The kids are',
                      opt1: 'go',
                      opt2: 'going',
                      after: 'to toast marshmallows tonight.'
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
                      before: 'I\'m',
                      opt1: 'going',
                      opt2: 'not going',
                      after: 'to eat hotdogs. // They make me sick.'
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
                      before: 'Yippee! Mom and Dad are',
                      opt1: 'not going',
                      opt2: 'going',
                      after: ' to bring my dog to camp. // I\'m so happy!'
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
                      before: 'Candice is allergic to pink food coloring. // She',
                      opt1: 'is',
                      opt2: 'isn\'t',
                      after: 'going to eat pink candy. '
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
                      before: 'Mark and Pete',
                      opt1: 'is',
                      opt2: 'are',
                      after: 'going to sing at the campfire!'
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
                      before: '',
                      opt1: 'I are',
                      opt2: 'I\'m',
                      after: 'going to learn how to play guitar this summer.'
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
                      before: 'Do you like fishing? // Yes, I',
                      opt1: 'do',
                      opt2: 'am',
                      after: '.'
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
                      before: 'Where are you going to go canoeing? // On the',
                      opt1: 'mountain',
                      opt2: 'lake',
                      after: '.'
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
                      before: 'Where are you going to go camping? // In a big',
                      opt1: 'nature',
                      opt2: 'tent',
                      after: '.'
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
                      before: 'When is your summer camp? It\'s in',
                      opt1: 'August',
                      opt2: 'the forest',
                      after: '.'
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
                      before: 'Where are you going to go camping? // In a big',
                      opt1: 'nature',
                      opt2: 'tent',
                      after: '.'
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
                      before: 'Are you going to go hiking in the mountains? // Yes, we',
                      opt1: 'are',
                      opt2: 'do',
                      after: '.'
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
                      before: '',
                      opt1: 'Do',
                      opt2: 'Are',
                      after: ' you going to take insect repellent? // Yes, we are.'
                    }
                  }
                ]
              ],
              mixed: true,
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
                font: '24px Quicksand',
                align: 'center'
              }, {
                type: 'txt',
                id: 'tverde',
                text: '0',
                x: 182,
                y: 375,
                font: '24px Quicksand',
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
                  font: '18px Quicksand',
                  color: '#444'
                },
                bullets: {
                  font: '18px Quicksand',
                  color: '#000'
                }
              }, {
                type: 'img',
                id: 'pbase',
                x: 278,
                y: 233
              }, {
                type: 'img',
                id: 'pbase',
                x: 380,
                y: 233
              }, {
                type: 'img',
                id: 'pbase',
                x: 482,
                y: 233
              }, {
                type: 'img',
                id: 'pbase',
                x: 278,
                y: 321
              }, {
                type: 'img',
                id: 'pbase',
                x: 380,
                y: 321
              }, {
                type: 'img',
                id: 'pbase',
                x: 482,
                y: 321
              }, {
                type: 'img',
                id: 'pbase',
                x: 278,
                y: 409
              }, {
                type: 'img',
                id: 'pbase',
                x: 380,
                y: 409
              }, {
                type: 'img',
                id: 'pbase',
                x: 482,
                y: 409
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
                x: 80,
                y: 260,
                index: '1',
                target: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
                "eval": this.onDrop,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'img',
                id: '1',
                x: 670,
                y: 200,
                align: 'mc'
              }, {
                type: 'img',
                id: '2',
                x: 670,
                y: 290,
                align: 'mc'
              }, {
                type: 'img',
                id: '3',
                x: 670,
                y: 380,
                align: 'mc'
              }, {
                type: 'img',
                id: '4',
                x: 670,
                y: 470,
                align: 'mc'
              }, {
                type: 'img',
                id: 'threeinarow',
                x: 420,
                y: 350,
                align: 'mc'
              }
            ],
            groups: []
          }
        ]
      };
      U9A4.__super__.constructor.call(this);
    }

    window.U9A4 = U9A4;

    return U9A4;

  })(Oda);

}).call(this);
