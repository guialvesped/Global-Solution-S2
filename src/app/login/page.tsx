"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FormData {
    email : string,
    password : string
}
interface FormErrors {
    email?: string,
    password?: string
}

export default function Login(){
    const [hasAccount, setHasAccount] = useState<boolean>(true)
    const toggleHasAccount = () => {
        setHasAccount(!hasAccount)
    }
    const [passwordVis, setPassworsVis] = useState<boolean>(true)
    const toggleVisibility = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setPassworsVis(!passwordVis)
    }

    const [formData, setFormData] = useState<FormData>({email:"", password:""})//Usado para salvar os dados inseridos
    const [formErrors, setFormErrors] = useState<FormErrors>({})//Usado para salvar os erros do dados
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);//Usado para impedir o envio do formulário

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const validate = () => { //Valida se os campos de email e senha são validos
        const errors : FormErrors = {};
        if (!formData.email) {
            errors.email = "O campo email é obrigatório.";
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.email)) {
              errors.email = "Por favor, insira um email válido.";
            }
        }
        if(!formData.password){
            errors.password = "Insira sua senha"
        } else if(formData.password.length < 5){
            errors.password = "Insira uma senha com mais de 5 caracteres."
        }

        return errors
    };

    useEffect(() => { //Troca o FormErrors sempre que os dados inseridos ou o Issubmitting mudam
        if (isSubmitting) {
          setFormErrors(validate());
        }
      }, [formData, isSubmitting]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { //Previne que o formulário seja enviado até os dados serem válidos
        e.preventDefault();
        setIsSubmitting(true);

        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
        setIsSubmitting(false);
        }
    };



    return (
        <>
        <form onSubmit={handleSubmit} className="mt-28 rounded-md max-w-sm mx-auto bg-gray-800 p-16 ">
            <Link href="/" className="flex items-center">
                <img src='/logo-def.png' className="h-12" alt="Logo EcoSnart" />
            </Link>
            <div className="w-full pt-4">
                <div className="grid max-w-xs grid-cols-2 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600" role="group">
                    <button onClick={toggleHasAccount} type="button" className={`px-5 py-1.5 text-xs font-medium ${hasAccount ? "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900" : " text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"} rounded-lg`}>
                        Login
                    </button>
                    <button onClick={toggleHasAccount} type="button" className={`px-5 py-1.5 text-xs font-medium ${hasAccount ? " text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" : "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900"} rounded-lg`}>
                        Cadastro
                    </button>
                </div>
            </div>
            <h3 className="pt-4 text-2xl ">Faça seu {hasAccount ? "login" : "cadastro"}:</h3>
            <label className=" pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email: </label>
            <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
                </div>
                <input value={formData.email} onChange={handleChange} type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nome@gmail.com"/>
            </div>
            <label className=" pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha: </label>
            <div className="relative flex flex-row ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
                </svg>
                </div>
                <input value={formData.password} onChange={handleChange} name="password" type={passwordVis ? "text" : "password"} id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Senha"/>
                <button className="absolute inset-y-0 end-4 flex items-center ps-3.5" onClick={toggleVisibility}>
                    {passwordVis ? 
                    <svg xmlns="http://www.w3.org/2000/svg"  className="w-4 h-4 text-gray-500 dark:text-gray-400" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
                    </svg> 
                    :
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/>
                    </svg>}
                </button>
            </div>
            {hasAccount ? null : 
            <>
            <label className=" pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme sua senha: </label>
            <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
                </svg>
                </div>
                <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirme sua senha"/>
                <button className="absolute inset-y-0 end-4 flex items-center ps-3.5" onClick={toggleVisibility}>
                    {passwordVis ? 
                    <svg xmlns="http://www.w3.org/2000/svg"  className="w-4 h-4 text-gray-500 dark:text-gray-400" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
                    </svg> 
                    :
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/>
                    </svg>}
                </button>
            </div>
            </>
            }
            <Link href="/">
            <button type="button" className=" mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
            </Link>
        </form>
        </>
    )
}