'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const router = usePathname()

  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <AnimatePresence>
        <motion.main
          key={router}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </NextThemesProvider>
  )
}
