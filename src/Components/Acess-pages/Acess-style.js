import styled from "styled-components";

export const PageStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-size: 15px;
	font-weight: 700;

	a {
		text-decoration: none;
		color: #ffffff;
	}

	h2 {
		font-size: 26px;
		color: #ffffff;
	}
`;

export const DivButton = styled.button`
	border-style: none;
	color: #ffffff;
	background-color: #a75ed7;
	width: 85%;
	height: 50px;
	border-radius: 5px;
	font-size: 20px;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30px 0;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 25px 0;

	input {
		margin: 8px 0;
		width: 85%;
		height: 58px;
		border-radius: 5px;
		padding-left: 20px;
		font-size: 20px;
		border: 1px solid #d4d4d4;
		::placeholder {
			color: #404040;
		}
	}
`;
