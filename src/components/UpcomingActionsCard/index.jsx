import React from 'react';

import {
	StyledColumn,
	StyledRow,
	StyledUpcomingActionsCard,
	StyledHighPriority,
	StyledMediumPriority,
	StyledXIcon,
} from './styles.js';

export const UpcomingActionsCard = () => {
	return (
		<StyledUpcomingActionsCard>
			<StyledRow>
				<h3 style={{ fontWeight: 'Frank New', fontSize: '28px', padding: '10px 10px 0px 10px', color: '#15143B' }}>
					Upcoming actions
				</h3>
			</StyledRow>
			<StyledRow>
				<StyledColumn>
					<h4 style={{ fontSize: '12px', padding: '10px 10px 0px 10px', color: '#141630' }}>ACTION</h4>
				</StyledColumn>
				<StyledColumn>
					<h4 style={{ fontSize: '12px', padding: '10px 10px 0px 10px', color: '#141630' }}>MACHINE</h4>
				</StyledColumn>
				<StyledColumn>
					<h4 style={{ fontSize: '12px', padding: '10px 10px 0px 10px', color: '#141630' }}>CORE</h4>
				</StyledColumn>
				<StyledColumn>
					<h4 style={{ fontSize: '12px', padding: '10px 10px 0px 10px', color: '#141630' }}>PRIORITY</h4>
				</StyledColumn>
			</StyledRow>
			<StyledRow>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Redill scalmalloy</h3>
				</StyledColumn>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Machine 4</h3>
				</StyledColumn>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>AM Core 1</h3>
				</StyledColumn>
				<StyledColumn>
					<StyledHighPriority style={{ fontSize: '14px', marginLeft: '10px' }}>High</StyledHighPriority>
				</StyledColumn>
				<StyledXIcon />
			</StyledRow>
			<StyledRow>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Refill inconel 718</h3>
				</StyledColumn>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Machine 1</h3>
				</StyledColumn>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>AM Core 3</h3>
				</StyledColumn>
				<StyledColumn>
					<StyledHighPriority style={{ fontSize: '14px', marginLeft: '10px' }}>High</StyledHighPriority>
				</StyledColumn>
				<StyledXIcon />
			</StyledRow>
			<StyledRow>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Collect print</h3>
				</StyledColumn>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Machine 5</h3>
				</StyledColumn>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Storage module</h3>
				</StyledColumn>
				<StyledColumn>
					<StyledMediumPriority style={{ fontSize: '14px', marginLeft: '10px' }}>Medium</StyledMediumPriority>
				</StyledColumn>
				<StyledXIcon />
			</StyledRow>
			<StyledRow>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Pripare print</h3>
				</StyledColumn>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Machine 5</h3>
				</StyledColumn>
				<StyledColumn>
					<h3 style={{ fontSize: '14px', paddingLeft: '10px', color: '#5B5B5B' }}>Controls module</h3>
				</StyledColumn>
				<StyledColumn>
					<StyledMediumPriority style={{ fontSize: '14px', marginLeft: '10px' }}>Medium</StyledMediumPriority>
				</StyledColumn>
				<StyledXIcon />
			</StyledRow>
		</StyledUpcomingActionsCard>
	);
};
