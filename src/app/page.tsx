import ContactFormSection from '@/components/common/ContactFormSection'
import FAQSection from '@/components/common/FAQSection'
import HeroSection from '@/components/home/Hero'
import PortfolioSection from '@/components/home/PortfolioSection'
import Services from '@/components/home/Services'
import StatisticSection from '@/components/home/StatisticSection'

const Home = () => {
	return (
		<div>
			<HeroSection />
			<Services />
			<StatisticSection />
			<PortfolioSection />
			<ContactFormSection />
			<FAQSection />
		</div>
	)
}

export default Home
