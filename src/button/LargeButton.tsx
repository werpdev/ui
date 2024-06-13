import clsx from 'clsx';

type Props = {
	type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	fill: 'primary' | 'outline';
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	children: React.ReactNode;
	className?: string;
};

export function LargeButton({ type, fill, onClick, children, className, disabled }: Props): React.ReactNode {
	return (
		<button
			// eslint-disable-next-line react/button-has-type
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={clsx(
				'flex h-64 items-center justify-center rounded-32 border-2 px-64 font-semibold duration-100 disabled:pointer-events-none',
				{
					primary: 'bg-primary text-black border-transparent hover:opacity-70 disabled:opacity-70',
					outline: 'border-gray-cc bg-gray-f3 hover:bg-gray-cc text-background disabled:text-gray-cc',
				}[fill],
				className,
			)}
		>
			{children}
		</button>
	);
}
