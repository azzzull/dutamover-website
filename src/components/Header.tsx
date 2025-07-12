'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang', href: '/about' },
  { name: 'Layanan', href: '/layanan' },
  { name: 'Proses Kerja', href: '/proses-kerja' },
  { name: 'Galeri', href: '/gallery' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontak', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 overflow-hidden">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 min-w-0 flex-shrink-0">
          <Link href="/" className="-m-1.5 p-1.5 flex-shrink-0">
            <span className="sr-only">Dutamover</span>
            <Image
              src="/images/dutamover-logo.png"
              alt="Dutamover Logo"
              width={120}
              height={30}
              className="h-8 sm:h-10 w-auto max-w-full"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors no-underline ${
                  isActive 
                    ? 'text-green-600' 
                    : 'text-gray-600 hover:text-green-700'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20pindahan%20nya%20Dong%20?"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi Kami
          </Link>
        </div>
      </nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 max-w-full"
          >
            <div className="flex items-center justify-between w-full max-w-full">
              <Link href="/" className="-m-1.5 p-1.5 flex-shrink-0">
                <span className="sr-only">Dutamover</span>
                <Image
                  src="/images/dutamover-logo.png"
                  alt="Dutamover Logo"
                  width={120}
                  height={30}
                  className="h-8 w-auto max-w-full"
                  priority
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors no-underline ${
                          isActive 
                            ? 'text-green-600 bg-green-50' 
                            : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6">
                  <Link
                    href="https://api.whatsapp.com/send?phone=+6281510326123&text=Hi..%20Info%20pindahan%20nya%20Dong%20?"
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center block no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
