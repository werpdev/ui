import type { Icon } from '@tabler/icons-react';
import clsx from 'clsx';

type Props = {
	ref?: React.Ref<HTMLButtonElement>;
	type: 'button' | 'submit' | 'reset';
	fill: 'primary' | 'blue' | 'background' | 'outline';
	Icon?: Icon;
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
};

export function Button({ ref, type, fill, children, Icon, onClick, className }: Props): React.ReactNode {
	return (
		<button
			ref={ref}
			// eslint-disable-next-line react/button-has-type -- dynamic type
			type={type}
			onClick={onClick}
			className={clsx(
				'relative z-0 flex h-44 items-center overflow-hidden rounded-10 border-2 px-12 duration-150',
				{
					primary: 'bg-primary text-background border-transparent hover:border-gray-cc',
					blue: 'bg-blue text-white border-transparent hover:border-gray-cc',
					background: 'bg-background text-foreground border-transparent hover:border-gray-cc',
					outline: 'border-gray-cc bg-gray-f3 hover:bg-gray-cc',
				}[fill],
				Icon != null && 'gap-x-8',
				className,
			)}
		>
			{Icon != null && <Icon className="size-20" />}
			{children != null && <span className="text-16 font-semibold leading-19">{children}</span>}
		</button>
	);
}
