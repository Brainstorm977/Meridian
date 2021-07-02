import React, { useState } from "react";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Clients from "./components/Clients";
import Hamburger from "./components/Hamburger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Advantages from "./components/Advantages";

function App() {
	const [activeMenu, setActiveMenu] = useState(false);
	const toggleHandler = () => {
		setActiveMenu(!activeMenu);
	};
	return (
		<div className="App">
			<Hamburger isActive={activeMenu} toggleMenu={toggleHandler} />
			<MobileNav isActive={activeMenu} toggleMenu={toggleHandler} />
			<Header />
			<Hero />
			<Advantages />
			<Services />
			<Clients />
			<Contacts />
		</div>
	);
}

export default App;
