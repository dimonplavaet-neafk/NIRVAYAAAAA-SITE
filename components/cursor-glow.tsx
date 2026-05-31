"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CursorGlow() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })

  useEffect(() => {
    // Only show on desktop
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true)
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-screen hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{ duration: 0.2 }}
        className="relative -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="w-8 h-8 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(200, 148, 62, ${isHovering ? 0.4 : 0.2}) 0%, transparent 70%)`,
          }}
        />
      </motion.div>
    </motion.div>
  )
}
