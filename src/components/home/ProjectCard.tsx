import Image from 'next/image'
import { Project } from '@/types'

const ProjectCard = ({ title, description, image }: Project) => {
	return (
		<div className='bg-white cursor-pointer rounded-[32px] p-[10px] max-w-[545px] w-full max-h-[504px] h-full group transition-all duration-500 max-sm:p-4 flex flex-col justify-between shadow-xl'>
			<div className='flex justify-between items-start py-4 pl-4 pr-2 max-sm:p-0'>
				<div>
					<p className='text-[#141515] text-[24px] font-semibold leading-[33px]'>
						{title}
					</p>
					<p className='text-[#666666] text-[16px] leading-[26px] max-w-[400px] pt-[6px]'>
						{description}
					</p>
				</div>
				<div className='bg-[#1E1E1E] rounded-full rotate-[38deg] group-hover:bg-[#00CDC2] transition-all duration-500'>
					<svg
						width='35'
						height='35'
						viewBox='0 0 35 35'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g clipPath='url(#clip0)'>
							<path
								d='M19.9705 20.9677L20.7876 15.2097M20.7876 15.2097L15.0296 14.3925M20.7876 15.2097L14.2124 20.1506M25.719 11.504C29.13 16.0433 28.2154 22.4882 23.6761 25.8992C19.1369 29.3101 12.692 28.3955 9.28101 23.8562C5.87005 19.317 6.7847 12.8721 11.3239 9.46112C15.8632 6.05016 22.3081 6.96481 25.719 11.504Z'
								stroke='white'
								strokeWidth='1.02809'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</g>
						<defs>
							<clipPath id='clip0'>
								<rect
									width='24.6741'
									height='24.6741'
									fill='white'
									transform='translate(0.225891 15.2285) rotate(-36.9226)'
								/>
							</clipPath>
						</defs>
					</svg>
				</div>
			</div>
			<Image
				src={image}
				alt={title}
				width={545}
				height={342}
				className='rounded-[24px] h-[342px] w-full object-cover max-sm:h-[187px] max-sm:mt-4'
			/>
		</div>
	)
}

export default ProjectCard
