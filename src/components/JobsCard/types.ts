export enum JobStatus {
	Queued,
	Printing,
}

export enum CoreStatus {
	Idle,
	Active,
	Errored,
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
