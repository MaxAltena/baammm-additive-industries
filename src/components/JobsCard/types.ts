/* eslint-disable no-unused-vars */
export enum JobStatus {
	Queued = 'QUEUED',
	Printing = 'PRINTING',
}

export enum CoreStatus {
	Idle = 'IDLE',
	Active = 'ACTIVE',
	Errored = 'ERRORED',
}

interface PrintJob {
	name: string;
	processCompleted: number;
	status: JobStatus;
	timeRemaining?: string;
}

export interface MachineCore {
	name: string;
	status: CoreStatus;
	job?: PrintJob;
}

export interface JobsCardProps {
	cores: MachineCore[];
}
