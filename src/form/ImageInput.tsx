import { IconPhotoPlus } from '@tabler/icons-react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function ImageInput({ type: _, ...rest }: Props): React.ReactNode {
	return (
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label className="relative flex size-88 items-center justify-center rounded-10 border-2 border-transparent bg-gray-f7 hover:border-gray-ee hover:bg-foreground has-[:focus]:border-gray-ee has-[:focus]:bg-foreground">
			<input type="file" className="absolute inset-0 cursor-pointer opacity-0" {...rest} />
			<IconPhotoPlus className="size-32" />
		</label>
	);
}
