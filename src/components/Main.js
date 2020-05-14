import React from "react";
import Slide from "./main/Slide";
import Contact from "./main/Contact";
import Maps from "./main/Maps";
import Information from "./main/Information";

export default class Header extends React.Component {

	render(){
		return(
			<div className = "main">
				<Slide/>
				<Contact/>
				<Maps/>
				<Information/>
			</div>
		)
	}

}