export type Answer = {
	value: string;
	isCorrect: boolean;
};

export type Question = {
	value: string;
	answers: Answer[];
};

let questions: Question[] = [
	{
		value: 'What is the color of the sky',
		answers: [
			{ value: 'Blue', isCorrect: true },
			{ value: 'Purple', isCorrect: false },
			{ value: 'Pink', isCorrect: false },
			{ value: 'Brown', isCorrect: false },
		],
	},
	{
		value: 'How many wheels does a car have',
		answers: [
			{ value: '4', isCorrect: true },
			{ value: '3', isCorrect: false },
			{ value: '2', isCorrect: false },
			{ value: '1', isCorrect: false },
		],
	},
	{
		value: 'Which of the following animals say "woof"',
		answers: [
			{ value: 'Dog', isCorrect: true },
			{ value: 'Cat', isCorrect: false },
			{ value: 'Fish', isCorrect: false },
			{ value: 'Bird', isCorrect: false },
		],
	},
	{
		value: 'Which of the following vegetables are orange',
		answers: [
			{ value: 'Carrot', isCorrect: true },
			{ value: 'Eggplant', isCorrect: false },
			{ value: 'Tomato', isCorrect: false },
			{ value: 'Cucumber', isCorrect: false },
		],
	},
	{
		value: 'Which of the following cities is Italy’s capital',
		answers: [
			{ value: 'Rome', isCorrect: true },
			{ value: 'Paris', isCorrect: false },
			{ value: 'Jerusalem', isCorrect: false },
			{ value: 'London', isCorrect: false },
		],
	},
];

export default questions;
