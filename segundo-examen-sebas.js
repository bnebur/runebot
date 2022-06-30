// TAREAS

// 1. Definir una clase con las siguientes especificaciones:
//		a) Se llama Calculadora y recibe 1 argumento x, x por defecto debe valer 0.
//		b) Tiene un metodo llamado mostrar, este imprime el valor del atributo x de la clase. 
//		c) Tiene una funcion llamada sumar, esta recibe un argumento. Dentro de la funcion suma el valor al atributo x y lo asigna al atributo x. Al final llama mostrar.
//		d) Tiene una funcion llamada multiplicar, esta recibe un argumento. Dentro de la funcion multiplica el valor por atributo x y lo asigna al atributo x. Al final llama mostrar.
//		e) Tiene una funcion llamada potenciar, esta recibe un argumento. Dentro de la funcion eleva el atributo x al valor y lo asigna al atributo x. Al final llama mostrar.
// IMPLEMENTAR AQUI

class Calculadora{
	constructor(x=0){
		this.numero = x;
	}
	mostrar(){
		console.log(this.numero);
	}
	sumar(cualquierNum){
		this.numero += cualquierNum;
		this.mostrar();
	}
	multiplicar(){
		this.numero *= cualquierNum;
		this.mostrar();
	}
	potenciar(y){
		this.numero **= y;
		this.mostrar();
	}
}

// 2. Crear dos instancias de Calculadora, una llamada tiempo con el valor 2 y otra con el nombre potencia y valor 10.
// IMPLEMENTAR AQUI

let tiempo = new Calculadora(2);
let potencia = new Calculadora(10);

// 3. Realizar las siguientes operaciones:
//		a) Usando los metodos que definimos llevar al cuadrado a ambas instancias.
//		b) Sumar 23 a ambas instancias.
// IMPLEMENTAR AQUI

tiempo.potenciar(2);
potencia.potenciar(2);
// 4. Crear un array llamado numeros, que contiene 4 instancias de la clase Calculadora, con los valores 1, 2, 3, 4.
// IMPLEMENTAR AQUI

let numeros = [new Calculadora(1), new Calculadora(2), new Calculadora(3), new Calculadora(4)];


// 5. Usando un bucle for, incrementar el valor de cada instancia del array numeros en 1.
// IMPLEMENTAR AQUI


for(let calc of numeros){
	calc.sumar(1);
}