import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function sendEmail(form, e) {
  e.preventDefault();
  const SERVICE_ID = "service_jmqbseg";
  const TEMPLATE_ID = "template_5tzwhio";
  const USER_ID = "HvBsq8wJYBkqmXShM";

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
    (result) => {
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
      });
      window.location.href = "/thank";
    },
    (error) => {
      Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        text: error.text,
      });
    }
  );
  e.target.reset();
}
