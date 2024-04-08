// Создание и настройка Canvas
var canvas = document.querySelector("canvas");

var canvasMap = canvas.getContext("2d");

// canvasMap.fillStyle = "yellow";

// canvasMap.fillRect(10, 10, 100, 100);

// Алгоритм поиска пути
// Алгоритм Дейкстры
// На вход передаётся матрица дорог, начальная и конечная точка маршрута

function dijkstra(graph, start, end) {
  const distances = {};
  const visited = new Set();
  const path = {};

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
    current = path[current];
  }
  shortPath.unshift(start);

  return shortPath;
}

// Взвешенный граф (указаны расстояние между точками)

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
function routePlan() {
  // Передача точек из input в Алгоритм Поиска и вывод работы в консоль
  var valueStart = document.getElementById("routeStart").value;
  var valueEnd = document.getElementById("routeEnd").value;
  // Проверка, видно ли input
  console.log(valueStart.length, valueEnd);
  if (valueStart.length == 0 && valueEnd.length == 0) {
    var notification = document.getElementById("notification-error-both");
  } else if (valueStart.length == 0) {
    var notification = document.getElementById("notification-error-start");
  } else if (valueEnd.length == 0) {
    var notification = document.getElementById("notification-error-end");
  } else if (valueStart == valueEnd) {
    var notification = document.getElementById("notification-error-equal");
  } else if (
    graph.hasOwnProperty(valueStart) == false ||
    graph.hasOwnProperty(valueEnd) == false
  ) {
    var notification = document.getElementById("notification-error-not-found");
  } else {
    const result = dijkstra(graph, valueStart, valueEnd);
    var notification = document.getElementById("notification-done");
    console.log(result);
  }
  notification.style.display = "block"; // Сам показ уведомления

  setTimeout(function () {
    notification.style.display = "none";
  }, 3000);

  console.log(graph.hasOwnProperty(valueEnd));
}

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

//* Тестовая функция для отображения Формы поиска
function testForm() {
  searchForm = document.getElementById("search-form");
  searchForm.style.display = "block";
}

function searchFormClose() {
  searchForm = document.getElementById("search-form");
  searchForm.style.display = "none";
}

// Функция, которая отвечает ха уведомление, что маршрут построен
// Решение спорное. Нужно подумать стоит ли и в каком виде его высвечивать
// С другой стороны в том же Яндекс Навигаторе уведомление через голос - тут через визуал
// Правда можно подумать, а может и голос втянуть???

// Нужно сделать проверку, есть ли такой кабинет. Если его нет - pop-up "Нет такого кабинета"
// Реализовать это через for проверку в графах
