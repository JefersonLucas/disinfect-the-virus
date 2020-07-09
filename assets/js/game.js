/*!
 * Jeferson Luckas - Disinfect the virus
 *
 * Copyright (c) 2020 Jeferson Luckas
 * Released under the MIT license
 * https://github.com/JefersonLucas/disinfect-the-virus/blob/master/LICENSE
 *
 */

// Variáveis globais

let altura = largura = 0;
let vidas = 1;
let tempo = 30;
let tempoVirus = 1500;

// Recuperar e estabelece o nível do jogo

let nivel = window.location.search;

nivel = nivel === "" ? window.location.href = "index.html" : nivel.replace("?" , "");

if (nivel === "normal") {
	tempoVirus = 1500;
}
else if (nivel === "dificil") {
	tempoVirus = 1000;
}
else if (nivel === "impossivel") {
	tempoVirus = 750;
}

// Altura e largura do jogo

let ajustaTamanhoPalcoJogo = function() {
	altura = window.innerHeight;
	largura = window.innerWidth;
}

// Posição randômica

function posicaoRandomica() {

	// Remover o vírus anterior
	
	if(document.getElementById("virus")) {
	
		document.getElementById("virus").remove();

		if (vidas > 3) {
			window.location.href = "game-over.html";
		}
		else {
			document.getElementById("v" + vidas).className = "coracao far fa-heart fa-lg";
			vidas++;
		}
	}

	let posicaoX = Math.floor(Math.random() * largura) - 90;
	let posicaoY = Math.floor(Math.random() * altura) - 90;

	// Posição do vírus não sumir no browser

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	// Criando elementos HTML

	const virus = document.createElement("img");
	virus.src = VirusAleatorio();
	virus.className = tamanhoAleatorio() +" "+ ladoAleatorio();
	virus.style.left = `${posicaoX}px`;
	virus.style.top = `${posicaoY}px`;
	virus.style.position = "absolute";
	virus.id = "virus";

	virus.onclick = function() {
		this.remove();
	}

	document.body.appendChild(virus);
}

// Tamanho aleatório

function tamanhoAleatorio() {

	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return "tamanho-1";
		case 1:
			return "tamanho-2";
		case 2:
			return "tamanho-3";
	}
}

// Lado aleatório

function ladoAleatorio() {

	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return "lado-A";
		case 1:
			return "lado-B";
	}
}

// Vírus aleatório

function VirusAleatorio() {	

	var virus = Math.floor(Math.random() * 4)

		switch(virus){
		case 0:
			return "assets/img/virus-01.png";
		case 1:
			return "assets/img/virus-02.png";
		case 2:
			return "assets/img/virus-03.png";
		case 3:
			return "assets/img/virus-04.png";
	}
}

// Cronômetro

var cronometro = setInterval(function() {
	if (tempo < 0) {
		clearInterval(cronometro);
		clearInterval(criaVirus);
		window.location.href = "you-win.html";
	}
	else {
		if (tempo < 10) {
			tempo = "0"+tempo;
			document.getElementById("cronometro").style.color = "#f44336";
		}
		document.getElementById("tempo").innerHTML = tempo;
	}
	tempo--;
}, 1000);

// Intervalo de tempo para a chamada da função

var criaVirus = setInterval(function() {
	posicaoRandomica();
}, tempoVirus);

// Funções chamadas

window.onresize = ajustaTamanhoPalcoJogo();
