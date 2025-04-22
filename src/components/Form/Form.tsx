import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import styles from "./Form.module.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const TEMPLATE_FOR_CLIENT = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTO_RECIVE;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Enviar al administrador
      const adminResponse = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        data,
        PUBLIC_KEY
      );

      // Enviar al cliente (auto-reply)
      const clientResponse = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_FOR_CLIENT,
        data,
        PUBLIC_KEY
      );

      if (adminResponse.status === 200 && clientResponse.status === 200) {
        reset();
      } else {
        alert("Ocurrió un error en uno de los envíos. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      alert("Ocurrió un error al enviar el mensaje. Intenta de nuevo.");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <div className={styles.field}>
        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className={styles.input}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.field}>
        <textarea
          placeholder="Your Message"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          className={styles.textarea}
        />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {isSubmitSuccessful && (
        <p className={styles.success}>Your message has been sent!</p>
      )}
    </form>
  );
};

export default Form;
