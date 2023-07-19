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
				} p-3  flex items-center justify-center rounded-2xl shadow-xl bg-blend-saturation`}
			>
				<div className="flex justify-center items-center ">
					<h1 className="text-4xl text-center uppercase font-medium ">
						{text}
					</h1>
				</div>
			</section>
		</>
	);
};

export default HomeCard;
