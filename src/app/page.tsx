"use client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
export default function Home() {

  const [potencia, setPotencia] = useState<number>(0)
  const [numPaineis, setNumPaineis] = useState<number>(0)
  const horasMes = 5 //Média
  const [energiaGasta, setEnergiaGasta] = useState<number>(0)
  const energiaGerada = ((potencia*numPaineis)/1000) * horasMes *30
  const percEconomia = ((energiaGerada/energiaGasta)*100).toFixed(1)
  const [seeResults, setSeeResults] = useState<boolean>(false)

  const fatorCarbono = 0.6 //Média
  const reducaoCarbono = (energiaGerada * fatorCarbono).toFixed(1)

  const toggleSeeResult = () => {
    setSeeResults(!seeResults)
  }

  return (
    <>
    <Header/>
    <main>
      <div className="box-border m-8 flex flex-row">
        <a href="#" className="flex flex-col-reverse items-center w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col  justify-between p-8 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sustentabilidade é o futuro, então como abraça-lo ?</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Sustentabilidade é o futuro porque representa o equilíbrio entre progresso e respeito ao planeta. A transição para fontes de energia sustentável, como solar, eólica e biomassa, não é apenas uma escolha ambientalmente consciente, mas uma necessidade para garantir qualidade de vida às próximas gerações. Esses recursos renováveis reduzem emissões de carbono, diminuem a dependência de combustíveis fósseis e promovem um modelo energético mais acessível e eficiente. 
                <br />
                Abraçar a sustentabilidade exige ação. Investir em tecnologias limpas, adotar práticas como o uso de painéis solares em residências e apoiar políticas públicas que incentivem a energia renovável são passos essenciais. Cada escolha diária, por menor que pareça, contribui para construir um futuro onde a harmonia entre desenvolvimento e natureza seja possível. Afinal, o futuro sustentável começa agora, com nossas decisões presentes.
              </p>
          </div>
          <img className=" w-full rounded-lg h-full md:h-full md:w-1/2 md:rounded-none md:rounded-lg" src="/moinho.jpg" alt="Imagem de moinhos de vento"/>
        </a>
      </div>
      <div className="box-border m-8 flex flex-row">
        <a href="#" className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className=" w-full rounded-lg h-full md:h-full md:w-1/2 md:rounded-none md:rounded-lg" src="/paineis.jpg" alt="Imagem de moinhos de vento"/>
          <div className="flex flex-col  justify-between p-8 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E como nós iremos ajuda-lo a fazer isso :</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Nós da EcoSmart estamos comprometidos em ajudar você a dar o primeiro passo em direção a um futuro mais sustentável e econômico. Sabemos que a transição para energia limpa pode parecer desafiadora, mas acreditamos que, com as ferramentas certas, você pode planejar cada detalhe com segurança e confiança. Pensando nisso, desenvolvemos uma plataforma inteligente e intuitiva, capaz de calcular o potencial de economia que você teria ao instalar painéis solares em sua residência.
              <br />
              Nossa ferramenta não apenas mostra o quanto você pode poupar financeiramente, mas também destaca o impacto positivo que sua escolha terá no meio ambiente, contribuindo para a redução de emissões de carbono e para a construção de um mundo mais saudável. Queremos empoderar você com informações claras e práticas, ajudando a tomar decisões que beneficiem o seu bolso e o planeta. Ajudando assim você a se preparar para começar a abraçar seu futuro mais sustentável.

              </p>
          </div>
        </a>
      </div>
      <div className="box-border m-8 flex flex-col">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Instruções
        </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Pegue sua ultima conta de luz para obter as informações necessárias e preencha os campos abaixo
          </p>

        <div className="flex flex-wrap gap-8 p-8 items-center w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full dark:border-gray-700 dark:bg-gray-800">
          <label className="block w-1/3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Insira o seu kWh que foi consumido no ultimo mês:
            <input onChange={(e : React.ChangeEvent<HTMLInputElement>) => {setEnergiaGasta(parseFloat(e.target.value) )}} type="number" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kWh" required />
            <a className="text-gray-500 text-">
              De acordo com sua conta de luz
            </a>
          </label>
          <label className="block w-1/3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Insira a potencia dos paineis que pretende instalar:
            <input onChange={(e : React.ChangeEvent<HTMLInputElement>) => {setPotencia(parseFloat(e.target.value) )}} type="number" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Potencia" required />
            <a className="text-gray-500 text-">
              Um painel solar individual geralmente tem uma potência que varia de 300 a 600 watts (W)
            </a>
          </label>
          <label className="block w-1/3 mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Insira a quantidade de paineis que deseja instalar:
            <input onChange={(e : React.ChangeEvent<HTMLInputElement>) => {setNumPaineis(parseFloat(e.target.value) )}} type="number" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantidade de Paineis" required />
            <a className="text-gray-500 text-">
              De acordo com a necessidade de sua residência
            </a>
          </label>
          <a href="#results">
            <button onClick={toggleSeeResult} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Gerar Resultado
              </span>
            </button>
          </a>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}
