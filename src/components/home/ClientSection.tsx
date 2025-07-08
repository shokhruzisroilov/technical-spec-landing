import Image from 'next/image'

interface Testimonial {
	id: number
	logo: string
	text: string
	text2?: string
	name: string
	position: string
	avatar: string
}

const testimonials = [
	{
		id: 1,
		logo: '/images/svg/versel.svg',
		text: `Working with ITIC has been an absolute game-changer for our company. Their team is incredibly professional, detail-oriented, and innovative. They took the time to understand our specific needs and delivered a solution that exceeded our expectations.`,
		text2:
			'Thanks to their expertise, we’ve been able to optimize our workflows, improve efficiency, and achieve significant growth. ITIC is not just a service provider; they are a trusted partner that truly cares about our success.',
		name: 'Lily Snow',
		position: 'CEO / Luvy',
		avatar: '/images/avatar.png',
	},
	{
		id: 2,
		logo: '/images/svg/versel.svg',
		text: `Our collaboration with ITIC has been nothing short of exceptional. Their team demonstrated a deep understanding of technology and business strategy, allowing us to implement cutting-edge solutions tailored to our industry.`,
		name: 'Zoe Hart',
		position: 'CEO / Vario',
		avatar: '/images/avatar.png',
	},
	{
		id: 3,
		logo: '/images/svg/versel.svg',
		text: `When we started working with ITIC, we knew we needed a reliable and forward-thinking IT partner, and they have proven to be exactly that. Their ability to understand our goals and turn them into reality has been remarkable.`,
		name: 'Jake Reid',
		position: 'CEO / Versel',
		avatar: '/images/avatar.png',
	},
	{
		id: 4,
		logo: '/images/svg/versel.svg',
		text: `At Opus, we always strive to work with the best partners, and ITIC has proven to be one of them. Their team’s ability to deliver high-quality IT solutions with precision and efficiency has exceeded our expectations.`,
		name: 'Tom Hale',
		position: 'CEO / Flinta',
		avatar: '/images/avatar.png',
	},
	{
		id: 5,
		logo: '/images/svg/versel.svg',
		text: `Thanks to their expertise, we’ve been able to optimize our workflows, improve efficiency, and achieve significant growth. ITIC is not just a service provider; they are a trusted partner that truly cares about our success.`,
		name: 'Adam Cole',
		position: 'CEO / Spark',
		avatar: '/images/avatar.png',
	},
	{
		id: 6,
		logo: '/images/svg/versel.svg',
		text: `Partnering with ITIC has been one of the best decisions we have made for our company. Their team possesses a deep knowledge of technology and an unmatched ability to implement customized solutions that drive real results.`,
		name: 'Ben Ross',
		position: 'CEO / Polka',
		avatar: '/images/avatar.png',
	},
	{
		id: 7,
		logo: '/images/svg/opus.svg',
		text: `At Opus, we always strive to work with the best partners, and ITIC has proven to be one of them. Their team’s ability to deliver high-quality IT solutions with precision and efficiency has exceeded our expectations. ITIC has played a crucial role in improving our digital presence, optimizing our workflows, and ensuring the security of our systems.`,
		text2:
			'Their attention to detail, strategic approach, and commitment to excellence make them a standout IT company.',
		name: 'Mia Lane',
		position: 'CEO / Opus',
		avatar: '/images/avatar.png',
	},
]

const ClientSection = () => {
	return (
		<div
			className='flex justify-center px-4 py-[80px] bg-[#F2F2F2]'
			data-aos='fade-up'
		>
			<div className='max-w-[1110px] w-full'>
				{/* Header Section */}
				<div className='flex flex-col items-center text-center lg:items-start sm:text-left'>
					{/* Label */}
					<div
						className='py-[6px] px-[12px] rounded-full w-fit bg-white'
						style={{
							boxShadow:
								'rgba(0, 0, 0, 0.04) 0px -1px 0.5px 0px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 0.5px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 2px -1px, rgba(27, 27, 27, 0.03) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 4px 4px -2px, rgba(0, 0, 0, 0.02) 0px 8px 8px -4px',
						}}
					>
						<p className='text-[#141515] text-[12px] font-medium leading-[18px]'>
							What Our Clients Say
						</p>
					</div>

					{/* Title */}
					<div className='pt-[20px] space-y-[12px]'>
						<h2 className='text-[#141515] text-[40px] font-semibold leading-[48px] max-sm:text-[24px] max-sm:leading-[26px] sm:text-[32px] sm:leading-[44px] max-w-[600px] text-center lg:text-left'>
							Trusted by Industry Leaders and Innovative Startups
						</h2>
						<p className='text-[#646868] text-[14px] leading-[22px] lg:max-w-[500px] text-center lg:text-left'>
							At ITIC, we deliver innovative solutions that drive success,
							earning the trust of startups and enterprises alike.
						</p>
					</div>
				</div>

				{/* Cards Section */}
				<div className='pt-12 px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
						{/* Column 1 */}
						<div className='flex flex-col gap-3 w-full max-w-[350px]'>
							{testimonials.slice(0, 2).map(item => (
								<TestimonialCard key={item.id} item={item} />
							))}
						</div>

						{/* Column 2 */}
						<div className='flex flex-col gap-3 w-full max-w-[350px]'>
							{testimonials.slice(2, 5).map(item => (
								<TestimonialCard key={item.id} item={item} />
							))}
						</div>

						{/* Column 3 */}
						<div className='flex flex-col gap-3 w-full max-w-[350px]'>
							{testimonials.slice(5, 7).map(item => (
								<TestimonialCard key={item.id} item={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const TestimonialCard = ({ item }: { item: Testimonial }) => (
	<div
		className={`${
			item.id === 7 ? 'bg-[#091315]' : 'bg-white'
		} rounded-[24px] p-[24px] flex flex-col justify-between shadow-md max-w-[360px] w-full min-h-[350px] ${
			item.text2 && 'h-full'
		}`}
	>
		<div>
			<Image src={item.logo} alt='Client Logo' width={80} height={24} />
			<p
				className={`${
					item.id === 7 ? 'text-[#A1A5A5]' : 'text-[#646868]'
				} text-[14px] leading-[22px] pt-[24px]`}
			>
				{item.text}
			</p>
			{item.text2 && (
				<p
					className={`${
						item.id === 7 ? 'text-[#A1A5A5]' : 'text-[#646868]'
					} text-[14px] leading-[22px] pt-[24px]`}
				>
					{item.text2}
				</p>
			)}
		</div>
		<div className='flex items-center gap-[16px] pt-[24px]'>
			<Image
				src={item.avatar}
				alt={item.name}
				width={48}
				height={48}
				className='rounded-full'
			/>
			<div>
				<p
					className={`${
						item.id === 7 ? 'text-[#FFFFFF]' : 'text-[#141515]'
					} text-[16px] font-medium leading-[24px]`}
				>
					{item.name}
				</p>
				<span className='text-[#777D7D] text-[14px] leading-[22px]'>
					{item.position}
				</span>
			</div>
		</div>
	</div>
)

export default ClientSection
