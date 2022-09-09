import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Assets/GlobalStyle";
import LoginPage from "./Acess-pages/Login-page";
import RegistrationPage from "./Acess-pages/Registration-page";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/registration" element={<RegistrationPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
