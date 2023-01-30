import { endAdventure } from '..';
import { meetTheCheshireCat } from './chapter_2_cheshire_cat';
import { clear, print, askQuestion } from './ui/console';

const HOLES = ['Badger', 'Fox', 'Swiss Cheese', 'Donut'] as const; // 👉 FIXME ❌

// ⚠️ It can be very useful to make a custom type based on the contents of an array

// 👉 Hover 'Hole' in the below line and see that it's defined as
// 		the union of whatever is in the 'HOLES' array
type Hole = typeof HOLES[number];
// 💡 This is because of the `as const` declaration above - that says that the *contents*
//     of the HOLES array are not allowed to change, so TypeScript can safely create a type
//     based on the contents of HOLES

export function enterTheRabbitHole(name: string) {
	clear(false);
	print('------------------------');
	print(`🥳 Welcome ${name}! 🥳`);
	print('------------------------');
	print('You can see a number of holes: ');
	HOLES.forEach((h, i) => print(`   ${i} - ${h}`));
	askQuestion('Which number hole will you choose?', chooseHole);
}

function chooseHole(input: string) {
	// first we have to check our user input is valid
	const hole = parseHoleInput(input);

	if (hole === undefined) {
		print(`😮`);
		print(`${input} is an invalid input 😭`);
		return endAdventure();
	}

	// the input is valid!
	return enterHole(hole);
}

// 💡 We've separated out this function so our user input is isolated from the logic
//    i.e. this function does all the work of translating all possible user inputs into either:
//           a Hole    👈 if the input is valid
//			 undefined 👈 if the input is invalid
function parseHoleInput(input: string): Hole | undefined {
	//  it might seem like we know this is a number,
	//  but of course the user can enter any nonsense to the prompt!
	const chosenHole = parseInt(input);

	// now we verify it's valid
	if (isNaN(chosenHole)) {
		return undefined;
	}

	if (chosenHole < 0 || chosenHole > HOLES.length - 1) {
		return undefined;
	}

	// we know the input is valid so we can return a Hole
	return HOLES[chosenHole];
}

export function enterHole(hole: Hole): void {
	clear(true);

	// @ts-ignore 👉 FIXME ❌
	if (hole === 'Rabbit') {
		return meetTheCheshireCat();
	} else {
		print(`WHAAAAT ❓🤯😅❓`);
		print(`You can't find adventures down a ${hole} hole!`);
		return endAdventure();
	}
}
