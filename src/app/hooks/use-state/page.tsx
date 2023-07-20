import React from 'react';
import Image from 'next/image';

type Props = {};

const UseState = (props: Props) => {
	return (
		<>
			<section>
				<div>
					<header className="flex gap-5 flex-col mb-10">
						<h1 className="text-2xl font-semibold">useState Hook</h1>
						<div className="flex gap-10">
							<p className="text-lg bg-grey-main p-4 rounded-xl">
								The useState Hook is a powerful feature introduced in React 16.8
								that allows functional components to have stateful behavior.
								Before hooks, state was typically managed in class components.
								However, with the useState Hook, functional components can now
								handle state, making them simpler and more concise.
							</p>
							<p className="text-lg bg-grey-main p-4 rounded-xl">
								With the useState Hook, you can declare and initialize a state
								variable within a functional component. This state variable can
								hold any data that may change during the component
								{`'s lifecycle.
							Whenever the state is updated, React will automatically re-render
							the component, reflecting the latest changes.`}
							</p>
						</div>
					</header>
					<main>
						<section>
							<div>
								<h3 className="text-lg font-medium mb-5">
									Syntax of <span>useState</span>
								</h3>
							</div>
							<div className="flex gap-10">
								<Image
									src={'/syntax-useState.png'}
									alt={''}
									width={1000}
									height={1000}
									className="rounded-xl"
								></Image>
								<div className=" bg-bg-secondary p-4 rounded-xl text-lg  flex flex-col gap-5">
									<p>
										In this example, we initialize the count state variable to 0
										using the useState Hook. The function setCount is used to
										update the value of count later on.
									</p>
									<p>
										Whenever setCount is called with a new value, React will
										re-render the component, and the new value of count will be
										reflected in the UI.
									</p>
									<p>
										Using the useState Hook allows us to add state to functional
										components, enabling them to maintain their own data and
										manage more complex behaviors.{' '}
										{`It's a versatile and crucial tool in the world of React Hooks.`}
									</p>
									<p>
										So, go ahead and leverage the useState Hook to build more
										dynamic and interactive components for your website! Happy
										coding!
									</p>
								</div>
							</div>
						</section>
					</main>
				</div>
			</section>
		</>
	);
};

export default UseState;
