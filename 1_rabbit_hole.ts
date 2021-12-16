import { askQuestion } from './ask_question';
import { print } from './print';

// we can make a custom type from an array
// hover 'Hole' and see that it's now defined as the union of whatever is in the 'holes' array
const holes = ['Badger', 'Fox', 'Swiss Cheese', 'Donut'] as const;
type Hole = typeof holes[number];

export function enterTheRabbitHole(name: string) {
	print(`Welcome ${name}!`);
	print('You can see a number of holes: ');
	holes.forEach((h, i) => print(`   ${i} - ${h}`));
	askQuestion('Which number hole contains the magical adventure?', enterHole);
}

// our askQuestion function always returns a string...
// ... even though we know in this case the user has been prompted for a number!
// sadly we can't enforce that right now, so we have to check
export function enterHole(hole: string) {}
