import { MachineCore } from '../../components/JobsCard/types';

interface Machine {
	name: string;
	cores: MachineCore[];
}

export interface MachineDetailsProps {
	machine: Machine;
}
