'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Counter = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="col-start-1 col-end-2 border border-grey-main rounded-lg p-5 flex gap-5 flex-col h-96 overflow-y-scroll">
			<h1 className="text-2xl"> 1. Keep track of the previous state</h1>
			<div className="flex flex-col gap-3">
				<h3 className="text-xl flex items-center gap-3">
					Count:{' '}
					<span className="text-sm text-blue-main border px-2 border-blue-main rounded-lg">
						{count}
					</span>
				</h3>
				<div className="flex gap-5">
					<button
						className="text-md border rounded-lg py-1 px-2 hover:bg-bg-secondary hover:border-grey-main transition-all duration-300"
						onClick={() => setCount(count + 1)}
					>
						Increment
					</button>
					<button
						className="text-md border rounded-lg py-1 px-2 hover:bg-bg-secondary hover:border-grey-main transition-all duration-300"
						onClick={() => setCount(count - 1)}
					>
						Decrement
					</button>
				</div>
			</div>
			<Image
				src={'/counter-useState.svg'}
				alt={''}
				width={800}
				height={800}
			></Image>
		</div>
	);
};

export default Counter;
