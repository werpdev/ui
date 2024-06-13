import type { Icon } from '@tabler/icons-react';
import clsx from 'clsx';

type Props = {
	ref?: React.Ref<HTMLButtonElement>;
	type: 'button' | 'submit' | 'reset';
	fill: 'primary' | 'blue' | 'background' | 'outline';
	disabled?: boolean;
	Icon?: Icon;
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
};

export function Button({ ref, type, fill, disabled, children, Icon, onClick, className }: Props): React.ReactNode {
	const isIconOnly = Icon != null && children == null;
	return (
		<button
			ref={ref}
			// eslint-disable-next-line react/button-has-type -- dynamic type
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={clsx(
				'relative z-0 flex h-44 items-center overflow-hidden rounded-10 border-2 px-12 duration-150 disabled:pointer-events-none',
				Icon != null && 'gap-x-8',
				isIconOnly && 'w-44 justify-center px-0',
				{
					primary: 'bg-primary text-black border-transparent hover:border-gray-cc disabled:opacity-70',
					blue: 'bg-blue text-white border-transparent hover:border-gray-cc disabled:opacity-70',
					background: 'bg-background text-foreground border-transparent hover:border-gray-cc disabled:opacity-70',
					outline: 'border-gray-cc bg-gray-f3 hover:bg-gray-cc text-background disabled:text-gray-cc',
				}[fill],
				className,
			)}
		>
			{Icon != null && <Icon className="size-20" />}
			{children != null && <span className="text-16 font-semibold leading-19">{children}</span>}
		</button>
	);
}
