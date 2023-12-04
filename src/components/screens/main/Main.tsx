import Nav from '@screens/nav/Nav'
import { FC } from 'react'
import MainStartPage from './main-start-page/MainStartPage'

const Main: FC = () => {
	return (
		<div className='mx-[15%]'>
			<Nav />
			<MainStartPage />
		</div>
	)
}

export default Main
