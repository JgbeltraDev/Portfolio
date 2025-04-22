import Title from "../Titles/Title";
import styles from "./Skills.module.css";
import { skills } from "../../data/index";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  whileHover: { scale: 1.1 },
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <Title
        title="SKILLS"
        subTitle="Skills"
        text="I CONSTANTLY TRY TO IMPROVE"
      />

      <motion.div
        className={styles.skillsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className={styles.tags} variants={containerVariants}>
          {skills.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              className={styles.tag}
              variants={tagVariants}
              whileHover="whileHover"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <i><Icon className="w-5 h-5 mr-2" style={{ color }} title={name} /></i>
              <span className="text-base text-white font-bold">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
