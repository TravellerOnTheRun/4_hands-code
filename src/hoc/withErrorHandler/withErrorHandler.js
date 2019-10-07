import React, { Component }from 'react';
import Modal from '../../components/Reusables/Modal/Modal';

const withErrorHandler = (WrappedComppnent, axios) =>
	{
		return class extends Component
			{
				state =
					{
						error: null
					}
				componentDidMount ()
					{
						this.requestInterceptor = axios.interceptors.request.use(req =>
							{
								this.setState({error:null})
								return req;
							})
						this.responseInterceptor = axios.interceptors.response.use(res => res, error =>
							{
								this.setState({error: error});
							})
					}

				componentWillUnmount()
					{
						axios.interceptors.request.eject(this.requestInterceptor);
						axios.interceptors.response.eject(this.responseInterceptor);
					}

				clearError = () =>
					{
						this.setState({error: null})
					}


				render()
					{
						return (
							<div>
								<Modal 
									show={this.state.error}
									modalClosed={this.clearError}>
									{this.state.error ? this.state.error.message : null}
								</Modal>
								<WrappedComppnent{...this.props} />

							</div>
							);
					}
			}
	}

export default withErrorHandler;