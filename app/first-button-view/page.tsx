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
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.Option1);
  const handleTabClick = (tab: TabOption) => {
    setActiveTab(tab);
  };
  const slides = [
    <div>Slide 1 Content</div>,
    <div>Slide 2 Content</div>,
    <div>Slide 3 Content</div>,
    <div>Slide 4 Content</div>,
  ];
  return (
    <div
      className={`first-view tab-${activeTab} font-Comfortaa h-screen w-full`}
    >
      <div className="menu backdrop-blur-[27px]">
        <nav className="flex h-[168px] items-center gap-[123px] container">
          <button
            className="flex items-center gap-4 text-[30px] font-semibold"
            onClick={onGoHome}
          >
            <Image src={Logo} alt="logo" />
            <span>HOME</span>
          </button>
          <Image src={Logo2} alt="logo2" />
          <Image src={Logo3} alt="logo3" />
        </nav>
      </div>
      <div className="first-view-content flex  h-[calc(100vh-168px)] items-center">
        <div className="tab-content h-full flex-[0_0_85%]">
          {activeTab === TabOption.Option1 && (
            <div className="content-wrapper flex justify-around h-full items-center text-center font-semibold">
              <div className="max-w-[628px]">
                <h3 className="text-[40px]">COSMETICA ITALIA</h3>
                <p className="text-3xl mt-8">
                  Da oltre 50 anni Cosmetica Italia è la voce dell’industria
                  cosmetica nazionale. Riunisce oltre 640 imprese – dalle
                  multinazionali alle piccole e medie realtà produttive e
                  distributive collocate sull’intero territorio nazionale –
                  rappresentative del 90% del fatturato nazionale del settore.
                </p>
              </div>
              <div className="max-w-[628px]">
                <h3 className="text-[40px]">GRUPPO COSMETICI ERBORISTERIA</h3>
                <p className="text-3xl mt-4">
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
            <div className="content-wrapper h-full ml-[25%]">
              <h2 className="text-6xl text-center text-[#0C2D19] font-semibold drop-shadow-[0_5px_10px_rgba(0,0,0,0.16)]">
                VALORE ECONOMICO
              </h2>
              <div className="info-wrapper w-full mt-9 border-[3px] border-[#89B00B] rounded-ss-[125px] rounded-ee-[125px]">
                <div className="grid grid-cols-2 my-[45px] mx-[100px] gap-x-[45px]">
                  <ul>
                    <li>
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[60px]">
                        13,3 MLD di euro
                      </h3>
                      <p className="text-[#0A2B18] text-[1.5vw] font-semibold tracking-[-2px]  leading-[34px]">
                        Fatturato totale del settore cosmetico in Italia
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[60px]">
                        44%
                      </h3>
                      <p className="text-[#0A2B18] text-[1.5vw] font-semibold tracking-[-2px]  leading-[34px]">
                        Quota del fatturato destinata all’export
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[60px]">
                        11,5 MLD di euro
                      </h3>
                      <p className="text-[#0A2B18] text-[1.5vw] font-semibold tracking-[-2px]  leading-[34px]">
                        Consumi cosmetici in Italia
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[60px]">
                        25%
                      </h3>
                      <p className="text-[#0A2B18] text-[1.5vw] font-semibold tracking-[-2px]  leading-[34px]">
                        Quota di consumi di cosmetici a connotazione naturale e
                        sostenibile
                      </p>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[60px]">
                        67%
                      </h3>
                      <p className="text-[#0A2B18] text-[1.5vw] font-semibold tracking-[-2px]  leading-[34px]">
                        Make-up italiano consumato nel mondo
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[60px]">
                        390mila
                      </h3>
                      <p className="text-[#0A2B18] text-[1.5vw] font-semibold tracking-[-2px]  leading-[34px]">
                        Occupati nel sistema cosmetico, inclusi i canali
                        professionali
                      </p>
                    </li>
                    <li className="mt-4">
                      <h3 className="text-[2.25vw] text-[#A8C29E] font-bold leading-[60px]">
                        22,3 MLD di euro
                      </h3>
                      <p className="text-[#0A2B18] text-[1.5vw] font-semibold tracking-[-2px]  leading-[34px]">
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
            <div className="content-wrapper h-full ml-[25%]">
              <h2 className="text-6xl text-center text-[#0C2D19] font-semibold drop-shadow-[0_5px_10px_rgba(0,0,0,0.16)]">
                VALORE SCIENTIFICO
              </h2>
              <div className="info-wrapper w-full mt-9">
                <div className="flex">
                  <div className="left flex-[35%] flex flex-col gap-24">
                    <div>
                      <h3 className="text-[2.25vw] text-[#6B75A0] font-bold">
                        PROFESSIONALITÀ
                      </h3>
                      <p className="text-[#0A2B18] text-[1.35vw] font-bold tracking-[-2px]  leading-[34px]">
                        Il settore cosmetico è guidato dalla scienza: a livello
                        europeo sono oltre 32mila gli scienziati costantemente
                        impegnati nella ricerca e nello sviluppo di cosmetici.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[2.25vw] text-[#6B75A0] font-bold">
                        SICUREZZA
                      </h3>
                      <p className="text-[#0A2B18] text-[1.35vw] font-bold tracking-[-2px]  leading-[34px]">
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
                  <div className="right flex-[40%] flex flex-col gap-24">
                    <div className="ml-5">
                      <h3 className="text-[2.25vw] text-[#6B75A0] font-bold">
                        INNOVAZIONE
                      </h3>
                      <p className="text-[#0A2B18] text-[1.35vw] font-bold tracking-[-2px]  leading-[34px]">
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
                      <p className="text-[#0A2B18] text-[1.35vw] font-bold tracking-[-2px]  leading-[34px]">
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
            <div className="ml-[25%]">
              <h2 className="text-6xl text-center text-[#0C2D19] font-semibold drop-shadow-[0_5px_10px_rgba(0,0,0,0.16)]">
                VALORE SOCIALE
              </h2>
              <SimpleSlider slides={slides} />
            </div>
          )}
        </div>
        <div className="tab-wrapper flex-[0_0_15%] h-full py-5">
          <div className="tabs bg-[#F4F7F2] flex flex-col h-full items-center justify-between w-[198px] mx-auto rounded-[120px] px-5 py-9 font-bold text-[26px] shadow-[0_3px_46px_rgba(0,0,0,0.16)]">
            <button
              onClick={() => handleTabClick(TabOption.Option1)}
              className={
                activeTab === TabOption.Option1
                  ? "active flex flex-col items-center gap-[15px] text-[#A9C490]"
                  : "flex flex-col items-center gap-[15px]"
              }
            >
              <Image
                src={activeTab === TabOption.Option1 ? InfoActive : Info}
                alt="Info"
                width={90}
                height={90}
              />
              <span className="leading-6 text-[26px]">
                Cosmetica <br /> Italia
              </span>
            </button>

            <button
              onClick={() => handleTabClick(TabOption.Option2)}
              className={
                activeTab === TabOption.Option2
                  ? "active flex flex-col items-center gap-[15px] text-[#A9C490]"
                  : "flex flex-col items-center gap-[15px]"
              }
            >
              <Image
                src={activeTab === TabOption.Option2 ? LekActive : Lek}
                alt="Lek"
                width={90}
                height={90}
              />
              <span className="leading-6 text-[26px]">
                Valore <br /> Economico
              </span>
            </button>
            <button
              onClick={() => handleTabClick(TabOption.Option3)}
              className={
                activeTab === TabOption.Option3
                  ? "active flex flex-col items-center gap-[15px] text-[#A9C490]"
                  : "flex flex-col items-center gap-[15px]"
              }
            >
              <Image
                src={activeTab === TabOption.Option3 ? SciActive : Info}
                alt="scientific"
                width={90}
                height={90}
              />
              <span className="leading-6 text-[26px]">
                Valore <br /> Scientifico
              </span>
            </button>
            <button
              onClick={() => handleTabClick(TabOption.Option4)}
              className={
                activeTab === TabOption.Option4
                  ? "active flex flex-col items-center gap-[15px] text-[#A9C490]"
                  : "flex flex-col items-center gap-[15px]"
              }
            >
              <Image
                src={activeTab === TabOption.Option4 ? SocActive : Info}
                alt="Info"
                width={90}
                height={90}
              />
              <span className="leading-6 text-[26px]">
                Valore <br /> Sociale
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export { TabOption, FirstButtonView };
export default FirstButtonView;
