import Head from "next/head";
import Image from "next/image";

const EOM = ({ employee }) => {
  console.log(employee);

  // const myLoader = ({ src }) => {
  //   return "https:/stackexchange.com/users/22013182/araz944";
  // };

  return (
    <div className="page-container">
      <Head>
        <title>Employee Of The Month</title>
        <meta httpEquiv="content-type" content="text/html" />
      </Head>
      <div>
        <h1>Employee Of The Month</h1>
        <div>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.imageURL} />
          {/* <Image
            loader={myLoader}
            src={data.image}
            alt="Picture of the author"
            width={500}
            height={500}
          /> */}
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/Araz944/nextjs-news/db",
    {
      method: "GET",
      // body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Content-Type": "text/html",
        Accept: "application/json",
      },
    }
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default EOM;
