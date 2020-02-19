import React, { Component } from 'react';

import DemoText from './DemoText/DemoText';
import Slider from './Slider/Slider';
import './DemoServices.css';

class DemoServices extends Component {
	state = {
		paragraphName: ''
	};

	slideChangeHandler = (paragraphName) => {
		this.setState({ paragraphName: paragraphName });
	};


	render() {
		return (
			<Slider onChangeSlide={this.slideChangeHandler}>
				<DemoText part={this.state.paragraphName} />
			</Slider>
		);
	};

}
export default DemoServices;