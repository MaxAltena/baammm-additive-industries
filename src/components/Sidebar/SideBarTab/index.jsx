import React from 'react';
import PropTypes from 'prop-types';

import {
	SideBarTabStyledDiv,
	StyledHomeIcon,
	StyledMachineIcon,
	StyledCalendarIcon,
	StyledArchiveIcon,
	StyledRow,
	StyledColumn,
} from './styles';

/**
 * SideBarTab
 */

export const Sidebartab = ({ imgSource, title = 'Tab' }) => {
	return (
		<SideBarTabStyledDiv>
			<StyledRow className="row">
				<StyledColumn className="column">
					{renderIcon(imgSource)}
					<div className="content" style={{ float: 'left' }}>
						<h3>{title}</h3>
					</div>
				</StyledColumn>
			</StyledRow>
		</SideBarTabStyledDiv>
	);
};

export const renderIcon = (icon) => {
	switch (icon) {
		case 'homeicon':
			return <StyledHomeIcon size="32px" />;
		case 'machines':
			return <StyledMachineIcon size="32px" />;
		case 'planning':
			return <StyledCalendarIcon size="32px" />;
		case 'history':
			return <StyledArchiveIcon size="32px" />;
		default:
			return null;
	}
};

Sidebartab.propTypes = {
	imgSource: PropTypes.any,
	title: PropTypes.string,
};
