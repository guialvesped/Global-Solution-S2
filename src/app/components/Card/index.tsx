import Image, { StaticImageData } from "next/image";
import Button from "../Button";
import github from "../../../../public/github.svg"
import linkedin from "../../../../public/linkedin.svg"

interface CardProps {
    linkImagem : StaticImageData,
    linkGithub: string,
    linkLinkedin : string,
    nome: string,
    rm: string
}

const Card : React.FC<CardProps> = (props : CardProps) => {
    return(
        <>
        <div className="w-auto p-8 max-w-sm min-w-[278px] h-96 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <Image className="w-32 h-32 mb-3 rounded-full shadow-lg" src={props.linkImagem} alt={`Imagem de ${props.nome}`}/>
                <h6 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">{props.nome}</h6>
                <span className="text-sm text-gray-500 dark:text-gray-400">RM: {props.rm}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Sala: 1TDSPZ</span>
                <div className="flex flex-row justify-center  mt-4 md:mt-6 w-40  border-t border-cyan-400 pt-4">
                    <Button href={props.linkGithub} cont={github} isImageCont={true}/>
                    <Button href={props.linkLinkedin} cont={linkedin} isImageCont={true}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;