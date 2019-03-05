import React from 'react';
import PropTypes from 'prop-types';

import {Common as CommonElement, Department as DepartmentElement} from '../elements';

class Department extends React.Component {
	state = {departmentId: -1}

	componentDidMount() {
		const departmentId = parseInt(this.props.match.params.id);

		this.setState({departmentId});
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}

	render() {
		const {departmentId} = this.state;
		
		return (
			<React.Fragment>
				<CommonElement.Header />
				<div className="category-list">
					<DepartmentElement.CategoryList departmentId={departmentId} />
				</div>
				<div className="row">
					<DepartmentElement.Sidebar />
					<DepartmentElement.ProductList />
				</div>
				<CommonElement.Footer />
			</React.Fragment>
		);
	}
}

Department.propTypes = {match: PropTypes.object.isRequired};

Department.defaultProps = {};

export default Department;
