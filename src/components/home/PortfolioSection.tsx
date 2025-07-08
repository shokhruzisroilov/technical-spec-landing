'use client'

import Link from 'next/link'
import ProjectCard from './ProjectCard'
import { Project } from '@/types'

const projects: Project[] = [
	{
		title: 'Web Site Design',
		description:
			'Lorem ipsum dolor sit amet consectetur. Adipiscing elit etiam vehicula.',
		image: '/images/portfolio-image1.png',
	},
	{
		title: 'Mobile App Design',
		description:
			'Lorem ipsum dolor sit amet consectetur. Adipiscing elit etiam vehicula.',
		image: '/images/portfolio-image2.png',
	},
	{
		title: 'Web Site Design',
		description:
			'Lorem ipsum dolor sit amet consectetur. Adipiscing elit etiam vehicula.',
		image: '/images/portfolio-image3.png',
	},
	{
		title: 'Mobile App Design',
		description:
			'Lorem ipsum dolor sit amet consectetur. Adipiscing elit etiam vehicula.',
		image: '/images/portfolio-image4.png',
	},
]

const PortfolioSection = () => {
	return (
		<section className='bg-[#F2F2F2] flex justify-center'>
			<div className='max-w-[1440px] w-full pb-[100px] px-4 sm:px-[65px] lg:px-[165px] flex flex-col items-center'>
				{/* Title */}
				<div className='text-center w-full'>
					<div className='py-[6px] px-[12px] rounded-full bg-white mx-auto shadow-md w-fit'>
						<p className='text-[#141515] text-xs font-medium leading-[18px]'>
							Portfolio
						</p>
					</div>
					<h2 className='text-[#141515] text-[40px] leading-[48px] font-semibold pt-5 max-sm:text-[24px] max-sm:leading-[26px]'>
						Our Works
					</h2>
					<p className='text-[#646868] text-sm leading-[22px] pt-4'>
						Our created projects are a shining example of quality and
						innovation.
					</p>
				</div>

				{/* Projects */}
				<div className='pt-[46px] grid lg:grid-cols-2 sm:grid-cols-1 gap-[20px] max-sm:pt-[26px] max-sm:gap-[16px]'>
					{projects.map((project, index) => (
						<ProjectCard key={`${project.title}-${index}`} {...project} />
					))}
				</div>

				{/* Button */}
				<div className='mt-[46px]'>
					<Link href='/portfolio'>
						<button className='py-[10px] px-[38px] bg-[#0A0A0A] border border-[#0A0A0A29] text-white rounded-[8px] text-sm leading-[20px] font-medium hover:bg-[#262626] transition-all duration-200 shadow-md cursor-pointer'>
							View More
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default PortfolioSection
