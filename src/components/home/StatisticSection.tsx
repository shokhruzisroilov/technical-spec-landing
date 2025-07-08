import Image from 'next/image'
import { Stat } from '@/types'

const stats: Stat[] = [
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

const StatisticSection = () => {
	return (
		<section className='bg-[#F2F2F2] py-24 px-4 sm:px-6 flex justify-center'>
			<div className='w-full max-w-[1110px]'>
				{/* Header */}
				<div className='flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8 text-center lg:text-left'>
					<div className='space-y-4 max-w-[600px]'>
						<div className='inline-block bg-white rounded-full px-3 py-1 shadow-sm'>
							<p className='text-[#141515] text-xs font-medium'>
								ITIC Digital Solutions Suite
							</p>
						</div>
						<h2 className='text-[#141515] text-4xl font-semibold leading-tight'>
							Boost Productivity and <br className='hidden lg:block' />
							Drive Success with ITIC
						</h2>
					</div>
					<p className='text-[#646868] text-sm max-w-[400px]'>
						At ITIC, we bring your ideas to life with cutting-edge technology
						and creativity!
					</p>
				</div>

				{/* Globe background */}
				<div className='relative'>
					<div className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden'>
						<Image
							src='/images/globe.png'
							alt='globe'
							width={1340}
							height={340}
							className='w-full object-contain opacity-50'
						/>
					</div>

					{/* Stats */}
					<div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{stats.map(stat => (
							<div
								key={stat.value}
								className='bg-white rounded-xl shadow-sm p-6 text-left'
							>
								<h3 className='text-[#141515] text-2xl font-semibold mb-2'>
									{stat.value}
								</h3>
								<p className='text-[#646868] text-sm leading-relaxed'>
									{stat.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default StatisticSection
