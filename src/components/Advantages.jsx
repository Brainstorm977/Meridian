import React from "react";
import styled from "styled-components";

const Advantages = () => {
	return (
		<AdvantagesStyled id="advantages">
			<AdvantagesItem>
				<h3>Актуальное ценообразование</h3>
				<AdvantageDescr>
					<p>
						Наработанная база поставщиков позволяет предоставлять
						нашим клиентам актуальные цены. Скидки для постоянных
						клиентов.
					</p>
				</AdvantageDescr>
			</AdvantagesItem>
			<AdvantagesItem>
				<h3>Отслеживание в реальном времени</h3>
				<AdvantageDescr>
					<p>
						Проработанные маршруты, с рекомендуемыми остановками.
						Уточнение местоположения дважды в день.
					</p>
				</AdvantageDescr>
			</AdvantagesItem>
			<AdvantagesItem>
				<h3>
					Доставка <br /> "точно-в-срок"
				</h3>
				<AdvantageDescr>
					<p>
						Строгое соблюдение сроков доставки. Ежедневная сверка с
						графиком и своевременное оповещение клиентов.
					</p>
				</AdvantageDescr>
			</AdvantagesItem>
		</AdvantagesStyled>
	);
};

const AdvantagesStyled = styled.div`
	padding: 100px 10px 0px 10px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 1100px) {
		flex-direction: column;
	}
`;

const AdvantagesItem = styled.div`
	max-width: 400px;
	height: 220px;
	color: white;
	background-color: #6d1d6a;
	padding: 30px 40px;
	transition: all 0.3s ease;
	border: 1px solid white;
	h3 {
		font-weight: 700;
		font-size: 20px;
		text-transform: uppercase;
		margin-bottom: 20px;
	}
	&:hover {
		background-color: #7e227b;
	}

	@media screen and (max-width: 500px) {
		padding: 30px;
	}
`;

const AdvantageDescr = styled.div`
	font-weight: 300;
	font-size: 18px;
`;

export default Advantages;
