'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Login = () => {
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
		<div className="col-start-1 col-end-2 border border-grey-main rounded-lg p-5 flex gap-5 flex-col h-96 overflow-y-scroll">
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

					<button
						type="submit"
						className="w-72 py-1 px-2 rounded-lg border text-md hover:bg-bg-secondary hover:border-grey-main transition-all duration-300"
					>
						Submit
					</button>
					{isSubmitting && 'Submitting...'}
				</form>
			</div>
			<Image
				src={'/admin-useState.svg'}
				alt={''}
				width={800}
				height={800}
			></Image>
		</div>
	);
};

export default Login;
