import React from 'react';
import Image from 'next/image';

import todoData from '@/data/todo-data.json';

import Counter from '@/components/useState/Counter';
import Admin from '@/components/useState/Admin';
import Login from '@/components/useState/Login';

type Props = {};

const UseState = (props: Props) => {
	return (
		<>
			<section className="flex justify-center mb-10">
				<h1 className="text-3xl text-center text-blue-main border border-blue-main py-2 px-4 w-max rounded-lg">
					useState use-cases
				</h1>
			</section>
			<section className="grid grid-cols-2 grid-rows-3 gap-5">
				<Counter />
				<Admin />
				<Login />
			</section>
		</>
	);
};

export default UseState;
