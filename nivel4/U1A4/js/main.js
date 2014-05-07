/*

NEW ODA
*/


(function() {
  var U1A4,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U1A4 = (function(_super) {
    __extends(U1A4, _super);

    function U1A4() {
      var _this = this;
      this.manifest = [
        {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'act4',
          src: 'act_4.png'
        }, {
          id: 'continue',
          src: 'continue_story.png'
        }, {
          id: 'false',
          src: 'false.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'true',
          src: 'true.png'
        }, {
          id: 'pantalla',
          src: 'pantalla-01.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.onClick = function(dispatcher, target) {
        var d, t;
        d = lib[dispatcher];
        t = lib[target];
        t.complete = true;
        if (d.index === t.success) {
          return lib.scene.success();
        } else {
          return lib.scene.fail();
        }
      };
      this["continue"] = function(dispatcher) {
        var d;
        d = lib[dispatcher];
        return lib.scene.nextStep();
      };
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 127,
          states: [
            {
              text: ['Read the text. Then answer the questions, click on', '#ital', 'or', '#ital'],
              italics: ['true', 'false.'],
              sound: 's/silence',
              played: false,
              custom: true
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
                    name: 'lbl1',
                    opts: {
                      text: 'There are a lot of snakes on Hayden\'s farm.',
                      success: false
                    }
                  }
                ], [
                  {
                    name: 'lbl1',
                    opts: {
                      text: 'Hayden shouldn\'t swim in the swamp; it\'s very dangerous.',
                      success: true
                    }
                  }
                ], [
                  {
                    name: 'lbl1',
                    opts: {
                      text: 'Hayden fished in the river.',
                      success: true
                    }
                  }
                ], [
                  {
                    name: 'lbl1',
                    opts: {
                      text: 'If there are baby crocodiles, the mother crocodile is probably far away.',
                      success: false
                    }
                  }
                ], [
                  {
                    name: 'btnContinue',
                    opts: {
                      visible: true
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                scale: 0.5,
                id: 'act4',
                x: 420,
                y: 190
              }, {
                type: 'txt',
                id: 't1',
                text: 'My name is Hayden and I live in Florida. There are a lot of crocodiles there. My parents have a large farm with a lot of swamps everywhere. Swamps are forests with a lot of water. I like to swim but there is one problem: crocodiles love swamps! My parents tell me not to go in the water because it\'s dangerous. One morning I was fishing in the river and I saw baby crocodiles. They were cute, but... if you see babies, there is a mother crocodile close by! I knew I shouldn\'t fish close to a crocodile and I went back to the house.',
                x: 70,
                y: 225,
                lineWidth: 330,
                font: '14px Dosis',
                lineHeight: 25,
                align: 'left'
              }, {
                type: 'btn',
                id: 'btnTrue',
                x: 340,
                y: 555,
                index: true,
                target: 'lbl1',
                "eval": this.onClick,
                states: [
                  {
                    img: {
                      name: 'true',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btnFalse',
                x: 460,
                y: 555,
                index: false,
                target: 'lbl1',
                "eval": this.onClick,
                states: [
                  {
                    img: {
                      name: 'false',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btnContinue',
                x: 700,
                y: 555,
                index: 'next',
                target: 'global',
                visible: false,
                "eval": this["continue"],
                states: [
                  {
                    img: {
                      name: 'continue',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }, {
                type: 'lbl',
                id: 'lbl1',
                x: 400,
                y: 480,
                font: 'Bold 20px Quicksand',
                lineWidth: 600,
                color: '#333',
                align: 'center'
              }
            ],
            groups: []
          }, {
            answers: {
              collection: [
                [
                  {
                    name: 'lbl2',
                    opts: {
                      text: 'If you want to take care of wild animals, you should register them.',
                      success: true
                    }
                  }
                ], [
                  {
                    name: 'lbl2',
                    opts: {
                      text: 'You should train to work with crcocodiles.',
                      success: true
                    }
                  }
                ], [
                  {
                    name: 'lbl2',
                    opts: {
                      text: 'Hayden\'s father marked more than 20 crocodiles.',
                      success: true
                    }
                  }
                ], [
                  {
                    name: 'lbl2',
                    opts: {
                      text: 'You should feed wild crocodiles if they look hungry.',
                      success: false
                    }
                  }
                ], [
                  {
                    name: 'btnContinue2',
                    opts: {
                      visible: true
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                scale: 0.5,
                id: 'act4',
                name: 'act4_2',
                x: 420,
                y: 190
              }, {
                type: 'txt',
                id: 't2',
                text: 'Many times the mother crocodile observed me from a distance. I called her Penelope. Penelope\'s baby crocodiles  got bigger and they started to move across the swamps. I wanted to make sure they were okay. I decided that I had to organize a registration system. My dad put a tag on Penelope\'s back. (My dad is a trained biologist.) Penelope was number 1. When we finished, we had more than 20 crocodiles! Sometimes I could see the young crocodiles didn\'t have enough food and I wanted to feed them. But my mom said feeding wild crocodiles is illegal and very dangerous.',
                x: 70,
                y: 230,
                lineWidth: 330,
                font: '14px Dosis',
                lineHeight: 25,
                align: 'left'
              }, {
                type: 'btn',
                id: 'btnTrue2',
                x: 340,
                y: 555,
                index: true,
                target: 'lbl2',
                "eval": this.onClick,
                states: [
                  {
                    img: {
                      name: 'true',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btnFalse2',
                x: 460,
                y: 555,
                index: false,
                target: 'lbl2',
                "eval": this.onClick,
                states: [
                  {
                    img: {
                      name: 'false',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btnContinue2',
                x: 700,
                y: 555,
                index: 'next',
                target: 'global',
                visible: false,
                "eval": this["continue"],
                states: [
                  {
                    img: {
                      name: 'continue',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }, {
                type: 'lbl',
                id: 'lbl2',
                x: 400,
                y: 480,
                font: 'Bold 20px Quicksand',
                lineWidth: 600,
                color: '#333',
                align: 'center'
              }
            ],
            groups: []
          }, {
            answers: {
              collection: [
                [
                  {
                    name: 'lbl3',
                    opts: {
                      text: 'If you run a crocodile safari, you should teach people how to stay safe.',
                      success: true
                    }
                  }
                ], [
                  {
                    name: 'lbl3',
                    opts: {
                      text: 'You should put your hands in the water; the crocodiles like to play.',
                      success: false
                    }
                  }
                ], [
                  {
                    name: 'lbl3',
                    opts: {
                      text: 'You should eat your lunch far from the crocodiles.',
                      success: true
                    }
                  }
                ], [
                  {
                    name: 'lbl3',
                    opts: {
                      text: 'You shouldn\'t take photographs. It makes the crocodiles aggressive.',
                      success: false
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                scale: 0.5,
                id: 'act4',
                name: 'act4_3',
                x: 420,
                y: 190
              }, {
                type: 'txt',
                id: 't3',
                text: 'I started the Costa Crocodile Reserve about 5 years ago and now we have a team of about 12 people. We organize tours and educational visits for schools. We have to be very careful and we teach the children how to stay safe. We teach children to keep their arms and legs in the boat. The children eat their lunches a long way from the swamp!  All food stays in the recreation area. We don\'t want the kids to feed the crocodiles; it\'s too dangerous! We tell the kids to bring cameras and take a lot of photos. Seeing crocodiles is a unique experience.',
                x: 70,
                y: 225,
                lineWidth: 330,
                font: '14px Dosis',
                lineHeight: 25,
                align: 'left'
              }, {
                type: 'btn',
                id: 'btnTrue3',
                x: 340,
                y: 555,
                index: true,
                target: 'lbl3',
                "eval": this.onClick,
                states: [
                  {
                    img: {
                      name: 'true',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'btnFalse3',
                x: 460,
                y: 555,
                index: false,
                target: 'lbl3',
                "eval": this.onClick,
                states: [
                  {
                    img: {
                      name: 'false',
                      x: 0,
                      y: 0,
                      align: 'mc'
                    }
                  }
                ]
              }, {
                type: 'lbl',
                id: 'lbl3',
                x: 400,
                y: 480,
                font: 'Bold 20px Quicksand',
                lineWidth: 600,
                color: '#333',
                align: 'center'
              }
            ],
            groups: []
          }
        ]
      };
      U1A4.__super__.constructor.call(this);
    }

    window.U1A4 = U1A4;

    return U1A4;

  })(Oda);

}).call(this);
