import axios from "axios";

const link = "http://localhost:5000/";

function SendingLogin(body) {
	const promise = axios.post(`${link}sign-in`, body);
	return promise;
}

function Register(body) {
	const promise = axios.post(`${link}sign-up`, body);
	return promise;
}

function CreateTransaction(body, obj, str) {
	const promise = axios.post(`${link}transactions/${str}`, body, obj);
	return promise;
}

function GetTransactions(obj) {
	const promise = axios.get(`${link}transactions`, obj);
	return promise;
}

export { SendingLogin, Register, CreateTransaction, GetTransactions };
