import React from "react";
import styled from "styled-components";

const Header = () => {
	return (
		<HeaderStyled>
			<div className="logo">
				<a href="#about">
					<img src="./img/meridian_logo.png" alt="logo" />
				</a>
			</div>
			<NavStyled>
				<ul>
					<li>
						<a href="#about">О нас</a>
					</li>
					<li>
						<a href="#advantages">Преимущества</a>
					</li>
					<li>
						<a href="#services">Услуги</a>
					</li>
					<li>
						<a href="#clients">Клиенты</a>
					</li>
					<li>
						<a href="#contacts">Контакты</a>
					</li>
				</ul>
			</NavStyled>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	width: 100%;
	padding: 0px 5rem;
	height: 65px;
	background-color: #7e227b;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	z-index: 10;
	.logo {
		width: 170px;
		img {
			width: 100%;
		}
	}
	@media (max-width: 1200px) {
		padding: 0px 2rem;
	}
`;

const NavStyled = styled.nav`
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
		list-style: none;
		li {
			font-weight: 400;
			font-size: 16px;
			margin-left: 50px;
			a {
				color: white;
				text-decoration: none;
				transition: all 0.2s ease;
				&:hover {
					color: #ffcaca;
				}
			}
		}
	}
	@media screen and (max-width: 1200px) {
		ul {
			li {
				margin-left: 20px;
			}
		}
	}
	@media screen and (max-width: 900px) {
		display: none;
	}
`;

export default Header;
