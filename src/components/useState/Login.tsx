'use client';

import React, { useState } from 'react';

type Props = {};

const Login = (props: Props) => {
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<number>();
	const [gender, setGender] = useState<string>();
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const handleOnSubmit = () => {
		event?.preventDefault();

		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			alert('Form submission successful');
		}, 3000);
	};

	return (
		<div>
			<div className="col-start-1 col-end-2 border border-grey-main rounded-lg p-5 flex gap-5 flex-col">
				<h1 className="text-2xl">3. Form Handling</h1>
				<div>
					<form onSubmit={handleOnSubmit} className="flex flex-col gap-2">
						<input
							type="text"
							placeholder="Enter name"
							onChange={(e) => {
								setName(e.target.value);
							}}
							value={name}
							required
							className="w-72 py-1 px-2 rounded-lg bg-bg-secondary"
						/>
						<input
							type="email"
							placeholder="Enter email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
							required
							className="w-72 py-1 px-2 rounded-lg bg-bg-secondary"
						/>
						<label>Gender</label>
						<select
							onChange={(e) => {
								setGender(e.target.value);
							}}
							value={gender}
							required
							className="w-72 py-1 px-2 rounded-lg text-black"
						>
							<option>Male</option>
							<option>Female</option>
						</select>
						<br />

						<button type="submit" className="w-72 py-1 px-2 rounded-lg border">
							Submit
						</button>
						{isSubmitting && 'Submitting...'}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
