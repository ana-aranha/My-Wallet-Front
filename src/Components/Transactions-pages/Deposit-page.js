import { useState } from "react";
import TransactionsTemplate from "./Transactions-template";

export default function DepositPage() {
	const [dataDeposit, setDataDeposit] = useState({
		amount: "",
		description: "",
	});

	return (
		<TransactionsTemplate
			data={dataDeposit}
			setData={setDataDeposit}
			type={"deposit"}
			text={"entrada"}
		/>
	);
}
