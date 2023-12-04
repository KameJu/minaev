import { Dispatch, SetStateAction, useEffect } from 'react'

interface ITimerProps {
	seconds: number
	setSeconds: Dispatch<SetStateAction<number>>
	handleNext: () => void
	delay: number
}

export const Timer = ({
	seconds,
	setSeconds,
	handleNext,
	delay
}: ITimerProps) =>
	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevSeconds: number) => prevSeconds + 1)
			handleNext()
			console.log(seconds)
		}, delay)

		return () => clearInterval(interval)
	}, [setSeconds])
