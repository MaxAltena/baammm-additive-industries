import React from 'react';
import { CoreStatus, JobsCardProps, JobStatus, MachineCore } from './types';
import {
	StyledCoreGrid,
	StyledCoreName,
	StyledProgressBarContainer,
	StyledProgressContainer,
	StyledTextDiv,
} from './styles';
import { Heading } from '../Heading';
import { Card } from '../Card';
import { ProgressBar } from '../ProgressBar';

function getCoreStatus(status: CoreStatus) {
	switch (status) {
		case CoreStatus.Active:
			return 'Active';
		case CoreStatus.Idle:
			return 'Idle';
		case CoreStatus.Errored:
			return 'Error';
	}
}

function getCoreStatusOrJobName(core: MachineCore) {
	if (core.job) {
		return core.job.name;
	} else {
		return getCoreStatus(core.status);
	}
}

function renderProgressBar(core: MachineCore) {
	if (core.job?.status === JobStatus.Queued) {
		return <StyledProgressContainer>Queued</StyledProgressContainer>;
	} else if (core.job?.status === JobStatus.Printing) {
		return (
			<StyledProgressContainer>
				<StyledProgressBarContainer>
					<ProgressBar percentage={core.job.processCompleted} />
				</StyledProgressBarContainer>
				{core.job.timeRemaining} remaining
			</StyledProgressContainer>
		);
	} else {
		return;
	}
}

/**
 * The jobs card showcasing core progress of a specific machine
 */
export const JobsCard: React.FC<JobsCardProps> = ({ cores }: JobsCardProps) => {
	return (
		<Card>
			<Heading type="subtitle" style={{ marginBottom: '28px' }}>
				Jobs
			</Heading>

			<StyledCoreGrid>
				{cores.map((core) => {
					return (
						<React.Fragment key={core.name}>
							<StyledCoreName>{core.name}</StyledCoreName>
							<StyledTextDiv>{getCoreStatusOrJobName(core)}</StyledTextDiv>
							<StyledTextDiv>{renderProgressBar(core)}</StyledTextDiv>
						</React.Fragment>
					);
				})}
			</StyledCoreGrid>
		</Card>
	);
};
