import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

import {Common as CommonElement} from '../elements';

class Register extends React.Component {
	state = {}

	componentDidMount() {
		
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line

	}

	render() {
		return (
			<React.Fragment>
				<CommonElement.Header />
				<CommonElement.Footer />
			</React.Fragment>
		);
	}
}

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
