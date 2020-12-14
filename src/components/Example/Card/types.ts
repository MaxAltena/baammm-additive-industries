export interface ExampleCardProps {
	/**
	 * Content of card
	 */
	children: React.ReactNode;
	/**
	 * How high is the element located?
	 */
	elevation?: 0 | 2 | 4 | 8;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
}
