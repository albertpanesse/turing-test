import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

import {Common as CommonElement} from '../elements';

class Final extends React.Component {
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

Final.propTypes = {};

Final.defaultProps = {};

export default Final;
