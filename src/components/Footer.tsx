'use client'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { profile } from 'console'

const Footer = () => {
    return (
  <footer className='w-full pt-20 pb-10' id ="contact">
    <div className ='w-full absolute left-0 -bottom-72 min-h-96'>
        <img src="/footer-grid.svg"
        alt="grid"
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
        <a href="mailto:seleneculquicondor13@gmail.com">
            <p>seleneculquicondor13@gmail.com</p>
        </a>
        <p> Tel: +51 942 305 061</p>
    </div>
        <div className='flex items-center md:gap-3 gap-6 md:flex-row mt-10 flex-row justify-center'>
        {socialMedia.map((profile) => (
            <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <img src={profile.img} alt={profile.id} width={20} height={20}/>
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
