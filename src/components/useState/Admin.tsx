import React, { useState } from 'react';

const Admin = () => {
	const [user, setUser] = useState({ isAdmin: true });

	const toogleAdminStatus = () => {
		setUser((prevState) => ({ ...prevState, isAdmin: !prevState.isAdmin }));
	};

	return (
		<div className="col-start-2 col-end-3 border border-grey-main rounded-lg p-5 flex gap-5 flex-col">
			<h1 className="text-2xl">2. Conditional Rendering</h1>
			<div className=" flex flex-col gap-3">
				{user.isAdmin ? (
					<h3>
						Admin: <span className="text-blue-main">True</span>
					</h3>
				) : (
					<h3>
						Admin: <span className="text-blue-main">False</span>
					</h3>
				)}
				<table className="flex flex-col gap-2 bg-bg-secondary rounded-lg p-3">
					<tr className="flex gap-5">
						<th>id</th>
						<th>Name</th>
						<th>Role</th>
						{user.isAdmin && <th className="ml-5">Action</th>}
					</tr>
					<tr className="flex gap-6">
						<td>1.</td>
						<td>Juraj</td>
						{user.isAdmin ? <td>Admin</td> : <td>User</td>}
						{user.isAdmin && (
							<td>
								<button className="border rounded-lg px-5 bg-blue-main border-bg-secondary text-bg-secondary">
									Edit
								</button>
							</td>
						)}
					</tr>
				</table>
				<button
					onClick={toogleAdminStatus}
					className="w-32 text-md border rounded-lg py-1 px-2 hover:bg-bg-secondary hover:border-grey-main transition-all duration-300"
				>
					{user.isAdmin ? 'Make User' : 'Make Admin'}
				</button>
			</div>
		</div>
	);
};

export default Admin;
