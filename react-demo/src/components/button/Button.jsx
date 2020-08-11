import React from "react";

import "./Button.scss";

export const buttonDisplay = {
	PRIMARY: "primary",
	SECONDARY: "secondary"
};

class Button extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		const {children, display, ...remaining} = this.props;
		const disp = display || buttonDisplay.PRIMARY; //Default

		return (
			<button className={`btn btn-${disp}`} {...remaining}>{children}</button>
		);
	}
}
export default Button;