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
                    <h3 >{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image}/>
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        "https://my-json-server.typicode.com/portexe/next-news/employeeOfThEMonth"
    )

    const employee = await apiResponse.json()

    return {
        props: {
            employee: employee
        }
    }
}

export default EOM
