import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const About = () => {
	const { id } = useParams();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => res.json())
			.then(user => setUser(user))
			.catch(e => console.log(e.message));
	}, [id]);

	return (
		<main className="container">
			<section className="row justify-content-center">
				<div className="col-md-12">
					<h6 className="text-center display-6 text-primary">About Our User {id}</h6>
				</div>
				<div className="col-md-6">
					<div className="my-2 shadow card">
						<div className="card-body">
							<h4 className="card-title">{user?.name}</h4>
							<p className="card-text">{user?.username}</p>
							<p className="card-text">{user?.email}</p>
						</div>
					</div>
				</div>
				<div className="col-md-12">
					<Link to="/about" className="btn btn-secondary">
						<i className="bi bi-arrow-left"></i>
					</Link>
				</div>
			</section>
		</main>
	);
};

export default About;
