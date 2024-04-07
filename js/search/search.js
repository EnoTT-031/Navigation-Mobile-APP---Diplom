const classroom = [];

fetch("../database/data-base.json")
  .then((res) => res.json())
  .then((data) => {
    console.log("data >>>> ", data);

    data.forEach((line) => {
      classroom.push(...line.classroom);
    });
  });

const searchInput = document.getElementById("searchFormInput");
const searchOptions = document.getElementById("searchFormOutput");

function getOptions(word, stations) {
  return stations.filter((s) => {
    // Определить совпадает ли то что мы вбили в input
    // названиям станций внутри массива

    const regex = new RegExp(word, "gi");
    return s.name.match(regex); //!
  });
}

function displayOptions() {
  console.log("this.value >>", this.value);

  const options = getOptions(this.value, classroom);

  const html = options
    .map((classroom) => {
      const regex = new RegExp(this.value, "gi");
      const stationName = classroom.name.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `<li><span>${stationName}</span><button class='button-start' onclick=testLogStart()>Старт</button><button class='button-end'>Финиш</button></li>`;
    })
    .slice(0, 10)
    .join("");

  searchOptions.innerHTML = this.value ? html : null;
}

searchInput.addEventListener("change", displayOptions);
searchInput.addEventListener("keyup", displayOptions);

function testLogStart() {
  console.log("Button START");
}
function testLogEnd() {
  console.log("Button START");
}

function testLog() {
  console.log("Search done!");
}
