import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
	id: string
	title: string
	description: string
	image: string
	date: string
}

const newsData: NewsItem[] = [
	{
		id: '1',
		title: 'Protecting Your Business Finances with Radar’s Advanced Tools',
		description:
			'Lorem ipsum dolor sit amet consectetur. Adipiscing elit etiam vehicula.',
		image: '/images/news-item-image.png',
		date: 'News · 17 Sep, 2024',
	},
	{
		id: '2',
		title: 'Essential Strategies for Cloud-Based Financial Management',
		description:
			'Lorem ipsum dolor sit amet consectetur. Adipiscing elit etiam vehicula.',
		image: '/images/news-item-image.png',
		date: 'Blog · 17 Sep, 2024',
	},
	{
		id: '3',
		title: 'Understanding Financial Ratings for Better Decision-Making',
		description:
			'Lorem ipsum dolor sit amet consectetur. Adipiscing elit etiam vehicula.',
		image: '/images/news-item-image.png',
		date: 'Blog · 17 Sep, 2024',
	},
]

const NewsSection = () => {
	return (
		<div className='bg-[#F2F2F2] flex justify-center w-full'>
			<div className='max-w-[1440px] w-full py-[144px] flex justify-center max-sm:px-[16px] max-sm:py-[46px] sm:px-[16px]'>
				<div className='max-w-[1110px] w-full flex flex-col items-center'>
					{/* Header */}
					<div className='mb-[48px] w-full flex flex-col items-center text-center'>
						<div
							className='py-[6px] px-[12px] rounded-full w-fit bg-white'
							style={{
								boxShadow:
									'rgba(0, 0, 0, 0.04) 0px -1px 0.5px 0px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 0.5px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 2px -1px, rgba(27, 27, 27, 0.03) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 4px 4px -2px, rgba(0, 0, 0, 0.02) 0px 8px 8px -4px',
							}}
						>
							<p className='text-[#141515] text-[12px] font-medium leading-[18px]'>
								Our News & Blogs
							</p>
						</div>

						<h2 className='text-[#141515] text-[40px] leading-[48px] font-semibold pt-[20px] max-w-[700px] max-sm:text-[24px] max-sm:leading-[26px] sm:text-[32px] sm:leading-[44px]'>
							Explore the latest news & blogs from ITIC
						</h2>

						<p className='text-[#646868] text-[14px] leading-[22px] max-w-[600px] mt-4'>
							At ITIC, we bring your ideas to life with cutting-edge technology
							and creativity!
						</p>
					</div>

					{/* News Cards */}
					<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[18px] justify-center'>
						{newsData.map(item => (
							<div
								key={item.id}
								className='p-[6px] bg-white rounded-[24px] w-full max-w-[358px] max-h-[388px] mx-auto'
								style={{
									boxShadow:
										'rgba(0, 0, 0, 0.04) 0px -1px 0.5px 0px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 0.5px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 2px -1px, rgba(27, 27, 27, 0.03) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 4px 4px -2px, rgba(0, 0, 0, 0.02) 0px 8px 8px -4px',
								}}
							>
								<Image
									src={item.image}
									alt={item.title}
									width={358}
									height={200}
									className='w-full object-cover h-[200px] rounded-[18px] mb-[6px]'
								/>
								<div className='p-[18px]'>
									<p className='text-[#141515] text-[18px] leading-[24px] font-medium'>
										{item.title}
									</p>
									<p className='pt-[4px] text-[#666666] text-[13px] leading-[20px] max-w-[300px]'>
										{item.description}
									</p>
									<p className='text-[#0A0A0AB2] text-[12px] leading-[18px] font-medium pt-[20px]'>
										{item.date}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* View More Button */}
					<div className='flex justify-center pt-[48px]'>
						<Link href='/blogs'>
							<button className='py-[10px] px-[16px] bg-[#0A0A0A] border border-[#0A0A0A29] rounded-[8px] text-white text-[14px] leading-[20px] font-medium hover:bg-[#262626] transition-all duration-200 cursor-pointer'>
								View More
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsSection
