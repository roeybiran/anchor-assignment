import { useEffect, useState } from 'react';
import questions from '../model';
import type { Answer } from '../model';

export default function Results() {
	const [score, setScore] = useState<number>(0);
	useEffect(() => {
		const score = questions
			.map((question, questionIdx) => {
				const answerIndex = localStorage.getItem(`${questionIdx}`) ?? 0;
				return question.answers[Number(answerIndex)].isCorrect ? 20 : 0;
			})
			// @ts-ignore
			.reduce((prev, next) => prev + next);
		setScore(score);
	}, []);
	return (
		<>
			<h1>Your Score is:</h1>
			<p className="score">{score}</p>
		</>
	);
}
