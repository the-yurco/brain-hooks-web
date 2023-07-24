import React from 'react';

type Props = {
	text: string;
	bg: string;
	color: string;
};

const HomeCard = ({ text, bg, color }: Props) => {
	return (
		<>
			<section
				className={`${bg} ${color}
				} py-2 px-6  flex items-center justify-center rounded-full shadow-xl bg-blend-saturation border border-black`}
			>
				<div className="flex justify-center items-center ">
					<h1 className="text-xl text-center ">{text}</h1>
				</div>
			</section>
		</>
	);
};

export default HomeCard;
