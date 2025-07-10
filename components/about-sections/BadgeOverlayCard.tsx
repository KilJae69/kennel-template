"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { m, AnimatePresence } from "framer-motion"

interface BadgeOverlayCardProps {
  id: string
  image: string
  subtitle: string
  description: string
  activeId: string | null
  onToggle: (id: string | null) => void
}

export default function BadgeOverlayCard({
  id,
  image,
  subtitle,
  description,
  activeId,
  onToggle,
}: BadgeOverlayCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hasTouch, setHasTouch] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const isActive = activeId === id
  
  // Detect touch devices
  useEffect(() => {
    const checkTouch = () => {
      setHasTouch(window.matchMedia("(pointer: coarse)").matches)
    }
    
    checkTouch()
    window.addEventListener('resize', checkTouch)
    return () => window.removeEventListener('resize', checkTouch)
  }, [])

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onToggle(null)
      }
    }

    if (isActive && hasTouch) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isActive, hasTouch, onToggle])

  const handleInteraction = () => {
    if (hasTouch) {
      onToggle(isActive ? null : id)
    }
  }

  return (
    <m.div
      ref={cardRef}
      className="relative flex-1 aspect-square max-w-[300px] rounded-2xl overflow-hidden bg-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
      onClick={handleInteraction}
      onMouseEnter={() => !hasTouch && setIsHovered(true)}
      onMouseLeave={() => !hasTouch && setIsHovered(false)}
      whileHover={!hasTouch ? { scale: 1.02 } : {}}
      whileTap={hasTouch ? { scale: 0.98 } : {}}
      initial={false}
      layout
    >
      {/* Logo with subtle animation */}
      <m.div 
        className="absolute inset-0 flex items-center justify-center p-4"
        animate={{
          scale: isActive || isHovered ? 0.9 : 1,
          opacity: isActive || isHovered ? 0.8 : 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Image
          src={image}
          alt={subtitle}
          width={300}
          height={300}
          className="object-contain"
        />
      </m.div>

      {/* Orange gradient overlay with animation */}
      <m.div
        className="absolute inset-0 bg-gradient-to-t from-[#E26A2C]/90 via-[#E26A2C]/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isActive || (!hasTouch && isHovered) ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Text overlay with animation */}
      <AnimatePresence>
        {(isActive || (!hasTouch && isHovered)) && (
          <m.div
            className="absolute inset-0 flex flex-col items-center justify-end text-center text-white pb-5 p-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <m.h5 
              className="text-lg font-bold"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              {subtitle}
            </m.h5>
            <m.p 
              className="mt-2 text-sm font-medium"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </m.p>
          </m.div>
        )}
      </AnimatePresence>

      {/* Subtle shine effect on hover */}
      {!hasTouch && (
        <m.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0.3 : 0,
            background: 'linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)'
          }}
          transition={{ duration: 0.4 }}
        />
      )}

      {/* Accent border on active/hover */}
      <m.div
        className="absolute inset-0 pointer-events-none border-2 border-transparent rounded-2xl"
        animate={{
          borderColor: isActive || isHovered ? '#E26A2C' : 'transparent'
        }}
        transition={{ duration: 0.2 }}
      />
    </m.div>
  )
}