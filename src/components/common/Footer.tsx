import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
	{
		title: 'Product',
		links: [
			{ label: 'Blog', href: '/blog' },
			{ label: 'News', href: '/news' },
			{ label: 'What we do', href: '/services' },
			{ label: 'Areas of expertise', href: '/expertise' },
		],
	},
	{
		title: 'Company',
		links: [
			{ label: 'Global Partners', href: '/partners' },
			{ label: 'About us', href: '/about' },
			{ label: 'Our Team', href: '/team' },
		],
	},
	{
		title: 'Resources',
		links: [
			{ label: 'Contact', href: '/contact' },
			{ label: 'Privacy Policy', href: '/privacy-policy' },
			{ label: 'Terms of Service', href: '/terms' },
		],
	},
]

const socialLinks = [
	{ label: 'Telegram', href: '/' },
	{ label: 'LinkedIn', href: '/' },
	{ label: 'Twitter', href: '/' },
	{ label: 'Instagram', href: '/' },
]

const Footer = () => {
	return (
		<div className='flex justify-center w-full' data-aos='fade-up'>
			<div className='max-w-[1440px] w-full p-[48px] max-sm:p-[16px]'>
				<div
					className='py-[96px] px-[72px] bg-[#091315] rounded-[48px] relative overflow-hidden max-sm:p-[41px] md:px-[31px]'
					style={{
						boxShadow:
							'rgba(9, 19, 21, 0.898) 0px 0px 0px 4px, rgba(9, 19, 21, 0.12) 0px 4px 4px -2px, rgba(9, 19, 21, 0.12) 0px 8px 8px -4px, rgba(9, 19, 21, 0.12) 0px 12px 12px -6px, rgba(9, 19, 21, 0.12) 0px 16px 16px -8px, rgba(9, 19, 21, 0.12) 0px 32px 32px -8px, rgba(9, 19, 21, 0.12) 0px 64px 64px -32px',
					}}
				>
					{/* Top */}
					<div className='flex justify-between w-full max-lg:flex-col max-lg:gap-[20px] relative z-10'>
						{/* Logo & Description */}
						<div>
							<Link href='/'>
								<Image
									src='/images/svg/logo.svg'
									alt='ITIC Logo'
									width={96}
									height={48}
									className='cursor-pointer'
								/>
							</Link>
							<p className='pt-[20px] max-w-[254px] text-[#8C9292] text-[14px] leading-[22px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								vehicula condimentum.
							</p>
						</div>

						{/* Footer Link Sections */}
						<div className='flex justify-end gap-[24px] w-full max-sm:flex-col max-sm:gap-[20px]'>
							{footerLinks.map(section => (
								<div key={section.title} className='max-w-[187px] w-full'>
									<p className='text-white text-[14px] font-[500] leading-[22px]'>
										{section.title}
									</p>
									<ul className='pt-[24px] space-y-[16px]'>
										{section.links.map(link => (
											<li key={link.label}>
												<Link
													href={link.href}
													className='text-[#A1A5A5] hover:text-white transition-all duration-200 text-[14px] leading-[22px]'
												>
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}

							{/* Contact info */}
							<div className='max-w-[187px] w-full'>
								<p className='text-white text-[14px] font-[500] leading-[22px]'>
									Contacts
								</p>
								<ul className='pt-[24px] space-y-[16px] text-[#A1A5A5] text-[14px] leading-[22px]'>
									<li className='flex items-center gap-2 hover:text-white transition-all'>
										<Mail className='w-4 h-4' />
										<a href='mailto:example@gmail.com'>example@gmail.com</a>
									</li>
									<li className='flex items-center gap-2 hover:text-white transition-all'>
										<Phone className='w-4 h-4' />
										<a href='tel:+998991234565'>+998 99 123 45 65</a>
									</li>
									<li className='flex items-center gap-2 hover:text-white transition-all'>
										<MapPin className='w-4 h-4' />
										<span>IT Investments Center</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Bottom */}
					<div className='pt-[114px] flex items-center justify-between max-sm:flex-col max-sm:gap-[45px] relative z-10'>
						<p className='text-white text-[14px] leading-[22px]'>
							©{new Date().getFullYear()} ITIC. All rights reserved.
						</p>
						<div className='flex items-center gap-[32px]'>
							{socialLinks.map(item => (
								<Link
									key={item.label}
									href={item.href}
									className='text-white text-[14px] leading-[22px]'
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>

					{/* Background images */}
					<Image
						src='/images/svg/Vector.svg'
						alt='vector background'
						width={200}
						height={200}
						className='absolute right-0 bottom-8 opacity-15'
					/>
					<Image
						src='/images/svg/Group.svg'
						alt='group background'
						width={200}
						height={200}
						className='absolute right-0 bottom-16 opacity-15'
					/>
				</div>
			</div>
		</div>
	)
}

export default Footer
