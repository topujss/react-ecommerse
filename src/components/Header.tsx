import { useState } from 'react'
import logo from '/assets/logo.png'
import { FaOpencart } from 'react-icons/fa'

const Header = () => {
	const [menu, setMenu] = useState('shop')

	return (
		<>
			<section className='navbar flex justify-around items-center p-4 shadow'>
				<div className='nav-logo flex items-center gap-4'>
					<img src={logo} alt='' />
					<strong className='uppercase text-2xl'>Shopme</strong>
				</div>
				<ul className='nav-menu flex items-center gap-4 text-gray-600 text-2xl font-semibold'>
					<li onClick={() => setMenu('shop')}>
						Shop
						{menu === 'shop' && (
							<hr className='border-none w-4/5 h-1 rounded-lg bg-[#ff4141]' />
						)}
					</li>
					<li onClick={() => setMenu('men')}>
						Men
						{menu === 'men' && (
							<hr className='border-none w-4/5 h-1 rounded-lg bg-[#ff4141]' />
						)}
					</li>
					<li onClick={() => setMenu('woman')}>
						Women
						{menu === 'woman' && (
							<hr className='border-none w-4/5 h-1 rounded-lg bg-[#ff4141]' />
						)}
					</li>
					<li onClick={() => setMenu('kids')}>
						Kids
						{menu === 'kids' && (
							<hr className='border-none w-4/5 h-1 rounded-lg bg-[#ff4141]' />
						)}
					</li>
				</ul>
				<div className='login-cart flex items-center gap-11'>
					<button
						type='button'
						className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg px-8 py-3 text-center me-2 mb-2'>
						Login
					</button>

					<button
						type='button'
						className='relative inline-flex items-center p-3 font-medium text-center
						 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none
						 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
						<span>
							<FaOpencart className='text-xl' />
						</span>
						<div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -end-2 dark:border-gray-900'>
							20
						</div>
					</button>
				</div>
			</section>
		</>
	)
}

export default Header
