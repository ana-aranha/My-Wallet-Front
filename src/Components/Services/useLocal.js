import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function useLocalConf() {
	const navigate = useNavigate();
	const [newConf, setNewConf] = useState({});

	useEffect(() => {
		const aux = JSON.parse(localStorage.getItem("conf"));

		if (!aux) {
			navigate("/");
		}
		setNewConf(aux);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return newConf;
}
