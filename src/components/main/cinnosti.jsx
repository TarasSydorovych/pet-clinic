import css from "./style.module.css";
import oneIcon from "../../img/oneDKS.png";
import twoIcon from "../../img/odisews.png";
import threIcon from "../../img/adefdk.png";
import fourIcon from "../../img/qwfds.png";
const Cinnosti = () => {
  return (
    <div className={css.wrapCinnosts}>
      <p className={css.pCinnosti}>Наші цінності</p>
      <div className={css.wrapPlf}>
        <div className={css.wrapOpCinnosti}>
          <img src={fourIcon} className={css.oneIconPets} alt="Photo" />
          <p className={css.cinnostiMainP}>Професіоналізм</p>
          <p className={css.cinnostDescP}>
            Ми гордимося нашим висококваліфікованим персоналом, який постійно
            вдосконалює свої знання і навички.
          </p>
        </div>
        <div className={css.wrapOpCinnosti}>
          <img src={twoIcon} className={css.oneIconPets} alt="Photo" />
          <p className={css.cinnostiMainP}>Дбайливість</p>
          <p className={css.cinnostDescP}>
            Ми ставимося до кожної тварини з любов'ю і повагою, як до власних
            улюбленців.
          </p>
        </div>
        <div className={css.wrapOpCinnosti}>
          <img src={threIcon} className={css.oneIconPets} alt="Photo" />
          <p className={css.cinnostiMainP}>Інновації</p>
          <p className={css.cinnostDescP}>
            Ми використовуємо сучасне обладнання та новітні методики лікування,
            щоб забезпечити найкращі результати.
          </p>
        </div>
        <div className={css.wrapOpCinnosti}>
          <img src={oneIcon} className={css.oneIconPets} alt="Photo" />
          <p className={css.cinnostiMainP}>Прозорість</p>
          <p className={css.cinnostDescP}>
            Ми відкрито спілкуємося з власниками тварин, пояснюючи кожен крок
            діагностики та лікування.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Cinnosti;
