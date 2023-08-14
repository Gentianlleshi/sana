"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Logo2 from "@/public/assets/logo2.png";
import Logo3 from "@/public/assets/logo3.png";
import SciCenter from "@/public/assets/sciCenter.svg";
// tabs icons
import Info from "@/public/assets/icon-info.png";
import InfoActive from "@/public/assets/icon-info-active.png";
import Lek from "@/public/assets/lek-icon.png";
import LekActive from "@/public/assets/lek-icon-active.png";
import SciActive from "@/public/assets/sciAct.svg";
import SocActive from "@/public/assets/icon-soc-active.svg";
import SimpleSlider from "../components/SimpleSlider";
import Slides from "@/app/components/SlidesContent";
enum TabOption {
  Option1 = "option1",
  Option2 = "option2",
  Option3 = "option3",
  Option4 = "option4",
}
interface FirstButtonViewProps {
  onGoHome: () => void;
}

const FirstButtonView: React.FC<FirstButtonViewProps> = ({ onGoHome }) => {
  const handleGoHome = () => {
    onGoHome();
  };
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.Option1);
  const handleTabClick = (tab: TabOption) => {
    setActiveTab(tab);
  };
  return (
    <div
      className={`first-view tab-${activeTab} font-Comfortaa h-screen w-full`}
    >
      <div className="menu backdrop-blur-[27px]">
        <nav className="flex h-[168px] items-center gap-[10vw] mx-[10vw]">
          <button
            className="flex items-center gap-4 text-[30px] font-semibold"
            onClick={handleGoHome}
          >
            <Image src={Logo} alt="logo" />
            <span className="text-[1.56vw]">HOME</span>
          </button>
          <Image src={Logo2} alt="logo2" />
          <Image src={Logo3} alt="logo3" />
        </nav>
      </div>
      <div className="first-view-content flex  h-[calc(100vh-168px)] items-center">
        <div className="tab-content h-full flex-[0_0_80%] flex justify-center">
          {activeTab === TabOption.Option1 && (
            <div className="content-wrapper flex justify-evenly h-full items-center text-center font-semibold">
              <div className="max-w-[32.709vw]">
                <h3 className="text-[2.09vw]">COSMETICA ITALIA</h3>
                <p className="text-[1.56vw] mt-8">
                  Da oltre 50 anni Cosmetica Italia è la voce dell’industria
                  cosmetica nazionale. Riunisce oltre 640 imprese – dalle
                  multinazionali alle piccole e medie realtà produttive e
                  distributive collocate sull’intero territorio nazionale –
                  rappresentative del 90% del fatturato nazionale del settore.
                </p>
              </div>
              <div className="max-w-[32.709vw]">
                <h3 className="text-[2.09vw]">GRUPPO COSMETICI ERBORISTERIA</h3>
                <p className="text-[1.56vw] mt-4">
                  All’interno di Cosmetica Italia, il Gruppo Cosmetici
                  Erboristeria riunisce oltre 60 aziende che non si limitano a
                  identificare l’erboristeria come canale distributivo
                  “storico”, ma soprattutto propongono un’offerta di prodotti
                  particolarmente attenta ai temi della naturalità e della
                  sostenibilità.
                </p>
              </div>
            </div>
          )}
          {activeTab === TabOption.Option2 && (
            <div className="content-wrapper h-full ml-[25%] portrait:ml-[23%] portrait:mr-[2%] portrait:flex portrait:flex-col portrait:justify-center">
              <h2 className="text-[3.15vw] text-center text-[#0C2D19] font-semibold drop-shadow-[0_5px_10px_rgba(0,0,0,0.16)]">
                VALORE ECONOMICO
              </h2>
              <div className="info-wrapper w-full mt-[3.4vh] border-[3px] border-[#89B00B] rounded-ss-[125px] rounded-ee-[125px]">
                <div className="grid grid-cols-2 my-[4.167vh] mx-[7vw] gap-x-[4.167vh]">
                  <ul>
                    <li>
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[5.6vh]">
                        13,3 MLD di euro
                      </h3>
                      <p className="text-[#0A2B18] text-[1.42vw] font-semibold tracking-[-2px]  leading-[1.78vw]">
                        Fatturato totale del settore cosmetico in Italia
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[5.6vh]">
                        44%
                      </h3>
                      <p className="text-[#0A2B18] text-[1.42vw] font-semibold tracking-[-2px]  leading-[1.78vw]">
                        Quota del fatturato destinata all’export
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[5.6vh]">
                        11,5 MLD di euro
                      </h3>
                      <p className="text-[#0A2B18] text-[1.42vw] font-semibold tracking-[-2px]  leading-[1.78vw]">
                        Consumi cosmetici in Italia
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[5.6vh]">
                        25%
                      </h3>
                      <p className="text-[#0A2B18] text-[1.42vw] font-semibold tracking-[-2px]  leading-[1.78vw]">
                        Quota di consumi di cosmetici a connotazione naturale e
                        sostenibile
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[5.6vh]">
                        67%
                      </h3>
                      <p className="text-[#0A2B18] text-[1.42vw] font-semibold tracking-[-2px]  leading-[1.78vw]">
                        Make-up italiano consumato nel mondo
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[5.6vh]">
                        390mila
                      </h3>
                      <p className="text-[#0A2B18] text-[1.42vw] font-semibold tracking-[-2px]  leading-[1.78vw]">
                        Occupati nel sistema cosmetico, inclusi i canali
                        professionali
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[5.6vh]">
                        22,3 MLD di euro
                      </h3>
                      <p className="text-[#0A2B18] text-[1.42vw] font-semibold tracking-[-2px]  leading-[1.78vw]">
                        Ricchezza socio-economica generata dal sistema della
                        cosmesi per l’Italia
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === TabOption.Option3 && (
            <div className="content-wrapper h-full ml-[25%] portrait:ml-[23%] portrait:mr-[2%] portrait:flex portrait:flex-col portrait:justify-center">
              <h2 className="text-[3.15vw] text-center text-[#0C2D19] font-semibold drop-shadow-[0_5px_10px_rgba(0,0,0,0.16)]">
                VALORE SCIENTIFICO
              </h2>
              <div className="info-wrapper w-full mt-9">
                <div className="flex">
                  <div className="left flex-[35%] flex flex-col gap-[8.8vh]">
                    <div>
                      <h3 className="text-[2.25vw] text-[#6B75A0] font-bold">
                        PROFESSIONALITÀ
                      </h3>
                      <p className="text-[#0A2B18] text-[1.35vw] font-bold tracking-[-2px]  leading-[1.78vw">
                        Il settore cosmetico è guidato dalla scienza: a livello
                        europeo sono oltre 32mila gli scienziati costantemente
                        impegnati nella ricerca e nello sviluppo di cosmetici.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[2.25vw] text-[#6B75A0] font-bold">
                        SICUREZZA
                      </h3>
                      <p className="text-[#0A2B18] text-[1.35vw] font-bold tracking-[-2px]  leading-[1.78vw">
                        In tutti i Paesi dell’Unione Europea i cosmetici devono
                        rispettare le norme del Regolamento 1223/2009 che
                        garantisce la sicurezza del consumatore.
                      </p>
                    </div>
                  </div>
                  <div className="center my-auto">
                    <Image
                      src={SciCenter}
                      width={279}
                      height={279}
                      alt="PROFESSIONALITÀ"
                    />
                  </div>
                  <div className="right flex-[40%] flex flex-col gap-[8.8vh] portrait:gap-[6.8vh]">
                    <div className="ml-5">
                      <h3 className="text-[2.25vw] text-[#6B75A0] font-bold">
                        INNOVAZIONE
                      </h3>
                      <p className="text-[#0A2B18] text-[1.35vw] font-bold tracking-[-2px]  leading-[1.78vw">
                        In Italia le imprese della cosmesi investono circa il 6%
                        del fatturato per l’innovazione e la tecnologia, la
                        ricerca e lo sviluppo, contro una media nazionale
                        stimata attorno al 3%.
                      </p>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-[2.25vw] text-[#6B75A0] font-bold">
                        EFFICACIA
                      </h3>
                      <p className="text-[#0A2B18] text-[1.35vw] font-bold tracking-[-2px]  leading-[1.78vw]">
                        Il settore cosmetico deve rispettare una legge europea
                        specifica (Regolamento 655/2013) in materia di
                        comunicazione pubblicitaria. L’efficacia deve essere
                        dimostrata e i risultati di questa valutazione devono
                        essere a disposizione delle autorità competenti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === TabOption.Option4 && (
            <div className="portrait:ml-[8vw] ml-[25%]">
              <h2 className="text-[3.15vw] text-center text-[#0C2D19] font-semibold drop-shadow-[0_5px_10px_rgba(0,0,0,0.16)]">
                VALORE SOCIALE
              </h2>
              <SimpleSlider slides={Slides} />
            </div>
          )}
        </div>
        <div className="tab-wrapper flex-[0_0_20%] h-full py-5">
          <div className="tabs bg-[#F4F7F2] flex flex-col h-full items-center justify-between w-[16vh] mx-auto rounded-[120px] px-5 py-9 font-bold text-[26px] shadow-[0_3px_46px_rgba(0,0,0,0.16)]">
            <button
              onClick={() => handleTabClick(TabOption.Option1)}
              className={
                activeTab === TabOption.Option1
                  ? "active flex flex-col items-center gap-[1.2vh] text-[#A9C490]"
                  : "flex flex-col items-center gap-[1.2vh]"
              }
            >
              <Image
                src={activeTab === TabOption.Option1 ? InfoActive : Info}
                alt="Info"
                width={90}
                height={90}
              />
              <span className="leading-[2.3vh] text-[2.33vh]">
                Cosmetica <br /> Italia
              </span>
            </button>

            <button
              onClick={() => handleTabClick(TabOption.Option2)}
              className={
                activeTab === TabOption.Option2
                  ? "active flex flex-col items-center gap-[1.2vh] text-[#A9C490]"
                  : "flex flex-col items-center gap-[1.2vh]"
              }
            >
              <Image
                src={activeTab === TabOption.Option2 ? LekActive : Lek}
                alt="Lek"
                width={90}
                height={90}
              />
              <span className="leading-[2.3vh] text-[2.33vh]">
                Valore <br /> Economico
              </span>
            </button>
            <button
              onClick={() => handleTabClick(TabOption.Option3)}
              className={
                activeTab === TabOption.Option3
                  ? "active flex flex-col items-center gap-[1.2vh] text-[#A9C490]"
                  : "flex flex-col items-center gap-[1.2vh]"
              }
            >
              <Image
                src={activeTab === TabOption.Option3 ? SciActive : Info}
                alt="scientific"
                width={90}
                height={90}
              />
              <span className="leading-[2.3vh] text-[2.33vh]">
                Valore <br /> Scientifico
              </span>
            </button>
            <button
              onClick={() => handleTabClick(TabOption.Option4)}
              className={
                activeTab === TabOption.Option4
                  ? "active flex flex-col items-center gap-[1.2vh] text-[#A9C490]"
                  : "flex flex-col items-center gap-[1.2vh]"
              }
            >
              <Image
                src={activeTab === TabOption.Option4 ? SocActive : Info}
                alt="Info"
                width={90}
                height={90}
              />
              <span className="leading-[2.3vh] text-[2.33vh]">
                Valore <br /> Sociale
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstButtonView;
