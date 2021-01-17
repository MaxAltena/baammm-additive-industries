import { MachineCore } from 'src/components';

interface Machine {
	name: string;
	cores: MachineCore[];
}

export interface MachineDetailsProps {
	machine: Machine;
}
