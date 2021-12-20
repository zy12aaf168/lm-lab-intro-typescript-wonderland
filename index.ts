import { enterTheRabbitHole } from './1_rabbit_hole';
import { clear, print, askQuestion } from './console';

export function haveAdventures(): void {
	clear(false);
	print('--------------------------');
	print('| Welcome to Wonderland! |');
	print('--------------------------');

	askQuestion(`What's your name? `, failImmediately); // 👉 FIXME ❌
}

function failImmediately(): void {
	clear(false);
	return endAdventure();
}

function checkName(name: string): void {
	if (name && name.length > 0) {
		return enterTheRabbitHole(name);
	} else {
		print(`I don't know who you are!`);
		return endAdventure();
	}
}

export function endAdventure(): void {
	print('***************************************');
	print('You did not make it through Wonderland. 😭');
	askQuestion('Press ENTER to restart! ', haveAdventures);
}

haveAdventures();
