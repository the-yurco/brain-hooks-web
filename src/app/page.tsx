import HomeCard from '@/components/HomeCard';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<section className="w-screen h-screen ">
				<div className=" my-10">
					<div className="absolute top-0 left-0 z-10">
						<Image
							src={'/decoration-hero.svg'}
							alt={''}
							width={730}
							height={700}
						></Image>
					</div>
					<section className="flex flex-col justify-between gap-72 z-50">
						<header className="flex gap-10 flex-col">
							<h1 className="text-7xl font-extrabold text-black z-50">
								Brain Hooks
							</h1>
							<h3 className="text-4xl font-medium z-50" id="shadow-text">
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
						<footer>
							<h3 className="text-4xl font-medium " id="shadow-text">
								To use this website and for full usefulness you <br /> need to
								have some basics in React framework
							</h3>
						</footer>
						<div className="absolute bottom-0 right-0 z-10">
							<Image
								src={'/decoration-hero2.svg'}
								alt={''}
								width={1030}
								height={700}
							></Image>
						</div>
					</section>
				</div>
			</section>
			<section className="w-screen h-screen">
				<h1 className="text-5xl">Brain Hooks</h1>
			</section>
		</>
	);
}
