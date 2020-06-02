import React, {useState, useEffect} from 'react'
const TestRes = ({results}) => {
    let [bg, setBg] = useState("");

    useEffect(() => {
      setBg("bg-green-500");
    });

    return (
      <div className={bg + " w-1/4 p-4 text-white"}>
        <h2 className="text-3xl font-bold">
          <div className="flex text-sm p-4">

            <div className="w-1/3 font-bold">${results.amount}</div>

          </div>
        </h2>
        <h3 className="text-xl">{results.name}</h3>
      </div>
    )
  }

export default TestRes
