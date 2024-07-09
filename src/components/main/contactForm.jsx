// import css from "./style.module.css";
// const ContactForm = () => {
//   return <div className={css.wrapFormContact}></div>;
// };
// export default ContactForm;

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import css from "./style.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    if (!phone) {
      Swal.fire({
        icon: "warning",
        title: "Будь ласка, введіть телефон",
      });
      return;
    }

    const SERVICE_ID = "service_xh5ymdk";
    const TEMPLATE_ID = "template_zqbdjvp";
    const USER_ID = "My9e5IjpQ2yIY3t12";

    const templateParams = {
      user_name: name,
      user_email: email,
      Phone: phone,

      message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Повідомлення успішно надіслано",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ой, щось пішло не так",
          text: error.text,
        });
      }
    );

    setName("");
    setEmail("");
    setPhone("");

    setMessage("");
  };

  return (
    <div className={css.wrapFormInD}>
      <div className={css.wrapFroms}>
        <p className={css.turkneyP}>Зв&rsquo;яжіться з нами</p>

        <p className={css.psectContactForm}>
          Ми завжди раді допомогти вашим улюбленцям! Зателефонуйте нам або
          надішліть електронний лист для консультацій, запису на прийом чи
          будь-яких інших питань.
        </p>

        <div className={css.wrapFormInputs}>
          <div className={css.wrapInputsData}>
            <input
              className={css.inputsForm}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Імʼя"
            />
            <input
              className={css.inputsForm}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className={css.inputsForm}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Телефон"
            />
          </div>
          <div className={css.twoFormWrap}>
            <textarea
              className={css.textArreaMessage}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Повідомлення"
            />
            <div className={css.buttonSend} onClick={sendEmail}>
              Надіслати
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
