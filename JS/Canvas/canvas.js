// Создание и настройка Canvas для карты

var canvas = document.getElementById("mapCanvas");
var ctx = canvas.getContext("2d");
var image = new Image();
var scale = 1;
var lastX, lastY;
var isDragging = false;

// Загрузка изображения карты
image.src = "./map.jpg";

// Функция отрисовки карты с учетом масштаба и смещения
function drawMap() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var imageWidth = image.width * scale;
  var imageHeight = image.height * scale;
  ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
}

// Обработчик события начала перемещения
canvas.addEventListener("touchstart", function (e) {
  e.preventDefault();
  var touch = e.touches[0];
  lastX = touch.clientX;
  lastY = touch.clientY;
  isDragging = true;
});

// Обработчик события перемещения
canvas.addEventListener("touchmove", function (e) {
  e.preventDefault();
  if (isDragging) {
    var touch = e.touches[0];
    var deltaX = touch.clientX - lastX;
    var deltaY = touch.clientY - lastY;
    lastX = touch.clientX;
    lastY = touch.clientY;
    ctx.translate(deltaX / scale, deltaY / scale);
    drawMap();
  }
});

// Обработчик события окончания перемещения
canvas.addEventListener("touchend", function (e) {
  e.preventDefault();
  isDragging = false;
});

// Обработчик события изменения масштаба
canvas.addEventListener("gesturechange", function (e) {
  e.preventDefault();
  scale *= e.scale;
  drawMap();
});

// Установка начального размера canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Обработка загрузки изображения
image.onload = function () {
  drawMap();
};
