/*!
 * Jeferson Luckas - Disinfect the virus
 *
 * Copyright (c) 2020 Jeferson Luckas
 * Released under the MIT license
 * https://github.com/JefersonLucas/disinfect-the-virus/blob/master/LICENSE
 *
 */

// Recupera e estabelece o nível do jogo

pontos = window.location.search;

pontos = pontos === "" ? window.location.href = "index.html" : pontos.replace("?" , "");

// Redirecionamento

var reiniciar = document.getElementById("reiniciar");

if (reiniciar) {
	document.getElementById("reiniciar").onclick = function() {
	window.location.href = "index.html";
	}
}

