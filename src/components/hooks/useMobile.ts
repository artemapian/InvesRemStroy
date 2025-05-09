import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])

  return {MotionOrDiv: isMobile ? 'div' : motion.div, isMobile: isMobile}
}
