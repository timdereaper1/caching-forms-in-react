import React from 'react';

interface TextProps {
	content: string;
}

const URL_REGEX =
	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

function Text({ content }: TextProps) {
	const words = content.split(' ');
	return (
		<p>
			{words.map((word) => {
				return word.match(URL_REGEX) ? (
					<>
						<a href={word}>{word}</a>{' '}
					</>
				) : (
					word + ' '
				);
			})}
		</p>
	);
}

export default function App() {
	const [text, setText] = React.useState('');

	return (
		<main>
			<textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
			<Text content={text} />
		</main>
	);
}
