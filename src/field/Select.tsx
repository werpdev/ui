import { clsx } from 'clsx';

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, children, ...rest }: Props): React.ReactNode {
	return (
		<select {...rest} className={clsx('h-44 rounded-10 border-2 border-gray-ee bg-gray-f7 px-16 text-16 leading-19 placeholder:text-gray-aa', className)}>
			{children}
		</select>
	);
}
