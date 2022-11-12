const web = {
    init: function () {
        var _this = this;
    },
    start: function () {

        let num = new Array();
        for (var n = 1; n < 46; n++) {
            num[n - 1] = n;
        }

        let select = new Array();
        let count = 0;

        for (var i = 0; i < 6; i++) {
            let random = Math.floor((Math.random() * num.length));
            if (select.includes(num[random])) {
                i--;
                continue;
            } else {
                select[count] = Number(num[random]);
                count++;
            }
        }

        select.sort();
        var result = document.getElementById('result');
        var ctx_r = result.getContext('2d');
        var arrayColor = new Array('#003300', '#660066', '#0033CC', '#990000', '#66CC00', '#669933', '#993333', '#CC66CC', '#333333');


        for (var b = 0; b < 6; b++) {
            var ball = {
                x: 60 * (b + 1),
                y: 100,
                radius: 25,
                color: arrayColor[Math.floor(Math.random() * (arrayColor.length -1))],
                draw: function () {

                    var radgrad = ctx_r.createRadialGradient(this.x,this.y,this.radius,this.x + 40,this.y + 50,this.radius + 10);
                    radgrad.addColorStop(0, '#ffffff');
                    radgrad.addColorStop(0.9, this.color);
                    radgrad.addColorStop(1, 'rgba(1,159,98,0)');


                    ctx_r.beginPath();
                    ctx_r.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                    ctx_r.closePath();
                    // ctx_r.fillStyle = this.color;
                    ctx_r.fillStyle = radgrad;
                    ctx_r.fill();

                    // ctx_r.fillStyle = radgrad;
                    // ctx_r.fillRect(this.x,this.y,150,150);


                    ctx_r.fillStyle = "#ffffff";
                    ctx_r.font = '25px godic';
                    ctx_r.fillText(select[b], this.x - 13, this.y + 10);

                }
            };
            ball.draw();
        }


        // select.map((value, index) => {
        //     console.log(value);
        // })
    }
};