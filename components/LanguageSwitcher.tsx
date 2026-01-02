'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-cosmic/50 rounded-full p-1 border border-sacred-gold/20">
      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition ${
          language === 'en'
            ? 'bg-sacred-gold text-primary'
            : 'text-gray-400 hover:text-sacred-gold'
        }`}
      >
        <span className="text-base">EN</span>
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition ${
          language === 'fr'
            ? 'bg-sacred-gold text-primary'
            : 'text-gray-400 hover:text-sacred-gold'
        }`}
      >
        <span className="text-base">FR</span>
      </button>
    </div>
  )
}
