import { FC } from 'react'
import logo from '../../../images/logo.svg'

const Nav: FC = () => {
	return (
		<div className='flex py-2'>
			<div className='flex flex-col grow self-center'>
				<span className='text-gray'>Професійний фотограф</span>
				<span className=' text-[2rem] font-bold'>Мінаєв Олександр</span>
			</div>
			<div className='flex gap-10 items-center'>
				<span>
					<a>Про мене</a>
				</span>
				<span>
					<a>Портфоліо</a>
				</span>
				<span>
					<a>Контакти</a>
				</span>
			</div>
			<img
				className='ml-10 items-end'
				src={logo}
				alt='logo'
				height={80}
				width={80}
			/>
		</div>
	)
}

export default Nav
