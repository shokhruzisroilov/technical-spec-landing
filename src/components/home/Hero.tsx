import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const logos = [
	{ src: '/images/beeline.png', alt: 'Beeline' },
	{ src: '/images/beeline.png', alt: 'Beeline' },
	{ src: '/images/beeline.png', alt: 'Beeline' },
	{ src: '/images/webster.png', alt: 'Webster' },
	{ src: '/images/hp.png', alt: 'HP' },
	{ src: '/images/itpark.png', alt: 'IT Park' },
	{ src: '/images/vazirlik.png', alt: 'Vazirlik' },
	{ src: '/images/uzinfocom.png', alt: 'Uzinfocom' },
	{ src: '/images/astir.png', alt: 'Astir' },
]

const HeroSection = () => {
	return (
		<section className='flex justify-center px-4 sm:px-6 lg:px-10 pb-10'>
			<div className='relative w-full max-w-[1440px] overflow-hidden rounded-[32px] bg-[#091315] px-4 py-10 sm:px-8 sm:py-16 lg:px-20 lg:pt-[96px] lg:pb-[64px]'>
				{/* Background Image */}
				<Image
					src='/images/heroBg.png'
					alt='Hero background'
					width={668}
					height={504}
					className='absolute bottom-0 right-0 z-0 opacity-20 object-cover max-sm:h-24'
				/>

				{/* Main Hero Image */}
				<Image
					src='/images/heroImg.png'
					alt='Hero image'
					width={979}
					height={600}
					className='absolute bottom-[-24px] right-[-100px] z-10 max-w-none max-sm:w-[400px]'
				/>

				{/* Blur Decoration */}
				<Image
					src='/images/heroImg2.png'
					alt='Hero image 2'
					width={1000}
					height={600}
					className='absolute bottom-[30px] right-0 z-0 blur-sm max-w-none max-sm:w-[500px]'
				/>

				{/* Text Section */}
				<div className='relative z-20 max-w-2xl text-left sm:text-left max-sm:text-center'>
					<h2 className='text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight'>
						Your Gateway to Innovative IT Solutions
					</h2>
					<p className='text-[#FFFFFFB2] text-base sm:text-lg lg:text-xl leading-relaxed pt-5 max-w-xl'>
						Unlock opportunities with our innovative IT solutions. We leverage
						cutting-edge technologies to keep your business ahead in the
						ever-evolving tech landscape.
					</p>
					<Link
						href='/contact-us'
						className='mt-8 inline-flex justify-center sm:mt-10'
					>
						<button className='flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#1D1D1D] hover:opacity-90 transition'>
							Start for free <ArrowRight className='w-[18px] h-[18px]' />
						</button>
					</Link>
				</div>

				{/* Logos Section */}
				<div className='relative z-20 mt-10 sm:mt-14'>
					<p className='text-sm text-white font-mono text-center sm:text-left'>
						Trusted by thousands of teams
					</p>
					<div className='mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-3 sm:gap-4'>
						{logos.map((logo, index) => (
							<div
								key={index}
								className='flex items-center justify-center rounded-xl border border-white/5 bg-white/5 px-4 py-2'
							>
								<Image
									src={logo.src}
									alt={`${logo.alt} logo`}
									width={96}
									height={40}
									className='h-8 object-contain'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
