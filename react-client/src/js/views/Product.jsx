import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import {Common as CommonElement} from '../elements';

class Product extends React.Component {
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

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
