"use client"
import { useState } from "react";
import {BiLogoTelegram, BiLogoTwitter} from "react-icons/bi";
import {ShowArrWithDelay, ShowWithDelay} from "@/components/Animations";
import Image from 'next/image';
import logo from '../public/cup.svg';
import {RxHamburgerMenu} from "react-icons/rx";
import Modal from "@/components/Modal";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className={`flex flex-row items-center text-center justify-between py-4 px-12 lg:px-48`}>
                <ShowWithDelay delay={0}>
                    <div className="flex flex-row items-center space-x-3 text-center">
                        <Image className="-rotate-12" src={logo} alt="logo" width={70} height={70} />
                        <h4 className="text-4xl font-bold">Chaibot</h4>
                    </div>
                </ShowWithDelay>
                <div className="hidden lg:flex text-[#C4C4C6] flex-row space-x-10 items-center text-center">
                    <ShowArrWithDelay delay={0.1}>
                        <a className="text-[#822FDF]">Home</a>
                        <a href="/" target="_blank" className="hover:text-[#822FDF] transform duration-200">Docs</a>
                        <a href="/" target="_blank" className="hover:text-[#822FDF] transform duration-200">Buy $ESPR</a>
                        <a href="/" target="_blank" className="hover:text-[#822FDF] transform duration-200">Chart</a>
                    </ShowArrWithDelay>
                </div>
                <div className="hidden lg:flex flex-row space-x-3 items-center text-center">
                    <ShowArrWithDelay delay={0.1}>
                        <BiLogoTelegram className="w-[30px] h-[30px] cursor-pointer hover:text-[#822FDF] transform duration-200"/>
                        <BiLogoTwitter className="w-[30px] h-[30px] cursor-pointer hover:text-[#822FDF] transform duration-200"/>
                    </ShowArrWithDelay>
                </div>
                <RxHamburgerMenu className="flex lg:hidden cursor-pointer w-[30px] h-[30px]" onClick={handleMobileMenuToggle}/>
            </header>
            <Modal isOpen={isMobileMenuOpen} closeModal={handleMobileMenuToggle}/>
        </>
    );
};

export default Header;
