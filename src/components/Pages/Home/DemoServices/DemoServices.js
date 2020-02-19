import React, { Component } from 'react';

import DemoText from './DemoText/DemoText';
import BtnContainer from './BtnContainer/BtnContainer';
import './DemoServices.css';

class DemoServices extends Component {
	state = {
		paragraphSwitch: 'cusDes',
		paragraphName: ''
	};

	textChanger = (paragraphName) => {
		this.setState({ paragraphName: paragraphName });
	};


	render() {
		return (
			<div className='demo-services'>
				<DemoText part={this.state.paragraphName} />
				<BtnContainer textChanger={(paragraphName) => this.textChanger(paragraphName)} />
			</div>
		);
	};

}
export default DemoServices;