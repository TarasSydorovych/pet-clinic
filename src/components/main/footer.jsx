import { useEffect, useState } from "react";
import css from "./style.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const [windowDimensions, setWindowDimensions] = useState(false);
  const [burgerCLick, setBurgerCLick] = useState(false);
  const openBurgerMenu = () => {
    setBurgerCLick(true);
  };
  const closeBurgerMenu = () => {
    setBurgerCLick(false);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1100) {
        setWindowDimensions(false);
      } else {
        setWindowDimensions(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <footer className={css.footerWrapL}>
      <p className={css.pinFooterD}>LorinVet © 2024</p>
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
            </li>
            <li className={css.liForNav}>
              <a href="#section2" className={css.liForNav}>
                Послуги
              </a>
            </li>
            <li className={css.liForNav}>
              <a href="#section3" className={css.liForNav}>
                Про нас
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
          className={css.rxHamburgerMenuFooter}
        />
      )}
      {windowDimensions && (
        <nav className={css.navigation}>
          <ul className={css.navigationUL}>
            <li className={css.liForNavFooter}>
              <a href="#section1" className={css.liForNavFooter}>
                Головна
              </a>
            </li>
            <li className={css.liForNavFooter}>
              <a href="#section2" className={css.liForNavFooter}>
                Послуги
              </a>
            </li>
            <li className={css.liForNavFooter}>
              <a href="#section3" className={css.liForNavFooter}>
                Про нас
              </a>
            </li>
            <li className={css.liForNavFooter}>
              <a href="#section4" className={css.liForNavFooter}>
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      )}
      <div className={css.wrapSocial}>
        <FaFacebookSquare className={css.faFacebookSquare} />
      </div>
    </footer>
  );
};
export default Footer;
