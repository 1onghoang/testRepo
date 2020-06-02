import React, { useContext } from "react";


const All = ({test}) => {

  console.log(JSON.stringify(test)+"in comp");

  return (
    <>
      <h3>History</h3>
      <h1>${JSON.stringify(test)}</h1>
    </>
  );
};

export default All
