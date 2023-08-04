import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {BiLogoTelegram, BiLogoTwitter} from "react-icons/bi";
import Image from "next/image";
import dextoolsLogo from "@/public/dextoolsLogo.png";

export default function Modal({isOpen, closeModal}) {
    return (
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white bg-opacity-5 border-2 border-white border-opacity-5 rounded-2xl backdrop-blur-md p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex flex-col my-5 items-center space-y-5 text-xl justify-center">
                                        <a>Home</a>c
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
                                    <div className="mt-4 items-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center bg-opacity-80 rounded-md border-2 border-white border-transparent px-4 py-2 text-sm font-medium hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
    )
}