import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function sendEmail(form, e) {
  e.preventDefault();
  const SERVICE_ID = "service_14sn3wd";
  const TEMPLATE_ID = "template_jb6wo4n";
  const USER_ID = "oE5w0Ws8SfF90mmeE";

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
    (result) => {
      Swal.fire({
        icon: "success",
        title: "Повідомлення успішно відправлене",
      });
      window.location.href = "/thank";
    },
    (error) => {
      Swal.fire({
        icon: "error",
        title: "Ой, щось пішло не так",
        text: error.text,
      });
    }
  );
  e.target.reset();
}
