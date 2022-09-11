import { useState } from "react";
import TransactionsTemplate from "./Transactions-template";

export default function WithdrawPage() {
	const [dataWithdraw, setDataWithdraw] = useState({
		amount: "",
		description: "",
	});

	return (
		<TransactionsTemplate
			data={dataWithdraw}
			setData={setDataWithdraw}
			type={"withdraw"}
			text={"saída"}
		/>
	);
}
