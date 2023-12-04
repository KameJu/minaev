import Carusel from '@screens/carusel/Carusel'
import { FC } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { slides } from '@screens/carusel/slides.data'
import Arrow from 'components/ui/Arrow'

const MainStartPage: FC = () => {
	return (
		<div>
			<div className='flex'>
				<Carusel className='flex grow items-center' slides={slides} />
				<div className='flex flex-col py-[20%] gap-1'>
					<FaTwitter className='icon' />
					<AiFillInstagram className='icon' />
					<BiLogoFacebookCircle className='icon' />
				</div>
			</div>
			<div className='flex'>
				<div className='grow'>
					<Arrow label='Замовити фотосеію' />
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
