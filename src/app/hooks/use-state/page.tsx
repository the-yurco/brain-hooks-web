'use client';

import React from 'react';
import Image from 'next/image';

import { useState } from 'react';

type Props = {};

const UseState = (props: Props) => {
	const [count, setCount] = useState<number>(0);

	return (
		<>
			<section className="grid grid-cols-2 gap-5">
				<div className=" col-start-1 col-end-2 border border-grey-main rounded-lg p-5 flex gap-5 flex-col">
					<h1 className="text-2xl">1. Kepping Track of the previous state</h1>
					<h1 className="mb-3">
						Count:{' '}
						<span className=" text-blue-main border border-blue-main py-1 px-2 rounded-lg bg-secondary">
							{count}
						</span>
					</h1>
					<div className="flex gap-5">
						<button
							onClick={() => setCount(count + 1)}
							className="border rounded-lg py-1 px-3"
						>
							Icrement
						</button>
						<button
							onClick={() => setCount(count - 1)}
							className="border rounded-lg py-1 px-3"
						>
							Decrement
						</button>
					</div>
					<Image
						src={'/react-useState.svg'}
						alt={''}
						width={700}
						height={300}
					></Image>
				</div>
				<div className="col-start-2 col-end-3 border p-5 flex gap-5 flex-col"></div>
			</section>
		</>
	);
};

export default UseState;
