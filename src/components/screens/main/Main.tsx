import Nav from '@screens/nav/Nav'
import { FC } from 'react'
import MainStartPage from './main-start-page/MainStartPage'
import MainBodyPage from './main-body-page/MainBodyPage'

const Main: FC = () => {
	return (
		<div className='mx-[15%]'>
			<Nav />
			<MainStartPage />
			<MainBodyPage />
		</div>
	)
}

export default Main
