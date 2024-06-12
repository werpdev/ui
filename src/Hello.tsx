type Props = {
	name: string;
};

export function Hello({ name }: Props): React.ReactNode {
	return <h1 className="font-semibold text-2xl text-blue-800 dark:text-blue-300">Hello, {name}!</h1>;
}
