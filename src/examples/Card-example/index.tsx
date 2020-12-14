import React from 'react';
import { ExampleButton, ExampleCard } from '../../components/Example';

export const ComponentsExampleCard: React.FC = () => (
	<ExampleCard>
		<h1>Title of the card</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam ex accusamus, ut quo repellendus, quam eos
			velit esse ducimus, quod perspiciatis saepe autem tempore? Dolores maiores nisi cumque deserunt.
		</p>
		<ExampleButton primary label="Do something"></ExampleButton>
	</ExampleCard>
);
