

let combinacion = 1234; // ????????????????????


function averiguar(combinacion) {
	for (let intento=0; intento < 10000; intento++) {
		let coinciden = combinacion === intento;
		console.log(coinciden);
		if (coinciden===true) {
			return coinciden;
		}
	}
}

averiguar(combinacion);