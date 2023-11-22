class Person {
  constructor(name, age, dni, sex, weight, height, birthYear) {
    this.name = name;
    this.age = age;
    this.dni = dni;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
    this.birthYear = birthYear;
  }
  showGen() {
    const genDesc = document.createElement("p");
    if (this.birthYear >= 1930 && this.birthYear <= 1948) {
      genDesc.innerHTML = `<p><b>Pertenece a la generación silenciosa:</b> caraterizada por la austeridad, son de un periodo caracterizado por conflictos belicos</p>`;
    } else if (this.birthYear >= 1949 && this.birthYear <= 1968) {
      genDesc.innerHTML = `<p><b>Pertenece a la generación Baby boom:</b> caraterizada por la ambición, son de un periodo caracterizado por paz y explosión demografica</p>`;
    } else if (this.birthYear >= 1969 && this.birthYear <= 1980) {
      genDesc.innerHTML = `<p><b>Pertenece a la generación X:</b> caraterizada por la obsesión por el exito, son de un periodo caracterizado por la crisis del 73 y la transición española</p>`;
    } else if (this.birthYear >= 1981 && this.birthYear <= 1993) {
      genDesc.innerHTML = `<p><b>Pertenece a la generación Y:</b> caraterizada por la frustración, son de un periodo caracterizado por el inicio de la digitalización</p>`;
    } else if (this.birthYear >= 1994 && this.birthYear <= 2010) {
      genDesc.innerHTML = `<p><b>Pertenece a la generación Z:</b> caraterizada por la irreverencia, son de un periodo caracterizado por la expansion masiva de internet</p>`;
    } else {
      genDesc.innerHTML = `<p><b>Pertenece a la generación T</b></p>`;
    }
    section.appendChild(genDesc);
  }
  oldEnough() {
    const oldDesc = document.createElement("p");
    if (this.age >= 18) {
      oldDesc.innerHTML = "<p><b>Es mayor de edad</b></p>";
    } else oldDesc.innerHTML = "<p><b>No es mayor de edad</b></p>";
    section.appendChild(oldDesc);
  }
  showData() {
    const dataDesc = document.createElement("p");
    dataDesc.innerHTML = `<h2>${this.name}</h2><p>Edad: ${this.age}</p><p>DNI: ${this.dni}</p><p>Sex: ${this.sex}</p><p>Peso: ${this.weight}kg</p><p>Altura: ${this.height}cm</p><p>Año de naciemiento: ${this.birthYear}</p>`;
    section.appendChild(dataDesc);
  }
}

const form = document.querySelector("form");
const mainBtn = document.querySelector("button");
const moreBtns = document.getElementById("moreBtns");
const section = document.querySelector("section");
let aPerson;

function createObject(e) {
  e.preventDefault();
  mainBtn.className = "d-none";
  form.className = "d-none";
  moreBtns.className = "row";
  const inputs = document.getElementsByTagName("input");
  aPerson = new Person(
    inputs[0].value,
    inputs[1].value,
    inputs[3].value,
    inputs[4].value,
    inputs[5].value,
    inputs[6].value,
    inputs[2].value
  );
  console.log(aPerson);
}
function showGeneration() {
  aPerson.showGen();
  btns[0].disabled = true;
}
function indicateAge() {
  aPerson.oldEnough();
  btns[1].disabled = true;
}
function data() {
  aPerson.showData();
  btns[2].disabled = true;
}
function reload() {
  window.location.reload(false);
}
const formPerson = document.querySelector("form");
formPerson.addEventListener("submit", createObject);
const btns = document.getElementsByClassName("btn");
btns[1].addEventListener("click", showGeneration);
btns[2].addEventListener("click", indicateAge);
btns[3].addEventListener("click", data);
btns[4].addEventListener("click", reload);