import Title from "../Titles/Title";
import styles from "./About.module.css";
import { FaGithub, FaInstagram, FaMailchimp  } from "react-icons/fa";

const About = () => {
  return (
    <section className={styles.about} id="about me">
      <Title
        title="ABOUT ME"
        subTitle="About Me"
        text="MORE ABOUT ME"
      />
      <div className={styles.aboutDetails}>
        <div className={styles.aboutContent}>
          <h3>Hi there! I'm Jose</h3>
          <p>
            I'm Jose Beltran, A Freelance Web Developer And Engiener. With 1 Years Of Experience In Web Development, I Specialize
            In Crafting Clean, Responsive, And Dynamic Websites & Landing Pages
            Using HTML, CSS, JavaScript, TypeScritp, React, Tailwind
          </p>
          <p>
            I'm Open To Full-time Roles And Freelance Opportunities. I'm Naturally Curious,
            Quietly Confident, And Always Pushing My Limits Every Day To Become
            A Better Developer.
          </p>
          <div className={styles.aboutLinks}>
            <a href="https://github.com/" ><FaGithub  className={styles.aboutIcon}/></a>
            <a href="" ><FaInstagram className={styles.aboutIcon}/></a>
            <a href="" ><FaMailchimp className={styles.aboutIcon}/></a>
          </div>
        </div>
        <div className={styles.aboutImage}>
            <img src="/public/image.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
