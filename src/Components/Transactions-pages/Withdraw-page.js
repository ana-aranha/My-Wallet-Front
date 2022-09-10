import { Form, DivButton } from "../Acess-pages/Acess-style";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Page } from "./transactions-style";

export default function WithdrawPage() {
	const [disabled, setDisabled] = useState(false);
	const [dataRegistration, setDataRegistration] = useState({
		value: "",
		description: "",
	});

	return (
		<Page>
			<h2>Nova saída</h2>
			<Form
				onSubmit={(event) => {
					console.log("clicou!");
					setDisabled(true);
					event.preventDefault();
				}}
			>
				<input
					type="number"
					placeholder="Valor"
					value={dataRegistration.value}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.value = e.target.value;
						setDataRegistration(aux);
					}}
				/>
				<input
					type="text"
					placeholder="Descrição"
					value={dataRegistration.description}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataRegistration };
						aux.description = e.target.value;
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
						`Salvar saída`
					)}
				</DivButton>
			</Form>
		</Page>
	);
}
