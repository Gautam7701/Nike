import React from 'react'
import headerlogo from "../assets/images/header-logo.svg"
import hamburger from "../assets/icons/hamburger.svg"
import { navLinks } from '../Constant'
import "./Nav.css"

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerlogo} alt="Logo" width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center max-lg:hidden space-x-9'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* <div tabindex="0" class="signInButton">
                    <p class="signInButtonText">Sign In</p>
                </div> */}
                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="Hamburger" width={25} height={25} />
                </div>

            </nav>
        </header>
    )
}

export default Nav
