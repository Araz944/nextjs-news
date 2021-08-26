import Head from "next/head";
import styles from "../styles/EOM.module.css";
import { Toolbar } from "../components/toolbar";

const EOM = ({ employee }) => {
  const myData = employee.employeeOfTheMonth;
  console.log(myData);

  return (
    <>
      <Head>
        <title>Employee Of The Month</title>
        <meta
          name="description"
          content={`This month's employee is ${employee.name}`}
        />
        <meta property="og:image" content={employee.imageURL} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`The author of this page is ${employee.name}`}
        />
        <meta property="linkedIn:image" content={employee.imageURL} />
        <meta property="linkedIn:title" content="Employee Of The Month" />
        <meta
          property="linkedIn:description"
          content={`This months employee is ${employee.name}`}
        />
      </Head>

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
    </>
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
