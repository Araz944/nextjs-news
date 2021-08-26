import styles from "../styles/EOM.module.css";
import { Toolbar } from "../components/toolbar";

const EOM = ({ employee }) => {
  const myData = employee.employeeOfTheMonth;
  console.log(myData);

  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee Of The Month</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>{myData.name}</h3>
          <h6>{myData.position}</h6>
          <img src={myData.imageURL} alt="Picture of the author" />
          <p>{myData.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/Araz944/nextjs-news/db"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
