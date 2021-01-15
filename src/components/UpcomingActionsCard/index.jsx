import React from 'react';
import PropTypes from 'prop-types';

import {
	StyledColumn,
	StyledRow,
	StyledCard,
	StyledPriorityHigh,
	StyledPriorityMedium,
	StyledHeading3,
	StyledHeading4,
	StyledParagraph,
	StyledXIcon,
} from './styles.js';

export const UpcomingActionsCard = ({
	actions = [
		{ action: 'Redill scalmalloy', machine: 'Machine 4', core: 'AM Core 1', priority: 'high' },
		{ action: 'Refill inconel 718', machine: 'Machine 1', core: 'AM Core 3', priority: 'high' },
		{ action: 'Collect print', machine: 'Machine 5', core: 'Storage module', priority: 'medium' },
		{ action: 'Prepare print', machine: 'Machine 5', core: 'Controls module', priority: 'medium' },
	],
}) => {
	return (
		<StyledCard>
			<StyledRow>
				<StyledHeading3>Upcoming actions</StyledHeading3>
			</StyledRow>
			<StyledRow>
				<StyledColumn>
					<StyledHeading4 uppercase>Action</StyledHeading4>
				</StyledColumn>
				<StyledColumn>
					<StyledHeading4 uppercase>Machine</StyledHeading4>
				</StyledColumn>
				<StyledColumn>
					<StyledHeading4 uppercase>Core</StyledHeading4>
				</StyledColumn>
				<StyledColumn>
					<StyledHeading4 uppercase>PRIORITY</StyledHeading4>
				</StyledColumn>
			</StyledRow>
			{actions.map((action, index) => (
				<StyledRow key={index}>
					<StyledColumn>
						<StyledParagraph>{action.action}</StyledParagraph>
					</StyledColumn>
					<StyledColumn>
						<StyledParagraph>{action.machine}</StyledParagraph>
					</StyledColumn>
					<StyledColumn>
						<StyledParagraph>{action.core}</StyledParagraph>
					</StyledColumn>
					<StyledColumn>
						{action.priority === 'high' ? (
							<StyledPriorityHigh>High</StyledPriorityHigh>
						) : (
							<StyledPriorityMedium>Medium</StyledPriorityMedium>
						)}
					</StyledColumn>
					<StyledXIcon size="24px" />
				</StyledRow>
			))}
		</StyledCard>
	);
};

UpcomingActionsCard.propTypes = {
	actions: PropTypes.array,
};
