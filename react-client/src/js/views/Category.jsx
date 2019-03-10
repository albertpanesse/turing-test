import React from 'react';
import PropTypes from 'prop-types';

import {Common as CommonElement, Category as CategoryElement} from '../elements';

class Category extends React.Component {
	state = {categoryId: -1} // eslint-disable-line

	componentDidMount() {
		const categoryId = parseInt(this.props.match.params.id);

		this.setState({categoryId}); // eslint-disable-line
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line

	}

	render() {
		return (
			<React.Fragment>
				<CommonElement.Header />
				<div className="row">
					<CategoryElement.Sidebar />
					<CategoryElement.ProductList />
				</div>
				<CommonElement.Footer />
			</React.Fragment>
		);
	}
}

Category.propTypes = {match: PropTypes.object.isRequired};

Category.defaultProps = {};

export default Category;
