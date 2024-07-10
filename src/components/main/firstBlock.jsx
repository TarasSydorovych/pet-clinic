import css from "./style.module.css";
import fromLogo from "../../img/fsjkfjg.png";
import { useEffect, useRef, useState } from "react";
import sendEmail from "./sendMessage";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
export default function FirstBlock() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const formRef = useRef(null);
  const [phonecheck, setPhonecheck] = useState(false);
  const [namecheck, setNamecheck] = useState(false);
  const [burgerCLick, setBurgerCLick] = useState(false);
  const [clickCH, setClickCH] = useState(false);
  const [validFrom, setValidFrom] = useState(false);
  const [clickCHErr, setClickCHErr] = useState("Fill in all fields");
  const [phonecheckErr, setPhonecheckErr] = useState(
    "Your phone number is incorrect"
  );
  const [namecheckErr, setNamecheckErr] = useState(
    "The name field cannot be empty"
  );
  const [emailcheckErr, setEmailcheckErr] = useState(
    "The phone field cannot be empty"
  );
  const [windowDimensions, setWindowDimensions] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setWindowDimensions(false);
      } else {
        setWindowDimensions(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleSubmit = (e) => {
    sendEmail(formRef, e);
    setName("");
    setPhone("");
    setEmail("");
  };
  const openBurgerMenu = () => {
    setBurgerCLick(true);
  };
  const closeBurgerMenu = () => {
    setBurgerCLick(false);
  };
  const blurHandle = (e) => {
    switch (e.target.name) {
      case "user_name":
        setNamecheck(true);
        break;
      case "Phone":
        setPhonecheck(true);
        break;
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNamecheckErr("The name is too short.");
      if (!e.target.value) {
        setNamecheckErr("The name field cannot be empty");
      }
    } else {
      setNamecheckErr("");
    }
  };
  const namePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
    const num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (
      !value ||
      (value && value.match(/\d/g) && value.match(/\d/g).length < 10)
    ) {
      setPhonecheckErr(`"Your phone number is incorrect"`);
    } else {
      setPhonecheckErr("");
    }
  };
  useEffect(() => {
    if (phonecheckErr || namecheckErr) {
      setValidFrom(false);

      setClickCHErr("Заповніть усі поля");
    } else {
      setValidFrom(true);
      setClickCHErr("");
    }
  }, [phonecheckErr, namecheckErr, emailcheckErr]);
  return (
    <>
      {" "}
      <div id="section1" className={css.wrapFirstHeader}>
        <p className={css.addresInHeader}>
          Софіївська Борщагівка, вул. Райдужна 165 (ЖК "Київський квартал")
        </p>

        <a href="tel:+380671147428" className={css.numberWrapD}>
          +380-67-114-74-28
        </a>
      </div>
      <header className={css.wrapHeader}>
        <div className={css.wrapLogo}>
          <a href="/">
            <img src={fromLogo} className={css.logoWrapo} />
          </a>
        </div>
        {burgerCLick && (
          <div className={css.burgerMenuWrap}>
            <AiOutlineClose
              onClick={closeBurgerMenu}
              className={css.closeBurgerMenu}
            />
            <ul className={css.listStyle}>
              <li className={css.liForNav}>
                <a href="#section1" className={css.liForNav}>
                  Головна
                </a>
              </li>{" "}
              <li className={css.liForNav}>
                <a href="#section3" className={css.liForNav}>
                  Про нас
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section2" className={css.liForNav}>
                  Послуги
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section4" className={css.liForNav}>
                  Контакти
                </a>
              </li>
            </ul>
          </div>
        )}
        {!windowDimensions && (
          <RxHamburgerMenu
            onClick={openBurgerMenu}
            className={css.rxHamburgerMenu}
          />
        )}
        {windowDimensions && (
          <nav className={css.navigation}>
            <ul className={css.navigationUL}>
              <li className={css.liForNav}>
                <a href="#section1" className={css.liForNav}>
                  Головна
                </a>
              </li>{" "}
              <li className={css.liForNav}>
                <a href="#section3" className={css.liForNav}>
                  Про нас
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section2" className={css.liForNav}>
                  Послуги
                </a>
              </li>
              <li className={css.liForNav}>
                <a href="#section4" className={css.liForNav}>
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        )}
        {/* 
        <a href="tel:+12677807627" className={css.nubberWrap}>
          +1(267) 780-76-27
        </a> */}
      </header>
      <div className={css.wrapFirstBlock}>
        <div className={css.wrapformWithT}>
          <div className={css.wrapOpd}></div>
          <div className={css.wrapMainText}>
            <h1 className={css.dispServP}>
              LarinVet - дбайливий догляд для ваших улюбленців
            </h1>
            <p className={css.descTio}>
              У нашій клініці ми прагнемо надати найкращий медичний догляд для
              ваших чотирилапих друзів. Команда професійних ветеринарів з
              багаторічним досвідом завжди готова допомогти вашому улюбленцю
              залишатися здоровим і щасливим.
            </p>
            <a href="tel:+380671147428" className={css.nubberWrap}>
              +380-67-114-74-28
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
