import css from "./style.module.css";
import imageAbout from "../../img/slide-03.webp";
import twoImage from "../../img/qwdd.jpg";
const About = () => {
  return (
    <div className={css.wrapAbout}>
      <div className={css.wrapDescInm}>
        <p className={css.aboutJk}>Про нас</p>
        <p className={css.pDecAbout}>
          Ветеринарна клініка "LarinVet" була заснована з метою надання
          високоякісних ветеринарних послуг для домашніх улюбленців. Ми
          розуміємо, що ваші тварини є невід'ємною частиною вашої родини, і тому
          прагнемо забезпечити їм найкращий догляд та лікування.Наша місія
          полягає в тому, щоб надавати комплексну ветеринарну допомогу,
          орієнтовану на потреби ваших улюбленців, забезпечуючи їхнє здоров'я.
        </p>
      </div>
      <div className={css.wrapDescInmSecond}>
        <img src={imageAbout} className={css.wrapImaged} alt="Photo" />
        <img src={twoImage} className={css.wrapImagedTwo} alt="Photo" />
      </div>
    </div>
  );
};
export default About;
