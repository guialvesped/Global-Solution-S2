"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [hasAccount, setHasAccount] = useState<boolean>(true);
  const [passwordVis, setPasswordVis] = useState<boolean>(false);
  const [confirmPasswordVis, setConfirmPasswordVis] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const router = useRouter();
  const baseUrl = "http://localhost:8080/GS2_Java_war/api/rest/cliente/";

  const requestBase = axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "privatekey",
    },
  });

  // Função de login
  const login = async () => {
    try {
      const response = await requestBase.get(`${email}`);
      if (!response.data.cpf) {
        alert("Usuário não encontrado");
        return;
      }
      if (senha === response.data.senha) {
        router.push("/");
      } else {
        alert("Senha incorreta, tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro na requisição");
    }
  };

  const signUp = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    try {
      const response = await requestBase.get(`${email}`);
      if (response.data.cpf == null) {
        await requestBase.post("create", {
          email: email,
          senha: senha,
        });
        alert("Cadastro realizado com sucesso!");
        router.push("/");
      } else {
        alert("Usuário já cadastrado");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro na requisição");
    }
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    await login();
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    await signUp();
  };

  const toggleVisibility = (type: "password" | "confirm") => {
    setPasswordVis(!passwordVis);
    setConfirmPasswordVis(!confirmPasswordVis);
  };

  return (
    <form
      onSubmit={hasAccount ? handleLogin : handleSignUp}
      className="mt-28 rounded-md max-w-sm mx-auto bg-gray-800 p-16 "
    >
      <Link href="/" className="flex items-center">
        <img src="/logo-def.png" className="h-12" alt="Logo EcoSnart" />
      </Link>
      <div className="w-full pt-4">
        <div
          className="grid max-w-xs grid-cols-2 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
          role="group"
        >
          <button
            onClick={() => setHasAccount(true)}
            type="button"
            className={`px-5 py-1.5 text-xs font-medium ${
              hasAccount
                ? "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900"
                : " text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
            } rounded-lg`}
          >
            Login
          </button>
          <button
            onClick={() => setHasAccount(false)}
            type="button"
            className={`px-5 py-1.5 text-xs font-medium ${
              hasAccount
                ? " text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                : "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900"
            } rounded-lg`}
          >
            Cadastro
          </button>
        </div>
      </div>
      <h3 className="pt-4 text-2xl">
        Faça seu {hasAccount ? "login" : "cadastro"}:
      </h3>
      <label className=" pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Email:{" "}
      </label>
      <div className="relative ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </div>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          id="email-address-icon"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="nome@gmail.com"
        />
      </div>
      <label className="pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Senha:
      </label>
      <div className="relative flex flex-row">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z" />
          </svg>
        </div>
        <input
          onChange={(e) => setSenha(e.target.value)}
          type={passwordVis ? "text" : "password"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Senha"
        />
        <button
          type="button"
          className="absolute inset-y-0 end-4 flex items-center ps-3.5"
          onClick={() => toggleVisibility("confirm")}
        >
          {passwordVis ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
            </svg>
          )}
        </button>
      </div>
      {!hasAccount && (
        <>
          <label className="pt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Confirme sua senha:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z" />
              </svg>
            </div>
            <input
              onChange={(e) => setConfirmarSenha(e.target.value)}
              type={confirmPasswordVis ? "text" : "password"}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Confirme sua senha"
            />
            <button
              type="button"
              className="absolute inset-y-0 end-4 flex items-center ps-3.5"
              onClick={() => toggleVisibility("confirm")}
            >
              {passwordVis ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                </svg>
              )}
            </button>
          </div>
        </>
      )}
      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="inline-block px-6 py-2.5 text-xs font-medium text-white uppercase bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {hasAccount ? "Login" : "Cadastrar"}
        </button>
      </div>
    </form>
  );
}
