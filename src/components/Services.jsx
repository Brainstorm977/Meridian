import React from "react";
import styled from "styled-components";

const Services = () => {
	return (
		<ServicesStyled id="services">
			<h2>Мы предлагаем:</h2>
			<ServicesContainer>
				<ServiceItem className="auto">
					<ServiceDescr>
						<h3>Международные автоперевозки</h3>
						<p>
							Автомобильные грузоперевозки по странам СНГ,
							Восточной Европы и Азии.
						</p>
					</ServiceDescr>
					<ServiceImg>
						<img src="./img/auto.jpg" alt="" />
					</ServiceImg>
				</ServiceItem>
				<ServiceItem className="rail">
					<ServiceDescr>
						<h3>Железнодорожные перевозки</h3>
						<p>
							Мультимодальные перевозки из стран Азии в Казахстан.
							Возврат порожних контейнеров.
						</p>
					</ServiceDescr>
					<ServiceImg>
						<img src="./img/rail.jpg" alt="" />
					</ServiceImg>
				</ServiceItem>
				<ServiceItem className="container">
					<ServiceImg>
						<img src="./img/container.jpg" alt="" />
					</ServiceImg>
					<ServiceDescr>
						<h3>Обслуживание контейнеров</h3>
						<p>
							Предоставление в аренду, покупка и продажа 20’ и 40’
							контейнеров
						</p>
					</ServiceDescr>
				</ServiceItem>
				<ServiceItem className="avia">
					<ServiceImg>
						<img src="./img/avia.jpg" alt="" />
					</ServiceImg>
					<ServiceDescr>
						<h3>Международные авиаперевозки</h3>
						<p>
							Авиаперевозки из Казахстана в страны Европы и Азии.
						</p>
					</ServiceDescr>
				</ServiceItem>
			</ServicesContainer>
		</ServicesStyled>
	);
};

const ServicesStyled = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 150px 10px 0px 10px;
	h2 {
		font-weight: 700;
		font-size: 26px;
		color: #661462;
		text-transform: uppercase;
	}
	.rail,
	.container {
		background-color: white;
		color: #6d1d6a;
	}
	@media screen and (max-width: 1200px) {
		h2 {
			text-align: center;
		}
	}
`;

const ServicesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin-top: 70px;
	@media screen and (max-width: 1200px) {
		max-width: 620px;
		margin: 50px auto 0px auto;
	}
	@media screen and (max-width: 620px) {
		max-width: 300px;
		margin: 50px auto 0px auto;
	}
`;

const ServiceItem = styled.div`
	flex: 1;
	height: 400px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: #6d1d6a;
	color: white;
	h3 {
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 20px;
		padding: 30px 40px 10px 20px;
		text-align: center;
	}
	p {
		font-size: 16px;
		font-weight: 300;
		padding: 0 20px;
		text-align: center;
	}
`;

const ServiceImg = styled.div`
	overflow: hidden;
	flex: 1;
	img {
		width: 100%;
		object-fit: cover;
	}
`;

const ServiceDescr = styled.div`
	flex: 1;
`;

export default Services;
