import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default class ButtonMob extends React.Component {


	constructor(){
		super();
		this.state = {
			visNav = 'flex'
		}
	}

	clickMe(){
		if(this.state.visNav == 'flex'){
			this.setState({
				visNav: 'none';
			});
		}else{
			this.setState({
				visNav: 'flex';
			})
		}
	}

	render(){
		return(
            <div className ="buttonMob"  onClick = {this.clickMe.bind(this)}>
				
			</div>
		);
	}

}