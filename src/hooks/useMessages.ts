'use client'

import { useEffect, useState } from 'react'
import { Locale, Messages } from '@/types/locale'

const STORAGE_KEY = 'selected_locale'

export const useMessages = (initialLocale: Locale = 'uz') => {
	const [locale, setLocaleState] = useState<Locale>(initialLocale)
	const [messages, setMessages] = useState<Messages | null>(null)

	// Set locale write localstorage
	const setLocale = (newLocale: Locale) => {
		setLocaleState(newLocale)
		localStorage.setItem(STORAGE_KEY, newLocale)
	}

	// Read localstorage
	useEffect(() => {
		const storedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null
		if (storedLocale) {
			setLocaleState(storedLocale)
		}
	}, [])

	// update content
	useEffect(() => {
		import(`@/locales/${locale}.json`).then(mod => {
			setMessages(mod)
		})
	}, [locale])

	return { locale, setLocale, messages }
}
