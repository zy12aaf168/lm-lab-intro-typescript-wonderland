import { enterTheRabbitHole } from './1_rabbit_hole';
import { askQuestion } from './ask_question';
import { print } from './print';

// This lab is based on Alice's Adventures in Wonderland
// If you're not familiar with the book, it might seem extremely strange! Just go with it and have fun.

function haveAdventures() {
	print('Welcome to Wonderland!');
	askQuestion(`What's your name? `, enterTheRabbitHole);
}

haveAdventures();
