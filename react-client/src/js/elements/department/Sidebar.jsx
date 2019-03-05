import React from 'react';

import {ColorCheckBox} from '../../components';

class Sidebar extends React.Component {
	state = {filter: {size: ''}}

	componentDidMount() {
	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
	}

	updateDataState = (key, value) => {
		const {filter} = this.state;
		filter[key] = value;
		this.setState({filter});
	}
	
	render() {
		return (
			<div className="col-md-4">
				<h3>Filter by Color</h3>
				<ColorCheckBox color="red" />
				<ColorCheckBox color="green" />
				<ColorCheckBox color="blue" />
				<ColorCheckBox color="yellow" />
				<ColorCheckBox color="orange" />

				<h3>Filter by Size</h3>
				<div className="btn-group-toggle" data-toggle="buttons">
					<label htmlFor="sizeFilter" className="btn btn-primary active">
						<input id="sizeFilter" type="checkbox" checked autoComplete="off" onChange={e => this.updateDataState('size', e.target.value)} /> Checked
					</label>
				</div>
			</div>
		);
	}
}

export default Sidebar;
