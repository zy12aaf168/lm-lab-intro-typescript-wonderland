import readline from 'readline';

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export function askQuestion(question: string, callback: (arg: string) => void) {
	reader.question(question, callback);
}
