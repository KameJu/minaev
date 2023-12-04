import { FC } from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import cn from 'clsx'

interface IArrow {
	className?: string
	label: string
}

const Arrow: FC<IArrow> = ({ label, className }) => {
	return (
		<div className={cn(className, 'arrow text-center flex')}>
			<BsArrowUpRightCircleFill size={70} />
			<span className='grow mr-8'>{label}</span>
		</div>
	)
}

export default Arrow
