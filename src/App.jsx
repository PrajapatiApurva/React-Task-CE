import FAQs from "./components/FAQs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import PricingPlan from "./components/PricingPlan"
import WhyToUs from "./components/WhyToUs"

function App() {

  return (
    <>
      <Intro/>
      <Navbar/>
      <div id="hero"><Hero/></div>
      <div id="why-us"><WhyToUs/></div>
      <div id="pricing"><PricingPlan/></div>
      <div id="faqs"><FAQs/></div>
      <Footer/>
    </>
  )
}

export default App
