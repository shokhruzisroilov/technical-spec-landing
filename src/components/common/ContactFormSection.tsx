'use client'

import { useForm } from 'react-hook-form'

type ContactFormData = {
	fullName: string
	phone: string
	userEmail: string
	comment: string
}

const ContactFormSection = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>()

	const onSubmit = (data: ContactFormData) => {
		console.log('Get information:', data)
		// getApi
		reset()
	}

	return (
		<div className='flex justify-center w-full bg-white' data-aos='fade-up'>
			<div className='max-w-[1440px] w-full py-[144px] flex justify-center max-sm:px-[16px] max-sm:py-[46px] sm:px-[16px]'>
				<div className='max-w-[1110px] w-full flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-[48px] sm:flex-col sm:items-center sm:gap-[48px] sm:justify-center lg:flex-row lg:items-start'>
					{/* Left side */}
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
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='w-full space-y-[16px]'
						>
							{/* Full Name */}
							<div>
								<label
									htmlFor='fullName'
									className='text-[#1D1D1D] text-[14px] leading-[20px] font-medium'
								>
									Full Name
								</label>
								<input
									id='fullName'
									type='text'
									{...register('fullName', {
										required: 'Full name is required',
									})}
									className='w-full h-[40px] mt-[8px] rounded-[8px] border border-[#0000000A] bg-[rgba(10,10,10,0.04)] px-3 text-[14px] text-[#1D1D1D] focus:outline-none'
								/>
								{errors.fullName && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.fullName.message}
									</p>
								)}
							</div>

							{/* Phone Number */}
							<div>
								<label
									htmlFor='phone'
									className='text-[#1D1D1D] text-[14px] leading-[20px] font-medium'
								>
									Phone Number
								</label>
								<input
									id='phone'
									type='text'
									{...register('phone', {
										required: 'Phone number is required',
									})}
									className='w-full h-[40px] mt-[8px] rounded-[8px] border border-[#0000000A] bg-[rgba(10,10,10,0.04)] px-3 text-[14px] text-[#1D1D1D] focus:outline-none'
								/>
								{errors.phone && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.phone.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor='userEmail'
									className='text-[#1D1D1D] text-[14px] leading-[20px] font-medium'
								>
									Email
								</label>
								<input
									id='userEmail'
									type='email'
									{...register('userEmail', {
										required: 'Email is required',
										pattern: {
											value: /^\S+@\S+$/i,
											message: 'Invalid email address',
										},
									})}
									className='w-full h-[40px] mt-[8px] rounded-[8px] border border-[#0000000A] bg-[rgba(10,10,10,0.04)] px-3 text-[14px] text-[#1D1D1D] focus:outline-none'
								/>
								{errors.userEmail && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.userEmail.message}
									</p>
								)}
							</div>

							{/* Comment */}
							<div>
								<label
									htmlFor='comment'
									className='text-[#1D1D1D] text-[14px] leading-[20px] font-medium'
								>
									How can we help?
								</label>
								<textarea
									id='comment'
									placeholder='Your company needs'
									{...register('comment', { required: 'Message is required' })}
									className='w-full mt-[8px] h-[152px] rounded-[8px] border border-[#0000000A] bg-[rgba(10,10,10,0.04)] px-[16px] py-[12px] text-[14px] text-[#1D1D1D] resize-none focus:outline-none'
								></textarea>
								{errors.comment && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.comment.message}
									</p>
								)}
							</div>

							{/* Submit */}
							<div>
								<p className='text-[#0A0A0AB2] text-[16px] leading-[24px]'>
									By submitting this, I confirm that I have read and understood
									the{' '}
									<a
										href='/privacy-policy'
										className='border-b border-[#0A0A0AB2]'
									>
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
