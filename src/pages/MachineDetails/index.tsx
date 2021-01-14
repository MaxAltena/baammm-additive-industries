import React from 'react';

import { MachineDetailsProps } from './types';
import {
	StyledBell,
	StyledCardImage,
	StyledContent,
	StyledMainContent,
	StyledPage,
	StyledTitle,
	StyledTopBar,
} from './styles';
import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/Button';
import { JobsCard } from '../../components/JobsCard';

/**
 * Machine details page
 */
export const MachineDetails: React.FC<MachineDetailsProps> = ({ machine }: MachineDetailsProps) => {
	return (
		<StyledPage>
			<Sidebar />
			<StyledContent>
				<StyledTopBar>
					<StyledTitle>{machine.name} – Details</StyledTitle>
					<StyledBell />
				</StyledTopBar>

				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Button label="Back" />
					<Button label="Remote control" />
				</div>

				<StyledMainContent>
					<StyledCardImage />

					<JobsCard cores={machine.cores} />
				</StyledMainContent>
			</StyledContent>
		</StyledPage>
	);
};
