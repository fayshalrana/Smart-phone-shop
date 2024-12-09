import React from 'react';
import img2 from '@/assets/images/not-found.png'
import Image from 'next/image';
const notFound = () => {
  return (
<section>

	<div className="bg-black text-white">
		<div className="container flex h-screen">
			<div className="m-auto text-center">
				<div className=' md:max-w-[600px]'>
					<Image className='w-full' src={img2} alt="not found image" />
				</div>
				<p className="text-sm md:text-base text-yellow-300 p-2 mb-4">The stuff you were looking for doesn't exist
				</p>
				<a href="/"
					className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Home</a>
			</div>
		</div>
	</div>
</section>
  )
}

export default notFound
