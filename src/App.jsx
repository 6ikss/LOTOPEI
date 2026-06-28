import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import Atmosphere from './components/Atmosphere.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Why from './components/Why.jsx'
import ModelY from './components/ModelY.jsx'
import Itineraries from './components/Itineraries.jsx'
import Reserve from './components/Reserve.jsx'
import Trust from './components/Trust.jsx'
import Faq from './components/Faq.jsx'
import CtaFinal from './components/CtaFinal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <MotionConfig reducedMotion="user">
      <Atmosphere />
      <motion.div className="progress" style={{ scaleX, right: 0 }} aria-hidden="true" />
      <Navbar />

      <main>
        <Hero />
        <Why />
        <ModelY />
        <Itineraries />
        <Reserve />
        <Trust />
        <Faq />
        <CtaFinal />
      </main>

      <Footer />

      <div className="stickycta">
        <a className="btn btn--primary" href="#reserver">
          Réserver ma Tesla Model Y
        </a>
      </div>
    </MotionConfig>
  )
}
