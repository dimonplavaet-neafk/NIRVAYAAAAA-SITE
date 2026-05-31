"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function MotionControl() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 circuit-pattern" />
      
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Cloud description block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 flex justify-center"
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl px-8 py-8 md:px-12 md:py-10 text-center"
            style={{
              background: "rgba(14,18,37,0.7)",
              border: "1px solid rgba(200,148,62,0.12)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 60px rgba(27,107,138,0.08), 0 0 120px rgba(200,148,62,0.04)",
            }}
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/20 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/20 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/20 rounded-br-2xl" />

            <p className="font-heading font-normal text-gold text-sm tracking-wider mb-4">
              MOTION CONTROL
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.1em] leading-tight mb-5">
              Двигаемся так, как вы скажете
            </h2>
            <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
              Нужен конкретный танец? Определённый жест? Точная пластика? 
              Мы переносим любые движения в AI-видео — персонаж делает именно то, что вы задумали.
            </p>
          </div>
        </motion.div>

        {/* Videos: 9:16 left + 16:9 right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-center max-w-5xl mx-auto"
        >
          {/* Video 9:16 (vertical) */}
          <div
            className="relative w-full md:w-[240px] lg:w-[280px] aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-gold/60 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
              </div>
            </div>
            {/* Label */}
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="text-foreground-muted text-xs font-heading tracking-wider">9:16</span>
            </div>
          </div>

          {/* Video 16:9 (horizontal) */}
          <div
            className="relative aspect-video rounded-sm overflow-hidden"
            style={{
              border: "1px solid rgba(200,148,62,0.15)",
              background: "rgba(14,18,37,0.6)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-gold/60 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
              </div>
            </div>
            {/* Label */}
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="text-foreground-muted text-xs font-heading tracking-wider">16:9</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
