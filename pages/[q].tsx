import type {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import { useEffect, useState } from 'react';
import questions from '../model';

export default function QuestionPage({
	questions,
	questionIndex,
	questionNumber,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const currentQuestion = questions[questionIndex];
	const isFirstQuestion = questionIndex === 0;
	const isLastQuestion = questionIndex === questions.length - 1;

	const [existingAnswer, setExistingAnswer] = useState<number | null>(null);
	useEffect(() => {
		const currentAnswer = localStorage.getItem(`${questionIndex}`);
		if (currentAnswer != null) {
			setExistingAnswer(Number(currentAnswer));
		}
	}, [existingAnswer, questionIndex]);

	return (
		<>
			<h1>{`Question #${questionNumber}`}</h1>
			<form
				id="myform"
				onSubmit={(e) => {
					e.preventDefault();
					window.location.href = isLastQuestion
						? '/results'
						: `/${questionNumber + 1}`;
				}}
			>
				<p>{currentQuestion.value}?</p>
				<div>
					{currentQuestion.answers.map((answer, idx) => {
						return (
							<div key={answer.value}>
								<input
									defaultChecked={idx === existingAnswer}
									type="radio"
									id={answer.value}
									value={answer.value}
									name="answer"
									onClick={(_) => {
										localStorage.setItem(`${questionIndex}`, `${idx}`);
									}}
								/>
								<label htmlFor={answer.value}>{answer.value}</label>
							</div>
						);
					})}
				</div>
			</form>
			<div className="controls">
				{isFirstQuestion ? null : (
					<a href={`/${questionNumber - 1}`}>Previous</a>
				)}
				<button form="myform">{isLastQuestion ? 'Submit' : 'Next'}</button>
			</div>
		</>
	);
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	if (typeof params?.q !== 'string' || isNaN(Number(params.q))) {
		throw new Error();
	}
	// const question = questions[];
	return {
		props: {
			questions,
			questionIndex: Number(params.q) - 1,
			questionNumber: Number(params.q),
		},
	};
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	return {
		paths: questions.map((_, idx) => ({
			params: { q: `${idx + 1}` },
		})),
		fallback: false,
	};
};
