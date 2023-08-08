"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import Logo2 from "@/public/assets/logo2.png";
import Logo3 from "@/public/assets/logo3.png";
import CamomillaButtonView from "../components/CamomillaButtonView";
import EquisetoButtonView from "../components/EquisetoButtonView";
import GinkgoButtonView from "../components/GinkgoButtonView";
import VerdeButtonView from "../components/VerdeButtonView";
import OlivoButtonView from "../components/OlivoButtonView";
import MirtilloButtonView from "../components/MirtilloButtonView";
import GojiButtonView from "../components/GojiButtonView";
import IbiscoButtonView from "../components/IbiscoButtonView";
import TiglioButtonView from "../components/TiglioButtonView";
import UvarossaButtonView from "../components/UvarossaButtonView";
import ZenzeroButtonView from "../components/ZenzeroButtonView";
import Pointer from "@/public/assets/ponter.png";
//button images
import Camomilla from "@/public/assets/colors/camomilla.png";
import Equiseto from "@/public/assets/colors/equiseto.png";
import Ginkgo from "@/public/assets/colors/ginkgo.png";
import Verde from "@/public/assets/colors/verde.png";
import Olivo from "@/public/assets/colors/olivo.png";
import Mirtillo from "@/public/assets/colors/mirtillo.png";
import Goji from "@/public/assets/colors/goji.png";
import Ibisco from "@/public/assets/colors/ibisco.png";
import Tiglio from "@/public/assets/colors/tiglio.png";
import Uvarossa from "@/public/assets/colors/uvarossa.png";
import Zenzero from "@/public/assets/colors/zenzero.png";

interface SecondButtonViewProps {
  onGoHome: () => void;
}
type ButtonType =
  | "camomilla"
  | "equiseto"
  | "ginkgo"
  | "verde"
  | "olivo"
  | "mirtillo"
  | "ibisco"
  | "goji"
  | "tiglio"
  | "uvarossa"
  | "zenzero";
const SecondButtonView: React.FC<SecondButtonViewProps> = ({ onGoHome }) => {
  const [activeButton, setActiveButton] = useState<ButtonType | null>(null);
  const handleButtonClick = (button: ButtonType) => {
    setActiveButton(button);
  };
  const handleGoBack = () => {
    setActiveButton(null); // Reset activeButton to return to the main view
  };

  // Add your tab-based view with 4 options here
  return (
    <div className="second-view font-Comfortaa h-screen w-full">
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
      {activeButton === null && (
        <div className="font-Comfortaa ml-[6.464%] flex gap-x-[50px]">
          <div className="headers-wrap flex flex-col justify-center relative">
            <div>
              <h2 className="text-[60px] text-white font-semibold drop-shadow-[0_5px_10px_rgba(0,0,0,0.16)] absolute top-[10%] w-[550px] leading-[72px]">
                GLI INGREDIENTI <br /> DALLA NATURA
              </h2>
            </div>
            <div>
              <h3 className="font-light text-[40px] text-[#0A2B17] leading-[39px]">
                Scegli un colore <br />
                <span className="font-bold text-[44px] text-[#0A2B17]">
                  e scopri di più
                </span>
              </h3>
              <Image src={Pointer} alt="pointer" className="ml-auto" />
            </div>
            <div></div>
          </div>
          <div className="button-wrapper h-[calc(100vh-168px)] flex items-center">
            <div className=" grid gap-y-[30px]">
              <ul className="flex gap-x-6 justify-center h-[215px]">
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("camomilla")}
                  >
                    <Image src={Camomilla} alt="camomilla" />
                  </button>
                </li>
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("equiseto")}
                  >
                    <Image src={Equiseto} alt="equiseto" />
                  </button>
                </li>
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("ginkgo")}
                  >
                    <Image src={Ginkgo} alt="ginkgo" />
                  </button>
                </li>
              </ul>
              <ul className="flex gap-x-6 justify-center h-[215px]">
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("verde")}
                  >
                    <Image src={Verde} alt="verde" />
                  </button>
                </li>
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("olivo")}
                  >
                    <Image src={Olivo} alt="olivo" />
                  </button>
                </li>
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("mirtillo")}
                  >
                    <Image src={Mirtillo} alt="mirtillo" />
                  </button>
                </li>
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("ibisco")}
                  >
                    <Image src={Ibisco} alt="ibisco" />
                  </button>
                </li>
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("goji")}
                  >
                    <Image src={Goji} alt="goji" />
                  </button>
                </li>
              </ul>
              <ul className="flex gap-x-6 justify-center h-[215px]">
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("tiglio")}
                  >
                    <Image src={Tiglio} alt="tiglio" />
                  </button>
                </li>
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("uvarossa")}
                  >
                    <Image src={Uvarossa} alt="uvarossa" />
                  </button>
                </li>
                <li>
                  <button
                    className=""
                    onClick={() => handleButtonClick("zenzero")}
                  >
                    <Image src={Zenzero} alt="zenzero" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {activeButton === "camomilla" && (
        <CamomillaButtonView onGoBack={handleGoBack} />
      )}
      {activeButton === "equiseto" && <EquisetoButtonView />}
      {activeButton === "ginkgo" && <GinkgoButtonView />}
      {activeButton === "verde" && <VerdeButtonView />}
      {activeButton === "olivo" && <OlivoButtonView />}
      {activeButton === "mirtillo" && <MirtilloButtonView />}
      {activeButton === "ibisco" && <IbiscoButtonView />}
      {activeButton === "goji" && <GojiButtonView />}
      {activeButton === "tiglio" && <TiglioButtonView />}
      {activeButton === "uvarossa" && <UvarossaButtonView />}
      {activeButton === "zenzero" && <ZenzeroButtonView />}
    </div>
  );
};
export default SecondButtonView;
