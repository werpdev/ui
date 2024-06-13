import { clsx } from 'clsx';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: Props): React.ReactNode {
	return (
		<input {...rest} className={clsx('h-44 rounded-10 border-2 border-gray-ee bg-gray-f7 px-16 text-16 leading-19 placeholder:text-gray-aa', className)} />
	);
}
