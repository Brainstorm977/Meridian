import React from "react";
import styled from "styled-components";

const Clients = () => {
	return (
		<ClientsStyled id="clients">
			<h2>Нам доверяют:</h2>
			<ClientsContainer>
				<Client>
					<img src="./img/samsung.png" alt="" />
				</Client>
				<Client>
					<img src="./img/lg.png" alt="" />
				</Client>
				<Client>
					<img src="./img/crct.png" alt="" />
				</Client>
				<Client>
					<img src="./img/khorgos.png" alt="" />
				</Client>
				<Client>
					<img src="./img/interrail.png" alt="" />
				</Client>
			</ClientsContainer>
		</ClientsStyled>
	);
};

const ClientsStyled = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 150px;
	h2 {
		font-weight: 700;
		font-size: 26px;
		color: #661462;
		text-transform: uppercase;
	}
	@media screen and (max-width: 1200px) {
		text-align: center;
	}
`;

const ClientsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 50px;
`;

const Client = styled.div`
	padding: 0px 20px;
	width: 240px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px;
	filter: grayscale(100%);
	opacity: 0.5;
	transition: all 0.3s ease;
	img {
		width: 100%;
	}
	&:hover {
		filter: grayscale(0%);
		opacity: 1;
	}
`;

export default Clients;
