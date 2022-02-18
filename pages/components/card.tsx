import React from "react";
import Image from "next/image";

export default function Card({
	name,
	position,
  image,
  framework,
  description,
} : {
	name: any,
	position: any,
	image: any,
	framework: any,
	description: any
}) {
	const card = 'rounded-md shadow mx-4 lg:mx-8 my-20 md:p-4'
  const pname = 'mb-8 text-3xl font-semibold p-4'
  const desc = 'text-gray-500 font-semibold'

  return (
		<div className={card}>
			<h1 className={pname}>{name}</h1>
			<div className={position}>
				<Image 
					src={image}
					alt='img'
					className='rounded-md'
				/>
				<div className="px-4 pb-4">
					<p className={desc}>
						{framework}
					</p>
					<p className='mt-4 text-justify'>
						{description}
					</p>
					<button className="mt-12 px-4 py-2 border border-black bg-black text-white hover:bg-white hover:text-black transition duration-300 rounded-md">
						More Info
					</button>
				</div>
			</div>
		</div>
	)
}