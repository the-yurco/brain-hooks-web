import React from 'react';

type Props = {
	text: string;
};

const HomeCard = ({ text }: Props) => {
	return (
		<>
			<div className=" bg-bg-secondary p-3 rounded-2xl border border-gray-600 flex items-center justify-center">
				<div className="flex justify-center items-center">
					<h1 className="text-2xl text-center uppercase">{text}</h1>
				</div>
			</div>
		</>
	);
};

export default HomeCard;
