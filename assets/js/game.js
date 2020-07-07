/*!
 * Jeferson Luckas - Disinfect the virus
 *
 * Copyright (c) 2020 Jeferson Luckas
 * Released under the MIT license
 * https://github.com/JefersonLucas/disinfect-the-virus/blob/master/LICENSE
 *
 */

// Altura e largura do jogo

let altura = largura = 0;

let ajustaTamanhoPalcoJogo = function() {
	altura = window.innerHeight;
	largura = window.innerWidth;
}

// Posição randômica

function posicaoRandomica() {

	let posicaoX = Math.floor(Math.random() * largura) - 90;
	let posicaoY = Math.floor(Math.random() * altura) - 90;

	// Para a posição do vírus não sumir no browser

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	// Criando elementos HTML

	const virus = document.createElement("img");

	virus.src = "assets/img/virus.png";

	virus.className = "virus";

	virus.style.left = `${posicaoX}px`;
	virus.style.top = `${posicaoY}px`;
	virus.style.position = "absolute";
	
	document.body.appendChild(virus);
}

window.onresize = ajustaTamanhoPalcoJogo();
posicaoRandomica();