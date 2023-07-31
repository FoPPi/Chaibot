"use client"
import ShakingPhoto from '@/components/ShakingPhoto';
import BackgroundWithLights from '@/components/BackgroundWithLights';
import { GrifterBold } from '@/styles/fonts';
import { GoArrowRight } from 'react-icons/go';
import { ButtonAnim, ShowUp, ShowWithDelay } from '@/components/Animations';
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <section className="flex flex-row items-center xl:mt-12 mt-48 xl:space-x-40 justify-center px-12 lg:px-20">
                <div className="flex flex-col space-y-7">
                    <ShowUp delay={0.5}>
                        <h1 className={`${GrifterBold.className} text-5xl md:text-7xl`}>
                            Build and deploy with
                            <br />our telegram bot
                        </h1>
                    </ShowUp>
                    <ShowUp delay={0.6}>
                        <p className="text-[#7F7D7C] text-xl">
                            This project is a bot project, and with this bot, you can create
                            <br />and deploy cryptocurrencies
                        </p>
                    </ShowUp>
                    <ShowUp delay={0.7}>
                        <a href="/" target="_blank">
                            <ButtonAnim className="flex flex-row items-center px-8 py-4 font-bold rounded-lg bg-[#822FDF] hover:bg-[#5B10AF] transform duration-200">
                                Get Started <GoArrowRight />
                            </ButtonAnim>
                        </a>
                    </ShowUp>
                </div>
                 <ShowWithDelay delay={0.6}>
                    <ShakingPhoto/>
                 </ShowWithDelay>
            </section>
            <ShowWithDelay delay={1}>
                <BackgroundWithLights />
            </ShowWithDelay>
            <Footer/>
        </div>
    );
}
