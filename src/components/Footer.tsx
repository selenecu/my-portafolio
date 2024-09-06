'use client'
import React, { useEffect, useState } from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { profile } from 'console'
import Image from 'next/image'
import { string } from 'three/examples/jsm/nodes/Nodes.js'

const Footer = () => {
        const [isLoaded, setIsLoaded] = useState(false);
      
        useEffect(() => {
          setIsLoaded(true);
        }, []);
    return (
  <footer className='w-full pt-20 pb-10' id ="contact">
    <div className ='w-full absolute left-0 -bottom-72 min-h-96'>
        <Image src="/footer-grid.svg"
        alt="grid"
        width={1000}
        height={1000}
        className='w-full h-full opacity-50'
        />
    </div>
    <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
            Contáctame
        </h1>
        <p className='text-lg lg:max-w-[45vw] text-center my-5'>
            Piura - Veintiseis de Octubre, Perú
        </p>
        <div className="width: 100%">
      {isLoaded && (
        <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=avenida%20nacional,%20veintiseis%20de%20octubre,%20piura,peru+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      )}
      
    </div>
        <a href="mailto:seleneculquicondor13@gmail.com">
            <p>seleneculquicondor13@gmail.com</p>
        </a>
        <p> Tel: +51 942 305 061</p>
    </div>
        <div className='flex items-center md:gap-3 gap-6 md:flex-row mt-10 flex-row justify-center '>
        {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300  hover:scale-125 hover:transcition hover:border hover:md:shadow-white-200 hover:duration-300 text-neutral-600 hover:bg-neutral-500 hover:bg-opacity-25' >
              <a href={profile.link}>
              <Image src={profile.img} alt={String(profile.id)} width={20} height={20}  />
              </a>

            </div>
        ))}
        </div>
    <div className='flex mt-16 md:flex-row flex-col justify-center items-center'>
        <p className='md:flex-base  text-sm md:font-normal font-light'>
           Copyright © 2024 Selene Culquicondor.
        </p>
    </div>
  </footer>
        
    )
}

export default Footer
