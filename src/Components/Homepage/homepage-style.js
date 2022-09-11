import styled from "styled-components";

export const PageStyle = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 8%;
	font-weight: 700;

	h2 {
		font-size: 26px;
		color: #ffffff;
	}

	.icons {
		color: #ffffff;
		font-size: 26px;
	}
`;

export const SpanItem = styled.span`
	color: ${(props) => (props.color === "true" ? "green" : "red")};
`;

export const FlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 10px;

	div:first-child {
		display: flex;
		gap: 6px;
		span {
			color: gray;
		}
	}
`;

export const TransactionsView = styled.div`
	background-color: #ffffff;
	font-weight: 400;
	border-radius: 5px;
	padding: 6% 4%;
	height: 70%;
	margin: 7% 0;
	display: flex;
	flex-direction: column;
`;

export const DivButton = styled.button`
	border-style: none;
	color: #ffffff;
	background-color: #a75ed7;
	padding: 2vh;
	width: 48%;
	height: 18vh;
	border-radius: 5px;
	font-size: 20px;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: space-around;
	text-align: left;
`;
