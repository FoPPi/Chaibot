import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {RxHamburgerMenu} from "react-icons/rx";
import Image from "next/image";
import dextoolsLogo from "@/public/dextoolsLogo.png";
import {BiLogoTelegram, BiLogoTwitter} from "react-icons/bi";

const DialogDemo = () => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className="flex lg:hidden cursor-pointer z-20">
                <RxHamburgerMenu className="w-[40px] h-[40px]"/>
            </button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-white bg-opacity-5 border-2 border-white border-opacity-5 rounded-2xl backdrop-blur-md p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-30">
                <div className="flex flex-col my-5 items-center space-y-5 text-xl justify-center">
                    <a href='/' className="hover:text-[#822FDF] transform duration-200">Home</a>
                    <a href='/' className="hover:text-[#822FDF] transform duration-200">Docs</a>
                    <a href="https://app.uniswap.org/#/swap?&outputCurrency=0xabec00542d141bddf58649bfe860c6449807237c&use=V2" target="_blank" className="hover:text-[#822FDF] transform duration-200">Buy $ESPR</a>
                    <div className="flex flex-row">
                        <Image src={dextoolsLogo} alt={dextoolsLogo} />
                        <p>Dextools</p>
                    </div>
                </div>
                <div className="flex  items-center justify-center flex-row space-x-4 text-center">
                    <a href="https://t.me/chaibotportal" target="_blank" >
                        <BiLogoTelegram className="w-[30px] h-[30px] cursor-pointer hover:text-[#822FDF] transform duration-200"/>
                    </a>
                    <a href="https://twitter.com/BuildOnChaibot" target="_blank" >
                        <BiLogoTwitter className="w-[30px] h-[30px] cursor-pointer hover:text-[#822FDF] transform duration-200"/>
                    </a>
                </div>
                <div className="mt-[25px] flex justify-end">
                    <Dialog.Close asChild>
                        <button className="bg-green4 text-red-500 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                            Close
                        </button>
                    </Dialog.Close>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default DialogDemo;
