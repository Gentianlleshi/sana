"use client";
import { useState } from "react";
// Updated import statement for FirstButtonView
import FirstButtonView, {
  FirstButtonViewProps,
} from "./first-button-view/page";

import SecondButtonView from "./second-button-view/page";
import ThirdButtonView from "./third-button-view/page";

// import Logo2 from "@/assets/logo2.png";
import Logo2 from "@/public/assets/logo2.png";
import Logo3 from "@/public/assets/logo3.png";
import Image from "next/image";

type ButtonType = "first" | "second" | "third";

function HomePage() {
  const [activeButton, setActiveButton] = useState<ButtonType | null>(null);

  const handleButtonClick = (button: ButtonType) => {
    setActiveButton(button);
  };

  const handleGoHome = () => setActiveButton(null);

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
          <div className="button-wrapper h-[calc(100vh-168px)] flex flex-wrap items-center justify-evenly text-6xl text-white">
            <button
              className="w-[750px] h-[342px] bg-[#0A2B18] rounded-ss-[125px] rounded-se-[125px]"
              onClick={() => handleButtonClick("first")}
            >
              <h2>
                IL SETTORE <br /> COSMETICO
              </h2>
            </button>
            <button
              className="w-[750px] h-[342px] bg-[#0A2B18] rounded-se-[125px] rounded-es-[125px]"
              onClick={() => handleButtonClick("second")}
            >
              <h2>
                GLI INGREDIENTI <br /> DALLA NATURA
              </h2>
            </button>
            <button
              className="w-[750px] h-[342px] bg-[#0A2B18] rounded-se-[125px] rounded-es-[125px]"
              onClick={() => handleButtonClick("third")}
            >
              <h2>COSMILE EUROPE</h2>
              <h3 className="text-[#ABC692] text-[35px] mt-4">
                IL DATABASE SUGLI <br /> INGREDIENTI COSMETICI
              </h3>
            </button>
          </div>
        </div>
      )}

      {activeButton === "first" && <FirstButtonView onGoHome={handleGoHome} />}

      {activeButton === "second" && <SecondButtonView />}

      {activeButton === "third" && <ThirdButtonView />}
    </>
  );
}

export default HomePage;
