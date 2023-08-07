"use client"
import ShakingPhoto from '@/components/ShakingPhoto';
import BackgroundWithLights from '@/components/BackgroundWithLights';
import { GrifterBold } from '@/styles/fonts';
import { GoArrowRight } from 'react-icons/go';
import { ButtonAnim, ShowUp, ShowWithDelay } from '@/components/Animations';
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import {IoCopyOutline} from "react-icons/io5";
import copy from "copy-to-clipboard";
import { message } from 'antd';

export default function Home() {

    const [messageApi, contextHolder] = message.useMessage();
    const copyToClipboard = () => {
        copy("0xa3c31927a092bd54eb9a0b5dfe01d9db5028bd4f");
        messageApi.open({
            type: 'success',
            content: 'You have copied text',
        });
    };

    const handleButtonClick = () => {
        window.open('https://t.me/BuildOnChaibot', '_blank');
    };

    return (
        <div className="min-h-screen flex flex-col">
            {contextHolder}
            <Header />
            <section className="flex flex-row items-center xl:mt-12 mt-36 xl:space-x-40 justify-center px-12 lg:px-20">
                <div className="flex flex-col space-y-7">
                    <ShowUp delay={0.5}>
                        <h1 className={`${GrifterBold.className} text-5xl md:text-[72px]`}>
                            Chaibot, Create<br/>and Launch Tokens in a<br/>Snap on Telegram!
                        </h1>
                    </ShowUp>
                    <ShowUp delay={0.6}>
                        <p className="text-[#7F7D7C] text-xl">
                            This bot lets you ship up your own token on Telegram faster than you can say &quot;blockchain&quot;.
                        </p>
                    </ShowUp>
                    <ShowUp delay={0.7}>
                        <ButtonAnim className="flex flex-row items-center px-8 py-4 font-bold rounded-lg bg-[#822FDF] hover:bg-[#5B10AF] transform duration-200" onClick={handleButtonClick}>
                            Let&apos;s Tokenize! <GoArrowRight />
                        </ButtonAnim>

                        <div className="flex flex-col space-y-2">
                            <h3 className="text-[#7F7D7C] text-xl mt-5">Contract Address:</h3>
                            <div className="flex flex-row space-x-3">
                                <input className="bg-[#822FDF33] border-0 outline-none focus:outline-2 focus:outline-[#822FDF] text-white w-full max-w-[420px] h-[51px] px-3 rounded-lg" readOnly={true} value="0xa3c31927a092bd54eb9a0b5dfe01d9db5028bd4f" />
                                <IoCopyOutline className="bg-[#822FDF] hover:bg-[#5B10AF] border-[#822FDF] w-[51px] h-[51px] p-2 rounded-lg text-2xl cursor-pointer transform duration-200" onClick={copyToClipboard}/>
                            </div>
                        </div>
                    </ShowUp>
                </div>
                 <ShowWithDelay delay={0.8}>
                    <ShakingPhoto/>
                 </ShowWithDelay>
            </section>
            <BackgroundWithLights />
            <Footer/>
        </div>
    );
}
