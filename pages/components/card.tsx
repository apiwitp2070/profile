import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({
	name,
	date,
	position,
  image,
  framework,
  description,
	isWeb,
	weburl,
} : {
	name: any,
	date: any,
	position: any,
	image: any,
	framework: any,
	description: any,
	isWeb: any,
	weburl: any,
}) {
	const card = 'rounded-md shadow mx-4 lg:mx-8 my-20 md:p-4'
  const pname = 'text-3xl pr-4'
	const pdate = 'text-xl text-gray-500'
  const desc = 'text-gray-500 font-semibold'
	const button = "mr-4 mt-12 px-4 py-2 border border-black bg-black text-white hover:bg-white hover:text-black transition duration-300 rounded-md"

  return (
		<div className={card}>
			<div className="p-4 mb-8 flex items-end font-semibold">
				<h1 className={pname}>{name}</h1>
				<h1 className={pdate}>{date}</h1>
			</div>
			<div className={position}>
				<Image 
					placeholder="blur"
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
					<a href={weburl} target='_blank' rel='noopener noreferrer'>
						<button className={isWeb ? button : 'hidden'}>
							Visit Site
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}