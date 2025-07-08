import Image from 'next/image'

const stats = [
	{
		value: '1200+',
		description:
			'Successfully completed projects in Game Development, Animation, Mobile, and Web Solutions.',
	},
	{
		value: '454,204',
		description:
			'Hours dedicated to delivering innovative IT solutions for our clients worldwide.',
	},
	{
		value: '7 Days',
		description:
			'Average turnaround time for high-quality prototypes in UX/UI design.',
	},
	{
		value: '+96',
		description:
			'Skilled professionals specializing in front-end, back-end development, and creative animation.',
	},
	{
		value: '42%',
		description:
			'Increase in client efficiency and user engagement with our tailored IT solutions.',
	},
	{
		value: '18.5K',
		description:
			'Happy clients who trust us for their digital transformation needs.',
	},
]

const StatsSection = () => {
	return (
		<div className='bg-[#F2F2F2] flex justify-center overflow-hidden'>
			<div
				className='py-[108px] max-w-[1110px] w-full flex flex-col items-center px-4 sm:px-6 max-sm:pt-[46px] max-sm:pb-[68px]'
				data-aos='fade-up'
			>
				<div className='max-w-[1110px] w-full flex flex-col items-center text-center sm:text-left sm:items-start'>
					<div className='max-w-[519px] w-full mb-4'>
						<div
							className='py-[6px] px-[12px] rounded-full w-fit mx-auto sm:mx-0 bg-white max-sm:px-[10px]'
							style={{
								boxShadow:
									'rgba(0, 0, 0, 0.04) 0px -1px 0.5px 0px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 0.5px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 2px -1px, rgba(27, 27, 27, 0.03) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 4px 4px -2px, rgba(0, 0, 0, 0.02) 0px 8px 8px -4px',
							}}
						>
							<p className='text-[#141515] text-[12px] font-medium leading-[18px]'>
								ITIC Digital Solutions Suite
							</p>
						</div>
					</div>

					<div className='w-full flex flex-col sm:flex-row sm:items-end sm:justify-start gap-[40px] sm:gap-[80px] items-center text-center sm:text-left'>
						<h2 className='text-[#141515] text-[32px] sm:text-[40px] leading-[40px] sm:leading-[48px] font-semibold pt-[16px] max-w-[519px]'>
							Boost Productivity and Drive Success with ITIC
						</h2>
						<p className='text-[#646868] text-[14px] leading-[22px] max-w-[384px]'>
							At ITIC, we bring your ideas to life with cutting-edge technology
							and creativity!
						</p>
					</div>
				</div>

				<div className='relative max-sm:mx-[10px] max-sm:pt-[130px] w-full mt-12'>
					{/* Globe image */}
					<Image
						src='/images/globe.png'
						alt='globe'
						width={1340}
						height={341}
						className='h-[341px] w-[1340px] absolute top-[25px] left-0 object-cover max-sm:w-[342px] max-sm:h-[121px]'
					/>

					{/* Cards */}
					<div className='relative z-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:mt-44 max-w-[1110px] mx-auto'>
						{stats.map((stat, index) => (
							<div
								key={index}
								className='p-[32px] bg-white rounded-[20px] w-full h-[190px] mx-auto text-center sm:text-left'
								style={{
									boxShadow:
										'rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 0.5px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 2px -1px, rgba(27, 27, 27, 0.03) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 4px 4px -2px, rgba(0, 0, 0, 0.02) 0px 8px 8px -4px, rgba(0, 0, 0, 0.04) 0px -1px 0.5px 0px inset',
									backdropFilter: 'blur(36px)',
								}}
							>
								<span className='text-[#141515] text-[32px] sm:text-[40px] font-semibold leading-[44px] sm:leading-[56px] block'>
									{stat.value}
								</span>
								<p className='text-[#8C9292] text-[14px] leading-[22px] pt-[8px]'>
									{stat.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default StatsSection
