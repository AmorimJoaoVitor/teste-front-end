import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import CategoryIcons from './components/CategoryIcons'
import ProductSection from './components/ProductSection'
import PartnersSection from './components/PartnersSection'
import BrandsSection from './components/BrandsSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <HeroBanner />  
      <CategoryIcons />
      <ProductSection showTabs={true} />
      <PartnersSection />
      <ProductSection showTabs={false} showViewAll={true} />
      <PartnersSection />
      <BrandsSection />
      <ProductSection showTabs={false} showViewAll={true} />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App