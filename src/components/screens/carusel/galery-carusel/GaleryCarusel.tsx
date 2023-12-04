import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'
import { useHorizontalScroll } from '@utils/horizontal.scroll'

interface IImageCarusel {
	className: string
}
const GaleryCarusel: FC<PropsWithChildren<IImageCarusel>> = ({
	className,
	children
}) => {
	const scrollRef = useHorizontalScroll()

	return (
		<div
			ref={scrollRef}
			className={cn(className, 'flex gap-10 overflow-x-hidden')}
		>
			{children}
		</div>
	)
}

export default GaleryCarusel
