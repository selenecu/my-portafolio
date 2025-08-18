'use client'
import React, { useEffect, useState } from 'react'
import { socialMedia } from '@/data'
import Image from 'next/image'
import { MdEmail, MdPhone } from 'react-icons/md'

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* Fondo decorativo */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1000}
          height={1000}
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Título + mensaje */}
      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">¡Envíame un mensaje!</h1>
        <p className="text-lg lg:max-w-[45vw] my-5 text-gray-300">
          ¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar?  
          ¡Adelante!
        </p>

        {/* Contacto centrado con íconos */}
        <div className="space-y-3 mt-4">
          <a
  href="mailto:seleneculquicondor13@gmail.com?subject=Consulta%20desde%20tu%20portafolio"
  className="flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
>
  <MdEmail size={20} /> seleneculquicondor13@gmail.com
</a>

          <a href="tel:+51942305061"
  className="flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
            <MdPhone size={18} /> +51 942 305 061
          </a>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        {socialMedia.map((profile) => (
          <a
            key={profile.id}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ir al perfil de ${profile.id}`}
            className="w-10 h-10 flex justify-center items-center rounded-lg border border-gray-700 
                       backdrop-blur-md bg-black/40 text-gray-400 transition-transform 
                       hover:scale-110 hover:border-purple-400 hover:text-purple-300"
          >
            <Image
              src={profile.img}
              alt={`Icono de ${profile.id}`}
              width={20}
              height={20}
            />
          </a>
        ))}
      </div>

      {/* Derechos reservados */}
      <div className="flex mt-16 justify-center items-center">
        <p className="text-sm text-gray-500">
          © 2024 Selene Culquicondor. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
