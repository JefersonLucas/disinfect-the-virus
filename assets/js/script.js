/*!
 * Jeferson Luckas - Disinfect the virus
 * 
 * Copyright (c) 2020 Jeferson Luckas
 * Released under the MIT license
 * https://github.com/JefersonLucas/disinfect-the-virus/blob/master/LICENSE
 *
 */

// Altura e largura do jogo

var altura = 0;
var largura = 0;

window.onresize = function() {
	altura = window.innerHeight;
	largura = window.innerWidth;

	console.log(altura, largura);
} 