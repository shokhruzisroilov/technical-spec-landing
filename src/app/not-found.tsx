import { Link } from 'lucide-react'

export default function NotFound() {
	return (
		<div className='min-h-screen flex items-center justify-center text-center'>
			<div>
				<h1 className='text-4xl font-bold mb-4'>404 - Sahifa topilmadi</h1>
				<p className='text-lg text-gray-500 mb-6'>
					Kechirasiz, bu sahifa mavjud emas.
				</p>
				<Link
					href='/'
					className='text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition'
				>
					Bosh sahifaga qaytish
				</Link>
			</div>
		</div>
	)
}
