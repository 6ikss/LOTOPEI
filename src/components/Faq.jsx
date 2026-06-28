import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ } from '../data/site.js'
import { reveal, stagger, viewport } from '../lib/motion.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container">
        <motion.div
          className="shead shead--center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.span className="eyebrow eyebrow--center" variants={reveal}>
            Questions fréquentes
          </motion.span>
          <motion.h2 className="stitle" variants={reveal}>
            Tout savoir avant de rouler
          </motion.h2>
        </motion.div>

        <motion.div
          className="faq"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <motion.div className="faq__item" key={item.q} data-open={isOpen} variants={reveal}>
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq__a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="faq__a-inner">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
