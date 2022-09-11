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

export default function TransactionsTemplate({ data, setData, type, text }) {
	const { conf } = useContext(UserContext);
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	async function addingTransaction(event) {
		event.preventDefault();
		const validation = TransictionSchema.validate(data);

		if (validation.error) {
			alert(validation.error.message);
			setDisabled(false);
			return;
		}

		try {
			await CreateTransaction(data, conf, type);
		} catch (err) {
			alert(err.message);
			setDisabled(false);
			return;
		}

		navigate("/homepage");
	}

	return (
		<Page>
			<h2>Nova {text}</h2>
			<Form onSubmit={addingTransaction}>
				<input
					type="number"
					placeholder="Valor"
					value={data.amount}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...data };
						aux.amount = e.target.value;
						setData(aux);
					}}
				/>
				<input
					type="text"
					placeholder="Descrição"
					value={data.description}
					disabled={disabled}
					onChange={(e) => {
						const aux = { ...data };
						aux.description = e.target.value;
						setData(aux);
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
						`Salvar ${text}`
					)}
				</DivButton>
			</Form>
		</Page>
	);
}
