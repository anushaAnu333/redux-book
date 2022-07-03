import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("eve.holt@reqres.in");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
  const location=useLocation()
  const comingFrom=location.state?.from?.pathname || '/'
	const handleSubmit = (e) => {
		e.preventDefault();
		if (email && password) {
			dispatch(login({ email, password })).then((r) => {
				if (r.type === "USER_LOGIN_SUCCESS") {
					navigate(comingFrom,{replace:true});
				}
			});
		}
	};
	return (
		<LoginWrapper>
			<form onSubmit={handleSubmit}>
				<div>
					<label>USER EMAIL</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label>USER PASSWORD</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">LOGIN</button>
			</form>
		</LoginWrapper>
	);
};

export default Login;

const LoginWrapper = styled.div`
	display: flex;
	width: 300px;
	flex-direction: column;
	align-items: center;
	margin: auto;
`;
