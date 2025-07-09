'use client'

import { createContext, useContext } from 'react'
import { m, useReducedMotion } from 'motion/react'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -100px' }

type Direction = 'up' | 'down' | 'left' | 'right';

interface FadeInProps extends React.ComponentPropsWithoutRef<typeof m.div> {
  direction?: Direction;
}

export function FadeIn({
  direction = 'up', // Default to 'up'
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const isInStaggerGroup = useContext(FadeInStaggerContext)

  const getDirection = () => {
    switch (direction) {
      case 'up':
        return { y: shouldReduceMotion ? 0 : 100, x: 0 };
      case 'down':
        return { y: shouldReduceMotion ? 0 : -100, x: 0 };
      case 'left':
        return { x: shouldReduceMotion ? 0 : 100, y: 0 };
      case 'right':
        return { x: shouldReduceMotion ? 0 : -100, y: 0 };
      default:
        return { y: 0, x: 0 };
    }
  }

  return (
    <m.div
      variants={{
        hidden: { opacity: shouldReduceMotion ? 1 : 0, ...getDirection() },
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: shouldReduceMotion ? 'visible' : 'visible',
            viewport,
          })}
      {...props}
    />
  )
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof m.div> & { faster?: boolean }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <FadeInStaggerContext.Provider value={true}>
      <m.div
        initial="hidden"
        whileInView={shouldReduceMotion ? 'visible' : 'visible'}
        viewport={viewport}
        transition={{ staggerChildren: shouldReduceMotion ? 0 : (faster ? 0.12 : 0.4) }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
