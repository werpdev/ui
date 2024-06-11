type Props = {
	name: string;
};

export function Hello({ name }: Props): React.ReactNode {
	return <h1>Hello, {name}!</h1>;
}
