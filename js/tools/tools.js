// Функционал смены этажей
// Подумать как динамически задавать этажность выбранного здания
// В Первом и Втором корпусе по 4 этаже
function changeFloor(floor) {
  var floor1 = document.getElementById("floor-1");
  var floor2 = document.getElementById("floor-2");
  var floor3 = document.getElementById("floor-3");
  var floor4 = document.getElementById("floor-4");

  switch (floor) {
    case 1:
      floor1.style.display = "block";
      floor2.style.display = "none";
      floor3.style.display = "none";
      floor4.style.display = "none";
      break;
    case 2:
      floor1.style.display = "none";
      floor2.style.display = "block";
      floor3.style.display = "none";
      floor4.style.display = "none";
      break;
    case 3:
      floor1.style.display = "none";
      floor2.style.display = "none";
      floor3.style.display = "block";
      floor4.style.display = "none";
      break;
    case 4:
      floor1.style.display = "none";
      floor2.style.display = "none";
      floor3.style.display = "none";
      floor4.style.display = "block";
      break;
    default:
      break;
  }
}

var floor1 = document.getElementById("floor-1");
let ctx1 = floor1.getContext("2d");
var floor2 = document.getElementById("floor-2");
let ctx2 = floor2.getContext("2d");
var floor3 = document.getElementById("floor-3");
let ctx3 = floor3.getContext("2d");
var floor4 = document.getElementById("floor-4");
let ctx4 = floor4.getContext("2d");

// Массив строк
var floor_1a = (20, 20);
var floor_1b = (50, 50);
var floor_2a = (50, 50);
var floor_2b = (80, 80);

ctx1.beginPath();
ctx1.moveTo(20, 20);
ctx1.lineTo(20, 50);
ctx1.lineTo(50, 50);
ctx1.stroke();

ctx2.beginPath();
ctx2.moveTo(50, 50);
ctx2.lineTo(50, 80);
ctx2.lineTo(80, 80);
ctx2.stroke();

ctx3.rect(50, 50, 20, 100);
ctx3.fillStyle = "yellow";
ctx3.fill();

ctx4.rect(50, 50, 30, 100);
ctx4.fillStyle = "red";
ctx4.fill();

// Изменение масштаба карты и подписей

// function zoom(symbol) {
//     const pixel = "px"

//     text =  document.getElementById("paragraphText")
//     textSize = window.getComputedStyle(text).fontSize
//     textSizeValue = parseInt(textSize)

//     // image = document.getElementById("map")
//     floor1 = document.getElementById("floor1")
//     console.log(floor1);

//     // imageWidth = window.getComputedStyle(image).width
//     // imageWidthValue = parseInt(imageWidth)

//     // imageHeight = window.getComputedStyle(image).height
//     // imageHeightValue = parseInt(imageHeight)

//     // console.log("map", imageWidthValue, imageHeightValue);

//     switch (symbol) {
//         case "+":
//             textSizeValue += 1
//             // imageWidthValue += 50
//             // imageHeightValue += 50
//             break;
//         case "-":
//             // imageWidthValue -= 50
//             // imageHeightValue -= 50
//             textSizeValue -= 1
//             break;
//         default:
//             break;
//     }

//     textSizeValue += pixel
//     document.getElementById("paragraphText").style.fontSize = textSizeValue

//     // imageWidthValue += pixel
//     // document.getElementById("map").style.width = imageWidthValue

//     // imageHeightValue += pixel
//     // document.getElementById("map").style.height = imageHeightValue
// }

// Попытка менять этажи через canvas
