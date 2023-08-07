"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Logo2 from "@/public/assets/logo2.png";
import Logo3 from "@/public/assets/logo3.png";
import Info from "@/public/assets/icon-info.png";
import InfoActive from "@/public/assets/icon-info-active.png";
import Lek from "@/public/assets/lek-icon.png";
import LekActive from "@/public/assets/lek-icon-active.png";

interface FirstButtonViewProps {
  onGoHome: () => void;
}

enum TabOption {
  Option1 = "option1",
  Option2 = "option2",
  Option3 = "option3",
  Option4 = "option4",
}

const FirstButtonView: React.FC<FirstButtonViewProps> = ({ onGoHome }) => {
  const [activeTab, setActiveTab] = useState<TabOption>(TabOption.Option1);

  const handleTabClick = (tab: TabOption) => {
    setActiveTab(tab);
  };

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
                <p className="text-3xl mt-7">
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
              <h2 className="text-6xl text-center text-[#0C2D19] font-semibold">
                VALORE ECONOMICO
              </h2>
              <div className="info-wrapper h-full w-full mt-9 border-[3px] border-[#89B00B] rounded-se-[125px] rounded-es-[125px]">
                <ul className="grid grid-cols-2">
                  <li>
                    <h3 className="text-[43px] text-[#A8C29E]">
                      13,3 MLD di euro
                    </h3>
                    <p className="text-[#0A2B18] text-[29px]">
                      Fatturato totale del settore cosmetico in Italia
                    </p>
                  </li>
                  <li>
                    <h3 className="text-[43px] text-[#A8C29E]">44%</h3>
                    <p className="text-[#0A2B18] text-[29px]">
                      Quota del fatturato destinata all’export
                    </p>
                  </li>
                  <li>
                    <h3 className="text-[43px] text-[#A8C29E]">
                      11,5 MLD di euro
                    </h3>
                    <p className="text-[#0A2B18] text-[29px]">
                      Consumi cosmetici in Italia
                    </p>
                  </li>
                  <li>
                    <h3 className="text-[43px] text-[#A8C29E]">25%</h3>
                    <p className="text-[#0A2B18] text-[29px]">
                      Quota di consumi di cosmetici a connotazione naturale e
                      sostenibile
                    </p>
                  </li>
                  <li>
                    <h3 className="text-[43px] text-[#A8C29E]">67%</h3>
                    <p className="text-[#0A2B18] text-[29px]">
                      Make-up italiano consumato nel mondo
                    </p>
                  </li>
                  <li>
                    <h3 className="text-[43px] text-[#A8C29E]">390mila</h3>
                    <p className="text-[#0A2B18] text-[29px]">
                      Occupati nel sistema cosmetico, inclusi i canali
                      professionali
                    </p>
                  </li>
                  <li>
                    <h3 className="text-[43px] text-[#A8C29E]">
                      22,3 MLD di euro
                    </h3>
                    <p className="text-[#0A2B18] text-[29px]">
                      Ricchezza socio-economica generata dal sistema della
                      cosmesi per l’Italia
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === TabOption.Option3 && (
            <div>
              {/* Content for Option 3 */}
              <p>Option 3 content goes here</p>
            </div>
          )}
          {activeTab === TabOption.Option4 && (
            <div>
              {/* Content for Option 4 */}
              <p>Option 4 content goes here</p>
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
              />
              <h4>
                Cosmetica <br /> Italia
              </h4>
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
              />
              <span>Valore Economico</span>
            </button>
            <button
              onClick={() => handleTabClick(TabOption.Option3)}
              className={activeTab === TabOption.Option3 ? "active" : ""}
            >
              <Image
                src={activeTab === TabOption.Option3 ? InfoActive : Info}
                alt="Info"
              />
              <span>Tab 3</span>
            </button>
            <button
              onClick={() => handleTabClick(TabOption.Option4)}
              className={activeTab === TabOption.Option4 ? "active" : ""}
            >
              <Image
                src={activeTab === TabOption.Option4 ? InfoActive : Info}
                alt="Info"
              />
              <span>Tab 4</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstButtonView;

export type { FirstButtonViewProps };
