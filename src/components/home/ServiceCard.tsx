import Image from 'next/image'
import { Service } from '@/types'

const ServiceCard = ({ icon, title, description }: Service) => {
	return (
		<div className='max-w-[348px] w-full h-[190px] flex flex-col items-center text-center mx-auto'>
			<div
				className='w-12 h-12 rounded-full flex items-center justify-center cursor-pointer'
				style={{
					background:
						'linear-gradient(0deg, #091315, #091315), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(85, 85, 85, 0.08) 100%)',
					boxShadow:
						'rgba(255,255,255,0.1) 0px 0.5px 0.5px inset, rgba(255,255,255,0.04) 0px 1px 2px inset, rgba(27,27,27,0.12) 0px 1px 1px -0.5px, rgba(27,27,27,0.12) 0px 2px 2px -1px, rgba(27,27,27,0.12) 0px 3px 3px -1.5px, rgba(27,27,27,0.12) 0px 4px 4px -2px, rgba(27,27,27,0.12) 0px 8px 8px -2px, rgba(27,27,27,0.12) 0px 16px 16px -8px, rgba(27,27,27,0.12) 0px 32px 32px -12px',
				}}
			>
				<Image src={icon} alt={title} width={24} height={24} />
			</div>
			<p className='text-[#1D1D1D] text-lg font-bold leading-[21px] pt-4'>
				{title}
			</p>
			<p className='text-[#0A0A0A73] text-sm leading-[22px] pt-2 max-w-[222px]'>
				{description}
			</p>
		</div>
	)
}

export default ServiceCard
