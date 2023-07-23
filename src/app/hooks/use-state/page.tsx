'use client';

import React from 'react';
import Image from 'next/image';

import { useState } from 'react';

import todoData from '@/data/todo-data.json';

import Counter from '@/components/useState/Counter';

type Props = {};

const UseState = (props: Props) => {
	const [count, setCount] = useState<number>(0);

	const [user, setUser] = useState({ isAdmin: true });

	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<number>();
	const [gender, setGender] = useState<string>();
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const handleSubmit = () => {
		event?.preventDefault();

		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
			alert('Form submission successful');
		}, 3000);
	};

	const [todoList, setTodoList] = useState(todoData);

	return (
		<>
			<section className="grid grid-cols-2 grid-rows-3 gap-5">
				<Counter />
				<div className="col-start-2 col-end-3 border border-grey-main rounded-lg p-5 flex gap-5 flex-col">
					<h1 className="text-2xl">2. Conditional Rendering</h1>
					<div>
						{user.isAdmin ? (
							<h1 className="mb-5">Admin: TRUE</h1>
						) : (
							<h1 className="mb-5">Admin: FALSE</h1>
						)}
						<table className="flex flex-col gap-2">
							<tr className="flex gap-2">
								<th>id</th>
								<th>Name</th>
								{user.isAdmin && <th>Action</th>}
							</tr>
							<tr className="flex gap-3">
								<td>1.</td>
								<td>Juraj</td>
								{user.isAdmin && (
									<td>
										<button className="border rounded-lg px-2 bg-orange-main border-white text-white">
											Edit
										</button>
									</td>
								)}
							</tr>
						</table>
					</div>
				</div>
				<div className="col-start-1 col-end-2 border border-grey-main rounded-lg p-5 flex gap-5 flex-col">
					<h1 className="text-2xl">3. Form Handling</h1>
					<div>
						<form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
								className="w-72 py-1 px-2 rounded-lg border"
							>
								Submit
							</button>
							{isSubmitting && 'Submitting...'}
						</form>
					</div>
				</div>
				<div className="col-start-2 col-end-3 border border-grey-main rounded-lg p-5 flex gap-5 flex-col">
					<h1 className="text-2xl">4. TODO list (funcionalities)</h1>
					<div>nehehehehe</div>
				</div>
			</section>
		</>
	);
};

export default UseState;
