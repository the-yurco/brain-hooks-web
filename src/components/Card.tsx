import HooksCards from '@/data/HooksCards';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Cards = (props: Props) => {
	return (
		<>
			{HooksCards.map((Hooks) => (
				<Link href={Hooks.url} key={Hooks.id} className="flex h-50 w-fit">
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
		</>
	);
};

export default Cards;
