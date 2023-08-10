"use client";
import { useState } from "react";
import Image from "next/image";

import FirstButtonView from "./first-button-view/page";
import SecondButtonView from "./second-button-view/page";
import ThirdButtonView from "./third-button-view/page";

import Logo2 from "@/public/assets/logo2.png";
import Logo3 from "@/public/assets/logo3.png";

type ButtonType = "first" | "second" | "third";

function HomePage() {
  const [activeButton, setActiveButton] = useState<ButtonType | null>(null);

  const handleButtonClick = (button: ButtonType) => {
    setActiveButton(button);
  };
  const handleGoBack = () => {
    setActiveButton(null); // Reset activeButton to return to the previous view
  };

  const handleGoHome = () => {
    setActiveButton(null); // Reset activeButton to return to the main view
  };
  return (
    <>
      {activeButton === null && (
        <div className="main-view font-Comfortaa">
          <div className="menu backdrop-blur-[50px]">
            <nav className="flex h-[168px] justify-center items-center gap-[123px] container">
              <Image src={Logo2} height={78} width={475} alt="logo2" />
              <Image src={Logo3} alt="logo3" />
            </nav>
          </div>
          <div className="button-wrapper h-[calc(100vh-168px)] flex flex-wrap items-center justify-evenly text-[3.15vw] text-white leading-[6.7vh]">
            <button
              className="w-[38.45%] h-[37.5%] bg-[#0A2B18] rounded-se-[125px] rounded-es-[125px]"
              onClick={() => handleButtonClick("first")}
            >
              <h2>
                IL SETTORE <br /> COSMETICO
              </h2>
            </button>
            <button
              className="w-[38.45%] h-[37.5%] bg-[#0A2B18] rounded-se-[125px] rounded-es-[125px]"
              onClick={() => handleButtonClick("second")}
            >
              <h2>
                GLI INGREDIENTI <br /> DALLA NATURA
              </h2>
            </button>
            <button
              className="w-[38.45%] h-[37.5%] bg-[#0A2B18] rounded-se-[125px] rounded-es-[125px]"
              onClick={() => handleButtonClick("third")}
            >
              <h2>COSMILE EUROPE</h2>
              <h3 className="text-[#ABC692] text-[1.825vw] leading-[2.2vw] mt-4">
                IL DATABASE SUGLI <br /> INGREDIENTI COSMETICI
              </h3>
            </button>
          </div>
        </div>
      )}

      {activeButton === "first" && <FirstButtonView onGoHome={handleGoHome} />}
      {activeButton === "second" && (
        <SecondButtonView
          onGoHome={() => setActiveButton(null)}
          onGoBack={() => setActiveButton(null)}
        />
      )}
      {activeButton === "third" && <ThirdButtonView />}
    </>
  );
}

export default HomePage;
