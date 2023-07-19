import React from 'react';

import HooksCards from '@/data/HooksCards';
import Link from 'next/link';

type Props = {};

const Hooks = (props: Props) => {
	return (
		<>
			<section className="w-screen h-100 container mx-auto">
				<div className="my-10">
					<header>
						<h1 className="text-xl font-medium text-blue-main uppercase">
							Brain Hooks
						</h1>
					</header>
					<main className="mt-24">
						<div className="grid grid-cols-4 gap-10">
							{HooksCards.map((Hooks) => (
								<Link
									href={Hooks.url}
									key={Hooks.id}
									className="flex h-50 w-fit"
								>
									<div className="border border-blue-main bg-blue-sec p-5 rounded-xl w-100 h-100 hover:scale-105 transition-all duration-300">
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
