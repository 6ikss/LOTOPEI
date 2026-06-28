import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Island from './components/Island.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Island />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </MotionConfig>
  )
}
