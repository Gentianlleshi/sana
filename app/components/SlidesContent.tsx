import Image from "next/image";
import Slider1 from "@/public/assets/slides/slide1.png";
import Slider2 from "@/public/assets/slides/slide2.png";
import Slider3 from "@/public/assets/slides/slide3.png";
import Slider4 from "@/public/assets/slides/slide4.png";

const slides = [
  <div className="flex bg-[#F4F7F2]">
    <Image src={Slider1} alt="Slider1" />

    <div className="flex flex-col justify-center portrait:m-[20px] ml-[50px] mr-[70px]">
      <p className="font-bold text-[#0A2B18] portrait:text-[2vw] portrait:leading-[3vw] text-[2.24vh] leading-[3.24vh] tracking-[-2px]">
        Ciascuno utilizza almeno 8 cosmetici al giorno: dai gesti legati
        all’igiene, passando per idratazione, prevenzione e protezione, fino ad
        arrivare alla cura della barba o al tocco finale di rossetto, mascara e
        profumo. I prodotti cosmetici sono beni essenziali, indispensabili per
        il benessere di ognuno, in ogni età della vita, in maniera universale e
        trasversale.
      </p>
    </div>
  </div>,
  <div className="flex bg-[#F4F7F2]">
    <Image src={Slider2} alt="Slider2" />

    <div className="flex flex-col justify-center portrait:m-[20px] ml-[50px] mr-[70px]">
      <p className="font-bold text-[#0A2B18] portrait:text-[2vw] portrait:leading-[3vw] text-[2.24vh] leading-[3.24vh] tracking-[-2px]">
        Il 71% dei consumatori europei* dichiara che i cosmetici sono importanti
        o molto importanti per migliorare la propria qualità di vita.
      </p>
      <p className="font-light text-[#0A2B18] text-[1.85vh] leading-[3vh] tracking-[-1.4px] mt-[3vh]">
        * Fonte: European Consumer Perception Study 2022 - Cosmetics Europe
      </p>
    </div>
  </div>,
  <div className="flex bg-[#F4F7F2]">
    <Image src={Slider3} alt="camomilla-img" />

    <div className="flex flex-col justify-center portrait:m-[20px] ml-[50px] mr-[70px]">
      <p className="font-bold text-[#0A2B18] portrait:text-[2vw] portrait:leading-[3vw] text-[2.24vh] leading-[3.24vh] tracking-[-2px]">
        “Sentirsi bene con sé stessi”: questa è una delle principali motivazioni
        che spinge i consumatori a utilizzare i cosmetici.
      </p>
      <p className="font-light text-[#0A2B18] text-[1.85vh] leading-[3vh] tracking-[-1.4px] mt-[3vh]">
        * Fonte: European Consumer Perception Study 2022 - Cosmetics Europe
      </p>
    </div>
  </div>,
  <div className="flex bg-[#F4F7F2]">
    <Image src={Slider4} alt="camomilla-img" />

    <div className="flex flex-col justify-center portrait:m-[20px] ml-[50px] mr-[70px]">
      <p className="font-bold text-[#0A2B18] portrait:text-[2vw] portrait:leading-[3vw] text-[2.24vh] leading-[3.24vh] tracking-[-2px]">
        Il settore cosmetico è attento al tema della sostenibilità e alle
        esigenze del consumatore, sviluppando nuove tecnologie e processi
        rispettosi dell’ambiente e con sempre migliori standard di qualità.
      </p>
    </div>
  </div>,
];

export default slides;
