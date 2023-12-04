import Carusel from '@screens/carusel/Carusel'
import { FC } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import { slides } from '@screens/carusel/slides.data'

const MainStartPage: FC = () => {
	return (
		<div>
			<div className='flex'>
				<Carusel className='flex grow items-center' slides={slides} />
				<div className='flex flex-col py-[20%] gap-1'>
					<FaTwitter className='icon'/>
					<AiFillInstagram className='icon'/>
					<BiLogoFacebookCircle className='icon'/>
				</div>
			</div>
			<div className='flex'>
				<div className='grow'>
					<div className='flex items-center border border-solid b-2 rounded-full gap-2 max-w-[400px]'>
						<BsArrowUpRightCircleFill size={70} />
						<span className='ml-8'>Замовити фотосессію</span>
					</div>
				</div>
				<span className='grow max-w-[400px]'>
					Що мені подобається у фотографії так це те, що вона фіксує мить, яка
					минула назавжди, яку неможливо відтворити
				</span>
			</div>
		</div>
	)
}

export default MainStartPage
