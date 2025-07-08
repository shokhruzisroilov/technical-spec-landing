// Nav link
export type NavLink = {
	label: string
	href: string
	type?: 'link' | 'dropdown'
	children?: {
		label: string
		href: string
	}[]
}

export const navLinks: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Services', href: '/services' },
	{
		label: 'Company Overview',
		type: 'dropdown',
		href: '/company',
		children: [
			{ label: 'Our History', href: '/company/history' },
			{ label: 'Our Team', href: '/company/team' },
			{ label: 'Mission & Vision', href: '/company/mission' },
		],
	},
	{
		label: 'Updates',
		type: 'dropdown',
		href: '/updates',
		children: [
			{ label: 'News', href: '/updates/news' },
			{ label: 'Events', href: '/updates/events' },
			{ label: 'Blogs', href: '/updates/blogs' },
		],
	},
]
