'use client'
import Image from 'next/image'
import Link from 'next/link'
import headerNavLinks from '~/data/headerNavLinks'
import Logo from '/public/images/logo2.png'

const siteMetadata = {
    title: 'wingtone',
    author: 'yi-an chao',
    headerTitle: 'wingtone',
    description: 'wingtone',
    language: 'en-us',
    theme: 'dark', // system, dark or light
    siteUrl: '',
    siteRepo: '',
    siteLogo: 'public/images/icon.png',
    socialBanner: 'public/images/icon.png',
    locale: 'en-US',
}

const Navbar = () => {
  return (
    <div className="w-full">
        <header className="flex justify-between space-between mx-0 max-h-24 inset-0">  
            <div className="">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={400}
                    height={500}
                />
            </div>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6 mr-10">
                {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                    <Link
                    key={link.title}
                    href={link.href}
                    className="font-medium"
                    >
                    {link.title}
                    </Link>
                ))}
            </div>
        </header>
    </div>
  )
}

export default Navbar
