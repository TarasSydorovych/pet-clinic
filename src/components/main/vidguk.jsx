import css from "./style.module.css";
import vidgukOne from "../../img/vidgukOne.jpg";
import vidgukTwo from "../../img/vidgukTwo.jpg";
const Vidguk = () => {
  return (
    <div className={css.wrapVidguk}>
      <div className={css.wrapSmallVidguk}>
        <p className={css.pVidguk}>Відгуки клієнтів</p>
        <div className={css.wrapAllVidgukl}>
          <div className={css.wrapVidguks}>
            <img className={css.wrapPhotoVidguk} src={vidgukOne} alt="Photo" />
            <div className={css.wrapAllTextP}>
              <p className={css.wopPInVid}>
                Дуже вдячна клініці "LarinVet"! Ветеринари професійні та
                дбайливі. Мій кіт Томас швидко одужав завдяки їхньому лікуванню.
                Рекомендую!
              </p>
              <p className={css.wopPInVid}>Олена</p>
            </div>
          </div>{" "}
          <div className={css.wrapVidguks}>
            <img className={css.wrapPhotoVidguk} src={vidgukTwo} alt="Photo" />
            <div className={css.wrapAllTextP}>
              <p className={css.wopPInVid}>
                Чудова клініка! Мій пес Макс отримав тут найкращий догляд.
                Ветлікарі дуже уважні і компетентні. Вдячна за допомогу!
              </p>
              <p className={css.wopPInVid}>Іра</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vidguk;
