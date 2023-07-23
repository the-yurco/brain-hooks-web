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
			<section className="grid grid-cols-2 grid-rows-3 gap-5">
				<Counter />
				<Admin />
				<Login />
			</section>
		</>
	);
};

export default UseState;
