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
        var a, b, complete;
        a = lib[dispatcher];
        b = target;
        complete = true;
        if (a.index === b.success) {
          b.update();
          a.afterSuccess();
          target.complete = true;
          return lib.scene.success(true, false);
        } else {
          a.afterFail();
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
          total: 18,
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
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Treasure Island Summer Camp ', '#rtn', '#rtn', 'Come and take part in all the fun', '#tcpt', 'we offer: sports, sailing, and more! Camp in ', '#rtn', 'big', '#tcpt', 'by the lake. Enjoy', '#tcpt', ': the mountains, the lake and the forest. ', '#rtn', 'Go', '#tcpt', 'and eat the fish you catch for dinner! Learn how to', '#tcpt', 'horses ', '#rtn', 'and to', '#tcpt', 'on the lake. Go', '#tcpt', 'in the forest with us and observe wild ', '#rtn', 'animals! If you like', '#tcpt', 'activities, you\'ll love Treasure Island Summer Camp! ', '#rtn', '#rtn', 'We have two', '#tcpt', 'this summer. Session 1: July 17 to 24. Session 2: August 1 to 8.', '#rtn', '#rtn', '#tcpt', 'now at registration@treasureislandcamp.com and receive a discount!'],
                      targets: [
                        {
                          text: 'activities',
                          maxlength: 'activities'
                        }, {
                          text: 'tents',
                          maxlength: 'activities'
                        }, {
                          text: 'nature',
                          maxlength: 'activities'
                        }, {
                          text: 'fishing',
                          maxlength: 'activities'
                        }, {
                          text: 'ride',
                          maxlength: 'activities'
                        }, {
                          text: 'sail',
                          maxlength: 'activities'
                        }, {
                          text: 'hiking',
                          maxlength: 'activities'
                        }, {
                          text: 'outdoor',
                          maxlength: 'activities'
                        }, {
                          text: 'sessions',
                          maxlength: 'activities'
                        }, {
                          text: 'Register',
                          maxlength: 'activities'
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
                type: 'pcpt',
                id: 'pcpt1',
                x: 130,
                y: 250,
                font: 'Bold 12px Quicksand',
                margin: 5,
                underline: {
                  y: 0
                },
                scolor: '#009046',
                stroke: 1,
                bcolor: 'rgba(255,255,255,0.01)'
              }, {
                type: 'ldrg',
                id: 'ldrg3',
                x: 138,
                y: 520,
                index: 'tents',
                text: 'tents',
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt1'],
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
                    name: 'pcpt2',
                    opts: {
                      pattern: ['Dear Toby,', '#rtn', '#rtn', 'Thank you for registering for Science Camp. We\'re going to show you a new ', '#rtn', 'world of', '#tcpt', 'and magic! ', '#rtn', '#rtn', 'On Monday, you are going to visit a real science', '#tcpt', ', and you’re ', '#rtn', 'going to help the scientists conduct some', '#tcpt', '. On Tuesday, we\'re ', '#rtn', 'going to go to a', '#tcpt', 'to observe the stars and see a 3D', '#tcpt', '#rtn', 'about our solar system! On Wednesday, you are', '#tcpt', 'build your own ', '#rtn', 'robot. Then, on Thursday we’re going to take', '#tcpt', 'of nature. You\'re ', '#rtn', 'going to edit your pictures on a computer and add special effects! And best ', '#rtn', 'of all, we are going to have a big', '#tcpt', 'on the last day of camp. ', '#rtn', '#rtn', 'Next week you will receive an', '#tcpt', 'with a list of items that you need ', '#rtn', 'for your week at Science Camp. Please remember that pets are not', '#tcpt', '. ', '#rtn', '#rtn', 'See you soon!', '#rtn', 'Stacy'],
                      targets: [
                        {
                          text: 'science',
                          maxlength: 'experiments'
                        }, {
                          text: 'laboratory',
                          maxlength: 'experiments'
                        }, {
                          text: 'experiments',
                          maxlength: 'experiments'
                        }, {
                          text: 'planetarium',
                          maxlength: 'experiments'
                        }, {
                          text: 'movie',
                          maxlength: 'experiments'
                        }, {
                          text: 'going to',
                          maxlength: 'experiments'
                        }, {
                          text: 'photographs',
                          maxlength: 'experiments'
                        }, {
                          text: 'party',
                          maxlength: 'experiments'
                        }, {
                          text: 'e-mail',
                          maxlength: 'experiments'
                        }, {
                          text: 'allowed',
                          maxlength: 'experiments'
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
                type: 'pcpt',
                id: 'pcpt2',
                x: 70,
                y: 195,
                font: 'Bold 12px Quicksand',
                margin: 5,
                underline: {
                  y: 0
                },
                scolor: '#009046',
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
                target: ['pcpt2'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt2'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt2'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt2'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt2'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt2'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt2'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt2'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt2'],
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
                font: 'Bold 22px Quicksand',
                color: '#333',
                target: ['pcpt2'],
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
