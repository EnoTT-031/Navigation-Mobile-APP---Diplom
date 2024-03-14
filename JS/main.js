// Создание и настройка Canvas
var canvas = document.querySelector("canvas");

var canvasMap = canvas.getContext("2d");

canvasMap.fillStyle = "yellow";

canvasMap.fillRect(10, 10, 100, 100);

// Алгоритм поиска пути
// Алгоритм Дейкстры
// На вход передаётся матрица дорог, начальная и конечная точка маршрута
function searchRoute(graph, start, end) {
  const distances = {};
  const visited = new Set(); // Понять, что делает строка !!!
  const path = {};

  // Проверяем, не задаётся ли маршрут в начальную точку
  for (const key in graph) {
    if (key !== start) {
      distances[key] = Infinity;
    } else {
      distances[start] = 0;
    }
  }

  while (!visited.has(end)) {
    let lowestDistance = Infinity;
    let node = null;

    for (const key in distances) {
      if (lowestDistance > distances[key] && !visited.has(key)) {
        lowestDistance = distances[key];
        node = key;
      }
    }

    const neighbors = graph[node];
    for (const key in neighbors) {
      const newDistance = distances[node] + neighbors[key];
      if (newDistance < distances[key]) {
        distances[key] = newDistance;
        path[key] = node;
      }
    }

    visited.add(node);
  }

  const shortPath = [];
  let current = end;
  while (current !== start) {
    shortPath.unshift(current);
    current = path(current);
  }

  shortPath.unshift(start);

  return shortPath;
}

// Кнопка для очистки полей в форме поиска
function clearFormInputStart() {
  entryFieldStart = "";
  document.getElementById("routeStart").value = entryFieldStart;
}
function clearFormInputEnd() {
  entryFieldEnd = "";
  document.getElementById("routeEnd").value = entryFieldEnd;
}

// Проверка работоспособности полей ввода и переноса данных далее
// Работа с формами
function getElement() {
  var valueStart = document.getElementById("routeStart").value;
  var valueEnd = document.getElementById("routeEnd").value;
  // Проверка, видно ли input
  console.log(valueStart, valueEnd);
  // Вызов функции подсчёта и вывод результата (пока что в консоль)
  const result = searchRoute(arrPoint, valueStart, valueEnd);
  console.log("Route ->", result);
  document.getElementById("result").value = result;
}

console.log(arrPoint);

// Функция для удобной работы с формой. Переход по enter между input
// Ещё подумать над названием функции, не забыв переименовать и в html
function transitionInput(event, nextInputID) {
  if (event.key === "Enter") {
    event.preventDefault();
    const nextInput = document.getElementById(nextInputID);
    if (nextInput) {
      nextInput.focus();
    }
  }
}

// Функция, которая отвечает ха уведомление, что маршрут построен
// Решение спорное. Нужно подумать стоит ли и в каком виде его высвечивать
// С другой стороны в том же Яндекс Навигаторе уведомление через голос - тут через визуал
// Правда можно подумать, а может и голос втянуть???
function showNotification() {
  var notification = document.getElementById("notification");
  notification.style.display = "block"; // Сам показ уведомления

  setTimeout(function () {
    notification.style.display = "none";
  }, 2000);
}
// Нужно сделать проверку, есть ли такой кабинет. Если его нет - pop-up "Нет такого кабинета"
// Реализовать это через for проверку в графах
