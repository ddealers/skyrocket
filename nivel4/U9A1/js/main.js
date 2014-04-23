/*

NEW ODA
*/


(function() {
  var U9A1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U9A1 = (function(_super) {
    __extends(U9A1, _super);

    function U9A1() {
      this.manifest = [
        {
          id: 'c1',
          src: 'circulo_1.png'
        }, {
          id: 'c2',
          src: 'circilo_2.png'
        }, {
          id: 'email',
          src: 'email.png'
        }, {
          id: 'pantalla',
          src: 'pantalla-01.png'
        }, {
          id: 'treasureisland',
          src: 'treasure_island.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.evaluateDrop02_01 = function(dispatcher, target) {
        var complete, drop, _i, _j, _len, _len1, _ref, _ref1;
        complete = true;
        if (lib[dispatcher].index === target.success) {
          target.update(lib[dispatcher].label.text, true);
        } else {
          target.update(lib[dispatcher].label.text, false);
        }
        lib[dispatcher].afterSuccess();
        _ref = lib[dispatcher].droptargets;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          drop = _ref[_i];
          if (drop.text.text === '') {
            complete = false;
          }
        }
        if (!complete) {
          return;
        }
        _ref1 = lib[dispatcher].droptargets;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          drop = _ref1[_j];
          if (drop.complete) {
            lib.score.plusOne();
          }
        }
        return lib.scene.success(false);
      };
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 130,
          states: [
            {
              text: 'Read and drag the words to complete the story.',
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
                    name: 'pcct1',
                    opts: {
                      pattern: ['Treasure Island Summer Camp ', '#rtn', '#rtn', 'Come and take part in all the fun', '#tcpt', 'we offer: sports, sailing, and more! Camp in ', '#rtn', 'big', '#tcpt', 'by the lake. Enjoy', '#tcpt', ': the mountains, the lake and the forest. ', '#rtn', 'Go', '#tcpt', 'and eat the fish you catch for dinner! Learn how to', '#tcpt', 'horses ', '#rtn', 'and to', '#tcpt', 'on the lake. Go', '#tcpt', 'in the forest with us and observe wild ', '#rtn', 'animals! If you like', '#tcpt', 'activities, you\'ll love Treasure Island Summer Camp! ', '#rtn', '#rtn', 'We have two', '#tcpt', 'this summer. Session 1: July 17 to 24. Session 2: August 1 to 8.', '#rtn', '#rtn', '#tcpt', 'now at registration@treasureislandcamp.com and receive a discount!'],
                      targets: [
                        {
                          text: '___________',
                          success: 'activities'
                        }, {
                          text: '___________',
                          success: 'tents'
                        }, {
                          text: '___________',
                          success: 'nature'
                        }, {
                          text: '___________',
                          success: 'fishing'
                        }, {
                          text: '___________',
                          success: 'ride'
                        }, {
                          text: '___________',
                          success: 'sail'
                        }, {
                          text: '___________',
                          success: 'hiking'
                        }, {
                          text: '___________',
                          success: 'outdoor'
                        }, {
                          text: '___________',
                          success: 'sessions'
                        }, {
                          text: '________',
                          success: 'Register'
                        }
                      ],
                      ypos: 0
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                id: 'email',
                x: 80,
                y: 170
              }, {
                type: 'pcct',
                id: 'pcct1',
                x: 130,
                y: 250,
                font: '12px Quicksand',
                margin: 5,
                scolor: '#F9101A',
                stroke: 1,
                bcolor: 'rgba(255,255,255,0.01)'
              }, {
                type: 'ldrg',
                id: 'ldrg3',
                x: 138,
                y: 520,
                index: 'tents',
                text: 'tents',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg1',
                x: 245,
                y: 520,
                index: 'hiking',
                text: 'hiking',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg10',
                x: 360,
                y: 520,
                index: 'ride',
                text: 'ride',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg6',
                x: 450,
                y: 520,
                index: 'activities',
                text: 'activities',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg7',
                x: 605,
                y: 520,
                index: 'outdoor',
                text: 'outdoor',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg5',
                x: 140,
                y: 550,
                index: 'Register',
                text: 'Register',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg2',
                x: 280,
                y: 550,
                index: 'nature',
                text: 'nature',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg4',
                x: 400,
                y: 550,
                index: 'sail',
                text: 'sail',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg9',
                x: 490,
                y: 550,
                index: 'sessions',
                text: 'sessions',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg8',
                x: 620,
                y: 550,
                index: 'fishing',
                text: 'fishing',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }
            ],
            groups: []
          }, {
            answers: {
              collection: [
                [
                  {
                    name: 'pcct2',
                    opts: {
                      pattern: ['Dear Toby,', '#rtn', '#rtn', 'Thank you for registering for Science Camp. We\'re going to show you a new ', '#rtn', 'world of', '#tcpt', 'and magic! ', '#rtn', '#rtn', 'On Monday, you are going to visit a real science', '#tcpt', ', and you’re ', '#rtn', 'going to help the scientists conduct some', '#tcpt', '. On Tuesday, we\'re ', '#rtn', 'going to go to a', '#tcpt', 'to observe the stars and see a 3D', '#tcpt', '#rtn', 'about our solar system! On Wednesday, you are', '#tcpt', 'build your own ', '#rtn', 'robot. Then, on Thursday we’re going to take', '#tcpt', 'of nature. You\'re ', '#rtn', 'going to edit your pictures on a computer and add special effects! And best ', '#rtn', 'of all, we are going to have a big', '#tcpt', 'on the last day of camp. ', '#rtn', '#rtn', 'Next week you will receive an', '#tcpt', 'with a list of items that you need ', '#rtn', 'for your week at Science Camp. Please remember that pets are not', '#tcpt', '. ', '#rtn', '#rtn', 'See you soon!', '#rtn', 'Stacy'],
                      targets: [
                        {
                          text: '___________',
                          success: 'science'
                        }, {
                          text: '___________',
                          success: 'laboratory'
                        }, {
                          text: '___________',
                          success: 'experiments'
                        }, {
                          text: '___________',
                          success: 'planetarium'
                        }, {
                          text: '___________',
                          success: 'movie'
                        }, {
                          text: '___________',
                          success: 'going to'
                        }, {
                          text: '___________',
                          success: 'photographs'
                        }, {
                          text: '___________',
                          success: 'party'
                        }, {
                          text: '___________',
                          success: 'e-mail'
                        }, {
                          text: '________',
                          success: 'allowed'
                        }
                      ],
                      ypos: 0
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                id: 'treasureisland',
                x: 40,
                y: 170
              }, {
                type: 'pcct',
                id: 'pcct2',
                x: 80,
                y: 195,
                font: '12px Quicksand',
                margin: 5,
                scolor: '#F9101A',
                stroke: 1,
                bcolor: 'rgba(255,255,255,0.01)'
              }, {
                type: 'ldrg',
                id: 'ldrg1b',
                x: 102,
                y: 500,
                index: 'experiments',
                text: 'experiments',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg2b',
                x: 265,
                y: 500,
                index: 'science',
                text: 'science',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg3b',
                x: 370,
                y: 500,
                index: 'allowed',
                text: 'allowed',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg4b',
                x: 480,
                y: 500,
                index: 'going to',
                text: 'going to',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg5b',
                x: 605,
                y: 500,
                index: 'photographs',
                text: 'photographs',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg6b',
                x: 140,
                y: 540,
                index: 'movie',
                text: 'movie',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg7b',
                x: 230,
                y: 540,
                index: 'laboratory',
                text: 'laboratory',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg8b',
                x: 370,
                y: 540,
                index: 'planetarium',
                text: 'planetarium',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg9b',
                x: 530,
                y: 540,
                index: 'e-mail',
                text: 'e-mail',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg10b',
                x: 620,
                y: 540,
                index: 'party',
                text: 'party',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }
            ],
            groups: []
          }
        ]
      };
      U9A1.__super__.constructor.call(this);
    }

    window.U9A1 = U9A1;

    return U9A1;

  })(Oda);

}).call(this);
