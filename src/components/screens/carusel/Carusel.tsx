import { FC, useState } from 'react'
import { ISlide } from '@screens/carusel/slides.data'
import { Timer } from '@utils/timer'

interface ICarusel {
	className: string
	slides: ISlide[]
}

const Carusel: FC<ICarusel> = ({ className, slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [seconds, setSeconds] = useState(0)

	const handleNext = () => {
		setCurrentIndex((prevIndex: number) =>
			prevIndex + 1 === slides.length ? 0 : prevIndex + 1
		)
	}

	const timer = {
		seconds: seconds,
		setSeconds: setSeconds,
		handleNext: handleNext,
		delay: 2000
	}

	Timer(timer)

	const handleDotClick = (index: number) => {
		setCurrentIndex(index)
	}

	return (
		<div className={className}>
			<div className='indicator flex flex-col gap-3 mr-2'>
				{slides.map(slide => (
					<div
						key={slide.id}
						className={`dot ${currentIndex === slide.id ? 'active' : ''}`}
						onClick={() => handleDotClick(slide.id)}
					></div>
				))}
			</div>
			<img
				className='rounded-full ml-[26%]'
				width={600}
				height={600}
				src={slides[currentIndex].url}
				alt='minaev'
			/>
		</div>
	)
}

export default Carusel
