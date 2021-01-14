import React from 'react';

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

export const Sidebartab = (props) => {
	return (
		<SideBarTabStyledDiv>
			<StyledRow className="row">
				<StyledColumn className="column">
					{renderIcon(props.imgSource)}
					<div className="content" style={{ float: 'left' }}>
						<h3>{props.title}</h3>
					</div>
				</StyledColumn>
			</StyledRow>
		</SideBarTabStyledDiv>
	);
};

export const renderIcon = (props) => {
	switch (props) {
		case 'homeicon':
			return <StyledHomeIcon />;
		case 'machines':
			return <StyledMachineIcon />;
		case 'planning':
			return <StyledCalendarIcon />;
		case 'history':
			return <StyledArchiveIcon />;
		default:
			return null;
	}
};

Sidebartab.propTypes = {
	imgSource: PropTypes.any,
	title: PropTypes.string,
};
