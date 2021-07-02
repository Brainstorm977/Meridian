import React from "react";
import styled from "styled-components";

const Hero = () => {
	return (
		<HeroStyled id="about">
			<HeroDescr>
				<h4>* MERIDIAN - ВАШ НАДЕЖНЫЙ ПАРТНЕР</h4>
				<h1>
					Качественные услуги по <br />
					транспортировке, <br />
					складированию и<br /> экспедированию грузов.
				</h1>
			</HeroDescr>
			<HeroImg>
				<img src="./img/hero_2.jpg" alt="" />
			</HeroImg>
		</HeroStyled>
	);
};

const HeroStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 150px 20px 50px 20px;
	@media screen and (max-width: 860px) {
		flex-direction: column;
	}
`;

const HeroDescr = styled.div`
	width: 40%;
	h1 {
		font-weight: 500;
		font-size: 46px;
		color: #6d1d6a;
		line-height: 55px;
	}
	h4 {
		font-weight: 400;
		font-size: 20px;
		color: #92278f;
		margin-bottom: 50px;
	}
	@media screen and (max-width: 1200px) {
		h1 {
			font-size: 40px;
			line-height: 45px;
			text-align: center;
		}
	}
	@media screen and (max-width: 1000px) {
		h1 {
			font-size: 28px;
			line-height: 45px;
			text-align: center;
		}
		h4 {
			font-size: 16px;
		}
	}
	@media screen and (max-width: 860px) {
		width: 80%;
		h1 {
			margin-bottom: 30px;
		}
		h4 {
			text-align: center;
		}
	}
	@media screen and (max-width: 400px) {
		width: 100%;
		h1 {
			font-size: 24px;
		}
		h4 {
			font-size: 14px;
		}
	}
`;

const HeroImg = styled.div`
	width: 40%;
	img {
		width: 100%;
	}
	@media screen and (max-width: 860px) {
		width: 80%;
	}
`;

export default Hero;
