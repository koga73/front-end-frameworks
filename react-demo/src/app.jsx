import React from "react";
import ReactDOM from "react-dom";

import Button, {buttonDisplay} from "./components/button/Button.jsx";

const someData = [];
for (let i = 0; i < 100; i++){
	someData.push(`Loop ${i}`);
}

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			count: 0
		};
	}

	onButtonClick(){
		this.setState({
			count: this.state.count + 1
		});
	}

	render(){
		return (
			<div>
				<h1>Click Count: {this.state.count}</h1>

				<Button onClick={evt => this.onButtonClick(evt)} display={buttonDisplay.PRIMARY}>Increase Click Count</Button>

				<ul>
					{
						someData.map((data, index) => (
							<li key={index}>{data}</li>
						))
					}
				</ul>
			</div>
		);
	}
}

let domContainer = document.querySelector("#app");
ReactDOM.render(<App/>, domContainer);