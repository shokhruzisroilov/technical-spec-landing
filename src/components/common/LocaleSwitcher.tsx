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

const LocaleSwitcher = ({ locale, onChange }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					className='flex items-center gap-2 px-2 py-[6px] text-sm font-medium leading-5 tracking-normal cursor-pointer'
				>
					<Globe className='w-5 h-5 color-[#0A0A0A] opacity-[45%]' />
					{locale.toUpperCase()}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end' className='w-[65px]'>
				<DropdownMenuItem onClick={() => onChange('uz')}>
					O‘zbek
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => onChange('ru')}>
					Русский
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => onChange('en')}>
					English
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LocaleSwitcher
