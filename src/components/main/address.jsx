import css from "./style.module.css";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LuTimer } from "react-icons/lu";

const Address = () => {
  return (
    <div className={css.wrapAddressKi} id="section4">
      <div className={css.oneAddressBlockWrap}>
        <div className={css.wrpaFirtLine}>
          <CiLocationOn className={css.locationIconK} />
          <p className={css.nameNearLoc}>Адреса:</p>
        </div>
        <p className={css.pInAddrecDesc}>
          Софіївська Борщагівка, вул. Райдужна 165 (ЖК "Київський квартал")
        </p>
      </div>
      <div className={css.oneAddressBlockWrap}>
        <div className={css.wrpaFirtLine}>
          <FaPhoneFlip className={css.locationIconK} />
          <p className={css.nameNearLoc}>Телефон:</p>
        </div>
        <a href="tel:+380671147428" className={css.pInAddrecDesc}>
          +380-67-114-74-28
        </a>
      </div>
      <div className={css.oneAddressBlockWrap}>
        <div className={css.wrpaFirtLine}>
          <MdEmail className={css.locationIconK} />
          <p className={css.nameNearLoc}>Email:</p>
        </div>
        <a href="mailto:larinvet@ukr.net" className={css.pInAddrecDesc}>
          larinvet@ukr.net
        </a>
      </div>
      <div className={css.oneAddressBlockWrap}>
        <div className={css.wrpaFirtLine}>
          <LuTimer className={css.locationIconK} />
          <p className={css.nameNearLoc}>Графік:</p>
        </div>
        <p className={css.pInAddrecDesc}>09:00 - 18:00</p>
      </div>
    </div>
  );
};
export default Address;
