import {
	PageStyle,
	TransactionsView,
	DivButton,
	FlexDiv,
	SpanItem,
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
	const { conf, dataLogin } = useContext(UserContext);
	const buttons = [
		{ icon: AiOutlinePlusCircle, text: "Nova Entrada", link: "/deposit" },
		{ icon: AiOutlineMinusCircle, text: "Nova Saída", link: "/withdraw" },
	];
	const navigate = useNavigate();
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		GetTransactions(conf)
			.then((resp) => {
				setTransactions(resp.data);
				console.log(resp);
			})
			.catch((resp) => console.log("deu ruim", resp));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(transactions);
	return (
		<PageStyle>
			<FlexDiv>
				<h2>Olá, {dataLogin.username}</h2>
				<IconContext.Provider value={{ className: "icons" }}>
					<AiOutlineExport onClick={() => navigate("/")} />
				</IconContext.Provider>
			</FlexDiv>
			<TransactionsView>
				{transactions.length !== 0 ? (
					transactions.map((el, i) => <TransactionTemplade el={el} key={i} />)
				) : (
					<>
						<FlexDiv>
							<div>
								<span>22/04</span>
								<p>Teste 1</p>
							</div>
							<span>2.00</span>
						</FlexDiv>
						<FlexDiv>
							<div>
								<span>22/04</span>
								<p>Teste 1</p>
							</div>
							<span>2.00</span>
						</FlexDiv>
					</>
				)}
			</TransactionsView>
			<FlexDiv>
				{buttons.map((el) => (
					<DivButton onClick={() => navigate(el.link)}>
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

function TransactionTemplade({ el }) {
	let type;
	el.type === "withdraw" ? (type = "false") : (type = "true");

	return (
		<FlexDiv>
			<div>
				<span>{el.date}</span>
				<p>{el.description}</p>
			</div>
			<SpanItem color={type}>{el.amount}</SpanItem>
		</FlexDiv>
	);
}
