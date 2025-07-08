import ContactFormSection from '@/components/common/ContactFormSection'
import FAQSection from '@/components/common/FAQSection'
import ClientSection from '@/components/home/ClientSection'
import HeroSection from '@/components/home/Hero'
import NewsSection from '@/components/home/NewsSection'
import PortfolioSection from '@/components/home/PortfolioSection'
import Services from '@/components/home/Services'
import StatisticSection from '@/components/home/StatisticSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Bosh sahifa',
	description: 'Bizning xizmatlarimiz va loyihalarimiz haqida maʼlumot oling',
}

const Home = () => {
	return (
		<>
			<HeroSection />
			<Services />
			<StatisticSection />
			<PortfolioSection />
			<ClientSection />
			<NewsSection />
			<ContactFormSection />
			<FAQSection />
		</>
	)
}

export default Home
