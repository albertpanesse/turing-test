import React from 'react';
import {Container} from 'reactstrap';
import PropTypes from 'prop-types'; // eslint-disable-line

import {Common as CommonElement, Home as HomeElement} from '../elements';

class Home extends React.Component {
	state = {}

	componentDidMount() {
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}

	render() {
		return (
			<React.Fragment>
				<CommonElement.Header />
				<HomeElement.Carousel />
				<Container>
					<HomeElement.Featured />
					<CommonElement.Footer />
				</Container>
			</React.Fragment>
		);
	}
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
