import HomeCard from '@/components/HomeCard';
import Image from 'next/image';
import Link from 'next/link';

import { BiCurrentLocation } from 'react-icons/bi';
import { FaArrowsSpin } from 'react-icons/fa6';

export default function Home() {
	return (
		<>
			<section className="h-screen" id="hero">
				<div className="h-100 w-100 flex flex-col justify-between gap-72 z-50">
					<div className="absolute top-0 left-0 z-10">
						<Image
							src={'/decoration-hero.svg'}
							alt={''}
							width={730}
							height={700}
						></Image>
					</div>
					<header className="flex gap-12 flex-col">
						<h1 className="text-8xl font-extrabold text-black z-50">
							Brain Hooks
						</h1>
						<h3 className="text-5xl font-medium z-50" id="shadow-text">
							Welcome on site where you will find everything <br /> explained
							through code and short docs
						</h3>
						<div className="flex gap-3 z-50">
							<Link href={'/hooks'}>
								<HomeCard
									text={'React Hooks'}
									bg={'bg-yellow-main'}
									color={'text-black'}
								/>
							</Link>
							<Link href={'/hooks'}>
								<HomeCard
									text={'Next JS features'}
									bg={'bg-blue-main'}
									color={'text-black'}
								/>
							</Link>
							<Link href={'/hooks'}>
								<HomeCard
									text={'API functionalities'}
									bg={'bg-green-main'}
									color={'text-black'}
								/>
							</Link>
							<Link href={'/hooks'}>
								<HomeCard
									text={'More...'}
									bg={'bg-white'}
									color={'text-black'}
								/>
							</Link>
						</div>
					</header>
					<footer className="flex gap-12 flex-col">
						<h3 className="text-5xl font-medium z-50" id="shadow-text">
							To use this website and for full usefulness you <br /> need to
							have some basics in React framework
						</h3>
					</footer>
					<div className="absolute bottom-0 right-0 z-10">
						<Image
							alt={''}
							width={1030}
							height={700}
							className="z-10"
							src={'/decoration-hero2.svg'}
						/>
					</div>
					<div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-bg-primary to-transparent z-50"></div>
				</div>
			</section>
			<section className="h-screen relative flex items-center justify-center">
				<div className="h-100 w-100 flex flex-col gap-24 items-center justify-center z-50">
					<h2 className="text-5xl font-bold text-black text-center">
						Recap from past examples
					</h2>
					<div className="flex gap-10">
						<div className="bg-blue-main flex flex-col justify-center items-center gap-10 py-16 px-16 rounded-3xl">
							<BiCurrentLocation className="text-black h-52 w-52" />
							<h2 className="text-center text-4xl font-bold text-black">
								Everything <br /> important on <br /> one place
							</h2>
						</div>
						<div className="bg-yellow-main flex flex-col justify-center items-center gap-10 py-16 px-16 rounded-3xl">
							<h2 className="text-center text-4xl font-bold text-black line">
								Read, rewrite, <br /> undestand, <br /> use...
							</h2>
							<FaArrowsSpin className="text-black h-44 w-44" />
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 right-35 z-10">
					<Image
						alt={''}
						width={1730}
						height={700}
						className="z-10"
						src={'/decoration-cards.svg'}
					/>
				</div>
				<div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-bg-primary to-transparent z-50"></div>
			</section>
			<section className="h-screen relative flex items-center justify-center">
				<div className="h-100 w-100 flex flex-col gap-24 items-center justify-center z-50">
					<h1 className="text-2xl">FOOTER</h1>
				</div>
			</section>
		</>
	);
}
