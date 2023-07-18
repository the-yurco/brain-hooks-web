import HomeCard from '@/common/common/HomeCard';
import Image from 'next/image';
import Link from 'next/link';

import { FiArrowUpRight } from 'react-icons/fi';

export default function Home() {
	return (
		<>
			<section className="w-screen h-screen container mx-auto">
				<div className=" my-10">
					<header className="flex flex-col items-center gap-10 justify-center">
						<div className="flex items-center gap-10">
							<div className=" bg-bg-secondary p-2 rounded-xl w-max h-max">
								<Image
									src={'/React-icon.png'}
									alt={'React logo'}
									width={50}
									height={50}
								></Image>
							</div>
							<h1 className="text-5xl font-medium">Brain Hooks</h1>
						</div>
						<div>
							<h3 className="text-center text-2xl">
								You are on the right place to learn <br />
								React Hooks in easier way
							</h3>
						</div>
						<div className="flex gap-3">
							<Link
								href={'/hooks'}
								className="text-lg bg-blue-main px-6 py-2 rounded-full flex items-center gap-3 font-medium"
							>
								Hooks Docs <FiArrowUpRight />
							</Link>
							<Link
								href={'https://react.dev/'}
								className="text-lg bg-btn-grey  border border-gray-600 px-6 py-2 rounded-full  font-medium"
							>
								Hooks Docs
							</Link>
						</div>
					</header>
					<main className="mt-36 grid gap-10 justify-between grid-cols-4 h-60">
						<HomeCard text={'Learn Fast and Eficient'} />
						<HomeCard text={'Everything on one place'} />
						<HomeCard text={'Use cases for every hook'} />
						<HomeCard text={'Read, Rewrite, Undestand, Use...'} />
					</main>
				</div>
			</section>
			<section className="w-screen h-screen container mx-auto">
				<h1 className="text-5xl">Brain Hooks</h1>
			</section>
		</>
	);
}
