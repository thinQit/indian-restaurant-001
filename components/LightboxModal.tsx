'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedContent } from '@/components/ui/effects/animated-content'

interface LightboxModalProps {
  images?: string[]
  initialIndex?: number
  open?: boolean
  onClose?: () => void
}

export default function LightboxModal({
  images = [],
  initialIndex = 0,
  open = false,
  onClose = () => {},
}: Partial<LightboxModalProps>) {
  const [current, setCurrent] = useState(initialIndex)

  useEffect(() => setCurrent(initialIndex), [initialIndex])

  return (
    <AnimatedContent>
      <AnimatePresence>
        {open && images.length > 0 && (
          <motion.div className="fixed inset-0 z-[100] bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute right-4 top-4" onClick={onClose}><X /></button>
            <button className="absolute left-4 top-1/2" onClick={() => setCurrent((v) => (v - 1 + images.length) % images.length)}><ChevronLeft /></button>
            <button className="absolute right-4 top-1/2" onClick={() => setCurrent((v) => (v + 1) % images.length)}><ChevronRight /></button>
            <div className="flex h-full items-center justify-center">
              <Image src={images[current]} alt="Gallery detail" width={1600} height={1000} unoptimized className="max-h-[90vh] w-auto rounded-xl object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedContent>
  )
}
