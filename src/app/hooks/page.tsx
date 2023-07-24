import React from 'react';

import HooksCards from '@/data/HooksCards';
import Link from 'next/link';
import Cards from '@/components/Card';

type Props = {};

const Hooks = (props: Props) => {
	return (
		<>
			<section className="w-screen h-100 container mx-auto">
				<div className="my-10">
					<header className="flex justify-center items-center flex-col gap-5">
						<h1 className="text-xl font-medium bg-btn-grey  border border-gray-600 px-6 py-2 uppercase  w-max rounded-full">
							Brain Hooks
						</h1>
						<p className="text-center w-7/12 text-lg">
							Here are {`"Brain Hooks"`} known as a React Hooks that will allow
							functional components to have state and other React features
							without writing a class. They provide a more concise and readable
							way to manage component state, handle side effects, and access
							other React features.
						</p>
					</header>
					<main className="mt-14">
						<div className="grid grid-cols-4 gap-10">
							<Cards />
						</div>
					</main>
				</div>
			</section>
		</>
	);
};

export default Hooks;
