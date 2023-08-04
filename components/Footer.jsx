import {ShowWithDelay} from "@/components/Animations";

export default function Footer() {
    return (
        <footer className="px-5 pt-10 mt-auto">
            <ShowWithDelay delay={1.4}>
            <div className={`flex flex-col sm:flex-row mt-3 mb-5 items-center justify-center space-x-5 sm:space-x-24 lg:space-x-48`}>
                <a className="text-[#838383] hover:text-[#822FDF] transform duration-300" href="https://green-line-studio.xyz/" target="_blank">Developed by: Green Line Studio</a>
                <p className="text-[#838383]">©2023 - Chaibot</p>
            </div>
            </ShowWithDelay>
        </footer>
    )
}
