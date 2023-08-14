import Image from "next/image";
import GoBack from "@/public/assets/colors/goback.png";

import Logo from "@/public/assets/logo.png";
import Logo2 from "@/public/assets/logo2.png";
import Logo3 from "@/public/assets/logo3.png";

import VerImg from "@/public/assets/colors/ver-img.png";
interface GoToSecondButtonViewProps {
  onGoBack: () => void;
  onGoHome: () => void;
}
const VerdeButtonView: React.FC<GoToSecondButtonViewProps> = ({
  onGoBack,
  onGoHome,
}) => {
  return (
    <div className="verde-view font-Comfortaa h-screen w-full">
      <div className="menu backdrop-blur-[27px]">
        <nav className="flex h-[168px] items-center gap-[10vw] mx-[10vw]">
          <button
            className="flex items-center gap-4 text-[30px] font-semibold"
            onClick={onGoHome}
          >
            <Image src={Logo} alt="logo" />
            <span className="text-[1.56vw]">HOME</span>
          </button>
          <Image src={Logo2} alt="logo2" />
          <Image src={Logo3} alt="logo3" />
        </nav>
      </div>
      <div className="flex  h-[calc(100vh-168px)] items-center">
        <div className="tab-content h-full flex-[0_0_85%]">
          <div className="content-wrapper h-full ml-[30%] flex flex-col justify-center">
            <div className="flex items-center justify-between ml-[100px]">
              <h2 className="text-[3.15vw] text-center text-[#26660E] font-semibold">
                TÈ VERDE
              </h2>
              <button
                onClick={onGoBack}
                className="flex items-center gap-x-[13px]"
              >
                <Image src={GoBack} alt="go back" />
                <span className="text-[#0A2B17] text-[30px]">indietro</span>
              </button>
            </div>
            <div className="info-wrapper w-full mt-9 rounded-ss-[128px] rounded-ee-[128px] overflow-hidden">
              <div className="flex gap-x-[31px] bg-[#CAD9CA] portrait:gap-x-[20px]">
                <div>
                  <Image src={VerImg} alt="camomilla-img" />
                </div>
                <div className="flex flex-col justify-center leading-[2vw] portrait:m-[20px] portrait:ml-0">
                  <div className="text-[1.8vw] font-semibold px-[20px] border-b-2 border-white pb-[14px]">
                    <h3 className="text-white">Parte della pianta usata</h3>
                    <h3 className="text-[#0A6E00]">FOGLIA</h3>
                  </div>
                  <div className="text-[1.8vw] font-semibold px-[20px] border-b-2 border-white py-[14px]">
                    <h3 className="text-white">Tecnica di estrazione</h3>
                    <h3 className="text-[#0A6E00]">PERCOLAZIONE</h3>
                  </div>
                  <div className="text-[1.8vw] font-semibold px-[20px] border-b-2 border-white py-[14px]">
                    <h3 className="text-white">Principio attivo</h3>
                    <h3 className="text-[#0A6E00]">POLIFENOLI</h3>
                  </div>
                  <div className="text-[1.8vw] font-semibold px-[20px] pt-[14px]">
                    <h3 className="text-white">Funzionalità cosmetica</h3>
                    <h3 className="text-[#0A6E00]">ANTIOSSIDANTE</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VerdeButtonView;
