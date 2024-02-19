import React from 'react'
import logo from '../assets/Blue-round-Logo.png'

const Footer = () => {
  return (
	<section className=''>
    <footer className="bg-transparent rounded-lg max-h-full mt-20 sm:flex sm:flex-row sm:text-center sm:justify-between ">
		<div className="w-full max-w-screen-xl mx-auto md:py-8 lg:px-8 ">
			<div className="mx-8 mb-5 text-center flex flex-row justify-between items-center space-y-7 mt-4 md:mt-0">
				<a href="https://www.bauzantech.com/" target='_blank' className="flex w-auto items-center mb-4  space-x-3 rtl:space-x-reverse">
					<img src={logo} className="h-12 sm:hidden md:flex text-center" />
				</a>
				<ul className="flex flex-wrap items-center mb-6 text-xs font-semibold text-gray-500 sm:mb-0 pb-5">
					<span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://www.bauzantech.com/" target='_blank' className="hover:underline">Bauzan Tech Solutions</a>. All Rights Reserved.</span>
				</ul>
			</div>
		</div>
	</footer>
	</section>
  )
}

export default Footer