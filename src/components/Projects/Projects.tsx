import Card from "../Card/Card";
import Title from "../Titles/Title";
import styles from "./Projects.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  whileHover: { scale: 1.03 },
};

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <Title
        title="PORTFOLIO"
        subTitle="Projects"
        text="FEATURED CASE STUDIES"
      />
      <motion.div
        className={styles.projectContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="whileHover"
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card
              image="https://sayedanowar.netlify.app/assets/img/P-1.webp"
              title={`Project ${index + 1}`}
              description="Django App For Creating Resumes. Users Can Sign Up, Fill In Their Details, And Generate Professional Resumes In Pdf Format."
              tags={["HTML", "CSS", "React", ...(index === 2 ? ["TypeScript"] : [])]}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
