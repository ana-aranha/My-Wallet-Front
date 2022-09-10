import { PageStyle, Form, DivButton } from "./Acess-style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
	const [disabled, setDisabled] = useState(false);
	const [dataRegistration, setDataRegistration] = useState({
		email: "",
		name: "",
		password: "",
	});

	return (
		<PageStyle>
			<h1>MyWallet</h1>
			<Form
				onSubmit={(event) => {
					console.log("clicou!");
					setDisabled(true);
					event.preventDefault();
				}}
			>
				<input
					type="email"
					placeholder="E-mail"
					value={dataRegistration.email}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.email = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<input
					type="password"
					placeholder="Senha"
					value={dataRegistration.password}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.password = e.target.value;
						setDataRegistration(aux);
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
