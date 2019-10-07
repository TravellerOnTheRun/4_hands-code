import React, { Component } from 'react';
import ShowCaseContainer from './ShowCaseContainer/ShowCaseContainer';
import Jumbo from '../../Jumbo/Jumbo';
import Form from '../../Form/Form';
import { withRouter } from 'react-router-dom';


class About extends Component {
	render() {
		return (
			<div>
				<Jumbo type='about'/>
				<ShowCaseContainer />
				<div id='form'><Form /></div>
			</div>
		);
	};
};
		

export default withRouter(About);