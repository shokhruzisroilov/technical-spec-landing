import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion'

const faqData = [
	{
		id: 'item-1',
		question: 'What is included in the free trial?',
		answer:
			'Our free trial gives you full access to all features of the platform for 14 days. You can explore everything from basic tools to advanced integrations, allowing you to test how our solution fits your needs without any limitations.',
	},
	{
		id: 'item-2',
		question: 'Can I cancel my subscription at any time?',
		answer:
			'Yes, you can cancel your subscription at any time directly from your account settings.',
	},
	{
		id: 'item-3',
		question: 'Do you offer discounts for annual plans?',
		answer:
			'Absolutely! We offer a significant discount when you choose to pay annually instead of monthly. This is a great option if you’re looking to save money while ensuring long-term access to our services.',
	},
	{
		id: 'item-4',
		question: 'Is my data secure on your platform?',
		answer:
			'Security is our top priority. We employ industry-leading encryption, regular security audits, and compliance with global data protection standards to ensure your data is always safe and secure on our platform.',
	},
	{
		id: 'item-5',
		question: 'Can I change my plan after I’ve subscribed?',
		answer:
			'Yes, you can upgrade or downgrade your plan at any time from your account dashboard. Your billing will be adjusted automatically, with any changes taking effect immediately.',
	},
	{
		id: 'item-6',
		question: 'Do you offer support for onboarding new users?',
		answer:
			'Yes, we provide comprehensive onboarding support, including tutorials, documentation, and personal assistance. For larger teams, our onboarding specialists can guide you through the setup process to ensure a smooth transition to our platform.',
	},
]

const FAQSection = () => {
	return (
		<div className='w-full max-w-2xl mx-auto py-12 px-4' data-aos='fade-up'>
			<h2 className='mb-4 font-semibold text-[40px] leading-[56px] tracking-[-0.96px] text-center text-[#171717]'>
				FAQs
			</h2>
			<p className='mb-8 text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-center text-[#0A0A0AB2]'>
				Discover quick and comprehensive answers to common questions about our
				platform, services, and features.
			</p>

			<Accordion type='multiple' className='w-full'>
				{faqData.map(({ id, question, answer }) => (
					<AccordionItem key={id} value={id}>
						<AccordionTrigger className='font-medium text-[16px] leading-[24px] tracking-[-0.01em] text-[#141515]'>
							{question}
						</AccordionTrigger>
						<AccordionContent className='font-normal text-[16px] leading-[24px] tracking-[-0.01em] text-[#0A0A0AB2]'>
							{answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}

export default FAQSection
