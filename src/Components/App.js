import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Assets/GlobalStyle";
import LoginPage from "./Acess-pages/Login-page";
import RegistrationPage from "./Acess-pages/Registration-page";
import WithdrawPage from "./Transactions-pages/Withdraw-page";
import DepositPage from "./Transactions-pages/Deposit-page";
import Homepage from "./Homepage/Homepage";
import UserContext from "./ContextConfig/UserContext";
import { useState } from "react";

export default function App() {
	const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
	const [conf, setConf] = useState({});

	return (
		<>
			<UserContext.Provider value={{ dataLogin, setDataLogin, conf, setConf }}>
				<BrowserRouter>
					<GlobalStyle />
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/registration" element={<RegistrationPage />} />
						<Route path="/deposit" element={<DepositPage />} />
						<Route path="/withdraw" element={<WithdrawPage />} />
						<Route path="/homepage" element={<Homepage />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
