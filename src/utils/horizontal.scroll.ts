import { useRef, useEffect } from 'react'

export function useHorizontalScroll() {
	const containerRef = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		const slider = containerRef.current

		const handleWeel = (event: WheelEvent) => {
			if (slider) {
				slider.scrollLeft = +event.deltaY + 100
			}
		}
		slider?.addEventListener('wheel', handleWeel)
		return () => slider?.removeEventListener('wheel', handleWeel)
	}, [])
	return containerRef
}
