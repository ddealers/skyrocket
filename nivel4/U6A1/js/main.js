/*

NEW ODA
*/


(function() {
  var U6A1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U6A1 = (function(_super) {
    __extends(U6A1, _super);

    function U6A1() {
      this.manifest = [
        {
          id: 'banjo',
          src: 'banjo.png'
        }, {
          id: 'caja',
          src: 'caja_1.png'
        }, {
          id: 'c2',
          src: 'circulo2.png'
        }, {
          id: 'c1',
          src: 'cirulo1.png'
        }, {
          id: 'clarinet',
          src: 'clarinet.png'
        }, {
          id: 'comedian',
          src: 'comedian.png'
        }, {
          id: 'dancers',
          src: 'dancers.png'
        }, {
          id: 'header',
          src: 'header.png'
        }, {
          id: 'jazzband',
          src: 'jazz_band.png'
        }, {
          id: 'musician',
          src: 'musician.png'
        }, {
          id: 'pantalla',
          src: 'n4_U6_A1-01.png'
        }, {
          id: 'painter',
          src: 'painter.png'
        }, {
          id: 'piano',
          src: 'piano.png'
        }, {
          id: 'repeat',
          src: 'repeat.png'
        }, {
          id: 'saxophone',
          src: 'saxophone.png'
        }, {
          id: 'sculptor',
          src: 'sculptor.png'
        }, {
          id: 'singers',
          src: 'singers.png'
        }, {
          id: 'trombone',
          src: 'trombone.png'
        }, {
          id: 'trumpet',
          src: 'trumpet.png'
        }, {
          id: 'tuba',
          src: 'tuba.png'
        }, {
          id: 's/silence',
          src: 'silence.mp3'
        }
      ];
      this.game = {
        header: 'header',
        instructions: {
          x: 110,
          y: 130,
          states: [
            {
              text: 'Memorize the cards. Then listen and choose the correct one.',
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
              collection: [['banjo', 'clarinet', 'comedian', 'dancers', 'header', 'jazzband', 'musician', 'painter', 'piano', 'saxophone', 'sculptor', 'singers', 'trombone', 'trumpet', 'tuba']],
              mixed: true,
              type: 'limit',
              limit: 8
            },
            containers: [],
            groups: []
          }
        ]
      };
      U6A1.__super__.constructor.call(this);
    }

    window.U6A1 = U6A1;

    return U6A1;

  })(Oda);

}).call(this);
