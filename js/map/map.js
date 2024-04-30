let draggableElem = document.getElementById("map-elem");
let initialX = 0,
  initialY = 0;
let moveElement = false;

// События мыши
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

// Delete touch device
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();
console.log(isTouchDevice());

// Start (mouse down / touch start)
draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  // initial x and y points
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  // Start movement
  moveElement = true;
});

// Move
draggableElem.addEventListener(events[deviceType].move, (e) => {
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

// Mouse up / Touch end
draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);

draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});

// Отрисовка маршрута
const canvas = document.getElementById("draggable-elem");
const context = canvas.getContext("2d");

// context.beginPath();
// // ctx.fillStyle = "blue";
// // ctx.fill();
// context.rect(20, 72, 2, 2); // m
// context.moveTo(20, 100);
// context.lineTo(140, 10);
// context.lineTo(260, 100);
// context.stroke();
