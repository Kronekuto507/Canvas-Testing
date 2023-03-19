console.log("SHOOT OUT TO UTP INGENIERIA EN SISTEMAS ");

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var press = document.getElementById("btn");
var ctx = canvas.getContext("2d");

/*Rectangle
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = "rgba(0,255,0,0.5)";
ctx.fillRect(200, 400, 100, 100);
ctx.fillStyle = "rgba(0,0,255,0.5)";
ctx.fillRect(500, 300, 100, 100);
ctx.fillStyle = "rgba(0,220,255,0.5)";
ctx.fillRect(50, 500, 100, 100);
*/
//Line
var x = new Array(102);
var y = new Array(102);
for (let i = 0; i < 102; i++) {

    x[i] = (Math.random() * innerWidth) - 10;
    y[i] = (Math.random() * innerHeight) - 10;
    //Use windows innerWidth
}
//var x = Math.random() * innerWidth;
//var y = Math.random() * innerHeight;
var dx = new Array(102);
var dy = new Array(102);

for (let i = 0; i < 102; i++) {

    dx[i] = (Math.random() * 10);
    dy[i] = (Math.random() * 10);
    //Use windows innerWidth
}


function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var a = Math.random() * 255;
    var b = Math.random() * 255;
    var c = Math.random() * 255;
    /*ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.strokeStyle = "rgba(" + String(a) + "," + String(b) + "," + String(c) + "," + "1" + ")";
    ctx.stroke();*/


    for (let i = 0; i < 102; i++) {

        var a = Math.random() * 255;
        var b = Math.random() * 255;
        var c = Math.random() * 255;
        ctx.beginPath();
        ctx.arc(x[i], y[i], 20, 0, Math.PI * 2, false);
        //ctx.strokeStyle = "rgba(" + String(a) + "," + String(b) + "," + String(c) + "," + "1" + ")";
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        x[i] += dx[i];
        y[i] += dy[i];
        if (x[i] + 20 > canvas.width || x[i] + 20 < 0) {
            dx[i] = -dx[i];
            x[i] += dx[i];
        }

        if (y[i] + 20 > canvas.height || y[i] + 20 < 0) {
            dy[i] = -dy[i];
            y[i] += dy[i];
        }



    }



}
animate();
press.addEventListener("click", () => { location.reload(); });
/*ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(100, 200);
ctx.lineTo(50, 300);
ctx.moveTo(200, 400);
ctx.lineTo(400, 300);
ctx.lineTo(50, 300);
ctx.lineTo(200, 400);
ctx.lineTo(400, 300);
ctx.lineTo(300, 100);
//Before stroke method
ctx.strokeStyle = "pink";
ctx.stroke();

function eventForButton(event) {
    var buttonTarget = event.target;
    /*var x = new Array(12);
    var y = new Array(12);*/

/*
    if (buttonTarget.id == "btn") {
        /* for (let i = 0; i < 12; i++) {

             x[i] = (Math.random() * innerWidth) - 10;
             y[i] = (Math.random() * innerHeight) - 10;
             //Use windows innerWidth
         }*/
/*        for (let i = 0; i < 80; i++) {

            var x = Math.random() * innerWidth;
            var y = Math.random() * innerHeight;
            var a = Math.random() * 255;
            var b = Math.random() * 255;
            var c = Math.random() * 255;
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2, false);
            ctx.strokeStyle = "rgba(" + String(a) + "," + String(b) + "," + String(c) + "," + "1" + ")";
            ctx.stroke();

        }

        buttonTarget.id = "btn-pressed";
    } else if (buttonTarget.id == "btn-pressed") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        buttonTarget.id = "btn";
    }

}
//Arc-circle
press.addEventListener("click", eventForButton); */