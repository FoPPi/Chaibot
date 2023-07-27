import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {BiLogoTelegram, BiLogoTwitter} from "react-icons/bi";

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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white bg-opacity-5 border-2 border-gray-600 rounded-2xl backdrop-blur-md p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex flex-col my-5 items-center space-y-5 text-xl justify-center">
                                            <a>Home</a>
                                            <a href="/" target="_blank" className="hover:text-[#822FDF] transform duration-200">Docs</a>
                                            <a href="/" target="_blank" className="hover:text-[#822FDF] transform duration-200">Buy $ESPR</a>
                                            <a href="/" target="_blank" className="hover:text-[#822FDF] transform duration-200">Chart</a>
                                    </div>
                                    <div className="flex  items-center justify-center flex-row space-x-4 text-center">
                                        <BiLogoTelegram className="w-[35px] h-[35px] hover:text-[#822FDF] transform duration-200"/>
                                        <BiLogoTwitter className="w-[35px] h-[35px] hover:text-[#822FDF] transform duration-200"/>
                                    </div>
                                    <div className="mt-4 items-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center bg-opacity-80 rounded-md border border-transparent bg-red-900 px-4 py-2 text-sm font-medium text-red-100 hover:bg-red-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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