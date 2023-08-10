// slidesData.js
import Image from "next/image";
import Slider1 from "@/public/assets/slides/slide1.png";
const slides = [
  <div className="flex gap-x-[31px] bg-[#FFCC00]">
    <div>
      <Image src={Slider1} alt="camomilla-img" />
    </div>
    <div className="flex flex-col justify-center leading-[40px]">
      <div className="text-[1.8vw] font-semibold px-[20px] border-b-2 border-white pb-[14px]">
        <h3 className="text-white">Parte della pianta usata</h3>
        <h3 className="text-[#0A2B18]">FIORE</h3>
      </div>
      <div className="text-[1.8vw] font-semibold px-[20px] border-b-2 border-white py-[14px]">
        <h3 className="text-white">Tecnica di estrazione</h3>
        <h3 className="text-[#0A2B18]">PERCOLAZIONE</h3>
      </div>
      <div className="text-[1.8vw] font-semibold px-[20px] border-b-2 border-white py-[14px]">
        <h3 className="text-white">Principio attivo</h3>
        <h3 className="text-[#0A2B18]">FLAVONOIDI</h3>
      </div>
      <div className="text-[1.8vw] font-semibold px-[20px] pt-[14px]">
        <h3 className="text-white">Funzionalità cosmetica</h3>
        <h3 className="text-[#0A2B18]">DISARROSSANTE</h3>
      </div>
    </div>
  </div>,
  <div>Slide 2 Content</div>,
  <div>Slide 3 Content</div>,
  <div>Slide 4 Content</div>,
];

export default slides;
