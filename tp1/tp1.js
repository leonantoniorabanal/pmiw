//https://youtu.be/A2vH0QPY6xU?si=ktJCAtHWp1k8vxNE
// Leon Antonio Rabanal comision 3
let cant = 10;
let cuadrados; 
let mouseEstaDentro = true;
let mostrarCirculos = false;



function preload() {
  // se busca dentro de la carpeta data que cree
  cuadrados = loadImage("data/cuadradosdos.jpeg");
}

function setup() {
  createCanvas(800, 400);
  reiniciar();
}

function draw() {
  background(255);
  image(cuadrados, 0, 0, 400, 400); // Usa la variable 'cuadrados' que se cargó en preload
  dibujarCuadricula(6, 6);

  if (mostrarCirculos) {
    for (let i = 0; i < cant; i++) {
      let r = random(30, 60);
      let mitad = r / 2;
      let xCirculo = random(400 + mitad, 800 - mitad);
      let yCirculo = random(mitad, 400 - mitad);

      // función propia que calcula la distancia al centro
      let d = distanciaCentroDerecha(xCirculo, yCirculo);

      // saturación varía con la distancia
      let saturacion = map(d, 0, 300, 255, 0);
      let brillo = 255;
      let tono = i * 255.0 / cant;

      colorMode(HSB);
      fill(tono, saturacion, brillo);
      ellipse(xCirculo, yCirculo, r, r);
    }
    mostrarCirculos = false; 
    colorMode(RGB);
  }
}

function dibujarCuadricula(filas, columnas) {
  stroke(0);
  strokeWeight(3);
  let bloque = 65;
  let pasoX = bloque + 2;
  let pasoY = bloque + 2;

  for (let j = 0; j < filas; j++) {
    for (let i = 0; i < columnas; i++) {
      let x0 = 400 + i * pasoX;
      let y0 = j * pasoY;

      //si el mouse esta adentro
      if (mouseX > x0 && mouseX < x0 + bloque && mouseY > y0 && mouseY < y0 + bloque) {
        // Si el mouse está dentro se aplica un color diferente
        
        if (mouseEstaDentro) { // Solo aplica el color  si el mouse entró 
          let r = random(0, 255);
          fill(r, 200, 255);
          colorMode(HSB);
        } else {
          //  mouse afuera
          fill(255);
          colorMode(RGB);
        }
      } else {
        //mouse afuera
        fill(255);
        colorMode(RGB);
      }

      // cuadrados anidados
      for (let k = 0; k < 5; k++) {
        let tamaño = bloque - k * 8;
        rect(x0, y0, tamaño, tamaño);
      }
    }
  }
}

// cuando el mouse entra o sale 
function mouseEntered() {
  mouseEstaDentro = true;
}

function mouseExited() {
  mouseEstaDentro = false;
}

// mostrar circulos
function mousePressed() {
  mostrarCirculos = true;
}

// función propia que retorna un valor
function distanciaCentroDerecha(x, y) {
  let centroX = 600;
  let centroY = 200;
  return dist(x, y, centroX, centroY); s
}

// Función para reiniciar el fondo 
function reiniciar() {
  background(255);
}
