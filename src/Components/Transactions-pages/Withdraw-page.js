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

export default function WithdrawPage() {
	const { conf } = useContext(UserContext);
	const [disabled, setDisabled] = useState(false);
	const [dataWithdraw, setDataWithdraw] = useState({
		amount: "",
		description: "",
	});
	const navigate = useNavigate();

	async function addingWithdraw(event) {
		event.preventDefault();
		const validation = TransictionSchema.validate(dataWithdraw);

		if (validation.error) {
			alert(validation.error.message);
			setDisabled(false);
			return;
		}

		try {
			await CreateTransaction(dataWithdraw, conf, "withdraw");
		} catch (err) {
			alert(err.message);
			setDisabled(false);
			return;
		}

		navigate("/homepage");
	}

	return (
		<Page>
			<h2>Nova saída</h2>
			<Form onSubmit={addingWithdraw}>
				<input
					type="number"
					placeholder="Valor"
					value={dataWithdraw.amount}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataWithdraw };
						aux.amount = e.target.value;
						setDataWithdraw(aux);
					}}
				/>
				<input
					type="text"
					placeholder="Descrição"
					value={dataWithdraw.description}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...dataWithdraw };
						aux.description = e.target.value;
						setDataWithdraw(aux);
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
