/*

NEW ODA
*/


(function() {
  var U3A2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U3A2 = (function(_super) {
    __extends(U3A2, _super);

    function U3A2() {
      this.manifest = [
        {
          id: 'c1',
          src: 'circulo1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'papel',
          src: 'papel.png'
        }, {
          id: 'storedetective',
          src: 'store_detective.png'
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
              text: 'Read and listen. Then complete the sentences.',
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
                      pattern: ['Last week my little sister Nadia got lost at the mall.', '#rtn', 'She is only six years old, so we were very scared. ', '#rtn', '#rtn', 'My mom called the store detective immediately. ', '#rtn', 'The store detective asked us a lot of questions. ', '#rtn', 'She filled out a form, a Missing Persons', '#tcpt', '.', '#rtn', '#rtn', ' \“What does she look like?\” the detective asked.', '#rtn', '#rtn', ' \“She is small,', '#tcpt', ', and has long, blond hair. ', '#rtn', 'She has gray eyes and a small,', '#tcpt', 'on her', '#rtn', 'knee. She fell down last week\”, answered Mom.', '#rtn', '#rtn', '\“What is she', '#tcpt', '?\”', '#rtn', '#rtn', '\“She’s wearing a pink blouse, a green ', '#tcpt', ', ', '#rtn', 'and blue sneakers. She likes', '#tcpt', 'colors,\”', '#rtn', ' said Mom. ', '#rtn', '#rtn', 'The detective wrote the information in a notebook.'],
                      targets: [
                        {
                          text: 'dancing',
                          success: 'Report'
                        }, {
                          text: 'dancing',
                          success: 'thin'
                        }, {
                          text: 'dancing',
                          success: 'scar'
                        }, {
                          text: 'dancing',
                          success: 'wearing'
                        }, {
                          text: 'dancing',
                          success: 'skirt'
                        }, {
                          text: 'dancing',
                          success: 'bright'
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
                id: 'storedetective',
                x: 50,
                y: 80
              }, {
                type: 'img',
                id: 'papel',
                x: 360,
                y: 150
              }, {
                type: 'pcct',
                id: 'pcct1',
                x: 395,
                y: 213,
                font: '12px Quicksand',
                margin: 5,
                scolor: '#F9101A',
                stroke: 1,
                bcolor: 'rgba(255,255,255,0.01)'
              }, {
                type: 'ldrg',
                id: 'ldrg1',
                x: 140,
                y: 540,
                index: 'bright',
                text: 'bright',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg2',
                x: 250,
                y: 540,
                index: 'Report',
                text: 'Report',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg3',
                x: 360,
                y: 540,
                index: 'scar',
                text: 'scar',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg4',
                x: 450,
                y: 540,
                index: 'skirt',
                text: 'skirt',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg5',
                x: 540,
                y: 540,
                index: 'thin',
                text: 'thin',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct1'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg6',
                x: 620,
                y: 540,
                index: 'were',
                text: 'were',
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
                      pattern: ['\“Where did you last see her?\” asked the detective.', '#rtn', '\“Right here. I was sitting right here and she was', '#tcpt', '#rtn', 'next to me.\”', '#rtn', '#rtn', '\“What', '#tcpt', 'you doing?\”', '#rtn', '#rtn', '\“I was trying on a pair of shoes. Nadia was', '#tcpt', '#rtn', 'with her doll. Then I looked up and she wasn’t there!\”', '#rtn', 'My mom started to cry a little.', '#rtn', '#rtn', '\“Was she talking to anybody?\” asked the detective.', '#rtn', '#rtn', '\“Yes, she was', '#tcpt', 'to an old lady. She was wearing', '#rtn', 'a pale blue blouse and a brown skirt.\”', '#rtn', '#rtn', 'The store assistants were', '#tcpt', 'everywhere and', '#rtn', 'people were calling Nadia\’s name.', '#rtn', '#rtn', '\“Please wait here,\” ordered the detective. He came', '#rtn', ' back ten minutes later with Nadia.', '#rtn', '#rtn', 'They found Nadia in a clothing store. She was wearing', '#rtn', 'a dress from the store. She was', '#tcpt', 'to music', '#rtn', 'in front of a mirror!'],
                      targets: [
                        {
                          text: 'dancing',
                          success: 'sitting'
                        }, {
                          text: 'dancing',
                          success: 'were'
                        }, {
                          text: 'dancing',
                          success: 'playing'
                        }, {
                          text: 'dancing',
                          success: 'talking'
                        }, {
                          text: 'dancing',
                          success: 'looking'
                        }, {
                          text: 'dancing',
                          success: 'dancing'
                        }
                      ]
                    }
                  }
                ]
              ],
              type: 'steps'
            },
            containers: [
              {
                type: 'img',
                id: 'storedetective',
                x: 50,
                y: 80
              }, {
                type: 'img',
                id: 'papel',
                x: 360,
                y: 150
              }, {
                type: 'pcct',
                id: 'pcct2',
                x: 385,
                y: 200,
                font: '12px Quicksand',
                margin: 5,
                scolor: '#F9101A',
                stroke: 1,
                bcolor: 'rgba(255,255,255,0.01)'
              }, {
                type: 'ldrg',
                id: 'ldrg7',
                x: 140,
                y: 540,
                index: 'dancing',
                text: 'dancing',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg8',
                x: 240,
                y: 540,
                index: 'looking',
                text: 'looking',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg9',
                x: 340,
                y: 540,
                index: 'playing',
                text: 'playing',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg10',
                x: 440,
                y: 540,
                index: 'sitting',
                text: 'sitting',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg11',
                x: 530,
                y: 540,
                index: 'talking',
                text: 'talking',
                font: '22px Quicksand',
                color: '#333',
                target: ['pcct2'],
                "eval": this.evaluateDrop02_01,
                afterSuccess: 'origin',
                afterFail: 'return'
              }, {
                type: 'ldrg',
                id: 'ldrg12',
                x: 620,
                y: 540,
                index: 'were',
                text: 'were',
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
      U3A2.__super__.constructor.call(this);
    }

    window.U3A2 = U3A2;

    return U3A2;

  })(Oda);

}).call(this);
