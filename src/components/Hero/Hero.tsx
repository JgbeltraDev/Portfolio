import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { LuHeartHandshake } from "react-icons/lu";
import { FaRegCopy, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Modal from "../Modal/Modal";
import styles from "./Hero.module.css";
import Form from "../Form/Form";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className={styles.hero} id="home">
      <h1>
        Frontend <span className={styles.gradiant}>X</span> Developer
      </h1>
      <p className={styles.subheading}>
        Hello, I´m Jose Beltran a Freelance Web Developer
      </p>
      <p className={styles.online}>
        <span className={styles.indicator}></span>Available For Work
      </p>
      <TypeAnimation
        sequence={["Developer", 1000, "Web Designer", 1000, "Engineer Software", 1000]}
        style={{ fontSize: "1.5rem" }}
        repeat={Infinity}
      />
      <div className={styles.heroBtns}>
        <button className={styles.heroBtn} onClick={toggleModal}>
          Let's Connect
          <i>
            <LuHeartHandshake />
          </i>
        </button>
        <span className={styles.email}>
          <i>
            <FaRegCopy />
          </i>
          Josebeltranm.dev@gmail.com
        </span>
      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Connect with Me</h2>
        <div className={styles.socialLinks}>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> 
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <p>Or send me a message:</p>
        <Form/>
      </Modal>
    </section>
  );
};

export default Hero;