import Link from "next/link";

const Footer : React.FC = () => {
    return (
        

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                    <img src='/logo-def.png' className="h-12" alt="Logo EcoSnart" />
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/about" className="hover:underline">Nós</a>
                      </li>
                      <li>
                          <a href="https://github.com/guialvesped/Global-Solution-S2" target="_blank" className="hover:underline">Nosso projeto</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Nos siga</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/guialvesped/Global-Solution-S2" className="hover:underline ">Github</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">EcoSmart™</Link>. Todos os direitos reservados.
          </span>
      </div>
    </div>
</footer>

    )
}
export default Footer;