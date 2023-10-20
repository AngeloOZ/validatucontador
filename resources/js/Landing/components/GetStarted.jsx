import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-dimPerseo p-[3px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} ${styles.bgAppDefaul} flex-col w-[100%] h-[100%] rounded-full getstarted`}
    >
      <span className="text-xl font-bold">Quiero <br /> empezar</span>
    </div>
  </div>
);

export default GetStarted;
