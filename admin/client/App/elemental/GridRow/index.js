import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

class GridRow extends Component {
	getChildContext () {
		return {
			gutter: this.props.gutter || 0,
			xsmall: this.props.xsmall,
			small: this.props.small,
			medium: this.props.medium,
			large: this.props.large,
		};
	}
	render () {
		const { children, className, gutter, styles = {} } = this.props;

		const componentClassName = `${css(classes.grid)}${className ? (' ' + className) : ''}`;
		const componentStyles = Object.assign(styles, {
			marginLeft: gutter / -2,
			marginRight: gutter / -2,
		});

		return (
			<div className={componentClassName} style={componentStyles}>
				{children}
			</div>
		);
	}
};

GridRow.childContextTypes = {
	gutter: PropTypes.number,
	xsmall: PropTypes.string,
	small: PropTypes.string,
	medium: PropTypes.string,
	large: PropTypes.string,
};

GridRow.propTypes = {
	gutter: PropTypes.number,
	large: PropTypes.string,
	medium: PropTypes.string,
	small: PropTypes.string,
	xsmall: PropTypes.string,
};

GridRow.defaultProps = {
	xsmall: 'one-whole',
};

const classes = StyleSheet.create({
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
	},
});

module.exports = GridRow;
