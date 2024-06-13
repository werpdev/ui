import clsx from 'clsx';

type Props = {
	htmlFor?: string;
	className?: string;
	children: React.ReactNode;
	required?: boolean;
};

export function Label({ htmlFor, className, required, children }: Props): React.ReactNode {
	return (
		<label
			htmlFor={htmlFor}
			className={clsx('text-14 font-bold leading-18 text-gray-55', required && 'after:pl-3 after:text-wine after:content-["*"]', className)}
		>
			{children}
		</label>
	);
}
