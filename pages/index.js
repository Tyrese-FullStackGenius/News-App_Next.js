import styles from '../styles/Home.module.css'
import {Toolbar} from "../components/toolbar"

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar/>

      <div className={styles.main}>
        <h1>Next.js News App</h1>

        <h3>Your one stop shop for the latest news articles</h3>
        <p>
          Project based on the PortEXE video:
          <a href="https://www.youtube.com/watch?v=xtItzwYG6oQ"> Coding A News App With Next.js</a>
        </p>
      </div>
    </div>
  )
}
