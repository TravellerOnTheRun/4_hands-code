import React, { Component } from 'react';
import DemoText from './DemoText/DemoText';
import BtnContainer from './BtnContainer/BtnContainer';

class DemoServices extends Component {
	state =  {
		paragraphSwitch:'cusDes',
		paragraphName: '',
	};

	textChanger = (paragraphName) => {
		this.setState({paragraphName: paragraphName});
	};


	render() {
		return (
			<React.Fragment>
				<DemoText part={this.state.paragraphName}/>
				<BtnContainer textChanger={(paragraphName) => this.textChanger(paragraphName)}/>
			</React.Fragment>
		);
	};
	
}
export default DemoServices;