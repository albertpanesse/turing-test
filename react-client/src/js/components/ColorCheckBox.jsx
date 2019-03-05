import React from 'react';
import PropTypes from 'prop-types';

class ColorCheckBox extends React.Component {
	state = {color: '', checked: false}

	componentDidMount() {

	}

	componentDidUpdate(prevProps, prevState, snapshot) { // eslint-disable-line
		if (this.props.color && this.props.color !== prevState.color) {
			this.setState({color: this.props.color});
		}
	}

	renderOutterStyle = () => {
		const style = {};

		if (this.state.color !== '') {
			style.backgroundColor = this.state.color;
		}

		return style;
	}

	renderInnerStyle = () => {
		const style = {};

		if (this.state.checked === true) {
			style.backgroundColor = '#ffffff';
		} else {
			style.backgroundColor = '';
		}

		return style;
	}

	checkBoxClicked = () => {
		if (this.state.checked === false) {
			this.setState({checked: true});
		} else {
			this.setState({checked: false});
		}
	}

	render() {
		return (
			<div className="color-check-box" style={this.renderOutterStyle()} onClick={() => this.checkBoxClicked()}>
				<div className="color-check-box-inner" style={this.renderInnerStyle()} />
				<input type="checkbox" style={{display: 'none'}} />
			</div>
		);
	}
}

ColorCheckBox.propTypes = {color: PropTypes.string.isRequired};

ColorCheckBox.defaultProps = {};

export default ColorCheckBox;
