// TAREAS
// Importar el paquete robotjs.

const robot = require("robotjs");

// Dada la siguiente estructuras de datos completar las siguientes tareas:

const coordenadas = {
	x : [100, 300, 500, 200],
	y : [200, 400, 600, 100]
}

// 1. Implementar una funcion llamada largo, que toma como argumento una lista y devuelve el largo de la lista.
// IMPLEMENTAR AQUI

function largo(lista) {
	return lista.length;
}

// Testeo no debe dar error

console.log(`El objeto tiene x: ${largo(coordenadas.x)} y : ${largo(coordenadas.y)}`);

// 2. Implementar una funcion llamada mover que toma como argumento una coordenada, y luego usa el paquete robotjs para mover el raton de manera humana a la coordenada.
// IMPLEMENTAR AQUI

function mover(coord){
	robot.moveMouseSmooth(coord.x, coord.y);
}

// 3. Implementar un bucle for, dentro del bucle llamar la funcion mover en cada coordenada de la lista coordenadas.
// IMPLEMENTAR AQUI

for (let i=0; i < largo(coordenadas.x); i++){
	mover({x : coordenadas.x[i], y : coordenadas.y[i]});
}

// 4. Implementar un bucle while, donde la condicion siempre sea verdadera, dentro del bucle llamar la funcion mover en la primera y ultima coordenadas de la lista coordenadas.color

while (true){
	mover({x : coordenadas.x[0], y : coordenadas.y[0]});
	mover({x : coordenadas.x[-1], y : coordenadas.y[-1]});
}