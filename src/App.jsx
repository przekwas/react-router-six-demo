import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Login, Profile, AboutDetails } from './views';
import { GlobalNav } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalNav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/about/:id" element={<AboutDetails />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
