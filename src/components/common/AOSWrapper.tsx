'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		})
	}, [])

	return <>{children}</>
}
