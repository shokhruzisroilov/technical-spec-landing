'use client'

import { Phone } from 'lucide-react'
import ServiceCard from './ServiceCard'
import { Service } from '@/types'
import Link from 'next/link'

const services: Service[] = [
	{
		icon: '/images/icons/web-icon.svg',
		title: 'Web Development',
		description: 'Build fast, scalable websites using React & Next.js',
	},
	{
		icon: '/images/icons/mobile-icon.svg',
		title: 'Mobile App',
		description: 'Build cross-platform apps using React Native',
	},
	{
		icon: '/images/icons/app-icon.svg',
		title: 'Information System',
		description: 'Custom internal systems for organizations',
	},
	{
		icon: '/images/icons/web-icon.svg',
		title: 'API Development',
		description: 'Robust and secure backend API development',
	},
	{
		icon: '/images/icons/mobile-icon.svg',
		title: 'Desktop Development',
		description: 'Cross-platform desktop apps with Electron',
	},
	{
		icon: '/images/icons/app-icon.svg',
		title: 'Bot Development',
		description: 'Telegram and Discord bots for automation',
	},
]

const Services = () => {
	return (
		<section className='flex justify-center'>
			<div className='w-full py-20 max-w-[1110px] max-sm:pt-4 px-4 sm:px-8'>
				{/* Title */}
				<div className='flex flex-col items-center'>
					<div className='bg-white rounded-full px-3 py-1 shadow-sm'>
						<p className='text-[#141515] text-sm font-medium leading-[18px]'>
							ITIC Customer Service
						</p>
					</div>
					<h2 className='text-[#141515] text-[40px] leading-[48px] font-semibold pt-5 text-center max-w-[594px] max-sm:text-[24px] max-sm:leading-[26px] max-sm:max-w-[332px]'>
						Deliver customer experiences that match your product
					</h2>
				</div>

				{/* Cards */}
				<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-10 pt-20 max-sm:pt-6'>
					{services.map(service => (
						<ServiceCard key={service.title} {...service} />
					))}
				</div>

				{/* Button */}
				<div className='flex justify-center mt-10'>
					<Link href='/contact-us'>
						<button
							className='hover:bg-[#262626] bg-[#0A0A0A] py-2.5 px-3 rounded-lg border border-[#0A0A0A29] text-white flex items-center gap-2 transition-all duration-150 cursor-pointer'
							style={{
								boxShadow:
									'rgba(0, 0, 0, 0.08) 0px 1px 2px -0.5px, rgba(0, 0, 0, 0.12) 0px -0.5px 0px inset',
							}}
						>
							<Phone className='w-[18px] h-[18px]' /> Contact us
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Services
