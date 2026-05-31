"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

// Stats with custom icons
const stats = [
  { 
    number: 50, 
    suffix: "+", 
    label: "проектов реализовано",
    icon: "triangle"
  },
  { 
    number: 0, 
    suffix: "", 
    label: "Воплотим любую идею",
    icon: "infinity",
    isSymbol: false,
    symbol: null
  },
  { 
    number: 0, 
    suffix: "", 
    label: "Не считаем правки — считаем качество",
    icon: "diamond",
    isSymbol: true,
    symbol: "◆"
  },
  { 
    number: 360, 
    suffix: "°", 
    label: "Полный цикл — от идеи до экрана",
    icon: "cycle"
  },
]

// Custom SVG icons for stats
function StatIcon({ type }: { type: string }) {
  switch (type) {
    case "triangle":
      return (
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
          <path d="M12 2L22 20H2L12 2Z" stroke="#C8943E" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="14" r="1.5" fill="#C8943E" />
        </svg>
      )
    case "infinity":
      return null
    case "empty":
      return null
    case "diamond":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="#C8943E" strokeWidth="1.5" fill="none" />
        </svg>
      )
    case "cycle":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" stroke="#C8943E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M22 2v6h-6" stroke="#C8943E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M22 8l-3.5-3.5" stroke="#C8943E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      )
    default:
      return null
  }
}

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const animationRef = useRef<number | null>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current || value === 0) return

    hasAnimatedRef.current = true
    const startTime = performance.now()
    const duration = 2000

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easeOut * value)
      
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isInView, value])

  return (
    <span>
      {displayValue}{suffix}
    </span>
  )
}

export function About() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 })
  const [showLines, setShowLines] = useState(false)

  // Show stat lines after count-up animation completes
  useEffect(() => {
    if (statsInView) {
      const timer = setTimeout(() => {
        setShowLines(true)
      }, 2200) // After 2s count-up + 200ms buffer
      return () => clearTimeout(timer)
    }
  }, [statsInView])

  return (
    <section id="about" className="py-24 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Circuit board background pattern - CHANGE 6 */}
      <div className="absolute inset-0 circuit-pattern" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text content - 60% */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-heading font-normal text-gold text-sm tracking-wider mb-4"
            >
              О NIRVAYA STUDIO
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.12em] leading-tight mb-8"
            >
              Мы не используем технологии — мы ими владеем
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-foreground/80 leading-relaxed"
            >
              <p>
                <span className="text-gold font-medium">NIRVAYA STUDIO</span> — продакшн-студия нового формата. Мы — команда из трёх профессионалов, каждый из которых мастер в своей области: дизайн, генерация и монтаж.
              </p>
              <p>
                Мы создаём кинематографичные клипы, рекламные ролики и промо-видео, которые выглядят на миллион — независимо от масштаба бюджета.
              </p>
              <p>
                Наш подход: сочетание классического видеопроизводства, глубокого понимания визуального языка и передовых инструментов, включая AI-генерацию, motion control и профессиональную пост-обработку в DaVinci Resolve. <span className="text-foreground">Мы умеем всё — от живой съёмки до полностью сгенерированных миров.</span>
              </p>
              <p>
                AI для нас — это инструмент, как камера или свет. Не замена мастерства, а его усилитель. Наша ключевая сила — сохранение внешности реального человека в кадре, режиссура каждой сцены и монтаж, который превращает набор кадров в историю с эмоцией и ритмом.
              </p>
              <p className="font-heading font-normal italic text-foreground/60">
                NIRVAYA STUDIO — это несокрушимое качество. Каждый кадр. Каждый проект.
              </p>
            </motion.div>
          </div>

          {/* Image placeholder - 40% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[3/4] bg-placeholder-bg border border-placeholder-border rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-foreground-muted text-sm">
                Стилизованное изображение
              </div>
              {/* Teal glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-teal/20 blur-3xl opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats - CHANGE 3 */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-gold/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center flex flex-col items-center rounded-xl p-6 md:p-5 transition-all duration-300 hover:border-gold/25"
                style={{
                  border: '1px solid rgba(200,148,62,0.1)',
                  background: 'rgba(14,18,37,0.5)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {/* Custom icon */}
                <div className="mb-4 h-6 flex items-center justify-center">
                  <StatIcon type={stat.icon} />
                </div>
                
                {/* Number or symbol or NO LIMITS text */}
                <div className="font-heading font-semibold text-3xl md:text-4xl text-gold mb-2">
                  {stat.icon === "infinity" ? (
                    <span className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-[0.15em] text-gold">NO LIMITS</span>
                  ) : stat.isSymbol ? (
                    <span className="text-4xl md:text-5xl leading-none text-gold" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200 }}>{stat.symbol}</span>
                  ) : (
                    <AnimatedNumber value={stat.number} suffix={stat.suffix} isInView={statsInView} />
                  )}
                </div>
                
                {/* Thin gold line below number */}
                <div 
                  className={`h-px bg-gold mb-3 transition-all duration-500 ${showLines ? 'w-10 opacity-100' : 'w-0 opacity-0'}`}
                />
                
                {/* Label */}
                <p className="text-foreground-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
