import { useNavigate, Navigate } from 'react-router-dom';

const Profile = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.clear();
		navigate('/login', { state: 'you must be logged in, bitch ass' });
	};

	if (!localStorage.getItem('token')) {
		return <Navigate to="/login" state="you must be logged in, bitch ass" />;
	}

	return (
		<main className="container">
			<section className="row justify-content-center">
				<div className="col-md-12">
					<h1 className="text-center display-1 text-primary">
						Profile View <i className="bi-alarm"></i>
					</h1>
				</div>
				<div className="col-md-6">
					<div className="d-flex justify-content-center">
						<button onClick={handleLogout} className="btn btn-lg btn-danger">
							Logout Bitch
						</button>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Profile;
