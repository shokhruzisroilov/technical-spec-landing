const ContactFormSection = () => {
	return (
		<div className='flex justify-center w-full bg-white'>
			<div className='max-w-[1440px] w-full py-[144px] flex justify-center max-sm:px-[16px] max-sm:py-[46px] sm:px-[16px]'>
				<div className='max-w-[1110px] w-full flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-[48px] sm:flex-col sm:items-center sm:gap-[48px] sm:justify-center lg:flex-row lg:items-start'>
					{/* Left Content */}
					<div>
						<div className='max-w-[507px]'>
							<div className='py-[6px] px-[12px] rounded-full w-fit bg-white shadow-sm'>
								<p className='text-[#141515] text-[12px] font-medium leading-[18px]'>
									Get in Touch
								</p>
							</div>
							<div className='space-y-[16px]'>
								<h2 className='text-[#141515] text-[40px] leading-[48px] font-semibold pt-[20px] max-w-[519px] max-sm:text-[24px] max-sm:leading-[26px] sm:text-[32px] sm:leading-[44px]'>
									Innovative Solutions for Your Business
								</h2>
								<p className='text-[#646868] text-[14px] leading-[22px] max-w-[500px]'>
									At ITIC, we provide cutting-edge technology solutions tailored
									to your business needs. Contact us to start working together!
								</p>
							</div>
						</div>
					</div>

					{/* Form */}
					<div className='max-w-[507px] w-full'>
						<form className='w-full space-y-[16px]'>
							{/* Full Name */}
							<div>
								<p className='text-[#1D1D1D] text-[14px] leading-[20px] font-medium'>
									Full Name
								</p>
								<input
									type='text'
									name='fullName'
									className='w-full h-[40px] mt-[8px] rounded-[8px] border border-[#0000000A] bg-[rgba(10,10,10,0.04)] px-3 text-[14px] text-[#1D1D1D] focus:outline-none'
								/>
							</div>

							{/* Phone Number */}
							<div>
								<p className='text-[#1D1D1D] text-[14px] leading-[20px] font-medium'>
									Phone Number
								</p>
								<input
									type='text'
									name='phone'
									className='w-full h-[40px] mt-[8px] rounded-[8px] border border-[#0000000A] bg-[rgba(10,10,10,0.04)] px-3 text-[14px] text-[#1D1D1D] focus:outline-none'
								/>
							</div>

							{/* Email */}
							<div>
								<p className='text-[#1D1D1D] text-[14px] leading-[20px] font-medium'>
									Email
								</p>
								<input
									type='email'
									name='userEmail'
									className='w-full h-[40px] mt-[8px] rounded-[8px] border border-[#0000000A] bg-[rgba(10,10,10,0.04)] px-3 text-[14px] text-[#1D1D1D] focus:outline-none'
								/>
							</div>

							{/* Message */}
							<div>
								<p className='text-[#1D1D1D] text-[14px] leading-[20px] font-medium'>
									How can we help?
								</p>
								<textarea
									name='comment'
									placeholder='Your company needs'
									className='w-full mt-[8px] h-[152px] rounded-[8px] border border-[#0000000A] bg-[rgba(10,10,10,0.04)] px-[16px] py-[12px] text-[14px] text-[#1D1D1D] resize-none focus:outline-none'
								></textarea>
							</div>

							{/* Agreement and Submit */}
							<div>
								<p className='text-[#0A0A0AB2] text-[16px] leading-[24px]'>
									By submitting this, I confirm that I have read and understood
									the{' '}
									<a href='#' className='border-b border-[#0A0A0AB2]'>
										Privacy Policy.
									</a>
								</p>
								<button
									type='submit'
									className='h-[40px] mt-[24px] w-full bg-[#00CDC2] border border-[#0A0A0A29] rounded-[8px] text-white font-medium text-[14px] leading-[20px] shadow-sm cursor-pointer'
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactFormSection
