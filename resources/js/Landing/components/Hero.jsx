import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { HeroSvg } from "../svg";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Valida a tu <br className="sm:block hidden" />{" "}
            <span className="text-dimPerseo">Contador</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Con está aplicacion podrás validar el trabajo que realiza tu contador, nosotros te ayudaremos a validar la información proporcionada por tu contador y verificada con los datos directos del SRI.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className={`w-[100%] h-[100%] relative z-[5] ${styles.flexCenter} px-3 sm:px-0`}>
          <HeroSvg className="fill-dimPerseo" width="580" className2="w-[550px] md:h-[450px]"   />
        </div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
