import React from "react";
import styled from "styled-components";

const Contacts = () => {
	return (
		<ContactsStyled id="contacts">
			<h2>Свяжитесь с нами:</h2>
			<ContactsContainer>
				<ContactDescr>
					<h3>TOO "Meridian (Меридиан)"</h3>
					<p>
						Адрес: г. Алматы, ул. Байзакова, 125/185 (БЦ Номад),{" "}
						<br /> 5 этаж, офис 507
					</p>
					<p>E-mail: info@mrdn.kz</p>
					<p>Телефон: +7 (727) 390 02 60</p>
				</ContactDescr>
				<ContactsMap>
					<iframe
						src="https://yandex.ru/map-widget/v1/?um=mymaps%3ApzM175lCimcdcCcW0uVBD-4u3CbA6Xri&amp;source=constructor"
						width="100%"
						height="350"
						frameborder="0"
						title="Meridian Map"
					></iframe>
				</ContactsMap>
			</ContactsContainer>
		</ContactsStyled>
	);
};

const ContactsStyled = styled.div`
	color: #661462;
	max-width: 1200px;
	margin: 0 auto;
	padding: 150px 20px 0 20px;
	h2 {
		font-weight: 700;
		font-size: 26px;

		text-transform: uppercase;
	}
	@media screen and (max-width: 1200px) {
		h2 {
			text-align: center;
		}
	}
`;

const ContactsContainer = styled.div`
	display: flex;
	margin-top: 80px;
	padding-bottom: 100px;
	@media screen and (max-width: 1200px) {
		display: block;
		margin: 50px auto 0px auto;
		text-align: center;
	}
`;

const ContactDescr = styled.div`
	flex: 1;
	h3 {
		font-size: 24px;
		font-weight: 500;
		margin-bottom: 30px;
		padding-top: 50px;
		color: #6d1d6a;
	}
	p {
		font-size: 18px;
		font-weight: 400;
		margin-bottom: 30px;
	}
`;

const ContactsMap = styled.div`
	flex: 1;
`;

export default Contacts;
