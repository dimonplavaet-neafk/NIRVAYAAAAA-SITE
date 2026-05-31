"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// DIVIDER 1: Triangle with pulsing center dot (Hero -> Services)
// Triangle: 30x26px, equilateral outline, center dot at centroid
// CHANGE 8: Added neon glow effect
export function TriangleDotsDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="divider-neon-glow"
      >
        <svg
          width="30"
          height="26"
          viewBox="0 0 30 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1L29 25H1L15 1Z"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="15"
            cy="17"
            r="2"
            fill="#C8943E"
            className="animate-triangle-center-pulse"
          />
        </svg>
      </motion.div>
    </div>
  )
}

// DIVIDER 2: Lotus flower outline (Services -> Portfolio)
// CHANGE 8: Added neon glow effect
export function LotusDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className={`divider-neon-glow ${isInView ? "animate-lotus-breathe" : ""}`}
      >
        <svg
          width="50"
          height="30"
          viewBox="0 0 50 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M25 2 Q25 15, 25 28 Q22 15, 25 2 M25 2 Q25 15, 25 28 Q28 15, 25 2"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.path
            d="M18 5 Q15 15, 18 26 Q13 15, 18 5"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.path
            d="M32 5 Q35 15, 32 26 Q37 15, 32 5"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.path
            d="M10 8 Q5 16, 10 24 Q3 16, 10 8"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
          />
          <motion.path
            d="M40 8 Q45 16, 40 24 Q47 16, 40 8"
            stroke="#C8943E"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

// DIVIDER 3: Mini starburst/mandala (Portfolio -> About)
// CHANGE 8: Added neon glow effect
export function MandalaDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const angles = [0, 45, 90, 135, 180, 225, 270, 315]
  const lineLength = 15
  const center = 20

  const getLineEnd = (angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180
    return {
      x: center + Math.cos(angleRad) * lineLength,
      y: center + Math.sin(angleRad) * lineLength
    }
  }

  return (
    <div ref={ref} className="py-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className={`divider-neon-glow ${isInView ? "animate-mandala-rotate" : ""}`}
        style={{ width: 40, height: 40 }}
      >
        <svg
          viewBox="0 0 40 40"
          width="40"
          height="40"
          fill="none"
        >
          {angles.map((angle, i) => {
            const end = getLineEnd(angle)
            return (
              <motion.line
                key={angle}
                x1={center}
                y1={center}
                x2={end.x}
                y2={end.y}
                stroke="#C8943E"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: i * 0.08,
                  ease: 'easeOut'
                }}
              />
            )
          })}
          <circle
            cx={center}
            cy={center}
            r="2"
            fill="#C8943E"
            className="animate-center-glow"
          />
        </svg>
      </motion.div>
    </div>
  )
}

// DIVIDER 4: Vertical gold line with bottom dot (About/Team -> Contacts)
// CHANGE 8: Added neon glow effect
export function VerticalLineDivider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="py-8 flex items-center justify-center">
      <div className="flex flex-col items-center divider-neon-glow">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isInView ? { height: 60, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-px"
          style={{ backgroundColor: '#C8943E' }}
        />
      </div>
    </div>
  )
}

// Triangle symbol for logo
export function TriangleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 1L19 17H1L10 1Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="10"
        cy="12"
        r="2"
        fill="currentColor"
      />
    </svg>
  )
}
