import { Form, DivButton } from "../Acess-pages/Acess-style";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Page } from "./transactions-style";
import UserContext from "../ContextConfig/UserContext";
import { useContext } from "react";
import { CreateTransaction } from "../Services/My-wallet";
import joi from "joi";
import { useNavigate } from "react-router-dom";

const TransictionSchema = joi.object({
	amount: joi.number().required(),
	description: joi.string().required().trim(),
});

export default function DepositPage() {
	const { conf } = useContext(UserContext);
	const [disabled, setDisabled] = useState(false);
	const [dataDeposit, setDataDeposit] = useState({
		amount: "",
		description: "",
	});
	const navigate = useNavigate();

	async function addingDeposit(event) {
		event.preventDefault();
		const validation = TransictionSchema.validate(dataDeposit);

		if (validation.error) {
			alert(validation.error.message);
			setDisabled(false);
			return;
		}

		try {
			await CreateTransaction(dataDeposit, conf, "deposit");
		} catch (err) {
			alert(err.message);
			setDisabled(false);
			return;
		}

		navigate("/homepage");
	}

	return (
		<Page>
			<h2>Nova entrada</h2>
			<Form onSubmit={addingDeposit}>
				<input
					type="number"
					placeholder="Valor"
					value={dataDeposit.amount}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataDeposit };
						aux.amount = e.target.value;
						setDataDeposit(aux);
					}}
				/>
				<input
					type="text"
					placeholder="Descrição"
					value={dataDeposit.description}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataDeposit };
						aux.description = e.target.value;
						setDataDeposit(aux);
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
						`Salvar entrada`
					)}
				</DivButton>
			</Form>
		</Page>
	);
}
