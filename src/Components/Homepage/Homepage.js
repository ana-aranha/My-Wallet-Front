import {
	PageStyle,
	TransactionsView,
	DivButton,
	FlexDiv,
} from "./homepage-style";
import { IconContext } from "react-icons";
import {
	AiOutlineExport,
	AiOutlineMinusCircle,
	AiOutlinePlusCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
	const buttons = [
		{ icon: AiOutlinePlusCircle, text: "Nova Entrada", link: "/deposit" },
		{ icon: AiOutlineMinusCircle, text: "Nova Saída", link: "/withdraw" },
	];
	const navigate = useNavigate();

	return (
		<PageStyle>
			<FlexDiv>
				<h2>Olá, Fulano</h2>
				<IconContext.Provider value={{ className: "icons" }}>
					<AiOutlineExport onClick={() => navigate("/")} />
				</IconContext.Provider>
			</FlexDiv>
			<TransactionsView>
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
				{/* <DivButton>
					<IconContext.Provider value={{ className: "icons" }}>
						<AiOutlinePlusCircle />
					</IconContext.Provider>
					<p>Nova Entrada</p>
				</DivButton>
				<DivButton>
					<IconContext.Provider value={{ className: "icons" }}>
						<AiOutlineMinusCircle />
					</IconContext.Provider>
					<p>Nova saída</p>
				</DivButton> */}
			</FlexDiv>
		</PageStyle>
	);
}
