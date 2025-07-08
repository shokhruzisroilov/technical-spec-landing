'use client'

import { Locale } from '@/types/locale'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

type Props = {
	locale: Locale
	onChange: (locale: Locale) => void
}

const languages: { label: string; code: Locale }[] = [
	{ label: 'O‘zbek', code: 'uz' },
	{ label: 'Русский', code: 'ru' },
	{ label: 'English', code: 'en' },
]

const LocaleSwitcher = ({ locale, onChange }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className='flex items-center gap-2 px-3 py-[6px] text-sm font-medium leading-5 tracking-normal'
					aria-label='Change Language'
				>
					<Globe className='w-5 h-5 text-[#0A0A0A] opacity-45' />
					{locale.toUpperCase()}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end' className='w-[100px]'>
				{languages.map(lang => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => onChange(lang.code)}
						className={locale === lang.code ? 'font-semibold' : ''}
					>
						{lang.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LocaleSwitcher
