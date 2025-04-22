import styles from './Card.module.css'
import { FaGithub, FaArrowUpRightFromSquare  } from "react-icons/fa6";

interface CardProps {
    image: string,
    title: string,
    description: string
    tags: string[]
}

const Card = ({image, title, description, tags} : CardProps) => {
  return (
    <div className={styles.projectCard}>
      <img src={image} alt="" />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      <div className={styles.buttons}>
        <a className={styles.btn} href=""><FaGithub className={styles.aboutIcon}/> Source Code</a>
        <a className={styles.btn} href=""><FaArrowUpRightFromSquare className={styles.aboutIcon}/>Website</a>
      </div>
    </div>
  )
}

export default Card
