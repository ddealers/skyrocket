/*

NEW ODA
*/


(function() {
  var U4A3,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U4A3 = (function(_super) {
    __extends(U4A3, _super);

    function U4A3() {
      var _this = this;
      this.manifest = [
        {
          id: 'bike',
          src: 'bike.png'
        }, {
          id: 'buttons',
          src: 'buttons.png'
        }, {
          id: 'cat',
          src: 'cat.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'c1',
          src: 'cirulo1.png'
        }, {
          id: 'clock',
          src: 'clock.png'
        }, {
          id: 'computer',
          src: 'computer.png'
        }, {
          id: 'cook',
          src: 'cook.png'
        }, {
          id: 'count',
          src: 'count.png'
        }, {
          id: 'drawing',
          src: 'drawing.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'onefoot',
          src: 'one_foot.png'
        }, {
          id: 'pantalla01',
          src: 'pantalla-01.png'
        }, {
          id: 'mozart',
          src: 'piano.png'
        }, {
          id: 'reading',
          src: 'reading.png'
        }, {
          id: 'scissors',
          src: 'scissors.png'
        }, {
          id: 'tabletbaby',
          src: 'tabletbaby.png'
        }, {
          id: 'walk',
          src: 'walk.png'
        }, {
          id: 'write',
          src: 'write.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.btnClick = function(dispatcher, target) {
        var a, b, c, d, t;
        d = lib[dispatcher];
        t = lib[target];
        a = d.index;
        b = t.droptargets;
        c = t.currentTarget;
        if (a === b[c].success) {
          b[c].complete = true;
          b[c].update();
          t.currentTarget++;
        }
        if (t.currentTarget === b.length) {
          return lib.scene.success();
        } else {
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
              text: 'Read and choose the word.',
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
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'onefoot'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'count1btn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'cookbtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'standbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['When I was 3, I could ', '#tcpt', 'on one foot.'],
                      targets: [
                        {
                          text: 'stand'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'count'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'playbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'count2btn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'turnonbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Bruno learned to', '#tcpt', 'to 10 when he was 5 years old.'],
                      targets: [
                        {
                          text: 'count'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'mozart'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'playbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'cookbtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'standbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Mozart could  ', '#tcpt', '  the piano when he was 3 years old.'],
                      targets: [
                        {
                          text: 'play'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'cook'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'playbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'cookbtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'count3btn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['My brother could', '#tcpt', 'breakfast when he was 10 years old.'],
                      targets: [
                        {
                          text: 'cook'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'buttons'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'buttonupbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'cookbtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'turnonbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Ray could ', '#tcpt', ' his shirt when he was 5 years old.'],
                      targets: [
                        {
                          text: 'button up'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'computer'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'playbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'count2btn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'turnonbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Mike could', '#tcpt', 'a computer when he was 5 years old.'],
                      targets: [
                        {
                          text: 'turn on'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'drawing'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'playbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'drawbtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'standbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Julie could', '#tcpt', 'pictures of her friends when she was 9 years old.'],
                      targets: [
                        {
                          text: 'draw'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'bike'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'playbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'cookbtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'ridebtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Leo could', '#tcpt', 'a bike when he was 6 years old.'],
                      targets: [
                        {
                          text: 'ride'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'tabletbaby'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'playbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'writebtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'paintbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Pete could', '#tcpt', 'computer games when he was 1 year old!'],
                      targets: [
                        {
                          text: 'play'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'reading'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'readbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'count2btn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'paintbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Fiona could', '#tcpt', 'a book when she was 4 years old.'],
                      targets: [
                        {
                          text: 'read'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'cat'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'playbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'saybtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'standbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Gary could', '#tcpt', 'the word "cat" when he was 14 months old. '],
                      targets: [
                        {
                          text: 'say'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'write'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'playbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'writebtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'singbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Alex could', '#tcpt', 'his name when he was 4.'],
                      targets: [
                        {
                          text: 'write'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'clock'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'readbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'writebtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'tellbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Alex could', '#tcpt', 'the time when he was 7 years old.'],
                      targets: [
                        {
                          text: 'tell'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'scissors'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'readbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'writebtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'usebtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Andy could', '#tcpt', 'a pair of scissors when she was 6 years old.'],
                      targets: [
                        {
                          text: 'use'
                        }
                      ]
                    }
                  }
                ], [
                  {
                    name: 'grp1',
                    opts: {
                      type: 'fadeIn',
                      target: 'walk'
                    }
                  }, {
                    name: 'grpizq',
                    opts: {
                      type: 'fadeIn',
                      target: 'walkbtn'
                    }
                  }, {
                    name: 'grpmid',
                    opts: {
                      type: 'fadeIn',
                      target: 'cookbtn'
                    }
                  }, {
                    name: 'grpder',
                    opts: {
                      type: 'fadeIn',
                      target: 'singbtn'
                    }
                  }, {
                    name: 'pcpt1',
                    opts: {
                      pattern: ['Benjamin could', '#tcpt', 'when he was 11 months old!'],
                      targets: [
                        {
                          text: 'walk'
                        }
                      ]
                    }
                  }
                ]
              ],
              mixed: true,
              type: 'limit',
              limit: 10
            },
            containers: [
              {
                type: 'img',
                id: 'bike',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'buttons',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'cat',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'clock',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'computer',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'cook',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'count',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'drawing',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'onefoot',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'mozart',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'reading',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'scissors',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'tabletbaby',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'walk',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'img',
                id: 'write',
                x: 400,
                y: 308,
                align: 'mc'
              }, {
                type: 'pcpt',
                id: 'pcpt1',
                x: 475,
                y: 540,
                font: 'Bold 20px Quicksand',
                margin: 5,
                align: 'tc',
                scolor: '#F9101A',
                uwidth: 90
              }, {
                type: 'txt',
                id: 'txt1',
                text: '/',
                x: 356,
                y: 460,
                font: 'Bold 20px Quicksand',
                align: 'center',
                lineWidth: 250
              }, {
                type: 'txt',
                id: 'txt1',
                text: '/',
                x: 480,
                y: 460,
                font: 'Bold 20px Quicksand',
                align: 'center',
                lineWidth: 250
              }, {
                type: 'btn',
                id: 'playbtn',
                x: 300,
                y: 460,
                index: 'play',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'play',
                      name: 'play',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'readbtn',
                x: 300,
                y: 460,
                index: 'read',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'read',
                      name: 'read',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'walkbtn',
                x: 300,
                y: 460,
                index: 'walk',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'walk',
                      name: 'walk',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'buttonupbtn',
                x: 280,
                y: 460,
                index: 'button up',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'button up',
                      name: 'button up',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'count1btn',
                x: 300,
                y: 460,
                index: 'count',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'count',
                      name: 'count',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'cookbtn',
                x: 420,
                y: 460,
                index: 'cook',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'cook',
                      name: 'cook',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'writebtn',
                x: 420,
                y: 460,
                index: 'write',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'write',
                      name: 'write',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'count2btn',
                x: 420,
                y: 460,
                index: 'count',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'count',
                      name: 'count',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'saybtn',
                x: 420,
                y: 460,
                index: 'say',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'say',
                      name: 'say',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'drawbtn',
                x: 420,
                y: 460,
                index: 'draw',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'draw',
                      name: 'draw',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'ridebtn',
                x: 540,
                y: 460,
                index: 'ride',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'ride',
                      name: 'ride',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'standbtn',
                x: 540,
                y: 460,
                index: 'stand',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'stand',
                      name: 'stand',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'paintbtn',
                x: 540,
                y: 460,
                index: 'paint',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'paint',
                      name: 'paint',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'singbtn',
                x: 540,
                y: 460,
                index: 'sing',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'sing',
                      name: 'sing',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'tellbtn',
                x: 540,
                y: 460,
                index: 'tell',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'tell',
                      name: 'tell',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'usebtn',
                x: 540,
                y: 460,
                index: 'use',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'use',
                      name: 'use',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'turnonbtn',
                x: 540,
                y: 460,
                index: 'turn on',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'turn on',
                      name: 'turn on',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
                    }
                  }
                ]
              }, {
                type: 'btn',
                id: 'count3btn',
                x: 530,
                y: 460,
                index: 'count',
                target: 'pcpt1',
                "eval": this.btnClick,
                states: [
                  {
                    txt: {
                      text: 'count',
                      name: 'count',
                      x: 0,
                      y: 0,
                      align: 'center',
                      font: 'Bold 20px Quicksand'
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
                group: ['bike', 'buttons', 'cat', 'clock', 'computer', 'cook', 'count', 'drawing', 'onefoot', 'mozart', 'reading', 'scissors', 'tabletbaby', 'walk', 'write']
              }, {
                type: 'grp',
                id: 'grpizq',
                invisible: true,
                group: ['playbtn', 'readbtn', 'walkbtn', 'buttonupbtn', 'count1btn']
              }, {
                type: 'grp',
                id: 'grpmid',
                invisible: true,
                group: ['cookbtn', 'writebtn', 'count2btn', 'saybtn', 'drawbtn']
              }, {
                type: 'grp',
                id: 'grpder',
                invisible: true,
                group: ['ridebtn', 'standbtn', 'paintbtn', 'singbtn', 'tellbtn', 'usebtn', 'turnonbtn', 'count3btn']
              }
            ]
          }
        ]
      };
      U4A3.__super__.constructor.call(this);
    }

    window.U4A3 = U4A3;

    return U4A3;

  })(Oda);

}).call(this);
