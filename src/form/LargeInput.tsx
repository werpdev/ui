import { clsx } from 'clsx';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function LargeInput({ className, ...rest }: Props): React.ReactNode {
	return (
		<input {...rest} className={clsx('h-64 rounded-10 border-2 border-gray-ee bg-gray-f7 px-16 text-20 leading-23 placeholder:text-gray-aa', className)} />
	);
}
