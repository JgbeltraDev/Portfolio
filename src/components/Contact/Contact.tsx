
import styles from "./Contact.module.css";
import Title from "../Titles/Title";
import Form from "../Form/Form";



const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <Title
        title="CONTACT"
        subTitle="Contact Me"
        text="READY TO WORK WITH YOU"
      />
      <Form/>
    </section>
  );
};

export default Contact;
