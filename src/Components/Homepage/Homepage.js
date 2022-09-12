import {
	PageStyle,
	TransactionsView,
	DivButton,
	FlexDiv,
	SpanItem,
	MessageDiv,
} from "./homepage-style";
import { IconContext } from "react-icons";
import {
	AiOutlineExport,
	AiOutlineMinusCircle,
	AiOutlinePlusCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import UserContext from "../ContextConfig/UserContext";
import { useContext, useEffect, useState } from "react";
import { GetTransactions } from "../Services/My-wallet";

export default function Homepage() {
	const { conf, username } = useContext(UserContext);
	const buttons = [
		{ icon: AiOutlinePlusCircle, text: "Nova Entrada", link: "/deposit" },
		{ icon: AiOutlineMinusCircle, text: "Nova Saída", link: "/withdraw" },
	];
	const navigate = useNavigate();
	const [transactions, setTransactions] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		GetTransactions(conf)
			.then((resp) => {
				const aux = resp.data;
				setTransactions(aux);
				let counter = total;
				for (let i in aux) {
					if (aux[i].type === "deposit") {
						counter += Number(aux[i].amount);
					} else {
						counter -= Number(aux[i].amount);
					}
				}
				setTotal(counter);
			})
			.catch((resp) => console.log("deu ruim", resp));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PageStyle>
			<FlexDiv>
				<h2>Olá, {username.username}</h2>
				<IconContext.Provider value={{ className: "icons" }}>
					<AiOutlineExport onClick={() => navigate("/")} />
				</IconContext.Provider>
			</FlexDiv>
			<TransactionsView>
				{transactions.length !== 0 ? (
					<>
						<div>
							{transactions.map((el, i) => (
								<TransactionTemplade
									el={el}
									key={`key ${i}`}
									setTotal={setTotal}
									total={total}
								/>
							))}
						</div>
						<FlexDiv>
							<p>
								<strong>SALDO</strong>
							</p>
							<SpanItem color={total >= 0 ? "true" : "false"}>
								{total.toFixed(2).toString().replace(/\./, ",")}
							</SpanItem>
						</FlexDiv>
					</>
				) : (
					<>
						<MessageDiv>
							<div>
								<p>Não há registros de entrada ou saída</p>
							</div>
						</MessageDiv>
					</>
				)}
			</TransactionsView>
			<FlexDiv>
				{buttons.map((el, i) => (
					<DivButton onClick={() => navigate(el.link)} key={i}>
						<IconContext.Provider value={{ className: "icons" }}>
							<el.icon />
						</IconContext.Provider>
						<p>{el.text}</p>
					</DivButton>
				))}
			</FlexDiv>
		</PageStyle>
	);
}

function TransactionTemplade({ el, setTotal, total }) {
	let type;
	el.type === "withdraw" ? (type = "false") : (type = "true");

	return (
		<FlexDiv>
			<div>
				<span>{el.date}</span>
				<p>{el.description}</p>
			</div>
			<SpanItem color={type}>
				{Number(el.amount).toFixed(2).replace(/\./, ",")}
			</SpanItem>
		</FlexDiv>
	);
}
