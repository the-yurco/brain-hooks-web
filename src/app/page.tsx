import Image from 'next/image';

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
							<h1 className="text-5xl">Brain Hooks</h1>
						</div>
						<div>
							<h3 className="text-center text-2xl">
								You are on the right place to learn <br />
								React Hooks in easier way
							</h3>
						</div>
					</header>
				</div>
			</section>
			<section className="w-screen h-screen container mx-auto">
				<h1 className="text-5xl">Brain Hooks</h1>
			</section>
		</>
	);
}
