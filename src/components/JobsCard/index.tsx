import React from 'react';
import { CoreStatus, JobsCardProps, JobStatus, MachineCore } from './types';
import {
	StyledCard,
	StyledCoreGrid,
	StyledCoreName,
	StyledProgressBarContainer,
	StyledProgressBarInside,
	StyledProgressBarOutside,
	StyledProgressContainer,
	StyledTextDiv,
	StyledTitle,
} from './styles';

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
					<StyledProgressBarOutside>
						<StyledProgressBarInside style={{ width: `${core.job.processCompleted}%` }} />
					</StyledProgressBarOutside>
				</StyledProgressBarContainer>
				{core.job.timeRemaining} remaining
			</StyledProgressContainer>
		);
	} else {
		return;
	}
}

/**
 * The login page for the Additive Industries product
 */
export const JobsCard: React.FC<JobsCardProps> = ({ cores }: JobsCardProps) => {
	return (
		<StyledCard>
			<StyledTitle>Jobs</StyledTitle>

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
		</StyledCard>
	);
};
