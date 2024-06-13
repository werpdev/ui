import clsx from 'clsx';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...rest }: Props): React.ReactNode {
	return (
		<textarea {...rest} className={clsx('h-44 rounded-10 border-2 border-gray-ee bg-gray-f7 p-10 text-14 leading-17 placeholder:text-gray-aa', className)} />
	);
}
