import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'; // eslint-disable-line

import * as apis from '../../apis';

class Header extends React.Component {
	state = {departments: []}

	componentDidMount() {
		apis.getDepartments(departments => this.setState({departments}));
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}

	renderDepartments = () => this.state.departments.map(department => <Link key={department.department_id} to={`/department/${department.department_id}`}>{department.name}</Link>)

	render() {
		return (
			<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm ts-header">
				<div className="ts-header-part1">
					<h5 className="my-0 font-weight-normal ts-title"><a href="/">TShirtShop</a></h5>
				</div>
				
				<div className="ts-header-part2">
					<nav className="my-2 my-md-0 mr-md-3 ts-top-nav">
						{this.renderDepartments()}
					</nav>
				</div>
				
				<div className="ts-header-part3">
					<form className="form-inline mt-2 mt-md-0">
						<div className="input-group mb-3">
							<input type="text" className="form-control" placeholder="Search ..." />
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-search" /></span>
							</div>
						</div>
					</form>
				</div>
				
				<div className="ts-header-part4"><Link to="/cart" className="btn"><i className="fas fa-shopping-bag" /></Link></div>
			</div>
		);
	}
}

const mapStoreStateToProps = storeState => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

Header.propTypes = {};

Header.defaultProps = {};

export default connect(mapStoreStateToProps, mapDispatchToProps)(Header);
