import React from 'react';

import {
	StyledMachineOverviewSuccessCard,
	StyledMachineOverviewErrorCard,
	StyledCardImage,
	StyledProgressBarOutside,
	StyledErrorProgressBarInside,
	StyledSuccessProgressBarInside,
	StyledStatusIndicatorError,
	StyledStatusIndicatorSuccess,
	StyledStatusIndicatorIcon,
} from './styles.js';

export const MachineOverviewCard = () => {
	return (
		<div className="container" style={{ display: 'flex' }}>
			<StyledMachineOverviewErrorCard>
				<StyledStatusIndicatorError>
					<StyledStatusIndicatorIcon />
				</StyledStatusIndicatorError>
				<h3 style={{ fontWeight: 'bold', fontSize: '21px', padding: '10px' }}>Machine 3</h3>
				<h4 style={{ color: '#A2A2A2', fontSize: '14px', padding: '10px' }}>Core 3 | ME981_NL_54_3</h4>
				<StyledCardImage />
				<StyledProgressBarOutside>
					<StyledErrorProgressBarInside></StyledErrorProgressBarInside>
				</StyledProgressBarOutside>
				<h3 style={{ color: '#ff5717', textAlign: 'center', fontSize: '22px', padding: '10px' }}>
					Error pre-manufactoring
				</h3>
				<h6 style={{ color: '#5B5B5B', textAlign: 'center', fontWeight: 'bold', fontSize: '12px' }}>
					Layer 1200 of 2000
				</h6>
				<h6 style={{ color: '#5B5B5B', textAlign: 'center', fontWeight: 'regular', fontSize: '15px', padding: '10px' }}>
					62h 03m remaining
				</h6>
			</StyledMachineOverviewErrorCard>
			<StyledMachineOverviewSuccessCard>
				<StyledStatusIndicatorSuccess></StyledStatusIndicatorSuccess>
				<h3 style={{ fontWeight: 'bold', fontSize: '21px', padding: '10px' }}>Machine 4</h3>
				<h4 style={{ color: '#A2A2A2', fontSize: '14px', padding: '10px' }}>Core 1 | VR762_LK_8</h4>
				<StyledCardImage />
				<StyledProgressBarOutside>
					<StyledSuccessProgressBarInside></StyledSuccessProgressBarInside>
				</StyledProgressBarOutside>
				<h3 style={{ color: '#4D4D4D', textAlign: 'center', fontSize: '22px', padding: '10px' }}>Finished</h3>
				<h6 style={{ color: '#5B5B5B', textAlign: 'center', fontWeight: 'bold', fontSize: '12px' }}>
					Layer 2000 of 2000
				</h6>
				<h6 style={{ color: '#5B5B5B', textAlign: 'center', fontWeight: 'regular', fontSize: '15px', padding: '10px' }}>
					0m remaining
				</h6>
			</StyledMachineOverviewSuccessCard>
		</div>
	);
};
