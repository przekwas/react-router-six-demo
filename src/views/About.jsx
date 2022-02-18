import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(users => setUsers(users))
			.catch(e => console.log(e.message));
	}, []);

	return (
		<main className="container">
			<section className="row justify-content-center">
				<div className="col-md-12">
					<h6 className="text-center display-6 text-primary">About Our Users</h6>
				</div>
				<div className="col-md-6">
					<ul className="list-group">
						{users.map(user => (
							<li
								key={`user-${user.id}`}
								className="p-4 list-group-item d-flex justify-content-between align-items-center">
								<span>{user.name}</span>
								<Link
									to={`/about/${user.id}`}
									className="btn btn-sm btn-outline-secondary">
									Details
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
};

export default About;
