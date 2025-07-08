'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMessages } from '@/hooks/useMessages'
import LocaleSwitcher from '@/components/common/LocaleSwitcher'
import { Button } from '@/components/ui/button'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { navLinks } from '@/utils/navLinks'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const Header = () => {
	const { locale, setLocale } = useMessages()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className='flex justify-between items-center px-10 lg:px-30 py-8 bg-white relative z-50'>
			{/* LEFT: Logo + Desktop Nav */}
			<div className='flex items-center gap-6'>
				<Link href='/'>
					<Image src='/images/svg/logo.svg' alt='Logo' width={64} height={32} />
				</Link>

				{/* DESKTOP NAVIGATION */}
				<NavigationMenu viewport={false} className='hidden lg:block'>
					<NavigationMenuList className='flex gap-6'>
						{navLinks.map(item => (
							<NavigationMenuItem key={item.label}>
								{item.type === 'dropdown' ? (
									<>
										<NavigationMenuTrigger className='font-medium text-sm text-[#0A0A0AB2]'>
											{item.label}
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className='grid w-[175px] gap-1 p-1'>
												{item.children?.map(child => (
													<li key={child.label}>
														<NavigationMenuLink asChild>
															<Link
																href={child.href}
																className='font-medium text-sm text-[#0A0A0AB2]'
															>
																{child.label}
															</Link>
														</NavigationMenuLink>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								) : (
									<NavigationMenuLink
										asChild
										className={navigationMenuTriggerStyle()}
									>
										<Link
											href={item.href}
											className='font-medium text-sm text-[#0A0A0AB2]'
										>
											{item.label}
										</Link>
									</NavigationMenuLink>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			{/* RIGHT (Desktop) */}
			<div className='hidden lg:flex items-center gap-4'>
				<LocaleSwitcher locale={locale} onChange={setLocale} />
				<Link href='/contact-us'>
					<Button
						variant='outline'
						className='bg-[#00CFC8] hover:bg-[#00CFC8] text-white hover:text-white px-5 py-2 rounded-md transition font-medium text-sm cursor-pointer'
					>
						Contact us
					</Button>
				</Link>
			</div>

			{/* RIGHT (Mobile) */}
			<div className='flex lg:hidden items-center gap-2'>
				<LocaleSwitcher locale={locale} onChange={setLocale} />
				<button
					onClick={() => setMobileMenuOpen(true)}
					className='text-black cursor-pointer'
					aria-label='Open mobile menu'
				>
					<Menu size={32} />
				</button>
			</div>

			{/* MOBILE MENU */}
			<div
				className={clsx(
					'fixed top-0 left-0 h-full w-[75%] max-w-sm bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out lg:hidden',
					mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				)}
			>
				<div className='p-4 border-b flex gap-2 items-center'>
					<button
						onClick={() => setMobileMenuOpen(false)}
						className='cursor-pointer'
						aria-label='Close mobile menu'
					>
						<X size={24} />
					</button>
					<h2 className='font-semibold text-base leading-6'>Menu</h2>
				</div>

				<nav className='flex flex-col gap-2 p-4'>
					{navLinks.map(item =>
						item.type === 'dropdown' ? (
							item.children?.map(child => (
								<Link
									key={child.label}
									href={child.href}
									className='text-gray-700 hover:bg-gray-100 py-2 px-4 rounded-xl text-sm'
									onClick={() => setMobileMenuOpen(false)}
								>
									{child.label}
								</Link>
							))
						) : (
							<Link
								key={item.label}
								href={item.href}
								className='text-gray-700 text-sm hover:bg-gray-100 py-2 px-4 rounded-xl'
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.label}
							</Link>
						)
					)}
					<Link
						href='/contact-us'
						className='mt-4 bg-[#00CFC8] text-white text-center py-2 rounded-md cursor-pointer'
						onClick={() => setMobileMenuOpen(false)}
					>
						Contact us
					</Link>
				</nav>
			</div>

			{/* BACKDROP */}
			{mobileMenuOpen && (
				<div
					className='fixed inset-0 bg-black opacity-30 z-40 lg:hidden'
					onClick={() => setMobileMenuOpen(false)}
					aria-hidden
				/>
			)}
		</header>
	)
}

export default Header
