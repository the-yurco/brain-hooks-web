import React from 'react';

import HooksCards from '@/data/HooksCards';
import Link from 'next/link';
import Cards from '@/components/Card';
import { BsArrowLeftShort } from 'react-icons/bs';

type Props = {};

const Hooks = (props: Props) => {
	return (
		<>
			<section className="w-screen h-100 container mx-auto">
				<div className="my-10">
					<header className="flex justify-center items-center flex-col gap-5">
						<div className="flex gap-5">
							<Link
								href={'/'}
								className="bg-black border border-yellow-main rounded-full flex justify-center items-center text-yellow-main"
							>
								<BsArrowLeftShort style={{ height: '30px', width: '45px' }} />
							</Link>
							<h1 className="text-xl text-black font-medium bg-yellow-main border border-black px-6 py-2 uppercase  w-max rounded-full">
								React Hooks
							</h1>
						</div>
						<p className="text-center w-7/12 text-lg text-black bg-yellow-main border border-black py-5 px-10 rounded-2xl">
							Here are the React Hooks that will allow functional components to
							have state and other React features without writing a class. They
							provide a more concise and readable way to manage component state,
							handle side effects, and access other React features.
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
