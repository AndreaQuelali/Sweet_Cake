import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-[95%] flex-col justify-evenly">
        <div className="flex justify-end content-center">
            <a target="_blank" href="https://www.facebook.com/">
                <img className="w-10 h-10 m-3 cursor-pointer hover:w-11 hover:h-11 hover:duration-200" src="./Iconos/facebookL.png"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/">
                <img className="w-10 h-10 m-3 cursor-pointer hover:w-11 hover:h-11 hover:duration-200" src="./Iconos/instagramL.png"/>
            </a>
            <a target="_blank" href="https://www.youtube.com/">
                <img className="w-10 h-10 m-3 cursor-pointer hover:w-11 hover:h-11 hover:duration-200" src="./Iconos/youtubeL.png"/>
            </a>
            <a target="_blank" href="https://twitter.com/">
                <img className="w-10 h-10 m-3 cursor-pointer hover:w-11 hover:h-11 hover:duration-200" src="./Iconos/twitter.png"/>
            </a>
            <a target="_blank" href="https://www.tiktok.com/">
                <img className="w-10 h-10 m-3 cursor-pointer hover:w-11 hover:h-11 hover:duration-200" src="./Iconos/tiktok.png"/>
            </a>
        </div>
        <div className='w-full py-3 derecho'>
            <p className='m-0 font-bold text-sm'>SweetCake &copy; 2023. Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer
