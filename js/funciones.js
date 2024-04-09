const circulos = document.querySelectorAll(".circulo");

const contenedorTimer = document.querySelector(".timer");

const modal = document.querySelector(".modal");

const boton = document.querySelector(".startgame");

let tiempoInicial = 10;

let resultado = false; //true --> ganar | false --> perder

let puntuacion = 0;

let timer = null;

function juego(tiempo){
	//reiniciar juego
	puntuacion = 0;
	contenedorTimer.innerHTML = "";
	circulos.forEach(circulo => circulo.className = "circulo");
	//crear el timer
	for(let i = 0; i < tiempo; i++){
		let cuadro = document.createElement("div");
		cuadro.style.width = `calc(${100/tiempo}% - 10px)`;
		contenedorTimer.appendChild(cuadro);
	}
	timer = setInterval(() => {
		contenedorTimer.children[0].remove();
		if(contenedorTimer.children.length == 0){
			clearInterval(timer);
			resultado = false;
			modal.classList.add("visible");
            boton.innerText = "INTÉNTALO DE NUEVO"
		}
	}, 1000);
}


circulos.forEach(circulo => {
	circulo.addEventListener("click",() => {
		circulo.classList.add("invisible");
		puntuacion++;
		if(puntuacion == 12){
			clearInterval(timer);
			resultado = true;
			modal.classList.add("visible");
            boton.innerText = "UNA VEZ MÁS"
		}
	});
});

boton.addEventListener("click", () => {
	modal.classList.remove("visible");
	if(resultado){
		tiempoInicial = tiempoInicial > 6 ? tiempoInicial - 1 : 10;
	}
	juego(tiempoInicial);
});