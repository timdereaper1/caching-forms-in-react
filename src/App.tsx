import React from 'react';

interface IFormInputValues {
	email: string;
	message: string;
	name: string;
	telephone: string;
}

function getFormValues() {
	const storedValues = localStorage.getItem('form');
	if (!storedValues)
		return {
			email: '',
			message: '',
			name: '',
			telephone: '',
		};
	return JSON.parse(storedValues);
}

function App() {
	const [values, setValues] = React.useState<IFormInputValues>(getFormValues);

	React.useEffect(() => {
		localStorage.setItem('form', JSON.stringify(values));
	}, [values]);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		alert('An error occurred on the server. Please try again!!!');
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setValues((previousValues) => ({
			...previousValues,
			[event.target.name]: event.target.value,
		}));
	}

	return (
		<main>
			<header>
				<h1>Caching Form Inputs In React</h1>
				<h3>Building offline forms using local storage in react</h3>
			</header>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">
					Name
					<input
						autoComplete="off"
						type="text"
						name="name"
						id="name"
						placeholder="Mr. Anyisob Baidoo"
						onChange={handleChange}
						value={values.name}
					/>
					<small>An identifiable name which we can use to contact you.</small>
				</label>
				<label htmlFor="email">
					Email
					<input
						placeholder="e.g. user.email@domain.com"
						type="email"
						name="email"
						id="email"
						onChange={handleChange}
						value={values.email}
					/>
				</label>
				<label htmlFor="telephone">
					Telephone
					<input
						type="text"
						placeholder="e.g. +233(0)-392-498-2882"
						name="telephone"
						id="telephone"
						onChange={handleChange}
						value={values.telephone}
					/>
				</label>
				<label htmlFor="message">
					Message
					<textarea
						name="message"
						id="message"
						value={values.message}
						onChange={handleChange}
					></textarea>
					<small>Your contact message for us</small>
				</label>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
}

export default App;
