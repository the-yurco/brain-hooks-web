import React from 'react';

import HooksCards from '@/data/HooksCards';
import Link from 'next/link';

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
							{HooksCards.map((Hooks) => (
								<Link
									href={Hooks.url}
									key={Hooks.id}
									className="flex h-50 w-fit"
								>
									<div className="border border-blue-main bg-blue-sec p-5 rounded-xl w-100 h-100 hover:scale-105 hover:shadow-xl transition-all duration-300">
										<div>
											<h1 className="text-center pb-4 text-2xl font-medium">
												{Hooks.name}
											</h1>
											<p>{Hooks.tag}</p>
										</div>
										<div>
											<p>{Hooks.description}</p>
										</div>
									</div>
								</Link>
							))}
						</div>
					</main>
				</div>
			</section>
		</>
	);
};

export default Hooks;
