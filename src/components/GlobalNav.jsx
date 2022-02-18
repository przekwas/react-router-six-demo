import { NavLink } from 'react-router-dom';

const GlobalNav = () => {
	return (
		<nav className="mb-2 shadow navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<span className="mb-0 navbar-brand h1">Sick Website</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<div className="navbar-nav">
						<NavLink
							to="/"
							className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
							About
						</NavLink>
						<NavLink
							to="/login"
							className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
							Login
						</NavLink>
						<NavLink
							to="/profile"
							className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
							Profile
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default GlobalNav;
