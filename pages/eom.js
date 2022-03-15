import styles from "../styles/eom.module.css"
import {Toolbar} from "../components/toolbar"

export const EOM = ({employee}) => {
    console.log(employee)

    return (
        <div className="page-container">
            <Toolbar/>

            <div className={styles.main}>
                <h1 className={styles.employeeOfTheMonth}>Employee of The Month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image}/>
                    <h6>
                        <a href={employee.github} target="_blank" rel="noopener">My Github</a>
                    </h6>
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {

    const employee = {
        name: "Pablo Felipe (PabloFLPs) 🦁",
        position: "Web Developer",
        github: "https://github.com/PabloFLPs",
        image: "https://avatars.githubusercontent.com/u/58035837?v=4",
        description: "For my family, I am the 'hackerman'."
    }

    return {
        props: {
            employee: employee
        }
    }
}

export default EOM
