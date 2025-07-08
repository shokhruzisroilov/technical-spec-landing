import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<div className='flex justify-center w-full'>
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

						{/* Links */}
						<div className='flex justify-end gap-[24px] w-full max-sm:flex-col max-sm:gap-[20px]'>
							{/* Product */}
							<div className='max-w-[187px] w-full'>
								<p className='text-white text-[14px] font-[500] leading-[22px]'>
									Product
								</p>
								<ul className='pt-[24px] space-y-[16px]'>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										Blog
									</li>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										News
									</li>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										What we do
									</li>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										Areas of expertise
									</li>
								</ul>
							</div>

							{/* Company */}
							<div className='max-w-[187px] w-full'>
								<p className='text-white text-[14px] font-[500] leading-[22px]'>
									Company
								</p>
								<ul className='pt-[24px] space-y-[16px]'>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										Global Partners
									</li>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										About us
									</li>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										Our Team
									</li>
								</ul>
							</div>

							{/* Resources */}
							<div className='max-w-[187px] w-full'>
								<p className='text-white text-[14px] font-[500] leading-[22px]'>
									Resources
								</p>
								<ul className='pt-[24px] space-y-[16px]'>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										Contact
									</li>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										Privacy Policy
									</li>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										Terms of Service
									</li>
								</ul>
							</div>

							{/* Contact */}
							<div className='max-w-[187px] w-full'>
								<p className='text-white text-[14px] font-[500] leading-[22px]'>
									Contacts
								</p>
								<ul className='pt-[24px] space-y-[16px]'>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										<Mail className='inline w-5 h-5' /> example@gmail.com
									</li>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										<Phone className='inline w-5 h-5' /> +998991234565
									</li>
									<li className='text-[#A1A5A5] hover:text-white transition-all duration-200 cursor-pointer text-[14px] leading-[22px]'>
										<MapPin className='inline w-5 h-5' /> IT Investments Center
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Bottom */}
					<div className='pt-[114px] flex items-center justify-between max-sm:flex-col max-sm:gap-[45px] relative z-10'>
						<p className='text-white text-[14px] leading-[22px]'>
							©2025 ITIC. All rights reserved
						</p>
						<div className='flex items-center gap-[32px]'>
							<Link href='/' className='text-white text-[14px] leading-[22px]'>
								Telegram
							</Link>
							<Link href='/' className='text-white text-[14px] leading-[22px]'>
								LinkedIn
							</Link>
							<Link href='/' className='text-white text-[14px] leading-[22px]'>
								Twitter
							</Link>
							<Link href='/' className='text-white text-[14px] leading-[22px]'>
								Instagram
							</Link>
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
