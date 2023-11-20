class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }
  mostrarGeneracion() {
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      document.write(
        `<p><b>Pertenece a la generación silenciosa:</b> caraterizada por la austeridad, pertenecen a un periodo caracterizado por conflictos belicos</p>`
      );
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      document.write(
        `<p><b>Pertenece a la generación Baby boom:</b> caraterizada por la ambición, pertenecen a un periodo caracterizado por paz y explosión demografica</p>`
      );
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      document.write(
        `<p><b>Pertenece a la generación X:</b> caraterizada por la obsesión por el exito, pertenecen a un periodo caracterizado por la crisis del 73 y la transición española</p>`
      );
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      document.write(
        `<p><b>Pertenece a la generación Y:</b> caraterizada por la frustración, pertenecen a un periodo caracterizado por el inicio de la digitalización</p>`
      );
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      document.write(
        `<p><b>Pertenece a la generación Z:</b> caraterizada por la irreverencia, pertenecen a un periodo caracterizado por la expansion masiva de internet</p>`
      );
    } else {
      document.write(`<p><b>Pertenece a la generación T:</b></p>`);
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write("<p><b>Es mayor de edad</b></p>");
    } else document.write("<p><b>No es mayor de edad</b></p>");
  }
  mostrarDatos() {
    document.write(`<h2>${this.nombre}</h2>`);
    document.write(`<p>Edad: ${this.edad}</p>`);
    document.write(`<p>DNI: ${this.dni}</p>`);
    document.write(`<p>Sexo: ${this.sexo}</p>`);
    document.write(`<p>Peso: ${this.peso}kg</p>`);
    document.write(`<p>Altura: ${this.altura}cm</p>`);
    document.write(`<p>Año de naciemiento: ${this.añoNacimiento}</p>`);
  }
}