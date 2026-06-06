"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X } from "lucide-react"

const contacts = [
  { name: "Дмитрий", role: "Neuro Architect", telegram: "@dmitriy_nirvaya", href: "https://t.me/dmitriy_nirvaya" },
  { name: "Виталий", role: "Creative Lead", telegram: "@vitaliy_nirvaya", href: "https://t.me/vitaliy_nirvaya" },
  { name: "Владислав", role: "Post-production specialist", telegram: "@vladislav_nirvaya", href: "https://t.me/vladislav_nirvaya" },
]

export function ContactBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[280px] rounded-lg overflow-hidden"
            style={{
              background: "rgba(14,18,37,0.95)",
              border: "1px solid rgba(200,148,62,0.2)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 30px rgba(200,148,62,0.1), 0 20px 60px rgba(0,0,0,0.5)"
            }}
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-heading font-semibold text-sm uppercase tracking-[0.15em] text-gold">
                  Прямая связь
                </h4>
                <button onClick={() => setIsOpen(false)} className="text-foreground-muted hover:text-gold transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <div key={contact.name}>
                    {index > 0 && <div className="h-px mb-3" style={{ background: "rgba(200,148,62,0.1)" }} />}
                    <div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-foreground font-semibold text-sm">{contact.name}</span>
                        <span className="text-foreground-muted text-xs">{contact.role}</span>
                      </div>
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-teal text-sm hover:text-teal/80 transition-colors">
                        {contact.telegram}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "rgba(14,18,37,0.95)",
          border: "1px solid rgba(200,148,62,0.3)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 20px rgba(200,148,62,0.1)"
        }}
      >
        <Send className="w-5 h-5 text-gold" />
      </motion.button>
    </div>
  )
}
