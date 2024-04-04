/*(Russia), цифры в скобках(только в расписке) - строка 
canvas(22) - ищет элемент в документе с id
ctx(23) - он задает контекст в виде 2d формата
функция Ball(25) - задает кординаты(26, 27) и скорость передвижения(28, 29) 
функция circle(32) - создает круг заданными кординатами(26, 27)
функция draw(41) - рисует круг функцией circle
функция move(45) - создает новую скорость по x, y
функция checkCollision(50) - проверяет чтобы мяч не вылетал за границы игравой карты по x, y
ball(59) - создает новый мяч
функция setInterval(61) - вызывает функцию draw, move, checkCollision. Ставит игравую карту и обновляется 30 милисекунд
(English), numbers in brackets (only in receipt) - line
canvas(22) - searches for an element in the document with id
ctx(23) - it specifies the context in 2d format
function Ball(25) - sets coordinates (26, 27) and movement speed (28, 29)
function circle(32) - creates a circle with given coordinates(26, 27)
function draw(41) - draws a circle with the circle function
function move(45) - creates a new speed in x, y
function checkCollision(50) - checks that the ball does not fly outside the boundaries of the playing card along x, y
ball(59) - creates a new ball
function setInterval(61) - calls the function draw, move, checkCollision. Places the playing card and updates in 30 milliseconds
*/
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let Ball = function () {
    this.x = 100;
    this.y = 100;
    this.xSpeed = -2;
    this.ySpeed = 3;
}

let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};
Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true);
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
if (this.x < 0 || this.x > 200) {
    this.xSpeed = -this.xSpeed;
}
if (this.y < 0 || this.y > 200) {
    this.ySpeed = -this.ySpeed;
}
};

let ball = new Ball();

setInterval(function () {
ctx.clearRect(0, 0, 200, 200);

ball.draw();
ball.move();
ball.checkCollision();

ctx.strokeRect(0, 0, 200, 200);
}, 30);
