import React from 'react';
import Image from 'next/image';

type Props = {};

const UseReducer = (props: Props) => {
	return (
		<>
			<section className="flex justify-center mb-10">
				<h1 className="text-3xl text-center text-blue-main border border-blue-main py-2 px-4 w-max rounded-lg">
					useReducer use-cases
				</h1>
			</section>
			<section className="grid grid-cols-2 grid-rows-3 gap-5"></section>
		</>
	);
};

export default UseReducer;
