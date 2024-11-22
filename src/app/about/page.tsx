import Image from "next/image";
import Card from "../components/Card";
import ga_ft from '../../../public/ft_ga.jpg'
import jv_ft from '../../../public/ft_jv.jpeg'
import bd_ft from '../../../public/ft_bd.jpeg'
import Header from "../components/Header";
import github from "../../../public/github.svg"
import Footer from "../components/Footer";

export default function AboutUs(){
    return(
        <>
        <Header/>
        <div className=" mt-8 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="flex flex-row items-center gap-1 text-center text-4xl">
            <img className="w-12" src="/icon.png" alt="Icon da Logo" />
            Sobre nós
        </h1>
        <a href="https://github.com/guialvesped/Global-Solution-S2" target="_blank">
            <button className="relative inline-flex rounded-full items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-400 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative flex flex-row items-center gap-x-2 text-base px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <Image className="w-8 h-8 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" src={github} alt="Link para o repositório"/>
                Repositório do projeto
                </span>
            </button>
        </a>
        <main className="flex flex-col md:flex-row gap-8 row-start-2 items-center sm:items-start">
            <Card linkGithub="https://github.com/guialvesped" linkImagem={ga_ft} linkLinkedin="https://www.linkedin.com/in/guialvesped/" nome="Guilherme Alves Pedroso" rm="555357"/>
            <Card linkGithub="https://github.com/bahdiaz" linkImagem={bd_ft} linkLinkedin="https://www.linkedin.com/in/barbara-diass/" nome="Bárbara Dias Santos" rm="556974"/>
            <Card linkGithub="https://github.com/joaosilvaz" linkImagem={jv_ft} linkLinkedin="https://www.linkedin.com/in/jo%C3%A3o-vitor-da-silva-5677202b1/" nome="João Vitor Nascimento" rm="554694"/>
        </main>
        </div>
        <Footer/>
        </>
    )
}