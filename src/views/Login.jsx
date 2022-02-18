import { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const { state } = useLocation();

	const handleLogin = () => {
		localStorage.setItem('token', 'asdf');
		navigate('/profile');
	};

	if (localStorage.getItem('token')) {
		return <Navigate to={{ pathname: '/profile' }} />;
	}

	return (
		<main className="container">
			<section className="row justify-content-center">
				<div className="col-md-12">
					<h1 className="text-center display-1 text-primary">
						Login View <i className="bi-alarm"></i>
					</h1>
				</div>
				<div className="col-md-6">
					<div className="flex-column d-flex align-items-center">
						<button onClick={handleLogin} className="btn btn-lg btn-success">
							Login Bitch
						</button>
						{state && <span className="text-danger">{state}</span>}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Login;
