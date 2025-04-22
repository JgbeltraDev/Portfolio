import styles from './Title.module.css'

interface TitleProps {
    title: string
    subTitle: string
    text: string
}

const Title = ({title, subTitle, text} : TitleProps) => {
  return (
    <div className={styles.mainTitle}>
        <div className={styles.secTitle}>
          <span>{title}</span>
          <h2>{subTitle}</h2>          
        </div>
        <p>{text}</p>
      </div>
  )
}

export default Title
