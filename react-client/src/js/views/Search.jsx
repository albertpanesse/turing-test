import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

import {Common as CommonElement} from '../elements';

class Search extends React.Component {
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

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
