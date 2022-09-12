import { PageStyle, Form, DivButton } from "./Acess-style";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../ContextConfig/UserContext";
import { ThreeDots } from "react-loader-spinner";
import { SendingLogin } from "../Services/My-wallet";

export default function LoginPage() {
	const { setUsername, setConf } = useContext(UserContext);
	const [dataLogin, setDataLogin] = useState({
		email: "",
		password: "",
	});
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	function GettinLogin(event) {
		event.preventDefault();
		setDisabled(true);

		SendingLogin(dataLogin)
			.then((resp) => {
				setConf({
					headers: { Authorization: `Bearer ${resp.data.token}` },
				});
				localStorage.setItem(
					"conf",
					JSON.stringify({
						headers: { Authorization: `Bearer ${resp.data.token}` },
					}),
				);
				setUsername({ username: resp.data.username });
				navigate("/homepage");
			})
			.catch((err) => {
				alert(err.response.data);
				setDisabled(false);
			});
	}

	return (
		<PageStyle>
			<h1>MyWallet</h1>
			<Form onSubmit={GettinLogin}>
				<input
					type="email"
					placeholder="E-mail"
					value={dataLogin.email}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataLogin };
						aux.email = e.target.value;
						setDataLogin(aux);
					}}
				/>
				<input
					type="password"
					placeholder="Senha"
					value={dataLogin.password}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataLogin };
						aux.password = e.target.value;
						setDataLogin(aux);
					}}
				/>

				<DivButton type="submit" disabled={disabled}>
					{disabled ? (
						<ThreeDots
							height="80"
							width="80"
							radius="9"
							color="#ffffff"
							ariaLabel="three-dots-loading"
							wrapperStyle={{}}
							wrapperClassName=""
						/>
					) : (
						`Entrar`
					)}
				</DivButton>
			</Form>
			<Link to={"/registration"}>
				<p>Primeira vez? Cadastre-se!</p>
			</Link>
		</PageStyle>
	);
}
